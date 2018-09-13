import greetings from './data.json'

export function say() {
  return greetings[random()]
}

export const random = () =>
  Math.floor(Math.random() * greetings.length)

export default say
