import './hello-world-button.scss'
class HelloWorldButton{
    // btnCssClass='hello-world-text';
    render(){
        const button=document.createElement('button');
        button.innerHTML="Hello world";
        button.classList.add('hello-world-button');
        const body=document.querySelector('body');
        button.onclick= function(){
            const p=document.createElement('p');
            p.innerHTML="hello world";
            p.classList.add("hello-world-text");
            body.appendChild(p);
        }
        body.appendChild(button);
        
    }
}

export default HelloWorldButton;