document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuButton.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Ajustar menu na mudança de tamanho da tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de scroll para as seções
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.solution-card, .benefit-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Adiciona opacidade inicial para animação
    const solutionCards = document.querySelectorAll('.solution-card');
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    solutionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Aqui você pode adicionar o código para enviar o formulário
            console.log(`Formulário enviado: Nome - ${name}, Email - ${email}`);
            
            // Feedback visual
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Resetar formulário após 3 segundos
            setTimeout(() => {
                contactForm.reset();
                submitButton.innerHTML = 'Enviar Mensagem';
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
    }
    
    // Animação para as barras de progresso
    const animateProgressBars = function() {
        const progressBars = document.querySelectorAll('.progress');
        const techSection = document.querySelector('.technology');
        
        if (isElementInViewport(techSection)) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            
            // Remove o event listener após a animação
            window.removeEventListener('scroll', animateProgressBars);
        }
    };
    
    // Verifica se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Verifica ao carregar a página
});
