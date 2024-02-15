const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setdata(){
    const now = new Date();

    const getsecond= now.getSeconds();
    const getminute = now.getMinutes();
    const gethour = now.getHours();

    const secondDegree= (getsecond/60) * 360;
    const minuteDegree= (getminute/60) * 360;
    const hourDegree= (gethour/12) * 360;

    second.style.transform= `rotate(${secondDegree}deg)`;

    minute.style.transform= `rotate(${minuteDegree}deg)`;

    hour.style.transform= `rotate(${hourDegree}deg)`;

}

setInterval(setdata, 1000);