function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissor").style.visibility="visible";
}
clickedHand=["<img src='game.png' id='img1'>","<img src='paper.png' id='img2'>","<img src='scissor.png' id='img2'>"]
clickedRightHand=["<img src='rock.png' id='img1'>","<img src='paper.png' id='img2'>","<img src='scissor.png' id='img2'>"]
function game(position){
  

  var random=Math.floor(Math.random()*3);


{
    document.getElementById("hand2").innerHTML=clickedRightHand
    [user];
    document.getElementById("hand1").innerHTML=clickedHand
    [computer];


    {
    if (user==computer){
        alert ("Match Draw");
        window.location.reload();
    }
    else if(
        computer==0 && user==2){
            alert( "You Are Winner");
            window.location.reload();
        }

    else if(
        computer==1 && user==0){
            alert( "You Are Winner");
            window.location.reload();
        }
        else if(
            computer==2 && user==1){
                alert( "You Are Winner");
                window.location.reload();
            }
else{
             alert("computer is winner");
}   
    
    }
}
}
    


