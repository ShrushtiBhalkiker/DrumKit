// alert("hello");
// document.querySelector("button").addEventListener("click",handleClick()); //cannot use the handleClick() method directly without any clicks.


// ............................................................................


// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click",function (){
//     alert("I got clicked");
// });


// ............i.................................i...............................


// var nOfDrumButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<nOfDrumButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     // alert("i got clicked");
//     var audio= new Audio('sounds/tom-1.mp3');
//     audio.play();
// }
//     );
// }


// .................................................................................



// var nOfDrumButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<nOfDrumButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     // console.log(this.innerHTML);//by this we get the letter which is in it
//     this.style.color = "white";
// }
//     );
// }

// .....................................................................................

// var nOfDrumButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<nOfDrumButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     var buttonInnerHTML=this.innerHTML;
//     switch (buttonInnerHTML) {
//         case "w":
//             var audio= new Audio('sounds/tom-1.mp3');
//             audio.play();
//             break;
//         case "a":
//             var audio= new Audio('sounds/tom-2.mp3');
//             audio.play();
//             break;
//         case "s":
//             var audio= new Audio('sounds/tom-3.mp3');
//             audio.play();
//             break;
//         case "d":
//             var audio= new Audio('sounds/tom-4.mp3');
//             audio.play();
//             break;
//         case "j":
//             var audio= new Audio('sounds/snare.mp3');
//             audio.play();
//             break;
//         case "k":
//             var audio= new Audio('sounds/crash.mp3');
//             audio.play();
//             break;
//         case "l":
//             var audio= new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             break;

//         default:console.log(buttonInnerHTML)
//             break;
//     }
// }
// );
// }
// document.addEventListener("keypress",function(event){
//     console.log(event);
// })



// ............................................................................



// // for detecting the button press
// var nOfDrumButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<nOfDrumButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     var buttonInnerHTML=this.innerHTML;
//     makeSound(buttonInnerHTML);
// });
// }
// 
// // for detecting the keypress
// document.addEventListener("keypress",function(event){
//     makeSound(event.key);
// });

// function makeSound(key){
//     switch (key) {
//         case "w":
//             var audio= new Audio('sounds/tom-1.mp3');
//             audio.play();
//             break;
//         case "a":
//             var audio= new Audio('sounds/tom-2.mp3');
//             audio.play();
//             break;
//         case "s":
//             var audio= new Audio('sounds/tom-3.mp3');
//             audio.play();
//             break;
//         case "d":
//             var audio= new Audio('sounds/tom-4.mp3');
//             audio.play();
//             break;
//         case "j":
//             var audio= new Audio('sounds/snare.mp3');
//             audio.play();
//             break;
//         case "k":
//             var audio= new Audio('sounds/crash.mp3');
//             audio.play();
//             break;
//         case "l":
//             var audio= new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             break;

//         default:console.log(buttonInnerHTML)
//             break;
//     }
// }



// ............................final code......................................




// for detecting the button press
var nOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<nOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

// for detecting the keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");
    setTimeout(function(params) {
        activeButton.classList.remove("pressed");
    },100);
}

// ............................final code......................................
