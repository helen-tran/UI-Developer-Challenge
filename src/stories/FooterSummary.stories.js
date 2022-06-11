import FooterSummary from "../components/FooterSummary";

export default {
  title: "Components/Footer",
  component: FooterSummary,
};

const Template = (args) => <FooterSummary {...args} />;

export const FooterSummaryCard = Template.bind({});
FooterSummaryCard.args = {};
