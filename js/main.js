app = {
    initialize: function () {
        var self = this;
        this.store = new LocalStorageStore(function () {
            var theData = self.store.getSavedData();
            $('body').html(new HomeView(theData).render().el);
        });
    }
}

app.initialize();