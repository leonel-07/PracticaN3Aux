import React, { Component } from 'react';
import About from './About';
export default {
    title: "Leonel_Quispe_Choque/app",
    component: About,
}
const Template = args => <About {...args}/>
export const DefaultAbout = Template.bind({});
DefaultAbout.args = {
    Biografia: 'Hello! I am Leonel. I am a Systems Engineering student. I study at U.A.T.F, enjoy long walks with friends, and believe that artificial intelligence will inevitably rule us all one day. Put Study Desire to Matter!',
}