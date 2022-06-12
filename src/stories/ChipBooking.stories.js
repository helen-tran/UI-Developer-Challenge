import ChipBooking from "../components/Chip-Booking";
import { Button } from "./Button";

export default {
  title: "Components/Chip",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ChipBooking {...args} />;

export const DarkBlue = Template.bind({});
DarkBlue.args = {
  label: "$45",
  backgroundColor: "#0271CA",
};

export const PaleBlue = Template.bind({});
PaleBlue.args = {
  label: "$45",
  backgroundColor: "#30B0FF1A",
  color: "#20415A",
};
