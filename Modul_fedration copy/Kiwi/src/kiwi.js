import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
import React from 'react';

const heading = new Heading();
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();



import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });