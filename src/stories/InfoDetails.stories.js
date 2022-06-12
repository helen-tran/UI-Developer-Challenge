import InfoDetail from "../components/InfoDetail";

export default {
  title: "Components/Info",
  component: InfoDetail,
};

const Template = (args) => <InfoDetail {...args} />;

export const Detail = Template.bind({});
Detail.args = {};
