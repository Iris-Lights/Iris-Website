import "./ActionOverviewContainer.css";
import { RGBColor } from "../../../utils/LEDUtils/RGBColor";

interface Props {
  RGBColors: RGBColor[];
}

export const Triangle = (props: Props) => {
  if (props.RGBColors.length == 0) {
    return (
      <div
        className={"triangle"}
        style={{
          background: `gray`,
        }}
      ></div>
    );
  }

  if (props.RGBColors.length == 1) {
    return (
      <div
        className={"triangle"}
        style={{
          background: `linear-gradient(135deg, ${props.RGBColors[0].toHex()} 0%, ${props.RGBColors[0].toHex()} 50%, ${props.RGBColors[0].toHex()} 50%, rgb(0, 0, 0, 0) 50% )`,
        }}
      ></div>
    );
  }

  return (
    <div
      className={"triangle"}
      style={{
        background: `linear-gradient(135deg, ${props.RGBColors[0].toHex()} 0%, ${props.RGBColors[1].toHex()} 50%, ${props.RGBColors[1].toHex()} 50%, rgb(0, 0, 0, 0) 50% )`,
      }}
    ></div>
  );
};
