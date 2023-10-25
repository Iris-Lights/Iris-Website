/**
 * LEDActionType Enum
 * 
 * @enum LEDActionType
 * @description This enum represents the different types of LED actions
 * 
 * @property {number} GRADIENT - The gradient LED action type
 * @property {number} SOLID - The solid LED action type
 * @property {number} SHIFT - The shift LED action type
 */
export enum LEDActionType {
    GRADIENT,
    SOLID,
    SHIFT,
    SPACED
}

export const getActionTypeList = (): LEDActionType[] => {
    return [
        LEDActionType.GRADIENT,
        LEDActionType.SOLID,
        LEDActionType.SHIFT
    ];
}

export const getActionTypeSet = (): Set<LEDActionType> => {
    return new Set(getActionTypeList());
}