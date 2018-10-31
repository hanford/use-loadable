'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useLoadable = require('./');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let [fn, { loading, error }] = useLoadable(async () => {});
    return h('div');
  }

  let input = render(h(Component));

  t.is(loading, false);
  t.is(error, null);
});
