import { User } from '@/domain/entities/User'

export interface TodoList {
  id: number
  title: string
  items: Array<{
    title: string
    isCompleted: boolean
  }>
  user?: User
}
