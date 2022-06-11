import ChipBooking from "./Chip-Booking";
import Bus from "../../assets/Bus.svg";
import Time from "../../assets/Time.svg";

const FooterPurchase = () => {
  // CSS Styling
  const Wrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const AttributeWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Codec Pro",
    fontWeight: "normal",
    color: "#436783",
    height: "24px;",
  };

  const Duration = {
    marginLeft: "8pt",
  };

  const Text = {
    marginLeft: "2pt",
    margin: 0,
    fontSize: "14px",
  };

  // JSX
  return (
    <div style={Wrapper}>
      <div style={AttributeWrapper}>
        <div style={AttributeWrapper}>
          <div>
            <img src={Bus} />
          </div>
          <p style={Text}>Bus</p>
        </div>
        <div style={AttributeWrapper}>
          <div style={Duration}>
            <img src={Time} />
          </div>
          <p style={Text}>4h 30m</p>
        </div>
      </div>
      <ChipBooking />
    </div>
  );
};

export default FooterPurchase;
