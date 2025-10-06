const navbar = document.querySelector('.navbar');
const faqItems = document.querySelectorAll('.faq-item');
const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

features.forEach(feature => {
    observer.observe(feature);
});

document.querySelectorAll('.submit-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const input = button.previousElementSibling;
        const email = input.value;
        
        if (email && email.includes('@')) {
            button.textContent = 'Processando...';
            button.style.background = '#831010';
            
            setTimeout(() => {
                button.textContent = 'Vamos lá ›';
                button.style.background = '#E50914';
                alert('Obrigado! Em breve você receberá mais informações no email: ' + email);
                input.value = '';
            }, 1500);
        } else {
            input.style.borderColor = '#E50914';
            input.focus();
            
            setTimeout(() => {
                input.style.borderColor = 'rgba(255,255,255,0.3)';
            }, 2000);
        }
    });
});

document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', () => {
        const planName = button.closest('.plan-card').querySelector('.plan-badge').textContent;
        const planPrice = button.closest('.plan-card').querySelector('.plan-price').textContent;
        
        button.textContent = 'Processando...';
        button.style.background = '#831010';
        
        setTimeout(() => {
            button.textContent = 'Selecionar';
            button.style.background = '#E50914';
            alert(`Plano ${planName} selecionado!\nValor: ${planPrice}\n\nVocê será redirecionado para a página de pagamento.`);
        }, 1500);
    });
});

const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = `scale(1.1) rotate(${index * 5}deg)`;
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.hero-content > *');
    
    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

const planCards = document.querySelectorAll('.plan-card');

planCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        planCards.forEach(c => {
            if (c !== card && !c.classList.contains('featured')) {
                c.style.opacity = '0.6';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        planCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

const parallaxElements = document.querySelectorAll('.floating-card');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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