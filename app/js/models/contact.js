/**
 * Created by Sai on 4/14/15.
 */
ContactManager.Models.contact=Backbone.Model.extend({
    defaults:{
        name:null,
        tel:null,
        email:null,
        avatar:null
    },
    initialize:function(){
        this.set('avatar', _.random(1,15)+'.jpg');
    }
});