import FooterPurchase from "../components/FooterPurchase";

export default {
  title: "Components/Footer",
  component: FooterPurchase,
};

const Template = (args) => <FooterPurchase {...args} />;

export const FooterBooking = Template.bind({});
FooterBooking.args = {};
