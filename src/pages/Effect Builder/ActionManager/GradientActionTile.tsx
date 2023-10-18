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
        <div className="action-tile-container-inner">
          <div className="action-tile-container-1">
            <h1 className="layer-name">Gradient Layer</h1>
          </div>
          <div className="action-tile-container-2">
            <div className="button-stack">
              <button>Edit Action</button>
              <button>Delete Action</button>
            </div>
          </div>
        </div>
    </ActionOverviewTileContainer>
  );
};

export default GradientActionTile;
