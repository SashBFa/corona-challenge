const simpleParallax = (elem, modifier) => {
    let paras = document.getElementsByClassName(elem);
    for (let i = 0; i < paras.length; i++) {
        paras[i].setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-position: center center;');
    }
    const sp = () => {
        for (let i = 0; i < paras.length; i++) {
            let x = paras[i].getBoundingClientRect().top / modifier;
            let y = Math.round(x * 100) / 100;
            paras[i].style.backgroundPosition = 'center ' + y + 'px';
        }
        requestAnimationFrame(sp);
    }
    requestAnimationFrame(sp);
}
simpleParallax('header',8);
simpleParallax('counter',8);
simpleParallax('symptoms',8);
// simpleParallax('update',8);
simpleParallax('blog',8);
simpleParallax('footer',8);