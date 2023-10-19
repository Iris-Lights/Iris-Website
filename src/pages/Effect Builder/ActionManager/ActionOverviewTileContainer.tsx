import "./ActionOverviewContainer.css";
import { LEDActionBase } from "../../../utils/LEDUtils/Actions/ActionBase";
import { Triangle } from "./Triangle";

interface Props {
  gradientAction: LEDActionBase;
  name: string;
}

const ActionOverviewTileContainer = ({ gradientAction, name }: Props) => {
  return (
    <div className="action-container">
      <Triangle RGBColors={gradientAction.colors} />
      <div className="action-tile-container-inner">
        <div className="action-tile-container-1">
          <h1 className="layer-name">{name}</h1>
        </div>
        <div className="action-tile-container-2">
          <div className="button-stack">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionOverviewTileContainer;
