# `use-loadable`

> React hook for Loadable

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add use-loadable
```

## Usage

```js
import useLoadable from 'use-loadable' 

const sleep = time => () => new Promise(done => setTimeout(done, time));

function App() {
  const [{ loading, error, res }, onClick] = useLoadable(sleep(500));

  return (
    <React.Fragment>
      <pre>
        res: {JSON.stringify(res)}
        <br />
        error: {JSON.stringify(error)}
        <br />
        loading: {JSON.stringify(loading)}
      </pre>
      <button onClick={onClick}>{loading ? "Loading..." : "Load"}</button>
    </React.Fragment>
  );
}
```

### Using delayMs
Sometimes async functions will be cached and the function will return too quickly resulting in a flicker. To mitigate that, you can pass an optional `{ delayMs }` argument to `useLoadable`

```js
const sleep = () => new Promise(done => done());

function App() {
  // this will take atleast 300ms to resolve
  const [{ loading, error, res }, onClick] = useLoadable(sleep, { delayMs: 300 });

  return (
    <button onClick={onClick}>{loading ? "Loading..." : "Load"}</button>
  );
}
```

[![Edit React Hooks Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ykv17px719)
