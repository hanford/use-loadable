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
const sleep = time => () => new Promise(done => setTimeout(done, time));

function App() {
  const [onClick, { loading, error }] = useAsyncFunction(sleep(500));

  return (
    <React.Fragment>
      <pre>
        error: {JSON.stringify(error)}
        <br />
        loading: {JSON.stringify(loading)}
      </pre>
      <button onClick={onClick}>{loading ? "Loading..." : "Load"}</button>
    </React.Fragment>
  );
}

```
