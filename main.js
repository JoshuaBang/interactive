function sayThatWasEasy() {
    //var thatWasEasy = new Audio("that_was_easy.mp3");
    //thatWasEasy.play();
    alert("That was easy!");
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32) {
        $("#easy").trigger("click");
    }
}
