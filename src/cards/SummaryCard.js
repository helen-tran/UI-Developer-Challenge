import Header from "../components/Header";
import InfoDetailSummary from "../components/InfoDetailSummary";
import FooterSummary from "../components/FooterSummary";
import PropTypes from "prop-types";

const SummaryCard = () => {
  // CSS Styling
  const Wrapper = {
    width: "360px",
    height: "222px",
    borderRadius: "24px",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: "rgba(211, 222, 229, 0.85)",
  };

  // JSX
  return (
    <div style={Wrapper}>
      <Header />
      <InfoDetailSummary />
      <FooterSummary />
    </div>
  );
};

SummaryCard.propTypes = {
  size: PropTypes.oneOf(["mobile", "tablet", "web"]),
};
export default SummaryCard;
