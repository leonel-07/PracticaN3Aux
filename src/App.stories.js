import React, { Component } from 'react';
import App from './App';
import BaseLayout from './components/BaseLayout';
export default {
    title: "Leonel_Quispe_Choque/app",
    component: App,
}
const Template = args => <App {...args}/>
export const DefaultApp = Template.bind({});
DefaultApp.args = {
    backgroundColor: '#004E9A'
}