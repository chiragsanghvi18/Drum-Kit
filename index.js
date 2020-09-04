// Button CLick
var bns = document.querySelectorAll(".drum");

for (var i = 0 ; i<bns.length; i++){
    var b = bns[i];
    b.addEventListener("click",function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML) ;
    });
}
// Key Board KEy Press
document.addEventListener("keydown",function(event){
    
    playSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
    
});
// Function to play sound
function playSound(key){

    var path = "sounds/"
    switch (key) {
        case "w":
            
        case "W"    :
            path += "tom-1.mp3";
            break;
        case "a":
        case "A"    :
            path += "tom-2.mp3";
            

            break;   

        case "s":
        case "S" :     
            path += "tom-3.mp3";
            break;
        case "d":
        case "D"    :
            path += "tom-4.mp3";
            break;    
        case "j"    :
        case "J":
            path+="snare.mp3";
            break;
        case "K"    :
        case "k":
            path+="crash.mp3";
            break;
        
        case "l"    :
        case "L"    :
            path+="kick-bass.mp3";
            break;

        default:
            break;
    }
    var audio = new Audio(path);
    audio.play();

}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    console.log(activeButton.classList);
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}