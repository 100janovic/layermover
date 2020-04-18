# MouseMover

Small library for mouse move animation. It can be used for creating parallax effects.

## Installation
```
npm install --save mousemover
```

## Usage

```
// set element
let background = {
    element: document.getElementById("background"), 
    translation: {x: -20, y: -15}, scale:{x: 1.05, y: 1.05}
};
// init
this.mouseMover = new MouseMover([ // array of elements
    background
], {
    moveSpeed: 0.8, // animation speed in seconds
    debug: false, // print console log message for debuging
    debounce: 10 // debounce time fore mouse move event
});
```

<br /><br />

Djordje Stojanovic <br />
[djordje100janovic@gmail.com](mailto:djordje100janovic@gmail.com) <br /> <br />
Based on article from [tympanus.net/codrops](https://tympanus.net/codrops/)