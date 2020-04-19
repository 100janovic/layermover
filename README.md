# LayerMover

Small library for mouse move animation. It can be used for creating parallax effects.

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/100janovic/layermover/master)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/100janovic/layermover)

[Demo](https://100janovic.github.io/projects/layermover)

## Installation
```
npm install --save layer-mover
```

## Import
```
import { LayerMover } from 'layer-mover';
```

## Usage

```
// set element
let background = {
    element: document.getElementById("background"), 
    translation: {x: -20, y: -15}, scale:{x: 1.05, y: 1.05}
};

// array of elements
let elements = [ 
    background
]

// init
this.layerMover = new LayerMover(elements, {
    moveSpeed: 0.8, // animation speed in seconds
    debug: false, // print console log message for debuging
    debounce: 10 // debounce time fore mouse move event
});
```

## Destroy

Important to destroy after you don't need it anymore, otherwise mouse move events will still be active.

```
this.layerMover.destroy();
```

### Some notes

If you want to animate a background - set element style to cover full width and height, 
then scale-up element to avoid edges showing up when the element is animated.

```
translation: {x: -20, y: -15}, scale:{x: 1.05, y: 1.05}
```

When a translation is animated, it can affect document width and height. 
To avoid scrollbars - set on some parent element overflow: hidden.


<br /><br />
Based on article from [tympanus.net/codrops](https://tympanus.net/codrops/)