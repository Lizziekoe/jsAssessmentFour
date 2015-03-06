emailClient.Email = DS.Model.extend({
  subject: DS.attr(),
  body: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});