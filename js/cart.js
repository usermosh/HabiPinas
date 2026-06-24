
const getCart=()=>JSON.parse(localStorage.getItem('cart')||'[]');
const getProducts=()=>Array.isArray(window.products)?window.products:[];
const getProductById=id=>getProducts().find(x=>x.id===id) || null;
const save=c=>{localStorage.setItem('cart',JSON.stringify(c));updateCount();showCart();updateCheckoutSummary();}

function ensureModal(){
    if (document.getElementById('site-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'site-modal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class='modal-card'>
            <button class='modal-close' type='button' aria-label='Close'>×</button>
            <h3 class='modal-title'></h3>
            <p class='modal-body'></p>
            <div class='modal-actions'></div>
        </div>
    `;

    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    document.body.appendChild(modal);
}

function closeModal(){
    const modal=document.getElementById('site-modal');
    if(modal) modal.classList.remove('active');
}

function openModal({ title, message, confirmText='Continue', cancelText='Close', hideCancel=false, onConfirm=null, onCancel=null }){
    ensureModal();
    const modal=document.getElementById('site-modal');
    const titleEl=modal.querySelector('.modal-title');
    const bodyEl=modal.querySelector('.modal-body');
    const actionsEl=modal.querySelector('.modal-actions');

    titleEl.textContent = title;
    bodyEl.textContent = message;
    actionsEl.innerHTML='';

    if (!hideCancel) {
        const cancelBtn=document.createElement('button');
        cancelBtn.className='btn-secondary';
        cancelBtn.textContent=cancelText;
        cancelBtn.addEventListener('click', ()=>{
            if (onCancel) onCancel();
            else closeModal();
        });
        actionsEl.appendChild(cancelBtn);
    }

    const confirmBtn=document.createElement('button');
    confirmBtn.className='btn';
    confirmBtn.textContent=confirmText;
    confirmBtn.addEventListener('click', ()=>{
        if (onConfirm) onConfirm();
        else closeModal();
    });
    actionsEl.appendChild(confirmBtn);

    modal.classList.add('active');
}

function addToCart(id){
    let c=getCart(); 
    let item=c.find(i=>i.id===id); 
    item?item.qty++:c.push({id,qty:1}); 
    save(c);

    const product=getProductById(id);
    openModal({
        title: 'Added to cart',
        message: `${product ? product.name : 'The item'} has been added to your cart.`,
        confirmText: 'View Cart',
        cancelText: 'Continue Shopping',
        onConfirm: ()=>location.href='cart.html',
        onCancel: ()=>closeModal()
    });
}

function updateCount(){
    document.querySelectorAll('#cart-count').forEach(e=>e.textContent=getCart().reduce((a,b)=>a+b.qty,0));
}

async function showCart(){
    const wrap=document.getElementById('cart-items');
    if(!wrap)return;
    
    const cart = getCart();
    const products=getProducts();
    let total=0, subtotal=0;

    const emptyEl=document.getElementById('empty-cart');
    const checkoutBtn=document.getElementById('checkout-btn');

    if(products.length===0){
        wrap.innerHTML='';
        if(emptyEl) emptyEl.style.display='flex';
        if(checkoutBtn) checkoutBtn.disabled=true;
        return;
    }
    
    if(cart.length===0){
        if(emptyEl) emptyEl.style.display='flex';
        if(checkoutBtn) checkoutBtn.disabled=true;
        wrap.innerHTML='';
        return;
    }
    
    if(emptyEl) emptyEl.style.display='none';
    if(checkoutBtn) checkoutBtn.disabled=false;
    
    wrap.innerHTML=cart.map((item,idx)=>{
        const p=getProductById(item.id);
        if(!p) return '';

        const itemTotal = p.price*item.qty;
        subtotal += itemTotal;
        total += itemTotal;
        
        return `
            <div class='cart-item' style='animation-delay: ${idx*50}ms'>
                <div class='cart-item-image'>
                    <img src='${p.image}' alt='${p.name}' onerror="this.src='https://via.placeholder.com/150'">
                </div>
                <div class='cart-item-details'>
                    <h4>${p.name}</h4>
                    <p class='artisan-name'>${p.producer || ''}</p>
                    <div class='price-info'>
                        <span class='unit-price'>₱${p.price}</span>
                    </div>
                </div>
                <div class='cart-item-quantity'>
                    <button class='qty-btn' onclick='updateQty(${item.id}, -1)'>−</button>
                    <input type='number' class='qty-input' value='${item.qty}' readonly>
                    <button class='qty-btn' onclick='updateQty(${item.id}, 1)'>+</button>
                </div>
                <div class='cart-item-total'>
                    <p>₱${itemTotal}</p>
                </div>
                <button class='remove-btn' onclick='removeItem(${item.id})' title='Remove item'>×</button>
            </div>
        `;
    }).filter(Boolean).join('');
    
    const shipping = subtotal > 1000 ? 0 : 50;
    total = subtotal + shipping;
    
    const subtotalEl=document.getElementById('subtotal');
    const shippingEl=document.getElementById('shipping');
    const totalEl=document.getElementById('total');
    if(subtotalEl) subtotalEl.textContent='₱'+subtotal;
    if(shippingEl) shippingEl.textContent=shipping===0?'Free':'₱'+shipping;
    if(totalEl) totalEl.textContent='₱'+total;
}

function updateQty(id, change){
    let c=getCart();
    let item=c.find(i=>i.id===id);
    if(item){
        item.qty+=change;
        if(item.qty<=0){
            removeItem(id);
        }else{
            save(c);
        }
    }
}

function removeItem(id){
    save(getCart().filter(i=>i.id!==id));
}

async function updateCheckoutSummary(){
    const wrap=document.getElementById('order-items');
    if(!wrap)return;
    
    const cart = getCart();
    const products=getProducts();
    let subtotal=0;

    if(products.length===0){
        wrap.innerHTML='';
        return;
    }
    
    wrap.innerHTML=cart.map(item=>{
        const p=getProductById(item.id);
        if(!p) return '';

        const itemTotal = p.price*item.qty;
        subtotal += itemTotal;
        
        return `
            <div class='order-item'>
                <div class='order-item-img'>
                    <img src='${p.image}' alt='${p.name}' onerror="this.src='https://via.placeholder.com/80'">
                </div>
                <div class='order-item-info'>
                    <p class='order-item-name'>${p.name}</p>
                    <p class='order-item-qty'>Qty: ${item.qty}</p>
                </div>
                <span class='order-item-price'>₱${itemTotal}</span>
            </div>
        `;
    }).filter(Boolean).join('');
    
    const shipping = subtotal > 1000 ? 0 : 50;
    const total = subtotal + shipping;
    
    const subtotalEl=document.getElementById('checkout-subtotal');
    const shippingEl=document.getElementById('checkout-shipping');
    const totalEl=document.getElementById('checkout-total');
    if(subtotalEl) subtotalEl.textContent='₱'+subtotal;
    if(shippingEl) shippingEl.textContent=shipping===0?'Free':'₱'+shipping;
    if(totalEl) totalEl.textContent='₱'+total;
}

function refreshCartUI(){
    updateCount();
    showCart();
    updateCheckoutSummary();
}

window.refreshCartUI = refreshCartUI;
window.openModal = openModal;
window.closeModal = closeModal;
window.addEventListener('products-ready', refreshCartUI);
refreshCartUI();
