import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class AddTodoUseCase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    execute(name: string): Promise<Todo> {
        const newTodo = new Todo(-1, name)
        return this.todoRepo.addData(newTodo)
    }
}
