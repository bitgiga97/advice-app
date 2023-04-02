const adviceNumber = document.getElementById("advice-num");
const advice = document.getElementById("advice");
const generateBtn = document.getElementById("btn-generate");




generateBtn.addEventListener("click", async() => {
    await fetch('https://api.adviceslip.com/advice')
        .then(Response => Response.json())
        .then(data => {
            adviceNumber.textContent = `Advice #${data.slip.id}`;
            advice.textContent = `"${data.slip.advice}"`;
        })
});