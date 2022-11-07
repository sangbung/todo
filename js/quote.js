const quotes = [
    {
        quoat:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author:"Mother Teresa"
    },
    {
        quoat:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"Franklin D. Roosevelt",
    },
    {
        quoat:"Always remember that you are absolutely unique. Just like everyone else.",
        author:"Margaret Mead",
    },
    {
        quoat:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author:"Robert Louis Stevenson",
    },
    {
        quoat:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Eleanor Roosevelt",
    },
    {
        quoat:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author:"Benjamin Franklin",
    },
    {
        quoat:"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author:"Helen Keller",
    },
    {
        quoat:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle",
    },
    {
        quoat:"Whoever is happy will make others happy too.",
        author:"Anne Frank",
    },
    {
        quoat:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson",
    }
];

const Quote  = document.querySelector("#quote p");
// const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
Quote.innerHTML = todayQuote.quoat + " - "+todayQuote.author;
