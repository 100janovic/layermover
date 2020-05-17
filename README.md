# LayerMover

Small library for mouse move animation. It can be used for creating parallax effects.

![v1.0.3](https://img.shields.io/github/package-json/v/100janovic/layermover)

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
// get elements
let text = document.getElementById('text');
let bg = document.getElementById('bg');

// set
let elements = [
    {element: text, translation: {x: -40, y: -30}},
    {element: bg, translation: {x: -10, y: -10}, scale:{x: 1.05, y: 1.05}}
];

// init
this.layerMover = new LayerMover(elements, {
    moveSpeed: 0.8,
    debug: false,
    debounce: 10
});
```

## Destroy

Important to destroy after you don't need it anymore, otherwise mouse move events will still be active.

```
this.layerMover.destroy();
```

### Some notes

- If you want to animate a background - set element style to cover full width and height, 
then scale-up element to avoid edges showing up when the element is animated.

```
translation: {x: -20, y: -15}, scale:{x: 1.05, y: 1.05}
```

- When a translation is animated, it can affect document width and height. To avoid scrollbars - set on some parent element overflow: hidden.
- To achieve a better parallax effect, set translation values of the foreground elements higher than for the background elements.
- If translation values are negative - then the element will move in opposite direction of the mouse.


<br /><br />
Based on article from [tympanus.net/codrops](https://tympanus.net/codrops/)
