const timePointsArray = Array.from(document.querySelectorAll('.timepoints'));
for(i=0;i<timePointsArray.length;i++){
    let rotAngle = i*30;
    timePointsArray[i].style.rotate = `${rotAngle}deg`;
}
let initial = true;
let secondHand = document.querySelector('.secondHand');
let minuteHand = document.querySelector('.minuteHand');
let hourHand = document.querySelector('.hourHand');
setInterval(() => {
    secondHand.style.rotate = `${new Date().getSeconds()*6}deg`;
    minuteHand.style.rotate = `${new Date().getMinutes()*6}deg`;
    hourHand.style.rotate = `${(new Date().getHours()*30)+(new Date().getMinutes()/2)}deg`;
}, 1000);
