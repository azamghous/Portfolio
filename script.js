// bubbles
let color = ['red', 'green', 'brown', 'blue']
function square() {
    let section = document.querySelector('.banner');

    let square = document.createElement('spanBox');

    let size = Math.random() * 30;

    square.style.width = 20 + size + 'px';

    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';

    square.style.left = Math.random() * innerWidth + 'px';

    let bg = color[Math.floor(Math.random() * color.length)];

    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000)
}
setInterval(square, 50);
// end buubles
