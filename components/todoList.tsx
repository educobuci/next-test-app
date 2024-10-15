'use client'

import { useState } from 'react'
import { TodoItem } from '@/domain/TodoItem'

import { Input } from '@/components/ui/input'

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
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        TODO
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
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
