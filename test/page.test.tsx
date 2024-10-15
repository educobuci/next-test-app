import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '@/components/todoList'

describe('Todo', () => {
  it('should list all todo items', () => {
    const todoItems = [
      { id: 1, title: 'Todo 1', isCompleted: false },
      { id: 2, title: 'Todo 2', isCompleted: false },
      { id: 3, title: 'Todo 3', isCompleted: false },
    ]
    render(<TodoList todoItems={todoItems} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  it('should add a new item to the todo list', () => {
    const todoItems = [
      { id: 1, title: 'Todo 1', isCompleted: false },
      { id: 2, title: 'Todo 2', isCompleted: false },
      { id: 3, title: 'Todo 3', isCompleted: false },
    ]
    render(<TodoList todoItems={todoItems} />)

    const input = screen.getByPlaceholderText('Add new todo')
    const addButton = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'Todo 4' } })
    fireEvent.click(addButton)

    expect(screen.getAllByRole('listitem')).toHaveLength(4)
    expect(screen.getByText('Todo 4')).toBeDefined()
  })
})
