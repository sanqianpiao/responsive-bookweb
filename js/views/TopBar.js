app.views.TopBar = Backbone.View.extend({
    events: {
        'click [data-id=category-toggle]': 'toggleCategories',
        'click [data-id=category]': 'selectCategory'
    },

    toggleCategories: function(e) {
        e.preventDefault();
        this.$('[data-id=categories]').toggleClass('is-visible');
    },

    selectCategory: function(e) {
        this.$('[data-id=categories]').removeClass('is-visible');
    }
})