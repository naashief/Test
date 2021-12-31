function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "Siapa Saya") {
        return "Yo ndak tau lah";
    }else if (input == "Siapa saya") {
        return "Yo ndak tau lah";
    }else if (input == "Siapa saya?") {
        return "Yo ndak tau lah";
    }else if (input == "siapa saya") {
        return "Yo ndak tau lah";
    }else if (input == "siapa saya?") {
        return "Yo ndak tau lah";
    }
     else {
        return "Coba tanya yang lain";
    }
}