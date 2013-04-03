var HomeView = function (theData) {

    var carPriceInput = $('#carPrice-slider');
    var tradeInInput = $('#tradeIn-slider');
    var payoffText =  $('#payoff-text');
    var interestText =   $('#interest-text');

    this.initialize = function () {
    };

    this.onDataChange = function () {
        var changedData = theData;
        changedData.carPrice = carPriceInput.val();
        changedData.tradeInPrice = tradeInInput.val();
        changedData.tradeInAmount = payoffText.val();
        changedData.interest = interestText.val();

        app.storeData(changedData);

    };

    this.render = function () {

        carPriceInput.val(theData.carPrice);
        carPriceInput.slider('refresh')

        tradeInInput.val(theData.tradeInPrice);
        tradeInInput.slider('refresh');

        payoffText.val(theData.tradeInAmount);
        interestText.val(theData.interest);

        carPriceInput.bind('change', this.onDataChange);
        tradeInInput.bind('change', this.onDataChange);
        payoffText.bind('change', this.onDataChange);
        interestText.bind('change', this.onDataChange);


        return this;
    };

    this.initialize();
}


