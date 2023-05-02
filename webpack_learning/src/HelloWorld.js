// import helloWorld from "./hello-world.js"
// import addImage from "./add-image.js";
// helloWorld();
// addImage();
import HelloWorldButton from "./components/helloWorldButton/hello-world-button.js";
import Heading from "./components/heading/heading.js";
// import _ from "lodash"
import React from "react";
const _Heading = new Heading();
// _Heading.render(_.upperFirst("hello-World"))
_Heading.render("hello-World");

const HelloWorld = new HelloWorldButton();
HelloWorld.render();

if (process.env.NOD_ENV === "production") {
  console.log("In production mode");
} else if (process.env.NOD_ENV === "development") {
  console.log("In development mode");
}
