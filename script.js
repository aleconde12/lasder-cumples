// Para cambiar o agregar cumpleaños, editá solamente esta lista.
// month es el mes (1 a 12) y day es el día.
const birthdays = [
  { nickname: "Culo", month: 8, day: 24, color: "mint" },
  { nickname: "Puchi", month: 8, day: 26, color: "coral" },
  { nickname: "Monte", month: 3, day: 22, color: "violet" },
  { nickname: "Bren", month: 1, day: 18, color: "sun" },
  { nickname: "Owi", month: 1, day: 31, color: "sky" },
  { nickname: "Gino", month: 2, day: 6, color: "aqua" },
  { nickname: "Sola", month: 10, day: 11, color: "pink" },
  { nickname: "Sir", month: 10, day: 14, color: "blue" },
  { nickname: "Gasty", month: 5, day: 13, color: "orange" },
  { nickname: "Maru", month: 11, day: 21, color: "lavender" },
  { nickname: "Ori", month: 8, day: 18, color: "aqua" },
  { nickname: "Pali", month: 6, day: 8, color: "peach" },
  { nickname: "Jopo", month: 5, day: 11, color: "lime" },
  { nickname: "Tano", month: 12, day: 27, color: "rose" },
  { nickname: "Javi", month: 4, day: 14, color: "aqua" },


];
const fmt = new Intl.DateTimeFormat("es-AR",{day:"numeric",month:"long"});
const now=new Date(), today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
function nextDate(b){const d=new Date(now.getFullYear(),b.month-1,b.day);return d<today?new Date(now.getFullYear()+1,b.month-1,b.day):d}
function days(d){return Math.round((d-today)/86400000)}
const ordered=birthdays.map(b=>({...b,next:nextDate(b)})).sort((a,b)=>a.next-b.next);
const next=ordered[0], left=days(next.next);
document.querySelector(".year").textContent=`Cumples · ${now.getFullYear()}`;
document.querySelector(".hero .avatar").className=`avatar avatar-${next.color}`;
document.querySelector(".hero .avatar").textContent=next.nickname[0];
document.querySelector("h1").textContent=next.nickname;
document.querySelector(".hero .date").textContent=fmt.format(next.next);
document.querySelector(".countdown b").textContent=left===0?"🎉":left;
document.querySelector(".countdown small").textContent=left===0?`¡Hoy cumple ${next.nickname}!`:left===1?"Falta 1 día":`Faltan ${left} días`;
if(left===0)document.querySelector(".countdown").classList.add("today");
document.querySelector(".count").textContent=`${birthdays.length} cumples`;
document.querySelector(".list").innerHTML=ordered.map((b,i)=>{const n=days(b.next);return `
  <article><span class="position">${String(i+1).padStart(2,"0")}</span>
  <div class="mini avatar-${b.color}">${b.nickname[0]}</div>
  <div class="person"><h3>${b.nickname}</h3><p>${fmt.format(b.next)}</p></div>
  <span class="days">${n===0?"hoy":n===1?"1 día":n+" días"}</span></article>`}).join("");
