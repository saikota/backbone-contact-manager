/**
 * Created by Sai on 4/14/15.
 */
ContactManager.Views.Contact=Backbone.View.extend({
    tagName:'li',
    events:{
        'click .delete-contact':'onClickDelete'
    },
    initialize:function(){
        this.listenTo(this.model,'remove',this.remove);
    },
    onClickDelete:function(e){
        e.preventDefault();
        this.model.collection.remove(this.model);
    },
    className:'media col-md-6 col-lg-4',
    template: _.template($('#tpl-contact').html()),
    render:function(){
        var html=this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});