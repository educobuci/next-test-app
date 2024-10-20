import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoListComponent from '@/components/todoList'
import { TodoList } from '@/domain/entities/TodoList'

describe('Todo', () => {
  it('should list all todo items', () => {
    const todoList: TodoList = {
      id: 1,
      title: 'Todo List',
      items: [
        { title: 'Todo 1', isCompleted: true },
        { title: 'Todo 2', isCompleted: false },
      ],
    }
    render(<TodoListComponent todoList={todoList} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
  it('should add a new item to the todo list', () => {
    const todoList: TodoList = {
      id: 1,
      title: 'Todo List',
      items: [],
    }
    render(<TodoListComponent todoList={todoList} />)

    const input = screen.getByPlaceholderText('Add new todo')
    const addButton = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'My New Todo' } })
    fireEvent.click(addButton)

    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.getByText('My New Todo')).toBeDefined()
  })
})
