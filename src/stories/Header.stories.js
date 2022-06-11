import Header from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const RegularHeader = Template.bind({});
RegularHeader.args = {};
