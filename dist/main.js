(()=>{"use strict";const e=()=>{document.querySelectorAll('[class*="checkTodo"]').forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentElement.getElementsByTagName("p");if(e.checked)for(let e=0;e<t.length;e++)t[e].style.textDecoration="line-through",t[e].style.opacity="0.5";else for(let e=0;e<t.length;e++)t[e].style.textDecoration="",t[e].style.opacity="1"}))}))},t=document.querySelector(".pop-up"),o=["low","medium","high"],l=o.map((e=>document.querySelector(`.${e}`))),c=o.map((e=>document.querySelector(`#${e}`))),n=()=>{for(let e=0;e<l.length;e++)c[e].style.backgroundColor="rgb(154, 194, 209)"},r=()=>{for(let e=0;e<l.length;e++)l[e].style.backgroundColor="rgb(154, 194, 209)"},d=document.querySelector('#edit-pop-up input[name="title"]'),i=document.querySelector('#edit-pop-up input[name="details"]'),s=document.querySelector('#edit-pop-up input[name="date"]');let a="morning";const u=()=>{const e=document.querySelectorAll("#projects li");return e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.style.backgroundColor="#dab785"}));const o=document.querySelectorAll('[id*="todo"]');a=t.childNodes[0].textContent,t.classList.add(a),o.forEach((e=>{e.className!=a?e.style.display="none":e.style.display="flex"}))}))})),m(),a},m=()=>{document.querySelector(".show-all-todos").addEventListener("click",(()=>{document.querySelectorAll('[id*="todo"]').forEach((e=>{e.style.display="flex"}))}))};let p=null,y=4;const h=()=>{document.querySelectorAll("#projects li").forEach((e=>{const t=e.innerText,o=document.createElement("span");o.innerText=t,e.innerHTML="",e.appendChild(o);const l=document.createElement("div");l.classList.add("underline"),e.appendChild(l),e.addEventListener("mouseenter",(()=>{if(p!==e){const e=o.offsetWidth;l.style.width=`${e}px`,l.style.opacity=1}})),e.addEventListener("click",(()=>{if(p!==e){const t=o.offsetWidth;l.style.width=`${t}px`,l.style.opacity=1,p&&(p.querySelector(".underline").style.width="0"),p=e}})),e.addEventListener("mouseleave",(()=>{p!==e&&(l.style.width="0",l.style.opacity=0)}))}))};function f(){const e=document.querySelectorAll('[class*="prox"]');let t=0;e.forEach((e=>{if(e.querySelector("i"))console.log("hahah");else{const o=document.createElement("i");o.className=`fas fa-trash-alt delProject${t}`,o.style.color="white",o.style.borderColor="#cccccc",e.appendChild(o),o.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const t=o.parentElement.className.split(" ").slice(1,2)[0];console.log(t);const l=document.querySelectorAll(`.${t.toString()}`);console.log(l),l.forEach((e=>{e.remove();const o=w(),l=o.findIndex((e=>e.project==t));-1!==l&&o.splice(l,1),N(o),document.querySelector("#projects li").click()}))}))}t+=1}))}h();const E=()=>{const e=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].id};let S=[],g=0;function q(e,t,o,l,c,n){this.id=e,this.title=t,this.details=o,this.priority=l,this.dueDate=c,this.project=n}const v=(e,t,o,l,c)=>{g++;const r=new q(g,e,t,o,l,c);S.push(r),function(e){const t=document.querySelector("#main-list"),o=document.createElement("div");o.id=`todo${e}`,o.classList.add(u()),t.appendChild(o);const l=document.createElement("p");l.textContent=`Title: ${k}`,o.appendChild(l);const c=document.createElement("p");c.textContent=`Details: ${L}`,o.appendChild(c);const r=document.createElement("p");r.textContent=`Priority: ${x}`,o.appendChild(r);const a=document.createElement("p");console.log($),a.textContent=`Due Date: ${b($)} ${$.slice(-2)}`,o.appendChild(a),function(e,t){const o=document.createElement("i");o.className="fas fa-edit all-pop-ups",o.id=`edit${e}`,t.appendChild(o),o.addEventListener("click",(()=>{document.querySelector("#edit-pop-up").style.display="grid";let e=o.parentElement;const t=e.querySelector(":first-child").textContent.slice(6),l=e.querySelector(":nth-child(2)").textContent.slice(9),c=e.querySelector(":nth-child(4)").textContent.slice(14);(()=>{const t=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let o=0;o<t.length;o++){const l=e.querySelector(":nth-child(3)").textContent.slice(10);if(l==t[o].id){const e=t[o];n(),e.style.backgroundColor="low"==l?"green":"medium"===l?"rgb(212, 212, 76)":"red"}}})(),((e,t,o)=>{d.value=e,i.value=t,s.value=o})(t,l,(()=>{let e="";return S.forEach((t=>{t.dueDate.slice(8,10)==c&&(e=t.dueDate)})),e})());const r=document.querySelector("#submitEdit"),a=e=>{e.preventDefault();const{title:t,details:l,date:c,priority:n}={title:d.value,details:i.value,date:s.value,priority:E()};S.forEach((e=>{console.log(S);let d=o.id.slice(4);var i,s,u,m,p;d==e.id&&(e.title=t,e.details=l,e.dueDate=c,e.priority=n),i=d,s=t,u=l,m=n,p=c,document.querySelectorAll('[id*="todo"]').forEach((e=>{if(e.id.slice(4)==i){const t=e.querySelector(":first-child"),o=e.querySelector(":nth-child(2)"),l=e.querySelector(":nth-child(3)"),c=e.querySelector(":nth-child(4)");t.textContent=`Title: ${s}`,o.textContent=`Details: ${u}`,l.textContent=`Priority: ${m}`,c.textContent=`Due Date: ${b(p)} ${p.slice(-2)}`}})),r.removeEventListener("click",a),document.querySelector("#edit-pop-up").style.display="none"}))};r.addEventListener("click",a)}))}(g,o);const m=document.createElement("i");m.className=`fas fa-trash-alt todo${e}`,o.appendChild(m);const p=document.createElement("input");p.type="checkbox",p.id=`checkTodo${e}`,p.className=`checkTodo${e}`,p.name="checkTodo";const y=document.createElement("label");y.setAttribute("for",`checkTodo${e}`),o.appendChild(p),o.appendChild(y),m.addEventListener("click",(()=>{S.forEach((e=>{let t=o.id.slice(4);if(t==e.id){const e=S.filter((e=>e.id!=t));S=e}})),o.remove()}))}(g),console.log(S)},C=document.querySelector(".todo-form");let k,L,x,$;const b=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)},w=()=>(console.log(S),S),N=e=>{S=e};document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("#sidebar"),t=document.createElement("div");t.id="addButton",t.className="all-pop-ups";const o=document.createElement("div");o.className="container",o.appendChild(t),e.appendChild(o);const l=document.querySelector(".project1.morning div"),c=document.querySelector(".project1 span").offsetWidth;l.style.width=`${c||"60"}px`,l.style.opacity="1"}(),f(),function(){for(let e=0;e<l.length;e++){const t=c[e];t.addEventListener("click",(()=>{n(),t.style.backgroundColor="low"===t.id?"green":"medium"===t.id?"rgb(212, 212, 76)":"red"}))}}(),function(){for(let e=0;e<l.length;e++){const t=l[e];t.addEventListener("click",(()=>{r(),t.style.backgroundColor="low"===t.className?"green":"medium"===t.className?"rgb(212, 212, 76)":"red"}))}}(),document.querySelector("#addButton").addEventListener("click",(()=>{t.style.display="grid"})),document.querySelectorAll(".close-btn").forEach((e=>{e.addEventListener("click",(()=>{t.style.display="none",document.querySelector("#edit-pop-up").style.display="none"}))})),C.addEventListener("submit",(t=>{t.preventDefault(),k=document.querySelector("#title").value,L=document.querySelector("#details").value,x=(()=>{const e=["low","medium","high"].map((e=>document.querySelector(`.${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].className})(),$=document.querySelector("#date").value,v(k,L,x,$,u()),document.querySelector(".pop-up").style.display="none",document.querySelectorAll(".todo-form input:not(:last-child)").forEach((e=>{e.value=""})),r(),e()})),u(),document.querySelector("#projects ul li"),k="Wake up early",L="at least 7hr sleep",x="high",$="2023-12-07",v("Wake up early","at least 7hr sleep","high","2023-12-07","morning"),e(),function(){const e=document.querySelector("#createProject"),t=document.querySelector("#projects ul");document.querySelector("#submitNewProject").addEventListener("click",(o=>{o.preventDefault();const l=e.value,c=document.createElement("li"),n=document.createElement("div");c.classList.add(`project${y}`,"wrap-text");const r=document.createTextNode(l);c.appendChild(r),n.appendChild(c),n.className=`prox${y}`,t.appendChild(n),e.value="",h(),f(),u(),document.querySelectorAll("#projects li").forEach((e=>{let t=e.childNodes[0].textContent;e.classList.add(t)})),y+=1}))}(),(()=>{const e=document.querySelector(".drawer"),t=document.querySelector("#sidebar");e.addEventListener("click",(()=>{e.classList.contains("active")?(t.style.display="none",e.className=e.className.replace("active","").trim()):(t.style.display="grid",e.classList.add("active"))})),window.addEventListener("resize",(()=>{const o=window.innerWidth;o>669&&(t.style.display="grid",e.className=e.className.replace("active","").trim()),o<670&&!e.classList.contains("active")&&(t.style.display="none")}))})()}))})();