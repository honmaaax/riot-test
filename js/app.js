(function (global){
	
	global.app = {};
	
	function TodoModel(){
		this.data = [];
		this.add = function(newData){
			this.data.push(newData);
			this.trigger('add');
		};
		this.set = function(newData, index){
			this.data[index] = newData;
			this.trigger('change');
		};
		riot.observable(this);
	};
	global.app.todoModel = new TodoModel();
	
	riot.settings.brackets = '{{ }}';
	riot.mount('*');
	
}(window));
