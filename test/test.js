import test from 'ava'
import Vue from 'vue'
import Button from '../src/button.vue'

function createComponentInstance(propsData) {
  const Constructor = Vue.extend(Button)
  return new Constructor({ propsData: propsData }).$mount()
}

test('default config', t => {
  // create instance
  const vm = createComponentInstance({})

  // verify container
  t.is(vm.$el.tagName, "BUTTON")
  t.is(vm.$el.getAttribute("class"), "st-button")

  // verify children
  const children = vm.$el.children
  t.true(children.length === 2) // icon + text
})

test('custom tag and text', t => {
  // create instance
  const vm = createComponentInstance({ tag: 'DIV', text: 'Test' })

  // verify container
  t.is(vm.$el.tagName, "DIV")
  t.is(vm.$el.getAttribute("class"), "st-button")

  // verify children
  const children = vm.$el.children
  t.true(children.length === 2) // icon + text
  t.is(children[0].tagName, 'SPAN')
  t.is(children[1].tagName, 'SPAN')

  for (const key in children[1]) {
    console.log(key)
  }
  t.is(children[1].textContent, 'Test')
})