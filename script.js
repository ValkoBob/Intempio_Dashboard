const dropdown = document.getElementById('dropdown');
const selector = document.getElementById('selector');
const menuItems = document.getElementsByClassName('menu-item');
const navArrow = document.getElementById('nav-arrow');
const menuItemArrow = document.getElementById('menu-item-arrow');

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
            setTimeout(() => menuItemArrow.style.display = 'block', 500);
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
            menuItemArrow.style.display = 'none';
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
        body.style.overflowY = 'hidden';
    } else {
        popOverMenu.classList.add('hide');
        body.style.overflowY = 'auto';
    }
}

const body = document.getElementById('body');
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

const swiperRecent = new Swiper('.recent-container-swiper', {
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

swiperPresenters.slideTo(2, false, false);
swiperRecent.slideTo(1, false, false);

//getBoundingClientRect()

const subMenu = document.getElementById('submenu');
const subMenuList = document.getElementById('submenu-list');
const subMenuWrapper = document.getElementById('submenu-wrapper');

const resourcesButtonDesktop = document.getElementById('resources-desktop');

let submenuDisabled = false;

resourcesButtonDesktop.addEventListener('click', () => {
    const currentPosition = resourcesButtonDesktop.getBoundingClientRect().top;

    subMenuList.style.top = `${(window.innerHeight - currentPosition) > 220
        ? currentPosition : (currentPosition - (220 - (window.innerHeight - currentPosition)))}px`;
    if (!submenuDisabled) {
        if (!menuOverlayed) {
            subMenu.style.marginLeft = '200px';
        } else {
            subMenu.style.marginLeft = '84px';
        }
        subMenuWrapper.classList.remove('hide');
        navArrow.classList.add('hide');
        submenuDisabled = true;
        body.style.overflowY = 'hidden';
    } else {
        subMenu.style.marginLeft = '-300px';
        subMenuWrapper.classList.add('hide');
        navArrow.classList.remove('hide');
        submenuDisabled = false;
        body.style.overflowY = 'auto';
    }
});

subMenuWrapper.addEventListener('click', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'submenu-wrapper') {
        subMenu.style.marginLeft = '-300px';
        subMenuWrapper.classList.add('hide');
        navArrow.classList.remove('hide');
        submenuDisabled = false;
        body.style.overflowY = 'auto';
    }
});

let menuOverlayed = false;

let submenuTabletDisabled = false;

const resourcesButtonTablet = document.getElementById('resources-tablet');
const popOverSubMenu = document.getElementById('popover-submenu');
const popOverSubMenuList = document.getElementById('popover-submenu-list');
const popOverMenuWindow = document.getElementById('popover-menu-window');
const subMenuMobile = document.getElementById('submenu-mobile');

resourcesButtonTablet.addEventListener('click', () => {
    const currentPositionTop = resourcesButtonTablet.getBoundingClientRect().top;
    const currentPositionLeft = resourcesButtonTablet.getBoundingClientRect().left;

    popOverSubMenuList.style.top = `${(window.innerHeight - currentPositionTop) > 220
        ? currentPositionTop : (currentPositionTop - (220 - (window.innerHeight - currentPositionTop)))}px`;
    hideSubMenu(currentPositionLeft);
});

popOverMenu.addEventListener('click', (e) => {
    if (e.target.id === 'popover-menu') {
        popOverMenuFunction();
    }
})

const menuArrowMobile = document.getElementById('menu-arrow-mobile');

const hideSubMenu = (currentPositionLeft) => {
    if (window.innerWidth > 720) {
        if (!submenuTabletDisabled) {
            popOverSubMenu.style.marginLeft = `${currentPositionLeft - 240}px`;
            popOverMenuWindow.style.boxShadow = 'none';
            resourcesButtonTablet.style.background = '#FFFFFF';
            resourcesButtonTablet.style.color = '#74BD43';
            resourcesButtonTablet.children[0].children[0].style.fill = '#74BD43';
            submenuTabletDisabled = true;
        } else {
            popOverSubMenu.style.marginLeft = '800px';
            popOverMenuWindow.style.boxShadow = '-30px 0px 44px rgba(0, 0, 0, 0.4)';
            resourcesButtonTablet.style.background = 'transparent';
            resourcesButtonTablet.style.color = '#F4FFED';
            resourcesButtonTablet.children[0].children[0].style.fill = '#F4FFED';
            submenuTabletDisabled = false;
        }
    } else {
        if (subMenuMobile.classList.contains('hide')) {
            subMenuMobile.classList.remove('hide');
            resourcesButtonTablet.style.background = '#FFFFFF';
            resourcesButtonTablet.style.color = '#74BD43';
            resourcesButtonTablet.children[0].children[0].style.fill = '#74BD43';
            menuArrowMobile.style.transform = 'rotate(-90deg)';
        } else {
            subMenuMobile.classList.add('hide');
            resourcesButtonTablet.style.background = 'transparent';
            resourcesButtonTablet.style.color = '#F4FFED';
            resourcesButtonTablet.children[0].children[0].style.fill = '#F4FFED';
            menuArrowMobile.style.transform = 'rotate(90deg)';
        }
    }
}


const main = document.getElementById('main');
const footer = document.getElementById('footer');
const presentersPage = document.getElementById('presenters-page');
const presenters = document.querySelectorAll('.presenter');

presenters.forEach(presenter => {
    presenter.addEventListener('click', () => {
        presentersPage.style.display = 'flex';
        main.style.display = 'none';
        footer.style.display = 'none';
    })
});


const subMenuListResources = document.getElementById('submenu-list-resources');
const subMenuListSubMenu = document.getElementById('submenu-list-submenu');

subMenuListResources.addEventListener('click', () => {
    if (subMenuListSubMenu.classList.contains('hide')) {
        subMenuListSubMenu.classList.remove('hide');
        subMenuListResources.style.borderBottom = 'none';
    } else {
        subMenuListSubMenu.classList.add('hide');
        subMenuListResources.style.borderBottom = '1px solid rgba(207, 207, 207, 0.3)';
    }

})

const popOverSubMenuListResources = document.getElementById('popover-submenu-list-resources');
const popOverListSubMenu = document.getElementById('popover-list-submenu');

popOverSubMenuListResources.addEventListener('click', () => {
    if (popOverListSubMenu.classList.contains('hide')) {
        popOverListSubMenu.classList.remove('hide');
        popOverSubMenuListResources.style.borderBottom = 'none';
    } else {
        popOverListSubMenu.classList.add('hide');
        popOverSubMenuListResources.style.borderBottom = '1px solid rgba(207, 207, 207, 0.3)';
    }
})

const itemSubMenuItemResources = document.getElementById('item-submenu-item-resources');
const itemSubMenuSubmenu = document.getElementById('item-submenu-submenu');

itemSubMenuItemResources.addEventListener('click', () => {
    if (itemSubMenuSubmenu.classList.contains('hide')) {
        itemSubMenuSubmenu.classList.remove('hide');
        itemSubMenuItemResources.style.borderBottom = 'none';
    } else {
        itemSubMenuSubmenu.classList.add('hide');
        itemSubMenuItemResources.style.borderBottom = '1px solid rgba(207, 207, 207, 0.3)';
    }
})

// Chat component

const chatHelp = document.getElementById('chat-help');
const helpDesktop = document.getElementById('help-desktop');
const helpMobile = document.getElementById('help-mobile');

helpDesktop.addEventListener('click', () => {
    if (chatHelp.classList.contains('hide')) {
        chatHelp.classList.remove('hide');
    } else {
        chatHelp.classList.add('hide');
    }
})

helpMobile.addEventListener('click', () => {
    if (chatHelp.classList.contains('hide')) {
        chatHelp.classList.remove('hide');
    } else {
        chatHelp.classList.add('hide');
    }
    popOverMenuFunction();
})

const chatClose = document.getElementById('chat-close');

chatClose.addEventListener('click', () => {
    chatHelp.classList.add('hide');
})

const messages = document.getElementById('messages');
const messagesMobile = document.getElementById('messagesMobile')
const messagesContainer = document.getElementById('messages-container');
const messagesIcon = document.getElementById('messages-icon');

messages.addEventListener('click', event => {
    if (messagesContainer.classList.contains('hide')) {
        messagesContainer.classList.remove('hide');
        messagesIcon.style.fill = '#5E5E5E';
    } else {
        messagesContainer.classList.add('hide');
        messagesIcon.style.fill = '#D7D7D7';
    }
});

messagesMobile.addEventListener('click', event => {
    console.log('here!')
    if (messagesContainer.classList.contains('hide')) {
        messagesContainer.classList.remove('hide');
        messagesIcon.style.fill = '#5E5E5E';
    } else {
        messagesContainer.classList.add('hide');
        messagesIcon.style.fill = '#D7D7D7;';
    }
});

const generalSession = document.getElementById('general-session');
const chat = document.getElementById('chat');

generalSession.addEventListener('click', () => {
    messagesContainer.classList.add('hide');
    messagesIcon.style.fill = '#D7D7D7';
    chat.classList.remove('hide');
})

const chatGeneralClose = document.getElementById('chat-general-close');

chatGeneralClose.addEventListener('click', () => {
    chat.classList.add('hide');
})


const chatLike = document.getElementById('chat-like');

chatLike.addEventListener('click', () => {
    if (chatLike.style.fill === 'rgb(209, 208, 208)') {
        chatLike.style.fill = '#74BD43';
    } else {
        chatLike.style.fill = 'rgb(209, 208, 208)';
    }
})

const buttonsItem = document.getElementById('buttons-item');
const wholikes = document.getElementById('wholikes');
const wholikesClose = document.getElementById('wholikes-close');

buttonsItem.addEventListener('click', () => {
    if (wholikes.classList.contains('hide')) {
        wholikes.classList.remove('hide');
        buttonsItem.style.background = '#74BD43'
        buttonsItem.children[0].children[0].style.fill = '#F4FFED';
        buttonsItem.children[1].style.color = '#F4FFED';
    } else {
        wholikes.classList.add('hide');
        buttonsItem.style.background = 'inherit'
        buttonsItem.children[0].children[0].style.fill = 'rgb(209, 208, 208)';
        buttonsItem.children[1].style.color = '#B8B8B8';
    }
})

wholikesClose.addEventListener('click', () => {
    wholikes.classList.add('hide');
    buttonsItem.style.background = 'inherit'
    buttonsItem.children[0].children[0].style.fill = 'rgb(209, 208, 208)';
    buttonsItem.children[1].style.color = '#B8B8B8';
});








