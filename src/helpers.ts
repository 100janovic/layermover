// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: any;

  return function executedFunction() {
    let context: any = self;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// from http://www.quirksmode.org/js/events_properties.html#position
export function getMousePos(e: any) {
  let posX = 0;
  let posY = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else if (e.clientX || e.clientY) {
    posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posX, y: posY };
}

// uses object positions and converts them in to min and max range
export function setRange(obj: any) {
  for (let k in obj) {
    if (obj[k] === undefined) {
      obj[k] = [0, 0];
    } else if (typeof obj[k] === 'number') {
      obj[k] = [-1 * obj[k], obj[k]];
    }
  }
  return obj;
}

export function getBounds(parentElement: HTMLElement) {
  let bounds = parentElement ? parentElement.getBoundingClientRect() : document.body.getBoundingClientRect();
  if (!bounds.width) {
    bounds.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
  if (!bounds.height) {
    bounds.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
  return bounds;
}
