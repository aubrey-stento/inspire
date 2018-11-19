

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/aubrey/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				console.log(res)
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todo._Id, todoId)
			.then(res => {
			getTodos()	//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
todoApi.delete(todoId)
.then(res => {
getTodos()
})
.catch(logError)
	}

}
