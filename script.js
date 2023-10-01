const container = document.querySelector(".container");

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sideBar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesMainSlide = mainSlide.querySelectorAll("div");
const amountOfSlides = slidesMainSlide.length;

let activeSlideIndex=0;



sideBar.style.top = `-${(amountOfSlides-1) * 100}vh`;

upBtn.addEventListener("click", ()=>{
  changeSlide("up");
})
downBtn.addEventListener("click", () => {
  changeSlide("down");
});


function changeSlide(direction){
if(direction==="up"){
  activeSlideIndex++;
  if(activeSlideIndex===amountOfSlides){
    activeSlideIndex=0;
  }
  }else if (direction==="down"){
    activeSlideIndex--;
    if(activeSlideIndex<0){
      activeSlideIndex = amountOfSlides-1;
    }
  }


const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
