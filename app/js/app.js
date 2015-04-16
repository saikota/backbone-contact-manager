window.ContactManager={
    Models:{},
    Collections:{},
    Views:{},

    start: function(data) {
        var contacts=new ContactManager.Collections.Contacts(data.contacts);
        var router=new ContactManager.Router();


        router.on('route:home', function () {
            router.navigate('contacts', {trigger: true, replace: true});

        });

        router.on('route:showContacts', function () {
            var contactsView = new ContactManager.Views.Contacts({collection: contacts});
            $('.main-container').html(contactsView.render().$el);
        });

        router.on('route:newContact',function(){
           console.log(" routing to new contact");
        });

        router.on('route:editContact',function(){
            console.log(" routing to edit a contact");
        });

        Backbone.history.start();

    }
};