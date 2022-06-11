import ChipDetails from "../components/Chip-Details";
import { Button } from "./Button";

export default {
  title: "Components/Chip/Chip-Details",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ChipDetails {...args} />;

export const Itinerary = Template.bind({});
