import { Grid, GridItem } from "@chakra-ui/react";
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

const EffectBuilderLayout = () => {

  const [numLEDs, _numLEDs] = React.useState<number>(60);
  const [_strip, setStrip] = React.useState<LEDStrip>(new LEDStrip(60));
  const [actions, setActions] = React.useState<LEDActionBase[]>([]);

  React.useEffect(() => {
    setStrip(new LEDStrip(numLEDs));

    setActions([
      new LEDActionGradient([new RGBColor(173, 216, 230), new RGBColor(0, 0, 255)], numLEDs),
      new LEDActionGradient([new RGBColor(255, 0, 0), new RGBColor(255,127,80)], numLEDs),
      new LEDActionGradient([new RGBColor(255, 0, 0), new RGBColor(0, 255, 0)], numLEDs),
      // new LEDActionGradient([new RGBColor(255, 0, 0), new RGBColor(0, 255, 0)], numLEDs),
      // new LEDActionSolid([new RGBColor(255, 0, 0), new RGBColor(0, 255, 0)], numLEDs),
      // new LEDActionGradient([new RGBColor(255, 0, 0), new RGBColor(0, 255, 0)], numLEDs),
    ]);

  }, [numLEDs]);

  return (
    <div className="eb-main-view">
      <Grid
        templateAreas={`"room manager"
                        "editor editor"`}
        w="100%"
        h="90%"
      >
        <GridItem area={"room"}>
          <Room />
        </GridItem>
        <GridItem area={"manager"} >
          <ActionManager LEDActionList={actions} />
        </GridItem>
        <GridItem area={"editor"}>
          <ActionEditor />
        </GridItem>
      </Grid>
    </div>
  );
};

export default EffectBuilderLayout;
