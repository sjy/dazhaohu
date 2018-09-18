import {
  say,
  random,
} from '../src'
import data from '../src/data'

test('random', () => {
  for (let i = 0; i < 10; i++) {
    expect(random()).toBeGreaterThanOrEqual(0)
    expect(random()).toBeLessThanOrEqual(data.length - 1)
  }
})

test('say', () => {
  for (let i = 0; i < 10; i++) {
    expect(say()).toBeDefined()
  }
})
