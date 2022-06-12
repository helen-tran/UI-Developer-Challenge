import CardBottomPanel from "../cards/CardBottomPanel";

export default {
  title: "Components/Cards",
  component: CardBottomPanel,
};

const Template = (args) => <CardBottomPanel {...args} />;

export const WithBottomPanel = Template.bind({});
WithBottomPanel.args = { size: "mobile" };
