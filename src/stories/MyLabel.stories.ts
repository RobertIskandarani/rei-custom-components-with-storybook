import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, type Props as MyLabelProps } from '../components/MyLabel';

const meta: Meta<MyLabelProps> = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All caps label',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom color label',
    fontColor: '#5512cc',
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom color label',
    backgroundColor: '#5512cc',
    fontColor: '#ffffff',
    size: 'h1',
  },
};
