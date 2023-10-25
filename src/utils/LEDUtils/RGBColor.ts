/**
 * RGBColor Class
 * 
 * @class RGBColor
 * @description This class represents an RGB color, and provides certain methods for RGB color manuiplation
 * 
 * @property {number} r - The red component of the RGB color (0-255)
 * @property {number} g - The green component of the RGB color (0-255)
 * @property {number} b - The blue component of the RGB color (0-255)
 * 
 */
export class RGBColor {        
    constructor(public r: number, public g: number, public b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * toHex
     * 
     * @description This method returns the hex representation of the RGB color
     * 
     * @returns {string} The hex representation of the RGB color
     */
    public toHex(): string {
        return "#" + this.componentToHex(this.r) + this.componentToHex(this.g) + this.componentToHex(this.b);
    }

    private componentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    /**
     * fromHex
     * @description This method sets the RGB color from a hex string
     * 
     * @param hexString 
     */
    public fromHex(hexString: string) {
        if(hexString[0] == "#"){
            hexString = hexString.slice(1)
        }
        this.r = Number.parseInt(hexString.slice(0, 2), 16)
        this.g = Number.parseInt(hexString.slice(2, 4), 16)
        this.b = Number.parseInt(hexString.slice(4, 6), 16)
    }

    /**
     * copyFrom
     * 
     * @description This method copies the RGB color from another RGBColor
     * 
     * @param from: RGBColor - The RGBColor to copy from 
     */
    public copyFrom(from: RGBColor){
        this.r = from.r;
        this.b = from.b;
        this.g = from.g;
    }

    /**
     * equals
     * 
     * @description This method returns true if the RGBColor is equal to another RGBColor
     * 
     * @param c: RGBColor - The RGBColor to compare to
     * 
     * @returns {boolean} True if the RGBColor is equal to another RGBColor
     */
    public equals(c: RGBColor): boolean {
        return (this.r === c.r && this.g === c.g && this.b === c.b)
    }

}