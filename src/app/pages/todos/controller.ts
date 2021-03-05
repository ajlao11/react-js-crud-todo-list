import { atom, useRecoilCallback } from "recoil"
import { Todo } from "domain/entities/todo"

import { TodoRepositoryMemoryImpl } from "data/repositories/todoRepositoryMemoryImpl"
import { GetTodoUseCase } from "domain/usecases/getTaskUsecase"
import { AddTodoUseCase } from "domain/usecases/addTaskUsecase"
import { DeleteTodoUseCase } from "domain/usecases/deleteTaskUsecase"
import { CompleteTodoUseCase } from "domain/usecases/completeTaskUsecase"
import { UncompleteTodoUseCase } from "domain/usecases/uncompleteTaskUsecase"

export const todosState = atom({
    key: "todosState",
    default: [] as Todo[],
})

export const errorState = atom({
    key: "errorState",
    default: "",
})

export default function useController() {
    const refreshState = useRecoilCallback(({ set }) => async () => {
        const todos = await getTodo()
        set(todosState, todos)
    })

    async function addTodo(name: string) {
        const executor = new AddTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const newTodo = await executor.execute(name)
        refreshState()
        return newTodo
    }

    function getTodo() {
        const executor = new GetTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        return executor.execute()
    }

    async function deleteTodo(todo: Todo) {
        const executor = new DeleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const deletedTodo = await executor.execute(todo)
        refreshState()
        return deletedTodo
    }

    async function completeTodo(todo: Todo) {
        const executor = new CompleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const completedTodo = await executor.execute(todo)
        refreshState()
        return completedTodo
    }

    async function uncompleteTodo(todo: Todo) {
        const executor = new UncompleteTodoUseCase(TodoRepositoryMemoryImpl.getInstance())
        const uncompletedTodo = await executor.execute(todo)
        refreshState()
        return uncompletedTodo
    }

    return { refreshState, addTodo, getTodo, deleteTodo, completeTodo, uncompleteTodo }
}
