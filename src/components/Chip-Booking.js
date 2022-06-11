import PropTypes from "prop-types";
import Arrow from "../../assets/Arrow-Chip.svg";

const ChipBooking = ({
  label,
  onClick,
  backgroundColor = "#0271CA",
  color = "white",
}) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor,
    border: "none",
    width: "88px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "999px",
    color,
    lineHeight: "20px",
    fontFamily: "Codec Pro",
    fontWeight: "bold",
  };
  return (
    <button style={style} onClick={onClick}>
      {label} <img src={Arrow} />
    </button>
  );
};

ChipBooking.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
export default ChipBooking;
