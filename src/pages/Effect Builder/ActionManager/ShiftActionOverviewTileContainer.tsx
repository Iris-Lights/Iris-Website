import "./ActionOverviewContainer.css";
import { Triangle } from "./Triangle";
import { RGBColor } from "../../../utils/LEDUtils/RGBColor";

interface Props {
  onDelete(): void;
}

const ShiftActionOverviewTileContainer = ({ onDelete }: Props) => {
  return (
    <div className="action-container">
      <Triangle RGBColors={[new RGBColor(150, 150, 150)]} />
      <div className="action-tile-container-inner">
        <div className="action-tile-container-1">
          <h1 className="layer-name">Shift Action</h1>
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

export default ShiftActionOverviewTileContainer;
