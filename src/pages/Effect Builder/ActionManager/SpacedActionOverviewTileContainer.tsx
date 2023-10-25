import "./ActionOverviewContainer.css";
import { LEDActionBase } from "../../../utils/LEDUtils/Actions/ActionBase";
import { Triangle } from "./Triangle";

interface Props {
    spacedAction: LEDActionBase;
  onDelete(): void;
}

const SpacedActionOverviewTileContainer = ({ spacedAction, onDelete }: Props) => {
  return (
    <div className="action-container">
      <Triangle RGBColors={spacedAction.colors} />
      <div className="action-tile-container-inner">
        <div className="action-tile-container-1">
          <h1 className="layer-name">Spaced Action</h1>
        </div>
        <div className="action-tile-container-2">
          <div className="button-stack">
            <button>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacedActionOverviewTileContainer;
