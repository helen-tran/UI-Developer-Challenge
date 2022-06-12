import LongArrow from "../../assets/LongArrow.svg";

const InfoDetail = () => {
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
    fontWeight: "bold",
    // marginBottom: "4px",
    marginBottom: "0px",
    marginTop: 0,
    fontSize: "18px",
    lineHeight: "20px",
  };
  const Location = {
    color: "#436783",
    fontWeight: "normal",
    // marginBottom: "2px",
    marginBottom: "0px",
    marginTop: 0,
    fontSize: "16px",
    lineHeight: "20px",
    whiteSpace: "nowrap",
  };
  const City = {
    color: "#6D8BA1",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: "10px",
    // marginBottom: "2px",
    marginBottom: "0px",
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
          <h4 style={Location}>Port Autority</h4>
          <h4 style={City}>New york city</h4>
          <a href="" style={Map}>
            Map
          </a>
        </div>
        <img src={LongArrow} />
      </div>

      <div style={{ marginLeft: "10%", width: "100%" }}>
        <h3 style={Time}>12:30am</h3>
        <h4 style={Location}>Union Station</h4>
        <h4 style={City}>Washington</h4>
        <a href="" style={Map}>
          Map
        </a>
      </div>
    </div>
  );
};

export default InfoDetail;
