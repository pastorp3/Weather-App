(()=>{"use strict";const e=e=>{let t;return t="ºC"===document.getElementById("select-temperature").value?function(e){let t=Math.round(e-273.15);return t+="ºC",t}(e):function(e){let t=Math.round(9*(e-273.15)/5+32);return t+="ºF",t}(e),t},t=(n,a)=>{const i=(r=a).name+", "+r.sys.country;var r;const c=(e=>"Latitude "+e.coord.lat+", Longitude "+e.coord.lon)(a),l=e(a.main.temp),o=e(a.main.feels_like),s=(e=>e.main.humidity+"%")(a),d=(e=>e.weather[0].description)(a),m=e(a.main.temp_max),u=e(a.main.temp_min),p=document.getElementById("container");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(p);const h=document.createElement("div"),g=document.createElement("div");p.appendChild(h),h.appendChild(g),g.innerHTML=`<img src="${n}" class="background" >`;const C=document.getElementById("select-temperature"),E=document.createElement("div"),f=document.createElement("p"),b=document.createElement("p"),y=document.createElement("p"),A=document.createElement("p"),v=document.createElement("p"),w=document.createElement("p"),M=document.createElement("div"),k=document.createElement("span"),x=document.createElement("span");h.appendChild(E),E.appendChild(f),E.appendChild(b),E.appendChild(y),E.appendChild(A),E.appendChild(v),E.appendChild(w),E.appendChild(M),M.appendChild(k),M.appendChild(x),E.setAttribute("class","align-container center"),f.setAttribute("class","title"),b.setAttribute("class","location normal-margin"),y.setAttribute("class","tempNow normal-margin"),A.setAttribute("class","feels_like normal-margin"),v.setAttribute("class","feels_like normal-margin"),w.setAttribute("class","feels_like normal-margin"),f.textContent=""+i,b.textContent=""+c,y.textContent=""+l,A.textContent="Feels like: "+o,v.textContent="Humidity: "+s,w.textContent=""+d,M.setAttribute("class","flex"),k.setAttribute("class","temp margin-right"),x.setAttribute("class","temp"),k.innerHTML="Max<br>"+m,x.innerHTML="Min<br>"+u,C.addEventListener("click",(e=>{t(n,a)}))},n=t;document.getElementById("searchbttn").addEventListener("click",(e=>{const t=document.getElementsByTagName("form")[0];(async function(e){try{const t=await async function(e){const t="http://api.openweathermap.org/data/2.5/weather?q="+e+",&APPID=be7a948e30f210ef85214d3ba4b94273",n=await fetch(t),a=await n.json();return new Promise(((e,t)=>{"404"===a.cod?(console.log("Error"),t("No valid city")):(console.log("Complete"),e(a))}))}(e);!async function(e,t){const a="https://api.unsplash.com/photos/random?orientation=landscape&count=1&client_id=7XimdnnMOSmoeVFofk7rEM4_ApTXYE83u8ZAAlOfPZU&query="+e,i=await fetch(a),r=await i.json();n(r[0].urls.regular,t)}(t.weather[0].main,t)}catch(e){alert(e)}})(document.getElementById("search").value),t.reset()})),(()=>{const e=document.getElementById("container"),t=document.createElement("div");t.setAttribute("class","align-loading"),e.appendChild(t),t.innerHTML="<span>Waiting for input....</span>"})()})();