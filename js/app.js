(function (global){

	global.app = {};

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
	global.app.store = new Store();

	function TaskActions(store){
		this.addTask = function(task){
			store.add('tasks', task);
			store.change('newTaskFormState', {
				value : '',
				isAddable : false
			});
		};
		this.changeNewTaskFormState = function(state){
			store.change('newTaskFormState', state);
		};
		this.toggleTask = function(index){
			store.change(store.tasks[index], {
				isDone : !store.tasks[index].isDone
			});
		};
	};
	global.app.taskActions = new TaskActions(app.store);

	riot.settings.brackets = '{{ }}';
	riot.mount('*');

}(window));
