
// Family History Site helpers (no frameworks)
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

function setActive(linkText){
  $$(".nav a").forEach(a => {
    if(a.textContent.trim() === linkText){ a.setAttribute("aria-current","page"); }
    else { a.removeAttribute("aria-current"); }
  });
}

async function loadJSON(path){
  const res = await fetch(path);
  if(!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function cardPerson(p){
  return `<article class="card">
    <div class="badge">${p.birthYear || "Year?"}</div>
    <h3>${p.name}</h3>
    <p>${p.summary || ""}</p>
    <p class="small">${p.location || ""}</p>
  </article>`;
}

function filterPeople(list, q){
  q = q.toLowerCase();
  return list.filter(p => (p.name||"").toLowerCase().includes(q)
    || (p.location||"").toLowerCase().includes(q)
    || (p.summary||"").toLowerCase().includes(q));
}

// Simple auth prompt for admin page (just to hide from casual viewers; not security)
function adminGate(expected=""){
  const u = new URL(location.href);
  const token = u.searchParams.get("key");
  if(expected && token !== expected){
    $("#admin-locked")?.classList.remove("hidden");
    $("#admin-content")?.classList.add("hidden");
  } else {
    $("#admin-locked")?.classList.add("hidden");
    $("#admin-content")?.classList.remove("hidden");
  }
}
