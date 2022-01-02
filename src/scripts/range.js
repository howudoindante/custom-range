class Range {
    $inputRef;
    $wrapper;
    constructor($firstInput) {
        this.$inputRef = $firstInput;
        this._updateBarStateOnResize("resize", "optimizedResize");
    }
    _init() { }
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

class SingleRange extends Range {
    constructor($selector) {
        super($selector);
        this._init();
    }
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
class MultiRange extends Range {
    $secondInputRef;
    constructor($firstInput, $secondInput) {
        super($firstInput);
        this.$secondInputRef = $secondInput;
        this._init();
    }
    _init() {
        this._createWrapper();
        this.$inputRef.addEventListener("input", this._calcLeftHandlersPosition.bind(this));
        this.$secondInputRef.addEventListener("input", this._calcRightHandlersPosition.bind(this));
        window.addEventListener("optimizedResize", this._calcLeftHandlersPosition.bind(this));
        window.addEventListener("optimizedResize", this._calcRightHandlersPosition.bind(this));
    }
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

const range = new SingleRange(document.querySelector(".js-range"));
const range1 = new MultiRange(document.querySelector(".js-multi-range-left"), document.querySelector(".js-multi-range-right"));
