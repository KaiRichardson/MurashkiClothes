// Copy and pasted from https://github.com/berzniz/react-overdrive/blob/master/index.d.ts
// File not included with yarn add command
declare module 'react-overdrive' {
  import { Component, CSSProperties } from 'react';
  export interface Props {
    id: string;
    duration?: number;
    easing?: string;
    element?: string;
    animationDelay?: number;
    onAnimationEnd?: () => void;
    style?: CSSProperties;
  }
  export interface State {
    loading: boolean;
  }
  export default class Overdrive extends Component<Props, State> {}
}
