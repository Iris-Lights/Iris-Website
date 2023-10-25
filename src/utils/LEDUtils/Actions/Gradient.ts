
import { LEDActionBase } from "./ActionBase";
import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";

export class LEDActionGradient extends LEDActionBase {
    
    leds: RGBColor[];

    constructor(public colors: RGBColor[], public numLEDs: number = 60) {
        super(LEDActionType.GRADIENT, colors, numLEDs);
        this.leds = new Array<RGBColor>(numLEDs);
        this.setup();
    }

    protected setup() {

        const colors = this.colors; 
        const numLEDs = this.leds.length;

        if (colors.length < 2) {
            colors.push(colors[0]);
        }

        const color1 = colors[0];
        const color2 = colors[1];

        const rStep = (color2.r - color1.r) / (numLEDs / 2);
        const gStep = (color2.g - color1.g) / (numLEDs / 2);
        const bStep = (color2.b - color1.b) / (numLEDs / 2);

        for (let i = 0; i < numLEDs / 2; i++) {
            this.leds[i] = new RGBColor(
                Math.round(color1.r + (rStep * i)),
                Math.round(color1.g + (gStep * i)),
                Math.round(color1.b + (bStep * i))
            );
            this.leds[numLEDs - i - 1] = new RGBColor(
                Math.round(color1.r + (rStep * i)),
                Math.round(color1.g + (gStep * i)),
                Math.round(color1.b + (bStep * i))
            );
        }
    }

    protected onColorsChanged(): void {
        this.setup();
    }


    public update(LEDStrip: LEDStrip) {        
        for(let i = 0; i < this.numLEDs; i++) {
            LEDStrip.LEDs[i].copyFrom(this.leds[i]);
        }
    }

    public getActionType(): LEDActionType {
        return this.type;
    }

}