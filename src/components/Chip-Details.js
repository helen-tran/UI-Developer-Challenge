import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../assets/Arrow-Chip.svg";

const ChipDetails = ({ onClick }) => {
  // CSS Styling
  const style = {
    backgroundColor: "#8FACC11A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "none",
    width: "123px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "999px",
    color: "#20415A",
    lineHeight: "20px",
    fontFamily: "Codec Pro",
    fontWeight: "bold",
  };

  // JSX
  return (
    <button style={style} onClick={onClick}>
      Itinerary
      <Arrow style={{ marginLeft: "12px" }} fill="#698CA5" />
    </button>
  );
};

ChipDetails.propTypes = {
  onClick: PropTypes.func,
};
export default ChipDetails;
