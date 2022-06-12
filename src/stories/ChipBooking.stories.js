import ChipBooking from "../components/Chip-Booking";
import { Button } from "./Button";

export default {
  title: "Components/Chip",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ChipBooking {...args} />;

export const PriceBlueChip = Template.bind({});
PriceBlueChip.args = {
  label: "$45",
  isPaleBlue: false,
};
