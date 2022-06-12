import SellableCard from "../cards/SellableCard";

export default {
  title: "Components/Cards",
  component: SellableCard,
};

const Template = (args) => <SellableCard {...args} />;

export const Sellable = Template.bind({});
Sellable.args = { size: "mobile", borderOn: true };
