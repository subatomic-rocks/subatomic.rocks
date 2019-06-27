(($) => {
    // Faz scroll para determinado elemento
    var fnScrollToElement = function fnScrollToElement (element, pixelsPerSecond) {
        // Velocidade em pixels por segundo
        var pixelsPerSecond = pixelsPerSecond || 2400;
        var target = $(element).offset().top;
        var distance = Math.abs(body.scrollTop() - target);
        var duration = 1000 * distance / pixelsPerSecond;

        body.stop().animate({ scrollTop: target }, duration, 'easeInOutQuart');
    }
    var fnScrollToElementLink = function fnScrollToElementLink (link, element) {
        $(link).click(() => {
            fnScrollToElement(element);
            return false;
        });
    }
    
    // Forçar o navbar-brand a voltar para o topo do main
    fnScrollToElementLink('a.navbar-brand', 'main');

    // Registrar menu, body, etc
    var body = $('html,body');
    var menu = $('#nav-main');
    var menuItems = [];

    // Evento para quando tocar no link do menu responsivo o menu fechar
    menu.find('.nav-item a').on('click', () => {
        menu.find('.navbar-collapse').collapse('hide');
    });

    // Criar cache com itens do menu
    menu.find('.nav-item a').each(function () {
        try {
            var href = $(this).attr('href');
            var el = $(href);

            // Caso o href seja para mesma página, estamos em uma seção, colocar no cache
            if (el.length > 0) {
                menuItems.push({ target: el, link: $(this).parent() });

                $(this).click(() => {
                    fnScrollToElement(el);
                    return false;
                });
            }
        } catch (e) { }
    });

    // Atualiza current do menu
    var fnCheckCurrentMenu = function fnCheckCurrentMenu () {
        var scroll = body.scrollTop();
        var scrollCenter = scroll + $(window).height() * 0.35;

        for (var i = 0, menuItem; menuItem = menuItems[i++];) {
            if (scrollCenter >= menuItem.target.offset().top) {
                menu.find('.nav-item.active').removeClass('active');
                menuItem.link.addClass('active');
            }
        }
    }

    // Evento de scroll
    $(window).on('scroll', fnCheckCurrentMenu);
    fnCheckCurrentMenu();
})(jQuery);