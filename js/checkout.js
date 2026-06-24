document.getElementById('checkoutForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const form = e.target;
    const fullName = form.querySelector('input[name="fullName"]').value;

    window.openModal({
        title: 'Order placed!',
        message: `Thank you for your purchase, ${fullName}! Our team will confirm product availability, payment, and delivery details before processing your order.`,
        confirmText: 'Back to Home',
        hideCancel: true,
        onConfirm: ()=>{
            localStorage.removeItem('cart');
            location.href='index.html';
        }
    });
});