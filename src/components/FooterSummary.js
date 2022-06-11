import Bus from "../../assets/Bus.svg";
import Time from "../../assets/Time.svg";
import Passengers from "../../assets/Passengers.svg";
import ChipDetails from "./Chip-Details";

const FooterSummary = () => {
  // CSS Styling
  const Wrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const AttributeWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Codec Pro",
    fontWeight: "normal",
    color: "#436783",
  };

  const Duration = {
    marginLeft: "8pt",
  };

  const Text = {
    marginLeft: "2pt",
    margin: 0,
  };

  // JSX
  return (
    <div style={Wrapper}>
      <div style={AttributeWrapper}>
        <div style={AttributeWrapper}>
          <div style={AttributeWrapper}>
            <img src={Bus} />
          </div>
          <p style={Text}>Bus</p>
        </div>
        <div style={AttributeWrapper}>
          <div style={Duration}>
            <img src={Time} style={AttributeWrapper} />
          </div>
          <p style={Text}>4h 30m</p>
        </div>
        <div style={AttributeWrapper}>
          <div style={Duration}>
            <img src={Passengers} style={AttributeWrapper} />
          </div>
          <p style={Text}>2</p>
        </div>
      </div>
      <ChipDetails />
    </div>
  );
};

export default FooterSummary;
