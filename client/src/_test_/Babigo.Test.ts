// import { render, screen } from '@testing-library/react';
import { changeBabi } from '../logic/babigo'

describe('Test Change To BABIGO', () => {
  test('babigo-normal', () => {
    const babigo = changeBabi('ありがとう')
    expect(babigo).toBe('あばりびがばとぼうぶ')
  })

  test('babigo-small+bar', () => {
    const babigo = changeBabi('いぇーい')
    expect(babigo).toBe('いびぇーいび')
  })

  test('babigo-small+small', () => {
    const babigo = changeBabi('ちゃっと')
    expect(babigo).toBe('ちゃばっとぼ')
  })

  test('babigo include kannji', () => {
    const babigo = changeBabi('今は、ひまです。')
    expect(babigo).toBe('今はば、ひびまばでべすぶ。')
  })
})
