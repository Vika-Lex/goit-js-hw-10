import"./assets/styles-8ab69cdc.js";import{f as i,i as l}from"./assets/vendor-77e16229.js";const e={startBtn:document.querySelector("button[data-start]"),input:document.querySelector("#datetime-picker"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let s=null,o="";e.startBtn.addEventListener("click",f);const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s.getTime()<Date.now()?(e.startBtn.disabled=!0,l.error({title:"Error",message:"Please choose a date in the future"})):e.startBtn.disabled=!1}};i("#datetime-picker",m);function f(t){s&&o===""?(e.startBtn.disabled=!0,setInterval(()=>{o=s.getTime()-Date.now();let n=h(o);e.days.textContent=r(n.days),e.hours.textContent=r(n.hours),e.minutes.textContent=r(n.minutes),e.seconds.textContent=r(n.seconds),o-=1e3},1e3)):e.startBtn.disabled=!0}function r(t){return t<=9?String(t).padStart(2,"0"):t}function h(t){const a=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:u,minutes:d,seconds:c}}
//# sourceMappingURL=commonHelpers.js.map
