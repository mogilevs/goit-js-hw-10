import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as d}from"./assets/vendor-4daf66c6.js";function l(t){const u=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:i,seconds:a}}let r;const n=document.querySelector("button");n.disabled="true";const o=document.querySelectorAll(".value"),m=o[0],h=o[1],f=o[2],y=o[3],b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<Date.now()){alert("Please choose a date in the future"),n.disabled="true";return}else r=t[0],n.removeAttribute("disabled")}},s=document.querySelector("#datetime-picker");d(s,b);n.addEventListener("click",p);function p(){setInterval(v,1e3)}function v(){let t=r-Date.now(),e=l(t);m.textContent=e.days,h.textContent=e.hours,f.textContent=e.minutes,y.textContent=e.seconds,n.disabled="true",s.disabled="true"}
//# sourceMappingURL=commonHelpers.js.map
