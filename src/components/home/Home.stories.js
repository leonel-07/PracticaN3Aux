import React, { Component } from 'react';
import Home from './Home';
export default {
    title: "Leonel_Quispe_Choque/app",
    component: Home,
}
const Template = args => <Home {...args}/>
export const DefaultHome = Template.bind({});
DefaultHome.args = {
    name: 'Leonel Fernando Quispe Choque',
    backgroundColor: '#74d88b',
    user: {
            
                emoji1: '🥗',
                text1: 'fueled by salad',
        
    
                emoji2: '🌎',
                text2: 'based in the Bolivia',

        
                emoji3: "💼",
                text3: "Software systems engineer",


                emoji4: "📧",
                text4: "olmedito.90@gmail.com",

    }
}