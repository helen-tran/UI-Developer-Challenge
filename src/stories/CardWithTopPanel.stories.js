import CardTopPanel from "../cards/CardTopPanel";

export default {
  title: "Components/Cards",
  component: CardTopPanel,
};

const Template = (args) => <CardTopPanel {...args} />;

export const WithTopPanel = Template.bind({});
WithTopPanel.args = {};
