const dropdown = document.getElementById('dropdown');
const selector = document.getElementById('selector');
const menuItems = document.getElementsByClassName('menu-item');
const navArrow = document.getElementById('nav-arrow');

selector.addEventListener('click', () => {
    const selectorArrow = document.getElementById('selector-arrow');
    if (dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide');
        selectorArrow.style.transform = 'rotate(0)';
    } else {
        dropdown.classList.add('hide');
        selectorArrow.style.transform = 'rotate(180deg)';
    }
});

let menuOverlayed = false;

const menuFunction = () => {
    const elements = document.getElementsByClassName('menu-button');
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const navHeader = document.getElementById('nav-header');
    const menuTitle = document.getElementById('menu-title');
    const arrowIcon = document.getElementById('arrow-icon');
    const wrapper = document.getElementById('wrapper');
    const footer = document.getElementById('footer');
    for (let i = 0; i < elements.length; i++) {
        const element = elements.item(i);
        if (element.classList.contains('hide')) {
            menuOverlayed = false;
            setTimeout(() => element.classList.remove('hide'), 150);
            navbar.style.width = '200px';
            menuTitle.style.margin = '54px 31px 25px 30px';
            navArrow.style.left = '145px'
            logo.style.width = '100px';
            logo.style.height = '60px';
            navHeader.style.padding = '18px 50px';
            arrowIcon.style.transform = 'rotate(0)';
            wrapper.style.marginLeft = '200px';
            footer.style.marginLeft = '200px';
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].style.width = '200px';
                menuItems[i].style.padding = '10px 0 10px 30px';
                menuItems[i].style.margin = '0';
                menuItems[i].style.justifyContent = 'space-between';
            }
        } else {
            menuOverlayed = true;
            element.classList.add('hide');
            navbar.style.width = '84px';
            menuTitle.style.margin = '54px 18px 25px 18px';
            navArrow.style.left = '42px';
            logo.style.width = '66px';
            logo.style.height = '40px';
            navHeader.style.padding = '30px 9px 26px';
            arrowIcon.style.transform = 'rotate(180deg)';
            wrapper.style.marginLeft = '84px';
            footer.style.marginLeft = '84px';
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].style.width = '64px';
                menuItems[i].style.padding = '0';
                menuItems[i].style.margin = '0 10px';
                menuItems[i].style.justifyContent = 'center';
            }
        }
    }
};

const menu = document.getElementById('menu');
const menuTile = document.getElementById('menu-tile')

menu.addEventListener('click', menuFunction);
menuTile.addEventListener('click', menuFunction);

const swiperStuff = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiperStuff.slideTo(1, false, false);


const popOverMenuFunction = () => {
    if (popOverMenu.classList.contains('hide')) {
        popOverMenu.classList.remove('hide');
    } else {
        popOverMenu.classList.add('hide');
    }
}

const overlayMenu = document.getElementById('overlay-menu');
const popOverMenu = document.getElementById('popover-menu');
const close = document.getElementById('close');

overlayMenu.addEventListener('click', popOverMenuFunction);
close.addEventListener('click', popOverMenuFunction);

const swiperPresenters = new Swiper('.presenters-container-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiperPresenters.slideTo(2, false, false);

//getBoundingClientRect()

const subMenu = document.getElementById('submenu');
const subMenuList = document.getElementById('submenu-list');
const subMenuWrapper = document.getElementById('submenu-wrapper');

const resourcesButtonDesktop = document.getElementById('resources-desktop');

resourcesButtonDesktop.addEventListener('click', () => {
    const node = document.createElement('div');
    node.classList.add('menu-item-arrow');
    const currentPosition = resourcesButtonDesktop.getBoundingClientRect().top;

    subMenuList.style.top = `${(window.innerHeight - currentPosition) > 220
        ? currentPosition : (currentPosition - (220 - (window.innerHeight - currentPosition)))}px`;

    if (subMenu.style.marginLeft === '-300px' && !menuOverlayed) {
        subMenu.style.marginLeft = '200px';
        subMenuWrapper.classList.remove('hide');
        if (!menuOverlayed) {
            resourcesButtonDesktop.appendChild(node);
        }
        navArrow.classList.add('hide');
    } else {
        subMenu.style.marginLeft = '-300px';
        subMenuWrapper.classList.add('hide');
        const elements = document.getElementsByClassName("menu-item-arrow");
        if (!menuOverlayed) {
            while (elements.length > 0) elements[0].remove();
        }
        navArrow.classList.remove('hide');
    }
});

/*document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', event => {
        const node = document.createElement('div');
        node.classList.add('menu-item-arrow');
        const currentPosition = item.getBoundingClientRect().top;
        subMenuList.style.top = `${(window.innerHeight - currentPosition) > 220
            ? currentPosition : (currentPosition - (220 - (window.innerHeight - currentPosition)))}px`;

        if (subMenu.style.marginLeft === '-300px' && !menuOverlayed) {
            subMenu.style.marginLeft = '200px';
            subMenuWrapper.classList.remove('hide');
            if (!menuOverlayed) {
                item.appendChild(node);
            }
            navArrow.classList.add('hide');
        } else {
            subMenu.style.marginLeft = '-300px';
            subMenuWrapper.classList.add('hide');
            const elements = document.getElementsByClassName("menu-item-arrow");
            if (!menuOverlayed) {
                while (elements.length > 0) elements[0].remove();
            }
            navArrow.classList.remove('hide');
        }
    })
})*/

const resourcesButtonTablet = document.getElementById('resources-tablet');
const popOverSubMenu = document.getElementById('popover-submenu');
const popOverSubMenuList = document.getElementById('popover-submenu-list');
const popOverMenuWindow = document.getElementById('popover-menu-window');
const subMenuMobile = document.getElementById('submenu-mobile');

resourcesButtonTablet.addEventListener('click', () => {
    const node = document.createElement('div');
    node.classList.add('menu-item-arrow');
    const currentPositionTop = resourcesButtonTablet.getBoundingClientRect().top;
    const currentPositionLeft = resourcesButtonTablet.getBoundingClientRect().left;

    popOverSubMenuList.style.top = `${(window.innerHeight - currentPositionTop) > 220
        ? currentPositionTop : (currentPositionTop - (220 - (window.innerHeight - currentPositionTop)))}px`;
    const elements = document.getElementsByClassName("menu-item-arrow");
    console.log(window.innerWidth);
    if (window.innerWidth > 720) {
        if (popOverSubMenu.style.marginLeft === '800px') {
            popOverSubMenu.style.marginLeft = `${currentPositionLeft - 220}px`;
            resourcesButtonTablet.appendChild(node);
            popOverMenuWindow.style.boxShadow = 'none';
        } else {
            popOverSubMenu.style.marginLeft = '800px';
            while (elements.length > 0) elements[0].remove();
            popOverMenuWindow.style.boxShadow = '-30px 0px 44px rgba(0, 0, 0, 0.4)';
        }
    } else {
        if (subMenuMobile.classList.contains('hide')) {
            subMenuMobile.classList.remove('hide');
            node.style.transform = 'rotate(90deg)';
            resourcesButtonTablet.appendChild(node);
        } else {
            subMenuMobile.classList.add('hide');
            while (elements.length > 0) elements[0].remove();
        }
    }
});






