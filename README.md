# `@rehooks/async-function`

> React hook for AsyncFunction

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/async-function
```

## Usage

```js
import useAsyncFunction from '@rehooks/async-function';

function MyComponent() {
  let value = useAsyncFunction();
  // value == AsyncFunction
  return <div/>;
}
```
