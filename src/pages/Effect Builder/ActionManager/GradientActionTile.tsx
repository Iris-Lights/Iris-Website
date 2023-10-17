import ActionOverviewTileContainer from "./ActionOverviewTileContainer";
import "./ActionOverviewContainer.css";
import { LEDActionBase } from "../../../utils/LEDUtils/Actions/ActionBase";
import { Triangle } from "./Triangle";
interface Props {
  gradientAction: LEDActionBase,
}

const GradientActionTile = ({gradientAction}: Props) => {
  return (
    <ActionOverviewTileContainer>
        <Triangle RGBColors={gradientAction.colors}/>
        <div className="add-layer-fake">Gradient Layer</div>
    </ActionOverviewTileContainer>
  );
};

export default GradientActionTile;
