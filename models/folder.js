emailClient.Folder = DS.Model.extend({
  name: DS.attr(),
  emails: DS.hasMany('emails', {async: true})
});