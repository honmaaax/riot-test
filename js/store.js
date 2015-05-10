(function (global){

	var app = global.app || {};

	function Store(){
		riot.observable(this);
		this.tasks = [];
		this.newTaskFormState = {
			value : '',
			isAddable : false
		};
		this.add = function(key, value){
			var target = _.isString(key) ? this[key] : key;
			target.push(value);
			this.trigger('change');
		};
		this.change = function(key, value){
			var target = _.isString(key) ? this[key] : key;
			_.extend(target, value);
			this.trigger('change');
		};
	};
	app.store = new Store();

	global.app = app;

}(window));
