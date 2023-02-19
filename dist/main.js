(()=>{"use strict";const e=()=>{document.querySelectorAll('[class*="checkTodo"]').forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentElement.getElementsByTagName("p");if(e.checked)for(let e=0;e<t.length;e++)t[e].style.textDecoration="line-through";else for(let e=0;e<t.length;e++)t[e].style.textDecoration=""}))}))},t=document.querySelector(".pop-up"),o=["low","medium","high"],l=o.map((e=>document.querySelector(`.${e}`))),n=o.map((e=>document.querySelector(`#${e}`))),c=()=>{for(let e=0;e<l.length;e++)n[e].style.backgroundColor="rgb(154, 194, 209)"},r=()=>{for(let e=0;e<l.length;e++)l[e].style.backgroundColor="rgb(154, 194, 209)"},d=document.querySelector('#edit-pop-up input[name="title"]'),i=document.querySelector('#edit-pop-up input[name="details"]'),s=document.querySelector('#edit-pop-up input[name="date"]');let a="morning";const u=()=>{const e=document.querySelectorAll("#projects li");return e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.style.backgroundColor="#dab785"})),t.style.backgroundColor="red";const o=document.querySelectorAll('[id*="todo"]');a=t.childNodes[0].textContent,t.classList.add(a),o.forEach((e=>{e.className!=a?e.style.display="none":e.style.display="flex"}))}))})),m(),a},m=()=>{document.querySelector(".show-all-todos").addEventListener("click",(()=>{document.querySelectorAll('[id*="todo"]').forEach((e=>{e.style.display="flex"}))}))};let p=4;function h(){const e=document.querySelectorAll('[class*="project"]');let t=0;e.forEach((e=>{if(e.querySelector("button"))console.log("1");else{const o=document.createElement("button");o.textContent="Delete Project",o.className=`delProject${t}`,e.appendChild(o),o.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const t=o.parentElement.className.split(" ").slice(1,2)[0];console.log(t);const l=document.querySelectorAll(`.${t.toString()}`);console.log(l),l.forEach((e=>{e.remove();const o=D(),l=o.findIndex((e=>e.project==t));-1!==l&&o.splice(l,1),$(o)}))}))}t+=1}))}const y=()=>{const e=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].id};let f=[],g=0;function E(e,t,o,l,n,c){this.id=e,this.title=t,this.details=o,this.priority=l,this.dueDate=n,this.project=c}const S=(e,t,o,l,n)=>{g++;const r=new E(g,e,t,o,l,n);f.push(r),function(e){const t=document.querySelector("#main-list"),o=document.createElement("div");o.id=`todo${e}`,o.classList.add(u()),t.appendChild(o);const l=document.createElement("p");l.textContent=`Title: ${C}`,o.appendChild(l);const n=document.createElement("p");n.textContent=`Details: ${v}`,o.appendChild(n);const r=document.createElement("p");r.textContent=`Priority: ${k}`,o.appendChild(r);const a=document.createElement("p");console.log(b),a.textContent=`Due Date: ${x(b)} ${b.slice(-2)}`,o.appendChild(a),function(e,t){const o=document.createElement("button");o.className="all-pop-ups",o.id=`edit${e}`,o.textContent="Edit",t.appendChild(o),o.addEventListener("click",(()=>{document.querySelector("#edit-pop-up").style.display="grid";let e=o.parentElement;const t=e.querySelector(":first-child").textContent.slice(6),l=e.querySelector(":nth-child(2)").textContent.slice(9),n=e.querySelector(":nth-child(4)").textContent.slice(14);(()=>{const t=["low","medium","high"].map((e=>document.querySelector(`#${e}`)));for(let o=0;o<t.length;o++){const l=e.querySelector(":nth-child(3)").textContent.slice(10);if(l==t[o].id){const e=t[o];c(),e.style.backgroundColor="low"==l?"green":"medium"===l?"rgb(212, 212, 76)":"red"}}})(),((e,t,o)=>{d.value=e,i.value=t,s.value=o})(t,l,(()=>{let e="";return f.forEach((t=>{t.dueDate.slice(8,10)==n&&(e=t.dueDate)})),e})());const r=document.querySelector("#submitEdit"),a=e=>{e.preventDefault();const{title:t,details:l,date:n,priority:c}={title:d.value,details:i.value,date:s.value,priority:y()};f.forEach((e=>{console.log(f);let d=o.id.slice(4);var i,s,u,m,p;d==e.id&&(e.title=t,e.details=l,e.dueDate=n,e.priority=c),i=d,s=t,u=l,m=c,p=n,document.querySelectorAll('[id*="todo"]').forEach((e=>{if(e.id.slice(4)==i){const t=e.querySelector(":first-child"),o=e.querySelector(":nth-child(2)"),l=e.querySelector(":nth-child(3)"),n=e.querySelector(":nth-child(4)");t.textContent=`Title: ${s}`,o.textContent=`Details: ${u}`,l.textContent=`Priority: ${m}`,n.textContent=`Due Date: ${x(p)} ${p.slice(-2)}`}})),r.removeEventListener("click",a),document.querySelector("#edit-pop-up").style.display="none"}))};r.addEventListener("click",a)}))}(g,o);const m=document.createElement("button");m.className=`todo${e}`,m.textContent="Delete",o.appendChild(m);const p=document.createElement("input");p.type="checkbox",p.className=`checkTodo${e}`,p.name="checkTodo";const h=document.createElement("label");h.setAttribute("for","checkTodo"),o.appendChild(p),o.appendChild(h),m.addEventListener("click",(()=>{f.forEach((e=>{let t=o.id.slice(4);if(t==e.id){const e=f.filter((e=>e.id!=t));f=e}})),o.remove()}))}(g),console.log(f)},q=document.querySelector(".todo-form");let C,v,k,b;const x=e=>{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)},D=()=>(console.log(f),f),$=e=>{f=e};document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("header"),t=document.querySelector("#sidebar"),o=document.createElement("h1");o.textContent="TO-DO",e.appendChild(o);const l=document.createElement("div");l.id="addButton",l.className="all-pop-ups";const n=document.createElement("div");n.className="container",n.appendChild(l),t.appendChild(n)}(),h(),function(){for(let e=0;e<l.length;e++){const t=n[e];t.addEventListener("click",(()=>{c(),t.style.backgroundColor="low"===t.id?"green":"medium"===t.id?"rgb(212, 212, 76)":"red"}))}}(),function(){for(let e=0;e<l.length;e++){const t=l[e];t.addEventListener("click",(()=>{r(),t.style.backgroundColor="low"===t.className?"green":"medium"===t.className?"rgb(212, 212, 76)":"red"}))}}(),document.querySelector("#addButton").addEventListener("click",(()=>{t.style.display="grid"})),document.querySelectorAll(".close-btn").forEach((e=>{e.addEventListener("click",(()=>{t.style.display="none",document.querySelector("#edit-pop-up").style.display="none"}))})),q.addEventListener("submit",(t=>{t.preventDefault(),C=document.querySelector("#title").value,v=document.querySelector("#details").value,k=(()=>{const e=["low","medium","high"].map((e=>document.querySelector(`.${e}`)));for(let t=0;t<e.length;t++)if("rgb(154, 194, 209)"!==e[t].style.backgroundColor)return e[t].className})(),b=document.querySelector("#date").value,S(C,v,k,b,u()),document.querySelector(".pop-up").style.display="none",document.querySelectorAll(".todo-form input:not(:last-child)").forEach((e=>{e.value=""})),r(),e()})),u(),document.querySelector("#projects ul li").style.backgroundColor="red",C="Wake up early",v="at least 7hr sleep",k="high",b="2023-12-07",S("Wake up early","at least 7hr sleep","high","2023-12-07","morning"),e(),function(){const e=document.querySelector("#createProject"),t=document.querySelector("#projects ul");document.querySelector("#submitNewProject").addEventListener("click",(o=>{o.preventDefault();const l=e.value,n=document.createElement("li");n.classList.add(`project${p}`);const c=document.createTextNode(l);n.appendChild(c),t.appendChild(n),e.value="",h(),u(),document.querySelectorAll("#projects li").forEach((e=>{let t=e.childNodes[0].textContent;e.classList.add(t)})),p+=1}))}()}))})();