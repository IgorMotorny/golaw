(function () {
    let searchField = $('.search');
    let searchInput = searchField.find('input[type="search"]');
    let logo = $('.header__left');

    let checkSearch = function () {
        let contents = searchInput.val();
        if (contents.length !== 0) {
            searchField.addClass('full');

        } else {
            searchField.removeClass('full');
            logo.removeClass('hidden');
        }
    };

    searchInput.focus(function () {

        searchField.addClass('active');
        logo.addClass('hidden');

    }).blur(function () {

        searchField.removeClass('active');

        checkSearch();

    });

})();
