function clockTime() {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Satu']
    

    let time = new Date();

    let date = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    

    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let year =time.getFullYear();


    session = "AM";

    if (h > 12) {
        h -= 12;
        session = "PM"
    }

    if (h == 0) {
        h = 12;
        session = "AM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    let currentTime = `${h} : ${m} : ${s} ${session}`
    document.getElementById('clock').innerHTML = currentTime;

    let dates = `${day} , ${date}  ${month}  ${year} `
    document.getElementById('date').innerHTML = dates;


}
setInterval(clockTime, 1000)

