
function clickMe() {
    console.log("Button has been clicked!")
    var word = document.getElementById("word").value;
    var answer = document.getElementById("answer");
    
    /*for (var i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            answer.value = "Please use a single word only without spaces"
        } else {
            answer.value = word.length;
        }
    }*/
    answer.value = word.length
}
