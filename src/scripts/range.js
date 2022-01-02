/**
 * Parent Class.
 *
 */
class Range {
    $inputRef;
    $wrapper;
    /**
     * Main range constructor
     * @constructor
     * @param {HTMLElement} $input - Base input of the custom range
     */
    constructor($input) {
        this.$inputRef = $input;
        this._updateBarStateOnResize("resize", "optimizedResize");
    }
    /**
     * Abstract method
     * @description Initialization service
     */
    _init() { }
    /**
     * Protected method
     * @param {string} type - Js event
     * @param {string} name - Custom event name
     * @param {object} obj - Element which call the event. Default: ***window***
     * @description Used for update range controls position on resize
     */
    _updateBarStateOnResize(type, name, obj) {
        obj = obj || window;
        let running = false;
        const func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    }
}
/**
 * Class representing a single range.
 * @extends Range
 */
export class SingleRange extends Range {
    /**
     * Single range constructor
     * @constructor
     * @param {HTMLElement} $input - Base input of the custom range
     */
    constructor($input) {
        super($input);
        this._init();
    }
    /**
     * Initialization method of the single range
     */
    _init() {
        this._createWrapper();
        this._calcActiveBarSize(this.$inputRef.value);
        this.$inputRef.addEventListener("input", (e) => {
            this._calcActiveBarSize(e.target.value);
        });
        window.addEventListener("optimizedResize", () => {
            this._calcActiveBarSize.bind(this, this.$inputRef.value)();
        });
    }
    /**
     * Used for the move input into wrapper
     */
    _createWrapper() {
        this.$wrapper = document.createElement("div");
        this.$wrapper.classList.add("custom-range");
        const $parentNode = this.$inputRef.parentNode;
        this.$inputRef.classList.add("custom-range__input");
        const $clonedNode = this.$inputRef.cloneNode();
        const $slider = document.createElement("div");
        $slider.classList.add("custom-range__slider");
        $slider.innerHTML = ` <span class="custom-range__bar"><span class="custom-range__active-bar"></span></span>`;
        $slider.appendChild($clonedNode);
        this.$wrapper.appendChild($slider);
        $parentNode.replaceChild(this.$wrapper, this.$inputRef);
        this.$inputRef = $clonedNode;
    }
    /**
     * Used for get actual active bar size.
     *
     * Native active bar is hidden by ShadowDOM
     * @param { number | string } value - Input current value
     */
    _calcActiveBarSize(value) {
        const thumbWidth = this.$inputRef.dataset.thumbWidth;
        const $bar = this.$wrapper.querySelector(".custom-range__active-bar");
        $bar.style.width =
            ((value - this.$inputRef.min) /
                (this.$inputRef.max - this.$inputRef.min)) *
            (this.$inputRef.offsetWidth - thumbWidth) +
            thumbWidth / 2 +
            "px";
    }
}
/**
 * Class representing a multi-range.
 * @extends Range
 */
export class MultiRange extends Range {
    $secondInputRef;
    /**
     * Single range constructor
     * @constructor
     * @param {HTMLElement} $firstInput - First input
     * @param {HTMLElement} $secondInput - Second input
     */
    constructor($firstInput, $secondInput) {
        super($firstInput);
        this.$secondInputRef = $secondInput;
        this._init();
    }
    /**
     * Initialization method of the multi-range
     */
    _init() {
        this._createWrapper();
        this._calcLeftHandlersPosition.bind(this)();
        this._calcRightHandlersPosition.bind(this)();
        this.$inputRef.addEventListener(
            "input",
            this._calcLeftHandlersPosition.bind(this)
        );
        this.$secondInputRef.addEventListener(
            "input",
            this._calcRightHandlersPosition.bind(this)
        );
        window.addEventListener(
            "optimizedResize",
            this._calcLeftHandlersPosition.bind(this)
        );
        window.addEventListener(
            "optimizedResize",
            this._calcRightHandlersPosition.bind(this)
        );
    }
    /**
     * Used for the move input's into wrapper
     */
    _createWrapper() {
        this.$wrapper = document.createElement("div");
        this.$rangeWrapper = document.createElement("div");
        this.$wrapper.classList.add("custom-multi-range");
        this.$rangeWrapper.classList.add("custom-multi-range__wrapper");
        this.$slider = document.createElement("div");
        this.$track = document.createElement("div");
        this.$thumbLeft = document.createElement("div");
        this.$bar = document.createElement("div");
        this.$thumbRight = document.createElement("div");
        this.$slider.classList.add("custom-multi-range__slider");
        this.$track.classList.add("custom-multi-range__track");
        this.$bar.classList.add("custom-multi-range__range");
        this.$thumbLeft.classList.add(
            "custom-multi-range__thumb",
            "custom-multi-range__thumb-left"
        );
        this.$thumbRight.classList.add(
            "custom-multi-range__thumb",
            "custom-multi-range__thumb-right"
        );
        const $firstInputClone = this.$inputRef.cloneNode();
        const $secondInputClone = this.$secondInputRef.cloneNode();
        this.$wrapper.appendChild(this.$rangeWrapper);
        this.$rangeWrapper.appendChild($firstInputClone);
        this.$rangeWrapper.appendChild($secondInputClone);
        this.$rangeWrapper.appendChild(this.$slider);
        this.$slider.appendChild(this.$track);
        this.$slider.appendChild(this.$bar);
        this.$slider.appendChild(this.$thumbLeft);
        this.$slider.appendChild(this.$thumbRight);
        this.$inputRef.parentNode.replaceChild(this.$wrapper, this.$inputRef);
        this.$secondInputRef.parentNode.removeChild(this.$secondInputRef);
        this.$inputRef = $firstInputClone;
        this.$secondInputRef = $secondInputClone;
    }
    /**
     * Used for get actual left thumb position and active bar start.
     *
     */
    _calcLeftHandlersPosition() {
        const $el = this.$inputRef;
        $el.value = Math.min(
            parseInt($el.value),
            parseInt(this.$secondInputRef.value) - 1
        );
        let left =
            (($el.value - $el.min) / ($el.max - $el.min)) *
            ($el.offsetWidth - $el.dataset.thumbWidth);
        this.$thumbLeft.style.left = left + "px";
        this.$bar.style.left = left + $el.dataset.thumbWidth / 2 + "px";
    }
    /**
     * Used for get actual right thumb position and active bar end.
     *
     */
    _calcRightHandlersPosition() {
        const $el = this.$secondInputRef;
        $el.value = Math.max(
            parseInt($el.value),
            parseInt(this.$inputRef.value) + 1
        );
        let left =
            (($el.value - $el.min) / ($el.max - $el.min)) *
            ($el.offsetWidth - $el.dataset.thumbWidth);
        this.$thumbRight.style.left = left + "px";
        this.$bar.style.right =
            $el.offsetWidth - left - $el.dataset.thumbWidth / 2 + "px";
    }
}


