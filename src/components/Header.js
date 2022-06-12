import Logo from "../../assets/Greyhound.svg";
import Wifi from "../../assets/Wifi.svg";
import Bathroom from "../../assets/Bathroom.svg";
import Ticket from "../../assets/E-Ticket.svg";

const Header = () => {
  const wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };
  return (
    <div style={wrapper}>
      <img src={Logo} />
      <div>
        <img src={Wifi} /> <img src={Bathroom} /> <img src={Ticket} />
      </div>
    </div>
  );
};

export default Header;
