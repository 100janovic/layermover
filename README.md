# LayerMover

Small library for mouse move animation. It can be used for creating parallax effects.

## Demo
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
// init
this.layerMover = new LayerMover([ // array of elements
    background
], {
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

<br /><br />
Based on article from [tympanus.net/codrops](https://tympanus.net/codrops/)