(function (global){

	var app = global.app || {};

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
	app.taskActions = new TaskActions(app.store);

	global.app = app;

}(window));
