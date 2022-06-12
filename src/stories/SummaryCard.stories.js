import SummaryCard from "../cards/SummaryCard";

export default {
  title: "Components/Cards",
  component: SummaryCard,
};

const Template = (args) => <SummaryCard {...args} />;

export const Summary = Template.bind({});
Summary.args = { size: "mobile" };
