let slides=document.querySelectorAll(".slides");

let counterX=0;
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

function slideImageX(){
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counterX*100}%)`;
    })
}

// [During X translation] if you want to go behind first image and beyond last image
function goPrev(){
    counterX--;
    if(counterX<0){
        counterX=slides.length-1;
    }
    slideImageX();
}

function goNext(){
    counterX++;
    if(counterX>slides.length-1){
        counterX=0;
    }
    slideImageX();
}

//  [During X translation] when you don't want to go behind first image and beyond last image
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


// If you want to use top bottom buttons then use this
// Please keep in mind that translation in X and translation in Y cannot co exist in this code so use one at a time
// let counterY=0;

// slides.forEach((slide,index)=>{
//     slide.style.bottom=`${index*100}%`;
// })

// function slideImageY(){
//     slides.forEach((slide)=>{
//         slide.style.transform=`translateY(${counterY*100}%)`;
//     })
// }

// function goUp(){
//     counterY--;
//     if(counterY<0){
//         counterY=slides.length-1;
//     }
//     slideImageY();
// }

// function goDown(){
//     counterY++;
//     if(counterY>slides.length-1){
//         counterY=0;
//     }
//     slideImageY();
// }