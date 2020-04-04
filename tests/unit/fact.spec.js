import { shallowMount } from '@vue/test-utils'
import Fact from '@/components/Fact'

let wrapper = null
const props = {
  id: 'myID',
  message: 'new chuck fact',
  link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
  currentFact: 1,
  totalFacts: 99,
  active: false
}
beforeEach(() => {
  wrapper = shallowMount(Fact, {
    propsData: props
  })
})
afterEach(() => {
  wrapper.destroy()
})

describe('Fact Component', () => {
  it('renders prop message when passed', () => {
    expect(wrapper.text()).toMatch(props.message)
  })
  it('renders prop link when passed', () => {
    expect(wrapper.find('.fact_info-link').attributes('href')).toBe(props.link)
  })
  it('renders prop currentFact and totalFacts when passed', () => {
    const totals = `${props.currentFact}/${props.totalFacts}`
    expect(wrapper.text()).toMatch(totals)
  })
  it('set disabled class when prop active has passed', () => {
    const disabledClasses = wrapper.findAll('.disabled').length
    expect(disabledClasses).toEqual(3)
  })
})
