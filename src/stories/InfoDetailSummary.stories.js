import InfoDetailSummary from "../components/InfoDetailSummary";

export default {
  title: "Components/Info",
  component: InfoDetailSummary,
};

const Template = (args) => <InfoDetailSummary {...args} />;

export const DetailSummary = Template.bind({});
DetailSummary.args = {};
