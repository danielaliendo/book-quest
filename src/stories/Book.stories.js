import { Book } from "../ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Book',
  component: Book,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    title: { control: 'text' },
    description: { control: 'text' },
    author: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'file' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithPreview = {
  args: {
    hasPreview: true,
  },
};

export const WithoutPreview = {
  args: {
    hasPreview: false,
  },
};