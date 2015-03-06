emailClient.Router.map(function() {
	this.resource('home', {path: '/'});
	this.resource('folders');
  	this.resource('emails'); 
  	this.resource('show-email', {path: ':email_id'});
	this.resource('new-folder');
});