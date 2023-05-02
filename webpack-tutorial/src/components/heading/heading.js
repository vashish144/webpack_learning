import $ from 'jquery'
import './heading.scss';

class Heading {
    render(pageName) {
        const h1 = $('<h1>');//document.createElement('h1')
        const body = $('body');//document.querySelector('body')
        h1.text('Webpack is awesome');// h1.innerHTML = 'Webpack is awesome';
        body.append(h1);// body.appendChild(h1);
    }
}

export default Heading;
