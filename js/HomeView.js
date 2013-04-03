var HomeView = function (theData) {

    this.initialize = function () {
    };

    this.render = function () {
        $('#carPrice-slider').val(theData.carPrice);
        $('#carPrice-slider').slider('refresh')
        $('#tradeIn-slider').val(theData.tradeInPrice);
        $('#tradeIn-slider').slider('refresh');
        $('#payoff-text').val(theData.tradeInAmount);

        return this;
    };

    this.initialize();
}


