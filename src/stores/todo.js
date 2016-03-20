import EventEmitter from "events";
import dispatcher from "../dispatcher"
import _ from "lodash"

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 1234354,
        text: "Go Shopping",
      },
      {
        id: 432343543,
        text: "Pay bills",
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text){
    const id = Date.now();

    this.todos.push({
      id,
      text,
    });

    this.emit("change");
  }

  editTodo(id, text){
    let index = _.findIndex(this.todos, (t) => t.id == id);
    this.todos[index].text = text;

    this.emit("change");
  }
}

const todoStore = new TodoStore;

dispatcher.register(function(action){
  let { type, text, id } = action;

  switch(type) {
    case "CREATE_TODO":
      todoStore.createTodo(text);
      break;
    case "EDIT_TODO":
      todoStore.editTodo(id, text);
      break;
  }
});

export default todoStore;
