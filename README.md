# MouseMover

Small library for mouse move animation. It can be used for creating parallax effects.

## Usage

```
// set element
let background = {element: document.getElementById("background"), translation: {x: -20, y: -15}, scale:{x: 1.05, y: 1.05}};
// init
this.mouseMover = new MouseMover([
      background
    ], {
      moveSpeed: 0.8,
      debug: false,
      debounce: 10
    });
```