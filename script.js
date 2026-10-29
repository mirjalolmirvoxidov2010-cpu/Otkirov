```html
<script>
    // 1. Navigatsiya menyusiga aktiv holat berish
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Sahifa ochilganda elementlarni animatsiya qilish
    const animatedElements = document.querySelectorAll(
        '.history-card, .mining-card, .author-card, .about-grid, .discovery-grid, .importance-grid'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(35px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => observer.observe(element));

    // 3. Sahifa yuqoriga qaytish tugmasi
    const topButton = document.createElement('button');

    topButton.innerHTML = '↑';
    topButton.setAttribute('aria-label', 'Sahifa boshiga qaytish');

    Object.assign(topButton.style, {
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        width: '48px',
        height: '48px',
        border: 'none',
        borderRadius: '50%',
        background: '#e9b949',
        color: '#10100e',
        fontSize: '25px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'none',
        zIndex: '1000',
        boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
    });

    document.body.appendChild(topButton);

    window.addEventListener('scroll', () => {
        topButton.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Statistik raqamlarni animatsiya bilan chiqarish
    const statNumbers = document.querySelectorAll('.stat strong');

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'color 0.4s ease';
                entry.target.style.color = '#ffdf83';
                setTimeout(() => {
                    entry.target.style.color = '#e9b949';
                }, 500);

                statObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(number => statObserver.observe(number));

    // 5. Rasm yuklanmasa, muqobil ko‘rinish
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
            this.style.background = '#252319';
            this.alt = 'Rasm yuklanmadi. Internet aloqasini tekshiring.';
        });
    });

    // 6. Muallif kartalariga interaktiv effekt
    document.querySelectorAll('.author-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 12px 30px rgba(233, 185, 73, 0.12)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });

    // 7. Joriy yilni avtomatik chiqarish
    const footerYear = document.querySelector('footer p:last-child');

    if (footerYear) {
        footerYear.textContent =
            `© ${new Date().getFullYear()} | Barcha huquqlar himoyalangan.`;
    }

    console.log('Muruntov sayti muvaffaqiyatli ishga tushdi!');
</script>
```
