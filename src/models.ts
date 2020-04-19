export interface LayerMoverOptions {
  moveSpeed?: number;
  parentElement?: HTMLElement;
  debug?: boolean;
  debounce?: number;
}

export interface LayerMoverPosition {
  x: number;
  y: number;
}

export interface LayerMoveScale {
  x: number;
  y: number;
}

export interface LayerMoverTransformation {
  translation: LayerMoverPosition;
  rotation?: LayerMoverPosition;
  scale?: LayerMoveScale;
}

export interface LayerMoverElements extends LayerMoverTransformation {
  element: HTMLElement;
}

export interface LayerMoverEvents {
  mouseMove: () => void;
}
