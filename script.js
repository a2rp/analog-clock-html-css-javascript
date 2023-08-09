window.onload = () => {
    const digitalDateTime = document.querySelector(".digitalDateTime");
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    const updateClock = () => {
        const date = new Date();
        const secondsDegrees = (date.getSeconds() + (date.getMilliseconds() / 1000)) * 6;
        secondHand.style.cssText = `
            transform: translateY(15px) rotateZ(${secondsDegrees}deg);
        `;
        const minutesDegrees = (date.getMinutes() * 60 + date.getSeconds() + (date.getMilliseconds() / 1000)) * 0.1;
        minuteHand.style.cssText = `
            transform: translateY(15px) rotateZ(${minutesDegrees}deg);
        `;
        let hoursDegrees = date.getHours();
        hoursDegrees = hoursDegrees > 12 ? hoursDegrees - 12 : hoursDegrees;
        hoursDegrees = ((hoursDegrees * 60 * 60) + (date.getMinutes() * 60) + date.getSeconds() + (date.getMilliseconds() / 1000)) * 0.0083;
        hourHand.style.cssText = `
            transform: translateY(45px) rotateZ(${hoursDegrees}deg);
        `;
        digitalDateTime.innerText = new Date();


        requestAnimationFrame(updateClock);
    };
    updateClock();
};
