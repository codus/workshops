/*jshint unused:false */

(function (exports) {

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: function () {
			return axios.get('https://4b6aadd7.ngrok.io/todos').then((response) => {
				return response.data;
			});
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
