import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_TYPE, ICON_ALIGNMENT } from '../../statics/enum';
import { Button } from '../../components/button/Button';
import { wrap } from 'module';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default Button',
};

export const types = Template.bind({});
types.args = {};
types.parameters = {
  docs: {
    description: {
      story: 'Types of Button'
    }
  }
}
types.decorators = [
  () => (
    <div style = {{
      display: 'flex', justifyContent: 'space-around'
    }}>
      <Button {...types.args} type={BUTTON_TYPE.PRIMARY}>Primary</Button>
      <Button  {...types.args} type={BUTTON_TYPE.SECONDARY}>Secondary</Button>
      <Button  {...types.args} type={BUTTON_TYPE.TERTIARY}>Tertiary</Button>
      <Button  {...types.args} type={BUTTON_TYPE.TEXT}>Text</Button>
      <Button  {...types.args} disabled>Disabled</Button>
    </div>
  )
]

export const icon = Template.bind({});
icon.args = {};
icon.parameters = {
  docs: {
    description: {
      story: 'Types of Button'
    }
  }
}
icon.decorators = [
  () => (
    <div style = {{
      display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
    }}>
     <Button 
     icon={'fa-sharp fa-solid fa-face-smile'}
     iconAlign={ICON_ALIGNMENT.LEFT}>Button with Icon</Button>
     <Button icon={'fa-sharp fa-solid fa-face-smile'}/>
      <Button 
      icon={'fa-sharp fa-solid fa-face-smile'}
      iconAlign={ICON_ALIGNMENT.RIGHT}      
      >Button with Icon
      </Button>
      <Button 
      isLoading
      >loading button with icon
      </Button>
      <Button isLoading/>
    </div>
  )
]