import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactChannels from '@/features/contact/ContactChannels.vue'

describe('ContactChannels', () => {
  it('shows pending state when channels are not verified', () => {
    const wrapper = mount(ContactChannels)
    expect(wrapper.text()).toMatch(/being confirmed/i)
    expect(wrapper.find('form').exists()).toBe(false)
    expect(wrapper.html()).not.toMatch(/<input/i)
    expect(wrapper.html()).not.toMatch(/<textarea/i)
  })
})
