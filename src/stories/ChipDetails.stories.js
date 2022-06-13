import ChipDetails from "../components/Chip-Details";

export default {
  title: "Components/Chip",
  component: ChipDetails,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ChipDetails {...args} />;

export const Itinerary = Template.bind({});
