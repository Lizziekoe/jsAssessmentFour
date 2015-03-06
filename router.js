emailClient.Router.map(function() {
	this.resource('home', {path: '/'});
	this.resource('folders');
	this.resource('new-folder');
  this.resource('emails');
});