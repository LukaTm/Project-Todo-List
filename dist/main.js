(()=>{"use strict";const e=document.querySelector(".pop-up"),t=["low","medium","high"].map((e=>document.querySelector(`#${e}`))),n=()=>{for(let e=0;e<t.length;e++)t[e].style.backgroundColor="rgb(154, 194, 209)"},o=document.querySelector("form");let d,l,c,r;function i(e,t,n,o,d){this.id=e,this.title=t,this.details=n,this.priority=o,this.dueDate=d}let u=[],a=0;document.addEventListener("DOMContentLoaded",(()=>{!function(){for(let e=0;e<t.length;e++){const o=t[e];o.addEventListener("click",(()=>{n(),o.style.backgroundColor="low"===o.id?"green":"medium"===o.id?"rgb(212, 212, 76)":"red"}))}}(),function(){const e=document.querySelector("header"),t=document.querySelector("#main-list"),n=document.createElement("h1");n.textContent="TO-DO",e.appendChild(n);const o=document.createElement("div");o.id="addButton",o.className="all-pop-ups",t.appendChild(o)}(),document.querySelector("#addButton").addEventListener("click",(()=>{e.style.display="grid"})),document.querySelectorAll(".close-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="none",document.querySelector("#edit-pop-up").style.display="none"}))})),o.addEventListener("submit",(e=>{e.preventDefault(),d=document.querySelector("#title").value,l=document.querySelector("#details").value,c=(()=>{const e=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].id})(),r=document.querySelector("#date").value,(()=>{a++;const e=new i(a,d,l,c,r);u.push(e),function(e){const t=document.querySelector("#main-list"),n=document.createElement("div");n.id=`todo${e}`,t.appendChild(n);const o=document.createElement("p");o.textContent=`Title: ${d}`,n.appendChild(o);const i=document.createElement("p");i.textContent=`Details: ${l}`,n.appendChild(i);const a=document.createElement("p");a.textContent=`Priority: ${c}`,n.appendChild(a);const s=new Date(r),m=new Intl.DateTimeFormat("en-US",{month:"short"}).format(s),p=document.createElement("p");p.textContent=`Due Date: ${m} ${r.slice(-2)}`,n.appendChild(p);const y=document.createElement("button");y.className="all-pop-ups",y.id="edit",y.textContent="Edit",n.appendChild(y),y.addEventListener("click",(()=>{document.querySelector("#edit-pop-up").style.display="grid"}));const h=document.createElement("button");h.className=`todo${e}`,h.textContent="Delete",n.appendChild(h),h.addEventListener("click",(()=>{u.forEach((e=>{let t=n.id.slice(4);if(t==e.id){const e=u.filter((e=>e.id!=t));u=e}})),n.remove()}))}(a)})(),document.querySelector(".pop-up").style.display="none",document.querySelectorAll(".todo-form input:not(:last-child)").forEach((e=>{e.value=""})),n()}))}))})();