import { TodoRepository } from "../repositories/todoRepository"
import { Todo } from "../entities/todo"

export class DeleteTodoUseCase {
    todoRepo: TodoRepository
    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo
    }
    execute(todo: Todo): Promise<Todo> {
        if (todo.completed) {
            throw "Completed entry cannot be deleted"
        }
        return this.todoRepo.deleteData(todo)
    }
}
