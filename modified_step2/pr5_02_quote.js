const haikus = {
    first: ["Delightful display", "Like crunchy cornflakes", "The chill, worming in", "Calm as a river", "Strokes of affection", "You and me alone", "Mellow, mild, May day", "Beautiful sunrise", "I was in fire", "Coolness fills the air", "Your eyes are fire", "Picking up pebbles", "Yellow flame flickers", "Glorious sunset", "Rain hits my window", "Bees nudged the flowers", "Winter fights to stay", "Springtime shower starts", "Full strawberry moon", "Crescent of colours", "Warm midnight falling", "Spring brings happiness", "Water runs down stream", "Sea breeze blows ahead"],
    second: ["Snowdrops bow their pure white heads", "Gold leaves rustle underfoot", "Shock, pleasure, bursting within", "Tranquility in my heart", "Light and tenderly expressed", "Madness of world locked away", "Calling children out to play", "On a warm summer morning", "The room was dark and somber", "Scarves and sweaters everywhere", "Their image burnt into my soul", "Or seashells strewn on soft sand", "Shadows dance upon the wall", "Decorating the night sky", "Angels tap-dancing softly", "Babies peeped out of the nest", "Sweet Spring always wins her way", "Kids are jumping in puddles", "Ushers in hot days of June", "Arching high above our heads", "Stars shining, dancing brightly", "Flowers, songbirds, and green grass", "Fish swimming with the current", "The book flows and the sun glows"],
    third: ["To the sun's glory.", "Beauty in decay.", "Summer tongue awakes.", "Blue summer skies reign.", "Keep love’s bonds so strong.", "Peace and quiet reigns.", "Summer's on her way!", "I wait for day's start.", "I sleep peacefully.", "Fall weather is here.", "Scarred by beauty.", "Pure relaxation.", "Love grows ever strong.", "Awaiting the moon.", "A heavenly sound.", "One fine crisp morning.", "Flowers bloomed today!", "Formed in their backyard.", "High tides fill the dune.", "Sunshine brings us hope.", "Peaceful all at once.", "God's love on display.", "Life moving along...", "Perfect summer day."]
};

const tercets = {
    first: ["Do not go gentle into that good night", "Someone's child, left long ago", "My mom said, 'Eat all your soup'", "I shut my eyes and all the world drops dead", "The lady who has loved you as you've grown", "Everyone, young or old", "The art of losing isn’t hard to master", "The waves are rolling toward the shore", "I know we'll never be the same", "He clasps the crag with crooked hands", "The sun is out", "Time cannot erase the sorrow and pain that I feel", "I used to love you", "If only I had known", "I was blinded by you"],
    second: ["Old age should burn and rage at close of day", "A strange land", "Every piece of chicken and every noodle.'", "I lift my lids and all is born again", "Will always love and cherish you for all time", "Needs someone to listen", "So many things seem filled with the intent", "A silent world - an empty core", "Behind my love", "Close to the sun in lonely lands", "The children scream and shout", "Nor can make things better", "Gently, carefully", "It would be the last time I heard your voice", "My jewel, my gem"],
    third: ["Rage, rage against the dying of the light.", "Someone's foe.", "But there's a cow in my soup.", "I think I made you up inside my head.", "She has the greatest heart ever known.", "As their stories are told.", "To be lost that their loss is no disaster.", "Lifeless land with nothing more.", "I'm filled with shame.", "Ringed with the azure world, he stands.", "All about.", "Or force my heart to heal.", "As I was afraid of falling too deep.", "I would have kept you up just a little bit longer.", "Precious treasure I held near my heart."]
}

let quoteCycle;

function getQuotePart(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomQuote(quoteArray) {
    return getQuotePart(quoteArray.first) + ", <br/>" + getQuotePart(quoteArray.second) + ", <br/>" + getQuotePart(quoteArray.third);
}

function readForm() {
    // Serialize array, then convert it to a key value pair, with the key being the form elements name
    return formData = $('form').serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
}

function getMultipleQuotes(quoteType, quoteNum) {
    let generatedQuoteArray = [];
    let quoteArray;

    // Check if quote type is valid
    if (quoteType === "haiku") {
        quoteArray = haikus;
    } else if (quoteType === "tercet") {
        quoteArray = tercets;
    } else {
        console.error("Invalid quote type.");
        return;
    }

    // Check if number of quotes is valid
    if (quoteNum >= 1 && quoteNum <= 5) {

        // Generate quotes and push to array
        for (i = 0; i < quoteNum; i++) {
            generatedQuoteArray.push(getRandomQuote(quoteArray));
        }
    } else {
        console.error("The number of quotes should be between 1 and 5 inclusive.");
        return;
    }

    return generatedQuoteArray;
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // Stops auto submit of form
        document.getElementById("quoteForm").onsubmit = function (e) {
            e.preventDefault();
            return false;
        }
    }
};

function generateQuoteList() {
    // Get type and number of quotes
    let formData = readForm();

    document.getElementById("quoteList").innerHTML = "";

    // run the method to get the quote array and append to the list every second
    quoteCycle = setInterval(function () {
        // Call method to generate quotes
        let generatedQuoteArray = getMultipleQuotes(formData.quoteType, formData.quoteNum);

        // Append each generated quote to quote list
        generatedQuoteArray.forEach(generatedQuote => {
            let listItem = document.createElement("li");
            listItem.innerHTML = generatedQuote;
            document.getElementById("quoteList").append(listItem);
        });
    }, 1000);

    document.getElementById("clear").className = "btn btn-secondary";
}

function clearCycle() {
    // clear the interval and stop from the continuous adding of quotes to the list.
    clearInterval(quoteCycle);
}