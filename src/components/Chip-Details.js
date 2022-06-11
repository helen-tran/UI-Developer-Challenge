import PropTypes from "prop-types";
import Arrow from "../../assets/Arrow-Chip.svg";

const ChipDetails = ({ onClick }) => {
  // CSS Styling
  const style = {
    backgroundColor: "#8FACC11A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      <img src={Arrow} />
    </button>
  );
};

ChipDetails.propTypes = {
  onClick: PropTypes.func,
};
export default ChipDetails;
