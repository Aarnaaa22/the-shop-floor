// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const products = [
  { id: 1, name: "Ceramic Pour-Over Set", category: "Kitchen", price: 58.00, stock: 7, description: "Matte-glazed ceramic dripper and server. Brews 600 ml perfectly.", image: "ceramic_mugs.jpg" },
  { id: 2, name: "Brass Desk Lamp", category: "Lighting", price: 124.00, stock: 4, description: "Articulating arm, warm Edison bulb included. Mid-century silhouette.", image: "brass_lamp_desk.jpg" },
  {id: 3, name: "Jewellery Set", category: "Jewellery", price: 85.00, stock: 12, description: "Elegant handcrafted jewellery set suitable for formal and casual wear.", image: "Jewellery.jpg"},
];

const EMOJIS = { Kitchen: "📦", Lighting: "💡" };

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let minPriceFilter = null;

// ─────────────────────────────────────────────
// FILTER + SORT
// ─────────────────────────────────────────────
function getFilteredProducts() {
  let list = [...products];

  if (minPriceFilter !== null) {
    list = list.filter(p => p.price >= minPriceFilter);
  }

  const sort = document.getElementById('sortSelect').value;

  if (sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if (sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
  if (sort === 'name-asc') list.sort((a,b)=>a.name.localeCompare(b.name));
  if (sort === 'stock-desc') list.sort((a,b)=>b.stock-a.stock);

  return list;
}

// ─────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const list = getFilteredProducts();

  document.getElementById('count-label').innerHTML =
    `Showing <strong>${list.length}</strong> of <strong>${products.length}</strong> products`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <h2>No products match</h2>
        <p>Try lowering the minimum price filter.</p>
      </div>`;
    logToConsole(list, true);
    return;
  }

  grid.innerHTML = list.map((p,i)=>{
    const stockClass = p.stock===0?'stock-out':p.stock<6?'stock-low':'stock-ok';
    const stockLabel = p.stock===0?'Out of stock':p.stock<6?`Only ${p.stock} left`:`${p.stock} in stock`;
    const emoji = EMOJIS[p.category] || '📦';

    return `
    <div class="card" style="animation-delay:${i*0.04}s">
      <div class="card-img-wrap">
        ${p.image
  ? `<img src="${p.image}" class="card-img-placeholder" alt="${p.name}">`
  : `<div class="card-img-placeholder"></div>`
}
        <span class="card-category">${p.category}</span>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.description}</div>
        <div class="card-footer">
          <div class="card-price">$${p.price.toFixed(2)}</div>
          <span class="card-stock ${stockClass}">${stockLabel}</span>
        </div>
      </div>
    </div>`;
  }).join('');

  logToConsole(list,false);
}

// ─────────────────────────────────────────────
// CONSOLE LOG
// ─────────────────────────────────────────────
function logToConsole(list, empty){
  const body=document.getElementById('console-body');
  const ts=new Date().toLocaleTimeString();

  const intro=minPriceFilter!==null
      ?`filterProductsByMinPrice(${minPriceFilter})`
      :`readAllProducts()`;

  let html=`<div class="log-line"><span class="prompt">▶</span><span>${intro} — ${ts}</span></div>`;
  html+=`<hr class="log-divider">`;

  if(empty){
    html+=`<div class="log-line"><span class="prompt">&nbsp;</span><span style="color:#f5a067">No results found for min price: $${minPriceFilter}</span></div>`;
  }else{
    list.forEach(p=>{
      html+=`
      <div class="log-group">&nbsp; ── Product #${p.id} ──</div>
      <div class="log-line"><span class="prompt">&nbsp;</span><span class="key">name</span>: <span class="val-str">"${p.name}"</span></div>
      <div class="log-line"><span class="prompt">&nbsp;</span><span class="key">category</span>: <span class="val-str">"${p.category}"</span></div>
      <div class="log-line"><span class="prompt">&nbsp;</span><span class="key">price</span>: <span class="val-num">$${p.price.toFixed(2)}</span></div>
      <div class="log-line"><span class="prompt">&nbsp;</span><span class="key">stock</span>: <span class="val-num">${p.stock}</span></div>
      `;
    });
  }

  // accumulate logs so scrolling works
  body.innerHTML += html;
  body.scrollTop = body.scrollHeight;
}

// ─────────────────────────────────────────────
// FILTER CONTROLS
// ─────────────────────────────────────────────
function applyFilter(){
  const val=parseFloat(document.getElementById('minPrice').value);
  if(isNaN(val)||val<0){alert('Please enter a valid minimum price.');return;}
  minPriceFilter=val;
  renderProducts();
}

function resetFilter(){
  minPriceFilter=null;
  document.getElementById('minPrice').value='';
  renderProducts();
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.documentElement.style.fontSize = "18px"; // slightly bigger UI
document.getElementById('header-count').textContent=`${products.length} items`;
renderProducts();


