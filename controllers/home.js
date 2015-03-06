emailClient.HomeController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});