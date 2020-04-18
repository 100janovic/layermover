export interface MouseMoverOptions {
  moveSpeed?: number;
  parentElement?: HTMLElement;
  debug?: boolean;
  debounce?: number;
}

export interface MouseMoverPosition {
  x: number;
  y: number;
}

export interface MouseMoveScale {
  x: number;
  y: number;
}

export interface MouseMoverTransformation {
  translation: MouseMoverPosition;
  rotation?: MouseMoverPosition;
  scale?: MouseMoveScale;
}

export interface MouseMoverElements extends MouseMoverTransformation {
  element: HTMLElement;
}

export interface MouseMoverEvents {
  mouseMove: () => void;
}
