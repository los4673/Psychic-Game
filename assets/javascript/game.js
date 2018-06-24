$(document).ready(function () {
    
    var gLeft = 9;
    var aplhabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var chosenLetter = "";
    var win = 0;
    var userGuess = "";
    var loss = 0;

    $("#left").html(gLeft);
    $("#winGuess").html(win);
    $("#loss").html(loss);

    chosenLetter = aplhabet[Math.floor(Math.random() * aplhabet.length)];
    console.log(chosenLetter);

    $(document).on('keypress', function (event) {
        if (gLeft < 1) {
            gLeft = 9;
        }
        gLeft = gLeft - 1;
        $("#left").html(gLeft);

        userGuess = event.key;
        if (gLeft > 0) {
            $("#gSoFar").append(" " + userGuess);
        }
        else {
            $("#gSoFar").text("Your Guesses so far:");
        }
        if (chosenLetter === userGuess) {
            win++;
            $('#winGuess').html(win);
            chosenLetter = aplhabet[Math.floor(Math.random() * aplhabet.length)];
            $("#gSoFar").text("Your Guesses so far:");
            gLeft = 9;
            $('#left').html(gLeft);
            console.log(chosenLetter);

        }
        else if (gLeft === 0) {
            chosenLetter = aplhabet[Math.floor(Math.random() * aplhabet.length)];
            console.log(chosenLetter);
            loss++;
            $("#loss").html(loss);
        }
    });
});