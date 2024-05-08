const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const listEl = document.querySelector('.mdc-top-app-bar__navigation-icon');
const buttonDrawer = document.querySelectorAll('.mdc-list-item');

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

listEl.addEventListener('click', () => {
  openDrawer();
});

buttonDrawer.forEach((button) => {
    button.addEventListener('click', () => {
        closeDrawer(); 
    });
});

function openDrawer () 
{
    drawer.open = true;
}

function closeDrawer() 
{
    drawer.open = false;
}

const item = document.querySelectorAll(".mdc-tab")
const itemIndicator = document.querySelectorAll(".mdc-tab-indicator")
const placeholder = document.querySelectorAll(".mdc-image-list__item")

topAppBarElement.addEventListener("click", () => {
    
    item.forEach(function(element){ 
        if (element.classList.contains("mdc-tab--active")) {
            element.classList.remove('mdc-tab--active')
        }
    })

    itemIndicator.forEach(function(element){ 
        if (element.classList.contains("mdc-tab-indicator--active")) {
            element.classList.remove('mdc-tab-indicator--active')
        }
    })

    placeholder.forEach(function(element){
        element.classList.remove("hidden")
    })

});

const buttonTab = document.querySelectorAll(".mdc-tab")

buttonTab.forEach((button) => {
    button.addEventListener('click', () => {

        const btnText = button.querySelector('.mdc-tab__text-label').textContent

        placeholder.forEach(function(element){
            
            element.classList.add("hidden")

            if (element.classList.contains(btnText.toLowerCase())) {
                element.classList.remove("hidden")
            }

        })
    });
});

const sheet = document.querySelector(".sheet")
const sheetTitle = document.querySelector(".sheet-title")
const fotoSheet = document.querySelector(".image-sheet")
const body = document.querySelector("body")

placeholder.forEach((element) => {
   
    element.addEventListener('click', () => {

        let titleText = element.getElementsByTagName('img')[0].title
        sheetTitle.textContent = titleText
        fotoSheet.src = element.querySelector("img").src

        body.classList.add("sheetOpen")

        sheet.classList.remove("sheet-out-of-view")

        const state = { page_id: 1, user_id: 5 };
        let url = location.pathname + "?" + titleText;
        
        history.pushState(state, "", url);
    
        window.scrollTo({
            top: 0
        })

    })
})

const close = document.querySelector(".close")

function back() {
    const state = { page_id: 1, user_id: 5 };
    url = location.pathname;
    
    history.pushState(state, "", url);    

    sheet.classList.add("sheet-out-of-view")
    body.classList.remove("sheetOpen")
}

close.addEventListener('click', () => {

    back()

})

addEventListener("popstate", (event) => {

    back()

});

