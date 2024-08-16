import {describe, test, expect} from 'vitest'
import { mount } from "@vue/test-utils";
import Alert from './Alert.vue'
const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(() => <Alert title={AXIOM} showIcon={true} />)
    expect(wrapper.find('sg-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.sg-alert').classes()).toContain('el-alert--info')
  })
})