const widthItem = document.querySelector('.new-item')
const formL = document.querySelector('.new-items-List')
const backTop = document.querySelector("#backTop");
const closeNavHeader = document.querySelector(".close-nav-header")
const barsBtn = document.querySelector(".bars-btn");
const navheader =document.querySelector(".nav-header");

const handleScroll = () => {
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 500) {
            backTop.classList.add("active");
        } else {
            backTop.classList.remove("active");
        }
    });

    backTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
};

barsBtn.onclick = ()=>{
    navheader.classList.remove("translate-l")
}

closeNavHeader.onclick=()=>{
    navheader.classList.add("translate-l");
}

function main(){
    if(document.querySelector('#new-item-next-btn')){
        document.querySelector('#new-item-next-btn').onclick = function(){
            if(widthItem) formL.scrollLeft += widthItem.offsetWidth;
        }
    }

    if(document.querySelector('#new-item-pre-btn')){
        document.querySelector('#new-item-pre-btn').onclick = function(){
    
            if(widthItem) formL.scrollLeft -= widthItem.offsetWidth;
        }
    }
    handleScroll();
}

main()  