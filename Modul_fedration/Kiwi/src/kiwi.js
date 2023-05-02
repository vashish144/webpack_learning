import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
import React from 'react';

const heading = new Heading();
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();

import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
    const HelloWorldButton = HelloWorldButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
});