/**
 * Created by mac on 2018/9/17.
 */
import { conver } from '../src/api/utils'
describe('api util', () => {
  it('it should be ok', () => {
    expect(conver()).toBe('')
  })
  it('it should be ok', () => {
    expect(conver({name: 'lyz', age: '12'})).toBe('name=lyz&age=12')
  })
})