import ActionOverviewTileContainer from "./ActionOverviewTileContainer";
import "./ActionOverviewContainer.css";

const ActionAddLayer = () => {
  return (
    <ActionOverviewTileContainer>
      <div className="lol">
        <div className="triangle"></div>
        <div className="add-layer-fake">Add Layer</div>
        <button className="plus">+</button>
      </div>
    </ActionOverviewTileContainer>
  );
};

export default ActionAddLayer;
