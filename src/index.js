import greetings from './data.json'

export const random = () => Math.floor(Math.random() * greetings.length)

export function say() {
  return greetings[random()]
}

export default say
