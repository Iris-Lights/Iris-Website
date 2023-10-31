import "./effectBuilder.css";
// import React from "react";
import Room from "../../components/Room";
import ActionManager from "./ActionManager";
import ActionEditor from "./ActionEditor";

import { LEDActionBase } from "../../utils/LEDUtils/Actions/ActionBase";
import { LEDStrip } from "../../utils/LEDUtils/Strip";
import * as React from "react";
import { LEDActionGradient } from "../../utils/LEDUtils/Actions/Gradient";
import { RGBColor } from "../../utils/LEDUtils/RGBColor";
import { LEDActionShift } from "../../utils/LEDUtils/Actions/Shift";
import { LEDActionSpaced } from "../../utils/LEDUtils/Actions/SpacedAction";
import { LEDActionSolid } from "../../utils/LEDUtils/Actions/SolidColor";

const EffectBuilderLayout = () => {
  const [numLEDs, _numLEDs] = React.useState<number>(60);
  const [_strip, setStrip] = React.useState<LEDStrip>(new LEDStrip(60));
  const [actions, setActions] = React.useState<LEDActionBase[]>([]);

  const onDeleteActionAtIndex = ( index: number) => {
    const newActions = [...actions];
    newActions.splice(index, 1);
    setActions(newActions);
  }

  React.useEffect(() => {
    setStrip(new LEDStrip(numLEDs));

    setActions([
      new LEDActionSolid([new RGBColor(0, 0, 0)], numLEDs),
      new LEDActionGradient([new RGBColor(173, 216, 230), new RGBColor(0, 0, 255)], numLEDs),
      new LEDActionSpaced([new RGBColor(100, 150, 230)], numLEDs, 3),
      new LEDActionShift([], numLEDs),
      new LEDActionSpaced([new RGBColor(255, 10, 230)], numLEDs, 10)
    ]);
  }, [numLEDs]);

  return (
    <div className="eb-main-view">
      <Room actions={actions} />
      <ActionManager onDeleteActionAtIndex={onDeleteActionAtIndex} LEDActionList={actions}  />
      <ActionEditor />
    </div>
  );
};

export default EffectBuilderLayout;
