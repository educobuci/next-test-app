import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoListComponent from '@/components/todoList'
import { TodoList } from '@/domain/TodoList'

describe('Todo', () => {
  it('should list all todo items', () => {
    const todoList: TodoList = {
      id: 1,
      title: 'Todo List',
      items: [
        { title: 'Todo 1', isCompleted: false },
        { title: 'Todo 2', isCompleted: false },
        { title: 'Todo 3', isCompleted: false },
      ],
    }
    render(<TodoListComponent todoList={todoList} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  // it('should add a new item to the todo list', () => {
  //   const todoList: TodoList = {
  //     id: 1,
  //     title: 'Todo List',
  //     items: [
  //       { title: 'Todo 1', isCompleted: false },
  //       { title: 'Todo 2', isCompleted: false },
  //       { title: 'Todo 3', isCompleted: false },
  //     ],
  //   }
  //   render(<TodoListComponent todoList={todoList} />)

  //   const input = screen.getByPlaceholderText('Add new todo')
  //   const addButton = screen.getByText('Add')

  //   fireEvent.change(input, { target: { value: 'Todo 4' } })
  //   fireEvent.click(addButton)

  //   expect(screen.getAllByRole('listitem')).toHaveLength(4)
  //   expect(screen.getByText('Todo 4')).toBeDefined()
  // })
})
