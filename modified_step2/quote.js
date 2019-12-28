const haikus = [
    { first: "Delightful display", second: "Snowdrops bow their pure white heads", third: "To the sun's glory." },
    { first: "Like crunchy cornflakes", second: "Gold leaves rustle underfoot", third: "Beauty in decay." },
    { first: "The chill, worming in", second: "Shock, pleasure, bursting within", third: "Summer tongue awakes." },
    { first: "Calm as a river", second: "Tranquility in my heart", third: "Blue summer skies reign." },
    { first: "Strokes of affection", second: "Light and tenderly expressed", third: "Keep love’s bonds so strong." },
    { first: "You and me alone", second: "Madness of world locked away", third: "Peace and quiet reigns." },
    { first: "Mellow, mild, May day", second: "Calling children out to play", third: "Summer's on her way!" },
    { first: "Beautiful sunrise", second: "On a warm summer morning", third: "I wait for day's start." },
    { first: "I was in fire", second: "The room was dark and somber", third: "I sleep peacefully." },
    { first: "Coolness fills the air", second: "Scarves and sweaters everywhere", third: "Fall weather is here." },
    { first: "Your eyes are fire", second: "Their image burnt into my soul", third: "Scarred by beauty." },
    { first: "Picking up pebbles", second: "Or seashells strewn on soft sand", third: "Pure relaxation." },
    { first: "Yellow flame flickers", second: "Shadows dance upon the wall", third: "Love grows ever strong." },
    { first: "Glorious sunset", second: "Decorating the night sky", third: "Awaiting the moon." },
    { first: "Rain hits my window", second: "Angels tap-dancing softly", third: "A heavenly sound." },
    { first: "Bees nudged the flowers", second: "Babies peeped out of the nest", third: "One fine crisp morning." },
    { first: "Winter fights to stay", second: "Sweet Spring always wins her way", third: "Flowers bloomed today!" },
    { first: "Springtime shower starts", second: "Kids are jumping in puddles", third: "Formed in their backyard." },
    { first: "Full strawberry moon", second: "Ushers in hot days of June", third: "High tides fill the dune." },
    { first: "Crescent of colours", second: "Arching high above our heads", third: "Sunshine brings us hope." },
    { first: "Warm midnight falling", second: "Stars shining, dancing brightly", third: "Peaceful all at once." },
    { first: "Spring brings happiness", second: "Flowers, songbirds, and green grass", third: "God's love on display." },
    { first: "Water runs down stream", second: "Fish swimming with the current", third: "Life moving along..." },
    { first: "Sea breeze blows ahead", second: "The book flows and the sun glows", third: "Perfect summer day." }
]

const tercets = [
    { first: "Do not go gentle into that good night", second: "Old age should burn and rage at close of day", third: "Rage, rage against the dying of the light." },
    { first: "Someone's child, left long ago", second: "A strange land", third: "Someone's foe." },
    { first: "My mom said, 'Eat all your soup'", second: "Every piece of chicken and every noodle.'", third: "But there's a cow in my soup." },
    { first: "I shut my eyes and all the world drops dead", second: "I lift my lids and all is born again", third: "I think I made you up inside my head." },
    { first: "The lady who has loved you as you've grown", second: "Will always love and cherish you for all time", third: "She has the greatest heart ever known." },
    { first: "Everyone, young or old", second: "Needs someone to listen", third: "As their stories are told." },
    { first: "The art of losing isn’t hard to master", second: "So many things seem filled with the intent", third: "To be lost that their loss is no disaster." },
    { first: "The waves are rolling toward the shore", second: "A silent world - an empty core", third: "Lifeless land with nothing more." },
    { first: "I know we'll never be the same", second: "Behind my love", third: "I'm filled with shame." },
    { first: "He clasps the crag with crooked hands", second: "Close to the sun in lonely lands", third: "Ringed with the azure world, he stands." },
    { first: "The sun is out", second: "The children scream and shout", third: "All about." },
    { first: "Time cannot erase the sorrow and pain that I feel", second: "Nor can make things better", third: "Or force my heart to heal." },
    { first: "I used to love you", second: "Gently, carefully", third: "As I was afraid of falling too deep." },
    { first: "If only I had known", second: "It would be the last time I heard your voice", third: "I would have kept you up just a little bit longer." },
    { first: "I was blinded by you", second: "My jewel, my gem", third: "Precious treasure I held near my heart." }
]

let quoteCycle;

function getQuotePart(array, part) {
    return array[Math.floor(Math.random() * array.length)][part];
}

function getRandomQuote(quoteArray) {
    return getQuotePart(quoteArray, "first") + ", <br/>" + getQuotePart(quoteArray, "second") + ", <br/>" + getQuotePart(quoteArray, "third");
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