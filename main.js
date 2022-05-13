function generate_random(max_number) {
    return Math.round(Math.random()*max_number);
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener ("click", function (){ 
    let randomNumber = generate_random(3);
    let answerText = "";

    if (randomNumber == 0) {
        answerText = "Yes Definetely!";
    }

    else if (randomNumber == 1) {
        answerText = "No, certainly not!";
    }

    else if (randomNumber == 2) {
        answerText = "Ask again later!";
    }

    else {
        answerText = "Get a bean and cheese burrito";
    }

    answer.innerHTML = answerText;
});