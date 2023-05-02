import testPic from "./img.png";
import myImage from './img-text.txt'
function addImage() {
  const img = document.createElement("img");
  img.alt = myImage;
  img.width=300;
  img.src=testPic;
  const body=document.querySelector('body');
  body.appendChild(img);
}
export default addImage;