import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import TodoInput from "./components/Input"
import TodoList from "./components/List"

import useController, { todosState, errorState } from "./controller"

export default function Todos() {
    // init data
    const { refreshState } = useController()
    useEffect(() => {
        refreshState()
    }, [])

    // state
    const todos = useRecoilValue(todosState)
    const error = useRecoilValue(errorState)

    return (
        <div className="bg-blue-200">
            <header>
                <h1 className="text-7xl font-bold text-gray-900 mb-8 ">To Do List</h1>
                <p className="text-2xl text-gray-500">{todos.length} TASKS</p>
            </header>
            <div mb-8>
                <TodoInput />
                <div className="mt-2 text-red-400">{error}</div>
                <TodoList />
            </div>
        </div>
    )
}
