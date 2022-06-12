import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../assets/Arrow-Chip.svg";

const ChipBooking = ({ label, onClick, isPaleBlue }) => {
  const DarkBlue = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: "8px",
    marginRight: "8px",
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
    marginBottom: "8px",
    marginRight: "8px",
  };
  return (
    <>
      {isPaleBlue ? (
        <>
          <button style={PaleBlue} onClick={onClick}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
              <Arrow style={{ marginLeft: "12px" }} fill="#0795FF" />
            </div>
          </button>
        </>
      ) : (
        <>
          <button style={DarkBlue} onClick={onClick}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
              <Arrow fill="#A1D8FF" style={{ marginLeft: "12px" }} />
            </div>
          </button>
        </>
      )}
    </>
  );
};

ChipBooking.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  isPaleBlue: PropTypes.bool,
};

ChipBooking.defaultProps = {
  backgroundColor: null,
  isPaleBlue: false,
  onClick: undefined,
};

export default ChipBooking;
