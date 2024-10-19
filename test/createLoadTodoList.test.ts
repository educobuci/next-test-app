import { expect, describe, it } from 'vitest'
import { createLoadTodoList } from '@/usecases/createLoadTodoList'
import { ITodoListRepository } from '@/domain/repositories/ITodoListRepository'
import { mock } from 'vitest-mock-extended'
import { TodoList } from '@/domain/entities/TodoList'

describe('createLoadTodoList', () => {
  it('should load a todo list from the repository', async () => {
    const todoListMock = mock<TodoList>()
    const repository = mock<ITodoListRepository>()
    repository.getTodoList.mockResolvedValue(todoListMock)
    const expectedTodoList = await createLoadTodoList(repository)(1)

    expect(expectedTodoList).toEqual(todoListMock)
  })
})
