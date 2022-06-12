import Bus from "../../assets/Bus.svg";
import Time from "../../assets/Time.svg";
import Passengers from "../../assets/Passengers.svg";
import ChipDetails from "./Chip-Details";

const FooterSummary = () => {
  // CSS Styling
  const Wrapper = {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "16px",
    fontFamily: "Codec Pro",
    fontWeight: "normal",
    color: "#436783",
    height: "40px;",
  };

  const AttributeWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24px",
    marginTop: "8px",
    marginBottom: "16px",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img src={Bus} />
          </div>
          <p style={Text}>Bus</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={Duration}>
            <img src={Time} />
          </div>
          <p style={Text}>4h 30m</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={Duration}>
            <img src={Passengers} />
          </div>
          <p style={Text}>2</p>
        </div>
      </div>
      <ChipDetails />
    </div>
  );
};

export default FooterSummary;
