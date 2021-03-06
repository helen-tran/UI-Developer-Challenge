import LongArrow from "../../assets/LongArrow.svg";

const InfoDetailSummary = () => {
  // CSS Styling
  const Wrapper = {
    display: "flex",
    fontFamily: "Codec Pro",
    marginLeft: "20px",
    marginRight: "12px",
    marginBottom: "20px",
    marginTop: "20px",
  };

  const TextArrowWrapper = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  };

  const Time = {
    color: "#20415A",
    fontWeight: "normal",
    marginBottom: "2px",
    marginTop: 0,
    fontSize: "18px",
    lineHeight: "20px",
  };

  const Date = {
    fontWeight: "normal",
    fontSize: "14px",
    color: "#6D8BA1",
    marginTop: 0,
    marginBottom: "8px",
    lineHeight: "16px",
  };

  const Location = {
    color: "#436783",
    fontWeight: "bold",
    marginBottom: "2px",
    marginTop: 0,
    fontSize: "14px",
    lineHeight: "16px",
  };

  const City = {
    color: "#6D8BA1",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "10px",
    marginBottom: "2px",
    marginTop: 0,
    lineHeight: "12px",
  };

  const Map = {
    color: "#0271CA",
    fontWeight: "normal",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: 0,
    fontSize: "14px",
    lineHeight: "16px",
  };

  //   JSX
  return (
    <div style={Wrapper}>
      <div style={TextArrowWrapper}>
        <div style={{ marginRight: "16px" }}>
          <h3 style={Time}>8:00am</h3>
          <h4 style={Date}>Wed, Jul 28</h4>
          <h4 style={Location}>Port Authority</h4>
          <h4 style={City}>New york city</h4>
          <a href="" style={Map}>
            Map
          </a>
        </div>
        <img src={LongArrow} />
      </div>

      <div style={{ marginLeft: "10%", width: "100%" }}>
        <h3 style={Time}>12:30am</h3>
        <h4 style={Date}>Wed, Jul 28</h4>
        <h4 style={Location}>Union Station</h4>
        <h4 style={City}>Washington</h4>
        <a href="" style={Map}>
          Map
        </a>
      </div>
    </div>
  );
};

export default InfoDetailSummary;
