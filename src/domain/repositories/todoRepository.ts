import { Todo } from "../entities/todo"

export interface TodoRepository {
    addData(todo: Todo): Promise<Todo>
    getData(): Promise<Todo[]>
    updateData(todo: Todo): Promise<Todo>
    deleteData(todo: Todo): Promise<Todo>
}
