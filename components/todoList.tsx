'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { TodoList } from '@/domain/entities/TodoList'
import { Card, CardContent, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'

interface TodoListProps {
  todoList: TodoList
}

export default function ({ todoList }: TodoListProps) {
  const [newTodo, setNewTodo] = useState('')
  const onNewTodoChnage = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value)
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoList.items.push({ title: newTodo, isCompleted: false })
    setNewTodo('')
  }
  return (
    <Card className="w-full max-w-96">
      <CardHeader>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          TODO
        </h1>
        <form onSubmit={handleAddTodo} className="flex items-center space-x-2">
          <Input
            autoFocus
            placeholder="Add new todo"
            value={newTodo}
            onChange={onNewTodoChnage}
          />
          <Button>Add</Button>
        </form>
      </CardHeader>
      <CardContent>
        <ul>
          {todoList.items.map((item, index) => (
            <li
              key={index}
              className={cn(
                item.isCompleted && 'line-through',
                'border-t border-slate-200 p-1 py-3 flex items-center space-x-2'
              )}
            >
              <Checkbox checked={item.isCompleted} />
              <label htmlFor={`${index}`}> {item.title}</label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
