let slides=document.querySelectorAll(".slides");

let counter=0;
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

function slideImage(){
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`;
    })
}

// if you want to go behind first image and beyond last image
function goPrev(){
    counter--;
    if(counter<0){
        counter=slides.length-1;
    }
    slideImage();
}

function goNext(){
    counter++;
    if(counter>slides.length-1){
        counter=0;
    }
    slideImage();
}

// when you don't want to go behind first image and beyond last image
// function goPrev(){
//     if(counter>0){
//         counter--;
//     }
//     slideImage();
// }

// function goNext(){
//     if(counter<slides.length-1){
//         counter++;
//     }
//     slideImage();
// }