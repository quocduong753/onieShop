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

console.log(document.querySelector(".seconds").innerHTML);

const countdown = ()=>{
    const now = new Date().getTime();
    const countDownDate = now + 7 * 24 * 60 * 60 * 1000; // 7 days from now

    const x = setInterval(function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
    }
    }, 1000);
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
    countdown();
}

main()  