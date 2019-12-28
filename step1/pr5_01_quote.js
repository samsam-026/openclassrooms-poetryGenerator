const quotes = {
    first: ["Delightful display", "Like crunchy cornflakes", "The chill, worming in", "Calm as a river", "Strokes of affection", "You and me alone", "Mellow, mild, May day", "Beautiful sunrise", "I was in fire", "Coolness fills the air", "Your eyes are fire", "Picking up pebbles", "Yellow flame flickers", "Glorious sunset", "Rain hits my window", "Bees nudged the flowers", "Winter fights to stay", "Springtime shower starts", "Full strawberry moon", "Crescent of colours", "Warm midnight falling", "Spring brings happiness", "Water runs down stream", "Sea breeze blows ahead"],
    second: ["Snowdrops bow their pure white heads", "Gold leaves rustle underfoot", "Shock, pleasure, bursting within", "Tranquility in my heart", "Light and tenderly expressed", "Madness of world locked away", "Calling children out to play", "On a warm summer morning", "The room was dark and somber", "Scarves and sweaters everywhere", "Their image burnt into my soul", "Or seashells strewn on soft sand", "Shadows dance upon the wall", "Decorating the night sky", "Angels tap-dancing softly", "Babies peeped out of the nest", "Sweet Spring always wins her way", "Kids are jumping in puddles", "Ushers in hot days of June", "Arching high above our heads", "Stars shining, dancing brightly", "Flowers, songbirds, and green grass", "Fish swimming with the current", "The book flows and the sun glows"],
    third: ["To the sun's glory.", "Beauty in decay.", "Summer tongue awakes.", "Blue summer skies reign.", "Keep love’s bonds so strong.", "Peace and quiet reigns", "Summer's on her way!", "I wait for day's start.", "I sleep peacefully.", "Fall weather is here.", "Scarred by beauty.", "Pure relaxation.", "Love grows ever strong.", "Awaiting the moon.", "A heavenly sound.", "One fine crisp morning.", "Flowers bloomed today!", "Formed in their backyard.", "High tides fill the dune.", "Sunshine brings us hope.", "Peaceful all at once.", "God's love on display.", "Life moving along...", "Perfect summer day."]
};

function getQuotePart(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomQuote() {
    return getQuotePart(quotes.first) + ", <br/>" + getQuotePart(quotes.second) + ", <br/>" + getQuotePart(quotes.third);
}

document.onreadystatechange = () => {
    //Check if page has loaded
    if (document.readyState === 'complete') {

        document.getElementById("generate").onclick = function () {

            // Display generated quote on page
            document.getElementById("quoteList").innerHTML = "<li>" + getRandomQuote() + "</li>";
        }
    }
}