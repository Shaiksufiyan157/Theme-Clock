const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark mode'
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML='Light mode'
    }
})
function SetTime(){
    const time=new Date()
    console.log(time)
    const month=time.getMonth()
    const day=time.getDay()
    const date=time.getDate()
    const hours=time.getHours()
    const hoursForClock=hours%12
    const minute=time.getMinutes()
    const second=time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hourEl.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${scale(minute,0,59,0,360)}deg)`
    secondEl.style.transform=`translate(-50%,-100%) rotate(${scale(second,0,59,0,360)}deg)`
    // if(hoursForClock<9){
    //     timeEl.innerText=`0${hoursForClock}:${minute}`
    // }
    // else{
    //     timeEl.innerText=`${hoursForClock}:${minute}`
    // }
    timeEl.innerText=`${hoursForClock<9?`0${hoursForClock}`:hoursForClock}: ${minute<10?`0${minute}`:minute} ${ampm}`
    dateEl.innerHTML=`${days[day]},${months[month]} <span class="circle">${date}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
SetTime()
setInterval(SetTime,1000)