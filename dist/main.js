(()=>{"use strict";const e=document.querySelector(".pop-up"),t=["low","medium","high"],o=t.map((e=>document.querySelector(`.${e}`))),n=t.map((e=>document.querySelector(`#${e}`))),l=()=>{for(let e=0;e<o.length;e++)n[e].style.backgroundColor="rgb(154, 194, 209)"},c=()=>{for(let e=0;e<o.length;e++)o[e].style.backgroundColor="rgb(154, 194, 209)"},d=document.querySelector('#edit-pop-up input[name="title"]'),r=document.querySelector('#edit-pop-up input[name="details"]'),i=document.querySelector('#edit-pop-up input[name="date"]'),u=(e,t,o)=>{d.value=e,r.value=t,i.value=o},a=()=>({title:d.value,details:r.value,date:i.value,priority:y()}),s=document.querySelectorAll("#projects li");let m;const p=()=>(s.forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll('[id*="todo"]').forEach((e=>{e.className!=m?e.style.display="none":e.style.display="block"})),m=e.textContent}))})),m),y=()=>{const e=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].id},h=document.querySelector(".todo-form");let f,S,q,C;const E=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)};function g(e,t,o,n,l){this.id=e,this.title=t,this.details=o,this.priority=n,this.dueDate=l}let v=[],b=0;const $=()=>{b++;const e=new g(b,f,S,q,C);v.push(e),function(e){const t=document.querySelector("#main-list"),o=document.createElement("div");o.id=`todo${e}`,o.className=p(),t.appendChild(o);const n=document.createElement("p");n.textContent=`Title: ${f}`,o.appendChild(n);const l=document.createElement("p");l.textContent=`Details: ${S}`,o.appendChild(l);const c=document.createElement("p");c.textContent=`Priority: ${q}`,o.appendChild(c);const d=document.createElement("p");d.textContent=`Due Date: ${E(C)} ${C.slice(-2)}`,o.appendChild(d),function(e,t){const o=document.createElement("button");o.className="all-pop-ups",o.id=`edit${e}`,o.textContent="Edit",t.appendChild(o),o.addEventListener("click",(()=>{document.querySelector("#edit-pop-up").style.display="grid",u(f,S,C),document.querySelector("#submitEdit").addEventListener("click",(e=>{e.preventDefault();const{title:t,details:n,date:l,priority:c}=a();v.forEach((e=>{console.log(v);let d=o.id.slice(4);var r,i,u,a,s;d==e.id&&(e.title=t,e.details=n,e.date=l,e.priority=c),r=d,i=t,u=n,a=c,s=l,document.querySelectorAll('[id*="todo"]').forEach((e=>{if(e.id.slice(4)==r){const t=e.querySelector(":first-child"),o=e.querySelector(":nth-child(2)"),n=e.querySelector(":nth-child(3)"),l=e.querySelector(":nth-child(4)");t.textContent=`Title ${i}`,o.textContent=`Details: ${u}`,n.textContent=`Priority: ${a}`,l.textContent=`Due Date: ${E(s)} ${s.slice(-2)}`}}))}))}))}))}(b,o);const r=document.createElement("button");r.className=`todo${e}`,r.textContent="Delete",o.appendChild(r),r.addEventListener("click",(()=>{v.forEach((e=>{let t=o.id.slice(4);if(t==e.id){const e=v.filter((e=>e.id!=t));v=e}})),o.remove()}))}(b)};document.addEventListener("DOMContentLoaded",(()=>{!function(){for(let e=0;e<o.length;e++){const t=n[e];t.addEventListener("click",(()=>{l(),t.style.backgroundColor="low"===t.id?"green":"medium"===t.id?"rgb(212, 212, 76)":"red"}))}}(),function(){for(let e=0;e<o.length;e++){const t=o[e];t.addEventListener("click",(()=>{c(),t.style.backgroundColor="low"===t.className?"green":"medium"===t.className?"rgb(212, 212, 76)":"red"}))}}(),function(){const e=document.querySelector("header"),t=document.querySelector("#main-list"),o=document.createElement("h1");o.textContent="TO-DO",e.appendChild(o);const n=document.createElement("div");n.id="addButton",n.className="all-pop-ups",t.appendChild(n)}(),document.querySelector("#addButton").addEventListener("click",(()=>{e.style.display="grid"})),document.querySelectorAll(".close-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="none",document.querySelector("#edit-pop-up").style.display="none"}))})),h.addEventListener("submit",(e=>{e.preventDefault(),f=document.querySelector("#title").value,S=document.querySelector("#details").value,q=(()=>{const e=["low","medium","high"].map((e=>document.querySelector(`.${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].className})(),C=document.querySelector("#date").value,$(),document.querySelector(".pop-up").style.display="none",document.querySelectorAll(".todo-form input:not(:last-child)").forEach((e=>{e.value=""})),c()})),p()}))})();