// import React from "react";

import { Component } from "react";
import { LEDActionBase } from "../utils/LEDUtils/Actions/ActionBase";
import { LEDStrip } from "../utils/LEDUtils/Strip";
import React from "react";

interface IrisLightViewerProps {
  ledActions: LEDActionBase[];
}

interface IrisLightViewerState {
  ledActions: LEDActionBase[];
  ledStrip: LEDStrip;
}

class IrisLightViewer extends Component<IrisLightViewerProps, IrisLightViewerState> {

  state: IrisLightViewerState = {
      ledActions: [],
      ledStrip: new LEDStrip(60)
  }

  lightStrip: LEDStrip;
  canvasRef: React.RefObject<HTMLCanvasElement>;

  isRendering = false;

  constructor(props: any) {
      super(props);
      this.lightStrip = new LEDStrip(60);
      this.canvasRef = React.createRef();
  }

  componentDidMount() {
      this.setState({
          ledActions: this.props.ledActions,
          ledStrip: new LEDStrip(60)
      });
      this.resizeCanvasToDisplaySize();
      if(!this.isRendering){
        this.isRendering = true;
        this.renderCanvasLights();
      }
  }

  componentDidUpdate() {
      this.resizeCanvasToDisplaySize();
  }

  resizeCanvasToDisplaySize() {
      const canvas = this.canvasRef.current as HTMLCanvasElement;
      const parent = canvas.parentElement as HTMLElement;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
  }

  renderCanvasLights() {
      const canvas = this.canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, 100, 100);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.props.ledActions.length; i++) {
          const action = this.props.ledActions[i];
          action.update(this.lightStrip);
      }

      for (let i = 0; i < this.lightStrip.numLEDs; i++) {
          const led = this.lightStrip.LEDs[i];
          ctx.fillStyle = led.toHex();

          const x = (canvas.width / this.state.ledStrip.numLEDs) * i;
          const y = 0;
          const sizeX = canvas.width / this.state.ledStrip.numLEDs;
          const sizeY = canvas.height;

          // fill gradient
          const grd = ctx.createLinearGradient(x, y, x + sizeX, y);
          grd.addColorStop(0, led.toHex());
          grd.addColorStop(1, this.lightStrip.LEDs[(i + 1) % this.lightStrip.numLEDs].toHex());

          // make gradient direction horizontal
          //ctx.fillStyle = grd;
          ctx.fillRect(x, y, sizeX + 2, sizeY);
      }

      setTimeout(() => {
          this.renderCanvasLights();
      }, 1000 / 10);

  }


  render() {
      return (
          <div className="dual-view-container">
              <div className="light-viewer-container">
                  <canvas ref={this.canvasRef} id="iris-light-viewer-canvas" width="100%" height="100%"></canvas>
              </div>
          </div>
      )
  }

}

interface RoomProps {
  actions: LEDActionBase[];
}

const Room = ({ actions }: RoomProps) => {
  return <div className="room">
    <IrisLightViewer ledActions={actions} />
  </div>;
};

export default Room;
