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

export interface LayerMoverScale {
  x: number;
  y: number;
}

export interface LayerMoverTransformation {
  translation: LayerMoverPosition;
  scale?: LayerMoverScale;
}

export interface LayerMoverElements extends LayerMoverTransformation {
  element: HTMLElement;
}

export interface LayerMoverEvents {
  mouseMove: () => void;
}
