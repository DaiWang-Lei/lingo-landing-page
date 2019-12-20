import ReactDOM from "react-dom";
import React from "react";

export default class extends React.Component<{ onMount?: (el: HTMLElement) => (() => void) | void }> {
  private cleanup?: () => void;

  public componentDidMount() {
    const el = ReactDOM.findDOMNode(this) as HTMLElement;
    
    if(this.props.onMount) {
        //@ts-ignore
      this.cleanup = this.props.onMount(el);
    }
  }

  public componentWillUnmount() {
    this.cleanup?.();
  }

  public render() {
    return (
      <>{this.props.children}</>
    );
  }
}