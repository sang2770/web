let slide=document.getElementsByClassName("slide")[0];
let img=document.querySelectorAll(".slide img");

// button
let prev=document.getElementById("prev");
let next=document.getElementById("next")
let count=1;
let size=img[0].clientWidth;

slide.style.transform="translateX("+(-size*count)+"px)";
next.addEventListener("click", ()=>{
    slide.style.transition="transform 3s ";
    count++;
    slide.style.transform="translateX("+(-size*count)+"px)";
})
prev.addEventListener("click", ()=>{
    slide.style.transition="transform 0.4s ease-in-out";
    count--;
    slide.style.transform="translateX("+(-size*count)+"px)";
})
slide.addEventListener("transitionend",()=>{
    if(img[count].id==="last")
    {
        // slide.style.transition="none";
        count=img.length-1;
        slide.style.transform="translateX("+(-size*count)+"px)";
    }
    if(img[count].id==="first")
    {
        // slide.style.transition="none";
        count=img.length-count;
        slide.style.transform="translateX("+(-size*count)+"px)";
    }
})


