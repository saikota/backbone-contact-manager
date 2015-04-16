/**
 * Created by Sai on 4/15/15.
 */
ContactManager.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'contacts': 'showContacts',
        'contacts/new': 'newContact',
        'contacts/edit/:id': 'editContact'
    }
});