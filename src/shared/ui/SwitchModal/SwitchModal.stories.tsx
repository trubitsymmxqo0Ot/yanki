import { StyleDecorator } from "@/shared/config/storybook/StylesDecorator";
import { SwitchModal } from "./SwitchModal";
import type { StoryObj, Meta } from "@storybook/react-webpack5";
import {fn} from 'storybook/test';

const meta = {
    component: SwitchModal,
    tags: ['autodocs'],
    decorators: [StyleDecorator],
} satisfies Meta<typeof SwitchModal>
export default meta;
type Story = StoryObj<typeof meta>;

export const SwitcherWithoutArrow: Story = {
    args: {
        array: ['Значение 1', 'Значение 2'],
        hook: {isOpen: false, title: 'title'},
        setIsOpen: fn(),
    }
}
