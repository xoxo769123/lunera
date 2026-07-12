// Enable animation classes (page starts with content visible as fallback)
document.documentElement.classList.add('js-enabled');

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});

// ===== WHATSAPP ORDER FORM =====
function submitOrder(e) {
    e.preventDefault();

    const form = document.getElementById('orderForm');
    const formData = new FormData(form);

    const perfume = formData.get('perfume');
    const name = formData.get('name');
    const phone = formData.get('phone');
    const city = formData.get('city');
    const notes = formData.get('notes') || 'لا يوجد';

    let price = '75';
    if (perfume === 'VÉRA') price = '85';

    const message = `🌙 *طلب جديد من موقع Lunéra* 🌙

━━━━━━━━━━━━━━━
📦 *المنتج:* ${perfume}
💰 *السعر:* ${price} ريال

👤 *الاسم:* ${name}
📱 *الجوال:* ${phone}
📍 *المدينة:* ${city}
📝 *ملاحظات:* ${notes}
━━━━━━━━━━━━━━━

يرجى تأكيد الطلب والتواصل معي لإتمام عملية الدفع والتوصيل.`;

    const whatsappUrl = `https://wa.me/966596032819?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});