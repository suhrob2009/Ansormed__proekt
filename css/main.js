const menu = document.querySelector('.menu'),
    icon_bars = document.querySelector('.icon_bars'),
    cres_icon = document.querySelector('.cres_icon');

    
icon_bars.addEventListener('click', function () {
    menu.style.display = "block"
    icon_bars.style.display = 'none'
    cres_icon.style.display = 'block'
})
cres_icon.addEventListener('click', function () {
    menu.style.display = "none"
    cres_icon.style.display = 'none'
    icon_bars.style.display = 'block'
})