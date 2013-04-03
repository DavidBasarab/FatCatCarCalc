var HomeView = function (theData) {

    this.initialize = function () {
        this.el = $('<div />');
    };



    this.setUpCarSlider = function () {
        var slider = this.el.find('#carPrice-slider');
        slider.slider({
            max: 50000,
            min: 0,
            step: 250,
            value: theData.carPrice,
            stop: function (e, ui) {
                $('#carPrice').val(ui.value);
//                $('#carPrice').formatCurrency({
//                    roundToDecimalPlace: 0
//                });
            }
        });
    }

    this.render = function () {
        var movies = [
            { name: "The Red Violin", releaseYear: "1998" },
            { name: "Eyes Wide Shut", releaseYear: "1999" },
            { name: "The Inheritance", releaseYear: "1976" }
        ];
        this.el.html($('#home-template').render(movies));

        this.el.find('#test-idea').trigger('create');
//        this.el.html(HomeView.template(theData));
//        var $priceInput = this.el.find('#carPrice');
//        $priceInput.formatCurrency({
//            roundToDecimalPlace: 0
//        });
//        this.setUpCarSlider();

        return this;
    };

    this.initialize();
}


