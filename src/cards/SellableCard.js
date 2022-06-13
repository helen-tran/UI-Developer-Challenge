import Header from "../components/Header";
import InfoDetail from "../components/InfoDetail";
import FooterPurchase from "../components/FooterPurchase";
import PropTypes from "prop-types";

const SellableCard = ({ size = "mobile", bottomPanel, borderOn }) => {
  // Reponsiveness;
  let width = "360px";
  if (size === "tablet") width = "600px";
  if (size === "responsive") width = "";

  // CSS Styling
  const Wrapper = {
    width: `${width}`,
    height: "202px",
    borderRadius: "24px",
    backgroundColor: "white",
  };
  const BorderWrapper = {
    border: "1px solid",
    borderColor: "rgba(211, 222, 229, 0.85)",
    backgroundColor: "white",
    borderRadius: "24px",
    height: "202px",
  };

  // JSX
  return (
    <div style={Wrapper}>
      {borderOn ? (
        <div style={BorderWrapper}>
          <Header />
          <InfoDetail />
          <FooterPurchase bottomPanel={bottomPanel} />
        </div>
      ) : (
        <div>
          <Header />
          <InfoDetail />
          <FooterPurchase bottomPanel={bottomPanel} />
        </div>
      )}
    </div>
  );
};

SellableCard.propTypes = {
  size: PropTypes.oneOf(["mobile", "tablet", "responsive"]),
  borderOn: PropTypes.bool,
};

export default SellableCard;
