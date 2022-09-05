import { changeBabi } from '../logic/babigo'

test('babigo', () => {
  const babigo = changeBabi('ありがとう')
  expect(babigo).toBe('あばりびがばとぼうぶ')
})

test('babigo', () => {
  const babigo = changeBabi('いぇーい')
  expect(babigo).toBe('いびぇーいび')
})

test('babigo', () => {
  const babigo = changeBabi('ちゃっと')
  expect(babigo).toBe('ちゃばっとぼ')
})

test('babigo', () => {
  const babigo = changeBabi('今は、ひまです。')
  expect(babigo).toBe('今はば、ひびまばでべすぶ。')
})
