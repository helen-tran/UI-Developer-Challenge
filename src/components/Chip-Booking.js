import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../assets/Arrow-Chip.svg";

const ChipBooking = ({ label, onClick, isPaleBlue }) => {
  const DarkBlue = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0271CA",
    border: "none",
    width: "88px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "999px",
    color: "white",
    lineHeight: "20px",
    fontFamily: "Codec Pro",
    fontWeight: "bold",
  };

  const PaleBlue = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#30B0FF1A",
    border: "none",
    width: "88px",
    height: "40px",
    fontSize: "16px",
    borderRadius: "999px",
    color: "#20415A",
    lineHeight: "20px",
    fontFamily: "Codec Pro",
    fontWeight: "bold",
  };
  return (
    <>
      {isPaleBlue ? (
        <>
          <button style={PaleBlue} onClick={onClick}>
            {label}
            <Arrow
              style={{
                marginLeft: "12px",
              }}
              fill="#0795FF"
            />
          </button>
        </>
      ) : (
        <>
          <button style={DarkBlue} onClick={onClick}>
            {label}
            <Arrow fill="#A1D8FF" style={{ marginLeft: "12px" }} />
          </button>
        </>
      )}
    </>
  );
};

ChipBooking.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isPaleBlue: PropTypes.bool,
};

ChipBooking.defaultProps = {
  isPaleBlue: false,
  onClick: undefined,
};

export default ChipBooking;
