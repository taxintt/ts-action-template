import { sayHello } from '../src/hello'

test('run run() successfully', async () => {
  await expect(sayHello({ name: 'world' })).resolves.toBeUndefined()
})
