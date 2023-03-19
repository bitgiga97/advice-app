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