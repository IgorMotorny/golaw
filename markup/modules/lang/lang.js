(function () {
    'use strict';

    const selector = {
        root: '.lang',
        obj: '.lang__list',
        item: '.lang__item',
        nav: '.lang-navigation',
        navItem: '.lang-navigation__item',
        active: 'active'
    };

    let lang = {
        root: $(selector.root),
        obj: $(selector.obj),
        navItems: $(selector.navItem)
    };

    lang.items = lang.obj.find(selector.item);

    let list = {};

    lang.items.each(function (i) {
        let $item = $(this);

        list[$item.attr('data-lang')] = [$item, lang.navItems.eq(i)];
    });


    lang.getHeight = function () {

        this.height = 0;

        let itemHeight = this.items.outerHeight(true) + this.obj.innerHeight() - this.obj.outerHeight();

        this.height = itemHeight * this.items.length;


    };

    lang.setHeight = function () {

        if (!this.height) {
            return;
        }


        this.obj.css('height', this.height);
    };



    lang.getHeight();

    $(selector.root).on('click touch', function () {

        if (lang.root.is('.' + selector.active)) {

            lang.obj.css('height', lang.items.height());

            lang.root.removeClass(selector.active);
        } else {

            lang.setHeight();

            lang.root.addClass(selector.active);
        }
    });


    $(selector.item + ', ' +
        selector.navItem).on('click tocuh', function () {
        let $item = $(this);
        let index = $item.attr('data-lang');

        $(selector.item + '.' + selector.active)
            .removeClass(selector.active);

        $(selector.navItem + '.' + selector.active)
            .removeClass(selector.active);

        list[index][0].addClass(selector.active).prependTo(selector.obj);
        list[index][1].addClass(selector.active);

    });


})();
