'use client'

import { TodoItem } from '@/domain/TodoItem'
import { useState } from 'react'

interface TodoListProps {
  todoItems: TodoItem[]
}

export default function TodoList({ todoItems }: TodoListProps) {
  const [items, setItems] = useState(todoItems)
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setItems([
      ...items,
      { id: items.length + 1, title: newItem, isCompleted: false },
    ])
    setNewItem('')
  }

  return (
    <div className="flex flex-col space-y-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={`${item.isCompleted && 'line-through'}`}>
            <input
              id={`${item.id}`}
              type="checkbox"
              checked={item.isCompleted}
            />
            <label htmlFor={`${item.id}`}> {item.title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
