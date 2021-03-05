import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class UncompleteTodoUseCase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    execute(todo: Todo): Promise<Todo> {
        const updatedTodo = new Todo(todo.id, todo.title)
        updatedTodo.completed = false
        return this.todoRepo.updateData(updatedTodo)
    }
}
