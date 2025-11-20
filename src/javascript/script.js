$(document).ready(function() {
    // Alternar menu móvel
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    // Lógica de rolagem e destaque do menu ativo
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        // Adiciona sombra ao cabeçalho ao rolar
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        // Determina a seção ativa
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        // Adiciona a classe 'active' ao item de navegação correto
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Configuração do ScrollReveal para animações
    const defaultReveal = {
        duration: 1000,
        distance: '20px',
        delay: 300
    };

    ScrollReveal().reveal('#cta', {
        ...defaultReveal,
        origin: 'left'
    });

    ScrollReveal().reveal('#banner img', {
        ...defaultReveal,
        origin: 'right'
    });

    // Animação sequencial para os pratos
    ScrollReveal().reveal('.dish', {
        ...defaultReveal,
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('#testimonial_chef', {
        ...defaultReveal,
        origin: 'left'
    });

    // Animação sequencial para os depoimentos
    ScrollReveal().reveal('.feedback', {
        ...defaultReveal,
        origin: 'right',
        interval: 200
    });
});