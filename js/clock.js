

const today = new Date();
const hour = today.getHours() ;
const minutes = today.getMinutes();


const time = (realTime) => {
    if(realTime > 12) {
        return realTime - 12
    }else {
        return realTime
    }
};

document.getElementById('hour').innerHTML = `${time(hour)}:${minutes}`;



