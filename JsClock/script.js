const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    const minutes = now.getMinutes();
    const minuteDegree = ((minutes/60)*360)+90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const hours = now.getHours();
    const hourDegree = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setTime,1000);