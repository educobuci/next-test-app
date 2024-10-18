'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { TodoList } from '@/domain/TodoList'

interface TodoListProps {
  todoList: TodoList
}

export default function ({ todoList }: TodoListProps) {
  // const [items, setItems] = useState(todoItems)
  // const [newItem, setNewItem] = useState('')

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setItems([
  //     ...items,
  //     { id: items.length + 1, title: newItem, isCompleted: false },
  //   ])
  //   setNewItem('')
  // }

  return (
    <div className="flex flex-col space-y-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        TODO
      </h1>
      {/* <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          autoFocus
          type="text"
          placeholder="Add new todo"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <Button type="submit">Add</Button>
      </form> */}
      <ul>
        {todoList.items.map((item, index) => (
          <li key={index} className={`${item.isCompleted && 'line-through'}`}>
            <input
              id={`${index}`}
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => {}}
            />
            <label htmlFor={`${index}`}> {item.title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
