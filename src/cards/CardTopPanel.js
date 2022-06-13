import FastIcon from "../../assets/Fastest.svg";
import SellableCard from "../cards/SellableCard";
import PropTypes from "prop-types";

const CardTopPanel = ({ size = "mobile" }) => {
  // Reponsiveness;
  let width = "360px";
  if (size === "tablet") width = "600px";
  if (size === "responsive") width = "";

  // CSS Styling
  const Wrapper = {
    outline: "solid",
    outlineColor: "#A6F7C2",
    backgroundColor: "#CFFCDD",
    fontFamily: "Codec Pro",
    borderRadius: "24px",
    width: `${width}`,
    height: "234px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
      <SellableCard size={size} />
    </div>
  );
};

CardTopPanel.propTypes = {
  size: PropTypes.oneOf(["mobile", "tablet", "responsive"]),
};
export default CardTopPanel;
