var HomeView = function (theData) {

    this.initialize = function () {
        this.el = $('<div />');
    };

    this.setUpCarSlider = function() {
        var slider = this.el.find('#carPrice-slider');
        slider.slider({
            max: 50000,
            min: 0,
            step: 250,
            value: theData.carPrice,
            change: function(e, ui) {
                $('#carPrice').val(ui.value);
            }
        });
    }

    this.render = function () {
        this.el.html(HomeView.template(theData));

        this.setUpCarSlider();

        return this;
    };

    this.initialize();
}

HomeView.template = Handlebars.compile($('#home-template').html());
