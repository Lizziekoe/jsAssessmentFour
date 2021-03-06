emailClient.HomeController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get('subject'),
        sender: this.get('sender'),
        body: this.get('body')
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});