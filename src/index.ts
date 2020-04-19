import { debounce, getMousePos, setRange, getBounds } from './helpers';
import {
  LayerMoverOptions,
  LayerMoverElements,
  LayerMoverPosition,
  LayerMoverTransformation,
  LayerMoverEvents,
} from './models';

declare const window: any;
declare const document: any;

/*
 * LayerMover - Small library for mouse move animation. It can be used for creating parallax effects.
 * Djordje Stojanovic
 * djordje100janovic@gmail.com
 *
 * based on article from https://tympanus.net/codrops/
 *
 * free for use and modification
 * v1.0
 */

export class LayerMover {
  // events object
  moverEvents: LayerMoverEvents = {
    mouseMove: () => {},
  };

  elements: LayerMoverElements[] = [];
  defaultPosition: LayerMoverPosition = { x: 0, y: 0 };

  options: LayerMoverOptions = {
    moveSpeed: 1,
    parentElement: document.body,
    debug: false,
    debounce: 10,
  };

  constructor(elements: LayerMoverElements[], options: LayerMoverOptions) {
    // save elements
    this.elements = elements;
    // overwrite options with user defined
    this.options = {
      moveSpeed: options.moveSpeed || 1,
      parentElement: options.parentElement || document.body,
      debug: options.debug,
      debounce: options.debounce,
    };
    // init functions
    this.init();
    this.initTransition();
  }

  init() {
    this.moverEvents.mouseMove = debounce((event: MouseEvent) => {
      return this.onMouseMove(event);
    }, this.options.debounce || 10);
    window.addEventListener('mousemove', this.moverEvents.mouseMove);
    if (this.options.debug) {
      console.log('LayerMover initiated!');
    }
  }

  destroy() {
    this.removeEvents();
    this.reset();
    if (this.options.debug) {
      console.log('LayerMover removed events!');
    }
  }

  removeEvents() {
    window.removeEventListener('mousemove', this.moverEvents.mouseMove);
  }

  reset() {
    this.elements.map((item) => this.resetElement(item.element));
  }

  resetElement(element: HTMLElement) {
    const transformString = this.getResetTransformProperty();
    element.style.webkitTransform = transformString;
    element.style.transform = transformString;
  }

  initTransition() {
    this.elements.map((item) => this.setTransition(item.element));
  }

  setTransition(element: HTMLElement) {
    element.style.transitionDuration = `${this.options.moveSpeed}s`;
    element.style.transitionProperty = 'transform';
    element.style.transitionTimingFunction = 'ease-out';
  }

  onMouseMove(e: MouseEvent) {
    const mousepos = getMousePos(e);

    const bounds = getBounds(this.options.parentElement || document.body);

    const docScrolls = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };

    const relativeMousePosition = {
      x: mousepos.x - bounds.left - docScrolls.left,
      y: mousepos.y - bounds.top - docScrolls.top,
    };

    this.elements.map((item) => {
      // get users configuration for each element
      let t: any = item.translation || this.defaultPosition;
      let r: any = item.rotation || this.defaultPosition;

      // convert each prop into min-max range
      t = setRange(t);
      r = setRange(r);

      const transforms: LayerMoverTransformation = {
        translation: {
          x: this.round(((t.x[1] - t.x[0]) / bounds.width) * relativeMousePosition.x + t.x[0]),
          y: this.round(((t.y[1] - t.y[0]) / bounds.height) * relativeMousePosition.y + t.y[0]),
        },
        rotation: {
          x: this.round(((r.x[1] - r.x[0]) / bounds.height) * relativeMousePosition.y + r.x[0]),
          y: this.round(((r.y[1] - r.y[0]) / bounds.width) * relativeMousePosition.x + r.y[0]),
        },
        scale: item.scale || { x: 1, y: 1 },
      };

      if (this.options.debug) {
        console.table(transforms);
      }

      this.animateElement(item.element, transforms);
    });
  }

  round(num: number) {
    return Math.round(num * 100) / 100;
  }

  animateElement(element: HTMLElement, transforms: LayerMoverTransformation) {
    const transformString = this.getTransformProperty(transforms);
    element.style.webkitTransform = transformString;
    element.style.transform = transformString;
  }

  getTransformProperty(transforms: LayerMoverTransformation) {
    if (!transforms.rotation) {
      transforms.rotation = this.defaultPosition;
    }
    if (!transforms.scale) {
      transforms.scale = this.defaultPosition;
    }
    return `translate(${transforms.translation.x}px, ${transforms.translation.y}px) rotateX(${transforms.rotation.x}deg) rotateY(${transforms.rotation.y}deg) scale(${transforms.scale.x}, ${transforms.scale.y})`;
  }

  getResetTransformProperty() {
    return `translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1,1)`;
  }
}

window.LayerMover = LayerMover;