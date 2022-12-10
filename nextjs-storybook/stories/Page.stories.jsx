import React from 'react';

import IndexPage from '../pages';

export default {
  title: 'Example/IndexPage',
  component: IndexPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <IndexPage {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const DefaultView = Template.bind({});

