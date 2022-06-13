import ChipBooking from "../components/Chip-Booking";

export default {
  title: "Components/Chip",
  component: ChipBooking,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ChipBooking {...args} />;

export const PriceBlueChip = Template.bind({});
PriceBlueChip.args = {
  label: "$45",
  isPaleBlue: false,
};
