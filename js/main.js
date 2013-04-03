app = {

    storeData: function (theData) {
        if (this.store) {
            this.store.storeData(theData);
        } else {
            this.store = new LocalStorageStore(function () {
                this.store.storeData(theData);
            });
        }
    },

    initialize: function () {
        var self = this;
        this.store = new LocalStorageStore(function () {
            var theData = self.store.getSavedData();
            $('body').html(new HomeView(theData).render().el);
        });
    }
}

$(app.initialize);