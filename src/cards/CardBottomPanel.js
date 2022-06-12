import ChipBooking from "../components/Chip-Booking";
import SellableCard from "./SellableCard";
import Refund from "../../assets/Refund.svg";
import SeatXL from "../../assets/SeatXL.svg";
import Utensils from "../../assets//Utensils.svg";

const CardBottomPanel = () => {
  // CSS Styling
  const Wrapper = {
    outline: "solid",
    outlineColor: "#A3E7FF",
    height: "314px",
    width: "360px",
    backgroundColor: "#E6F6FF",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
  };

  const RowWrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "8px",
    marginRight: "8px",
    marginBottom: "8px",
  };

  const Text = {
    fontFamily: "Codec Pro",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#20415A",
    marginRight: "8px",
    marginTop: 0,
    marginBottom: 0,
  };

  const Line = {
    borderBottom: "solid",
    borderColor: "#30B0FF33",
    marginLeft: "20px",
  };

  //   JSX
  return (
    <div style={Wrapper}>
      <SellableCard bottomPanel={true} />
      <div style={RowWrapper}>
        <p style={Text}>Regular</p>
        <ChipBooking label="$45" isPaleBlue={true} />
      </div>
      <div style={Line}></div>
      <div style={RowWrapper}>
        <div style={{ display: "flex" }}>
          <p style={Text}>First-class</p>
          <img src={Refund} style={{ marginRight: "4px" }} />
          <img src={SeatXL} style={{ marginRight: "4px" }} />
          <img src={Utensils} />
        </div>
        <ChipBooking label="$95" isPaleBlue={true} />
      </div>
    </div>
  );
};

export default CardBottomPanel;
