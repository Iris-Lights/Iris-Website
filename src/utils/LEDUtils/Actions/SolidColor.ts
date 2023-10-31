import { LEDActionBase } from "./ActionBase";
import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";

export class LEDActionSolid extends LEDActionBase {
    constructor(public colors: RGBColor[], public numLEDs: number = 60) {
        super(LEDActionType.SOLID, colors, numLEDs);
    }

    public update(LEDStrip: LEDStrip) {
        for (let i = 0; i < this.numLEDs; i++) {
            LEDStrip.LEDs[i].copyFrom(this.colors[0]);
        }
    }

    public getActionType(): LEDActionType {
        return this.type;
    }

}