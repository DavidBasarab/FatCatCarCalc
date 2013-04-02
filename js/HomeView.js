var HomeView = function (theData) {

    this.initialize = function () {
        this.el = $('<div />');
    };

    this.render = function () {
        this.el.html(HomeView.template(theData));
        return this;
    };

    this.initialize();
}

HomeView.template = Handlebars.compile($('#home-template').html());
