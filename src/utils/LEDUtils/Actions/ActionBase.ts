import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";
export abstract class LEDActionBase {

    constructor(public type: LEDActionType, public colors: RGBColor[], public numLEDs: number = 60, public startIdx: number | undefined = undefined, public endIdx: number | undefined = undefined) {
        this.type = type;
        this.colors = colors;
        this.numLEDs = numLEDs;
        this.startIdx = Math.min(startIdx ?? 0, 0);
        this.endIdx = Math.max(endIdx ?? numLEDs - 1, numLEDs - 1);
    }

    public setColors(colors: RGBColor[]) {
        this.colors = colors;
        this.onColorsChanged();
    }

    /**
     * Update an LED strip with the current action.
     * 
     * @param LEDStrip 
     */
    public abstract update(LEDStrip: LEDStrip): void;

    /**
     * return type of action
     * 
     * @returns {LEDActionType}
     */
    public abstract getActionType(): LEDActionType;

    /**
     * Code is run when the LEDaction's colors have changed
     */
    protected onColorsChanged(): void {
        // override
    }
}

