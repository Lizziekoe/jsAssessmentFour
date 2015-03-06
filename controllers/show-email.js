emailClient.showEmailController = Ember.ArrayController.extend({
  actions: {
    showEmail: function() {
    	this.get('model');
    }
  }
});