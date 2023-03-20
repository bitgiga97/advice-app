const adviceList = [
    "Always be yourself.",
    "Don't worry about the little things.",
    "Take time to relax and recharge.",
    "Try new things and take risks.",
    "Believe in yourself and your abilities.",
    "Be kind to yourself and others.",
    "Focus on the present moment.",
    "Stay positive and keep moving forward.",
    "Learn from your mistakes and failures.",
    "If your hair is thinning, try dying your hair a similar tone to your scalp.",
    "Step 1. Give a shit. Step 2. Don't be a dick. Step 3. Know when to let go.",
    "Age is of no importance, unless you are a cheese.",
    "Vinegar is a powerful cleaning agent.",
    "Accept advice.",
    "Giving someone a hug can be mutually rewarding. Try to give at least one hug a day to someone.",
    "Sometimes it's best to ignore other people's advice.",
    "To cleanly remove the seed from an Avocado, lay a knife firmly across it, and twist.",
    "Lemon and salt works wonders on tarnished brass.",
    "Life is better when you sing about bananas.",
    "Respect other people's opinions, even when they differ from your own.",


    "Don't be afraid to ask for help when you need it."
];

const adviceNumber = document.getElementById("advice-num");
const advice = document.getElementById("advice");
const generateBtn = document.getElementById("btn-generate");

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const randomAdvice = adviceList[randomIndex];
    const randomAdviceNumber = randomIndex + 1;
    adviceNumber.textContent = "Advice #" + randomAdviceNumber;
    advice.textContent = randomAdvice;
});