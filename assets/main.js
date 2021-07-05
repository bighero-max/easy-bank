// navbar toggler
function Open(){
    document.getElementById('hamburger').classList.toggle('opened')
    document.getElementById('nav-menu').classList.toggle('nav-links-expanded')
    document.getElementById('nav-menu-back').classList.toggle('nav-links-expanded2')
    document.querySelector('body').classList.toggle('scroll-disable-body')
}
// navbar toggler