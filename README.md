# Custom Range

> Custom range - a ready to use presets. Here you can download the source or bundled code.

## Features

- Easy to use
- Resposive and adaptive
- Easy to customize

## Table of Contents

- [Custom Range](#custom-range)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Quick start](#quick-start)
    - [Install](#install)
      - [Download](#download)
      - [Include with &lt;script&gt;](#include-with-script)
        - [CDN](#cdn)
    - [Initialization](#initialization)
      - [ES6](#es6)
  - [Methods](#methods)
    - [\_init](#_init)
    - [\_updateBarStateOnResize](#_updatebarstateonresize)
      - [Params](#params)
    - [\_init](#_init-1)
    - [\_createWrapper](#_createwrapper)
    - [\_calcActiveBarSize](#_calcactivebarsize)
      - [Params](#params-1)
    - [\_init](#_init-2)
    - [\_createWrapper](#_createwrapper-1)
    - [\_calcLeftHandlersPosition](#_calclefthandlersposition)
    - [\_calcRightHandlersPosition](#_calcrighthandlersposition)
    - [\_updateBarStateOnResize](#_updatebarstateonresize-1)
      - [Params](#params-2)
    - [\_updateBarStateOnResize](#_updatebarstateonresize-2)
      - [Params](#params-3)

## Quick start

### Install

#### Download

Download minified or not compressed bundle

#### Include with &lt;script&gt;

Download and install with `script`.

Minified:

```html
<!-- if you need the single range -->
<link rel="stylesheet" href="./range.min.css" />
<!-- if you need the multi-range -->
<link rel="stylesheet" href="./multi-range.min.css" />

<script src="range.min.js"></script>
```

Not compressed:

```html
<!-- if you need the single range -->
<link rel="stylesheet" href="./range.css" />
<!-- if you need the multi-range -->
<link rel="stylesheet" href="./multi-range.css" />

<script src="range.js"></script>
```

##### CDN

Currently not supported

### Initialization

#### ES6

```js
import SingleRange from "./directory-name";

const range = new SingleRange(document.querySelector(".js-range"));

const range1 = new MultiRange(
  document.querySelector(".js-multi-range-left"),
  document.querySelector(".js-multi-range-right")
);
```

## Methods

### \_init

Initialization service

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_updateBarStateOnResize

Used for update range controls position on resize

#### Params

- `type`
- Type: `string`
- Description: Js event
- `name`
- Type: `string`
- Description: Custom event name
- `obj`
- Type: `object`
- Description: Element which call the event. Default: **_window_**

<a href="https://github.com/marcusblanco/custom-range/blob/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_init

Initialization method of the single range

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_createWrapper

Used for the move input into wrapper

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_calcActiveBarSize

Used for get actual active bar size.

Native active bar is hidden by ShadowDOM

#### Params

- `value`
- Type: `number,string`
- Description: Input current value

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_init

Initialization method of the multi-range

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_createWrapper

Used for the move input&#x27;s into wrapper

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_calcLeftHandlersPosition

Used for get actual left thumb position and active bar start.

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_calcRightHandlersPosition

Used for get actual right thumb position and active bar end.

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_updateBarStateOnResize

Used for update range controls position on resize

#### Params

- `type`
- Type: `string`
- Description: Js event
- `name`
- Type: `string`
- Description: Custom event name
- `obj`
- Type: `object`
- Description: Element which call the event. Default: **_window_**

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

### \_updateBarStateOnResize

Used for update range controls position on resize

#### Params

- `type`
- Type: `string`
- Description: Js event
- `name`
- Type: `string`
- Description: Custom event name
- `obj`
- Type: `object`
- Description: Element which call the event. Default: **_window_**

<a href="https://github.com/marcusblanco/custom-range/tree/master/src/scripts/range.js" target="_blank">Source
code</a>

---

&copy; marcusblanco (Danil Duganov)
