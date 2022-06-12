import FastIcon from "../../assets/Fastest.svg";
import SellableCard from "../cards/SellableCard";
const CardTopPanel = () => {
  // CSS Styling
  const Wrapper = {
    outline: "solid",
    outlineColor: "#A6F7C2",
    backgroundColor: "#CFFCDD",
    fontFamily: "Codec Pro",
    borderRadius: "24px",
    width: "360px",
    height: "234px",
    position: "relative",
    boxShadow:
      "0px 1px 1px rgba(32, 65, 90, 0.1), 0px 2px 4px rgba(32, 65, 90, 0.1)",
  };

  const TextWrapper = {
    display: "flex",
    paddingTop: "8px",
    paddingBottom: "8px",
    justifyContent: "center",
  };

  const Text = {
    fontWeight: "bold",
    fontSize: "12px",
    margin: 0,
  };

  //   JSX
  return (
    <div style={Wrapper}>
      <div style={TextWrapper}>
        <img src={FastIcon} style={{ marginRight: "2px" }} />
        <p style={Text}>Fastest</p>
      </div>
      <SellableCard />
    </div>
  );
};
export default CardTopPanel;
