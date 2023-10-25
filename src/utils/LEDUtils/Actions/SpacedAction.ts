import { LEDActionBase } from "./ActionBase";
import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";

export class LEDActionSpaced extends LEDActionBase {
    
    spacingAmount: number;
    
    constructor(public colors: RGBColor[], public numLEDs: number = 60, spaceAmount: number = 3) {
        super(LEDActionType.SPACED, colors, numLEDs);
        this.spacingAmount = spaceAmount;
    }

    public update(LEDStrip: LEDStrip) {
        for(let i = 0; i < this.numLEDs; i+=this.spacingAmount) {
            LEDStrip.LEDs[i].copyFrom(this.colors[0]);
        }
    }

    public getActionType(): LEDActionType {
        return this.type;
    }

}