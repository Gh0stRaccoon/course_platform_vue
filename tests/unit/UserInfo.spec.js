import {mount} from '@vue/test-utils'
import UserInfo from '@/components/UserInfo.vue'

describe('Probando el componente UserInfo', () =>{
    test('props contiene usrinfo validado como Object', () => {
        expect(UserInfo.props).toMatchObject({usrinfo: Object})
    })
    test('render del componente', ()=>{
        const data = require('./test.json')
        const wrapper = mount(UserInfo, {
            propsData: {
                usrinfo: data
            }
        })
        expect(wrapper.vm.usrinfo).toBe(data)
    })
    test('Contiene las clases Github y Twitter', ()=>{
        const data = require('./test.json')
        const wrapper = mount(UserInfo, {
            propsData: {
                usrinfo: data
            }
        })
        expect(wrapper.find('.Twitter').exists()).toBe(true)
        expect(wrapper.find('.Github').exists()).toBe(true)
    })
})