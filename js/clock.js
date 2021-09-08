
function bestTime () {
    const today = new Date();
    const hour = today.getHours() ;
    const minutes = today.getMinutes();
    const showSec = today.getSeconds();

    const convertHour = (realTime) => {
        if (realTime === 0) {
            return 12
        }else if(realTime > 12){
            return realTime - 12
        }else{
            return realTime
        }
    };

    const trueMin = (min) => {
        const num = 0;
        const num2 = "";
        return  min < 10 ? num : num2 + minutes
    };

    document.getElementById('show').innerHTML = ` ${convertHour(hour)} : ${trueMin(minutes)} : ${showSec}`;
}

const mySec = setInterval(bestTime,1000);









