(()=>{"use strict";const e=()=>{document.querySelectorAll('[class*="checkTodo"]').forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentElement.getElementsByTagName("p");if(e.checked)for(let e=0;e<t.length;e++)t[e].style.textDecoration="line-through",t[e].style.opacity="0.5";else for(let e=0;e<t.length;e++)t[e].style.textDecoration="",t[e].style.opacity="1"}))}))};window.addEventListener("resize",(()=>{document.querySelectorAll("li span").forEach((e=>{const t=e.parentElement,o=t.querySelector("div.underline[style*='width']");if(t&&o){const l=getComputedStyle(t).width,n=getComputedStyle(o).width;if(parseInt(l)>0&&parseInt(n)>0){const t=e.offsetWidth;o.style.width=`${t}px`}}}))}));const t=document.querySelector(".pop-up"),o=["low","medium","high"],l=o.map((e=>document.querySelector(`.${e}`))),n=o.map((e=>document.querySelector(`#${e}`))),c=()=>{for(let e=0;e<l.length;e++)n[e].style.backgroundColor="rgb(154, 194, 209)"},r=()=>{for(let e=0;e<l.length;e++)l[e].style.backgroundColor="rgb(154, 194, 209)"},d=document.querySelector('#edit-pop-up input[name="title"]'),i=document.querySelector('#edit-pop-up input[name="details"]'),s=document.querySelector('#edit-pop-up input[name="date"]');let a="morning";const u=()=>{const e=document.querySelectorAll("#projects li");return e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.style.backgroundColor="#dab785"}));const o=document.querySelectorAll('[id*="todo"]');a=t.childNodes[0].textContent,t.classList.add(a),o.forEach((e=>{e.className!=a?e.style.display="none":e.style.display="flex"}))}))})),p(),a},p=()=>{document.querySelector(".show-all-todos").addEventListener("click",(()=>{document.querySelectorAll('[id*="todo"]').forEach((e=>{e.style.display="flex"}))}))};let m=null,y=4;const h=()=>{document.querySelectorAll("#projects li").forEach((e=>{const t=e.innerText,o=document.createElement("span");o.innerText=t,e.innerHTML="",e.appendChild(o);const l=document.createElement("div");l.classList.add("underline"),e.appendChild(l),e.addEventListener("mouseenter",(()=>{if(m!==e){const e=o.offsetWidth;l.style.width=`${e}px`,l.style.opacity=1}})),e.addEventListener("click",(()=>{if(m!==e){const t=o.offsetWidth;l.style.width=`${t}px`,l.style.opacity=1,m&&(m.querySelector(".underline").style.width="0",m.querySelector("div").style.opacity="0"),m=e}})),e.addEventListener("mouseleave",(()=>{m!==e&&(l.style.width="0",l.style.opacity=0)})),window.addEventListener("resize",(()=>{document.querySelectorAll("li span").forEach((e=>{const t=e.offsetWidth;document.querySelector(".underline").style.width=`${t}px`}))}))}))};function f(){const e=document.querySelectorAll('[class*="prox"]');let t=0;e.forEach((e=>{if(!e.querySelector("i")){{const o=document.createElement("i");o.className=`fas fa-trash-alt delProject${t}`,o.style.color="white",o.style.borderColor="#cccccc",e.appendChild(o),o.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const t=o.parentElement.className;document.querySelectorAll(`.${t.toString()}`).forEach((e=>{e.remove();const o=b(),l=o.findIndex((e=>e.project==t));-1!==l&&o.splice(l,1),N(o),document.querySelector("#projects li").click()}))}))}t+=1}}))}h();const E=()=>{const e=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].id};let S=[],q=0;function v(e,t,o,l,n,c){this.id=e,this.title=t,this.details=o,this.priority=l,this.dueDate=n,this.project=c}const g=(e,t,o,l,n)=>{q++;const r=new v(q,e,t,o,l,n);S.push(r),function(e){const t=document.querySelector("#main-list"),o=document.createElement("div");o.id=`todo${e}`,o.classList.add(u()),t.appendChild(o);const l=document.createElement("p");l.textContent=`Title: ${k}`,o.appendChild(l);const n=document.createElement("p");n.textContent=`Details: ${w}`,o.appendChild(n);const r=document.createElement("p");r.textContent=`Priority: ${x}`,o.appendChild(r);const a=document.createElement("p");a.textContent=`Due Date: ${$(L)} ${L.slice(-2)}`,o.appendChild(a),function(e,t){const o=document.createElement("i");o.className="fas fa-edit all-pop-ups",o.id=`edit${e}`,t.appendChild(o),o.addEventListener("click",(()=>{document.querySelector("#edit-pop-up").style.display="grid";let e=o.parentElement;const t=e.querySelector(":first-child").textContent.slice(6),l=e.querySelector(":nth-child(2)").textContent.slice(9),n=e.querySelector(":nth-child(4)").textContent.slice(14);(()=>{const t=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let o=0;o<t.length;o++){const l=e.querySelector(":nth-child(3)").textContent.slice(10);if(l==t[o].id){const e=t[o];c(),e.style.backgroundColor="low"==l?"green":"medium"===l?"rgb(212, 212, 76)":"red"}}})(),((e,t,o)=>{d.value=e,i.value=t,s.value=o})(t,l,(()=>{let e="";return S.forEach((t=>{t.dueDate.slice(8,10)==n&&(e=t.dueDate)})),e})());const r=document.querySelector("#submitEdit"),a=e=>{e.preventDefault();const{title:t,details:l,date:n,priority:c}={title:d.value,details:i.value,date:s.value,priority:E()};S.forEach((e=>{let d=o.id.slice(4);var i,s,u,p,m;d==e.id&&(e.title=t,e.details=l,e.dueDate=n,e.priority=c),i=d,s=t,u=l,p=c,m=n,document.querySelectorAll('[id*="todo"]').forEach((e=>{if(e.id.slice(4)==i){const t=e.querySelector(":first-child"),o=e.querySelector(":nth-child(2)"),l=e.querySelector(":nth-child(3)"),n=e.querySelector(":nth-child(4)");t.textContent=`Title: ${s}`,o.textContent=`Details: ${u}`,l.textContent=`Priority: ${p}`,n.textContent=`Due Date: ${$(m)} ${m.slice(-2)}`}})),r.removeEventListener("click",a),document.querySelector("#edit-pop-up").style.display="none"}))};r.addEventListener("click",a)}))}(q,o);const p=document.createElement("i");p.className=`fas fa-trash-alt todo${e}`,o.appendChild(p);const m=document.createElement("input");m.type="checkbox",m.id=`checkTodo${e}`,m.className=`checkTodo${e}`,m.name="checkTodo";const y=document.createElement("label");y.setAttribute("for",`checkTodo${e}`),o.appendChild(m),o.appendChild(y),p.addEventListener("click",(()=>{S.forEach((e=>{let t=o.id.slice(4);if(t==e.id){const e=S.filter((e=>e.id!=t));S=e}})),o.remove()}))}(q)},C=document.querySelector(".todo-form");let k,w,x,L;const $=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)},b=()=>S,N=e=>{S=e};document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("#sidebar"),t=window.innerWidth;t<=670&&(e.style.display="flex",e.style.opacity="0");const o=document.createElement("div");o.id="addButton",o.className="all-pop-ups";const l=document.createElement("div");l.className="container",l.appendChild(o),e.appendChild(l);let n=!0;const c=document.querySelector(".project1.morning");c&&n?(c.click(),n=!1):(firstRun=!1,n=!1),t<=670&&(e.style.display="none",e.style.opacity="1")}(),f(),function(){for(let e=0;e<l.length;e++){const t=n[e];t.addEventListener("click",(()=>{c(),t.style.backgroundColor="low"===t.id?"green":"medium"===t.id?"rgb(212, 212, 76)":"red"}))}}(),function(){for(let e=0;e<l.length;e++){const t=l[e];t.addEventListener("click",(()=>{r(),t.style.backgroundColor="low"===t.className?"green":"medium"===t.className?"rgb(212, 212, 76)":"red"}))}}(),document.querySelector("#addButton").addEventListener("click",(()=>{t.style.display="grid"})),document.querySelectorAll(".close-btn").forEach((e=>{e.addEventListener("click",(()=>{t.style.display="none",document.querySelector("#edit-pop-up").style.display="none"}))})),C.addEventListener("submit",(t=>{t.preventDefault(),k=document.querySelector("#title").value,w=document.querySelector("#details").value,x=(()=>{const e=["low","medium","high"].map((e=>document.querySelector(`.${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].className})(),L=document.querySelector("#date").value,g(k,w,x,L,u()),document.querySelector(".pop-up").style.display="none",document.querySelectorAll(".todo-form input:not(:last-child)").forEach((e=>{e.value=""})),r(),e()})),u(),document.querySelector("#projects ul li"),k="Wake up early",w="at least 7hr sleep",x="high",L="2023-12-07",g("Wake up early","at least 7hr sleep","high","2023-12-07","morning"),e(),function(){const e=document.querySelector("#createProject"),t=document.querySelector("#projects ul");document.querySelector("#submitNewProject").addEventListener("click",(o=>{if(o.preventDefault(),""!=e.value){const o=e.value,l=document.createElement("li"),n=document.createElement("div");l.classList.add(`project${y}`,"wrap-text");const c=document.createTextNode(o);l.appendChild(c),n.appendChild(l),n.className=`prox${y}`,t.appendChild(n),e.value="",f(),u(),document.querySelectorAll("#projects li").forEach((e=>{let t=e.childNodes[0].textContent;e.classList.add(t)})),h(),y+=1;let r=!0;setTimeout((()=>{document.querySelector("#projects ul:last-child div:last-child li").click()}),100),r=!1}}))}(),(()=>{const e=document.querySelector(".drawer"),t=document.querySelector("#sidebar");e.addEventListener("click",(()=>{e.classList.contains("active")?(t.style.display="none",e.className=e.className.replace("active","").trim()):(t.style.display="flex",e.classList.add("active"))})),window.addEventListener("resize",(()=>{const o=window.innerWidth;o>=670&&(t.style.display="flex",e.className=e.className.replace("active","").trim()),o<670&&!e.classList.contains("active")&&(t.style.display="none")}))})()}))})();