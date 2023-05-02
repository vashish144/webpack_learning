import kiwi from './img.png'
import "./Kiwi-image.scss"
class KiwiImage{
    render(){
        const img=document.createElement('img');
        img.src=kiwi;
        img.alt="kiwi";
        img.classList.add("kiwi-image");
        const bodyElement=document.querySelector('body');
        bodyElement.appendChild(img)
    }
}
export default KiwiImage;