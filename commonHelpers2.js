import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const e=document.querySelector(".form");e.addEventListener("submit",o=>{o.preventDefault();const r=Number(e.delay.value),t=e.state.value;new Promise((a,i)=>{setTimeout(()=>{t==="fulfilled"?a(s.success({iconUrl:"./img/successSvg.svg",message:`Fulfilled promise in ${r}ms`,messageColor:"#ffffff",backgroundColor:"#59A10D",progressBar:!0,progressBarColor:"#326101",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"})):i(s.error({iconUrl:"./img/errorSvg.svg",message:`Rejected promise in ${r}ms`,messageColor:"#ffffff",backgroundColor:"#EF4040",progressBar:!0,progressBarColor:"#B51B1B",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"}))},r)}),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
