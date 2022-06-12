import Header from "../components/Header";
import InfoDetail from "../components/InfoDetail";
import FooterPurchase from "../components/FooterPurchase";
import PropTypes from "prop-types";

const SellableCard = ({ size = "mobile", bottomPanel, borderOn }) => {
  // Reponsiveness;
  let scale = 1;
  if (size === "tablet") scale = 3;
  if (size === "web") scale = 1.5;

  // CSS Styling
  const Wrapper = {
    width: "360px",
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
  size: PropTypes.oneOf(["mobile", "tablet", "web"]),
  borderOn: PropTypes.bool,
};

export default SellableCard;
