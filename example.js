import * as React from "react";
import { render } from "react-dom";

import useAsyncHook from "./";

const sleep = time => () =>
  new Promise(done => setTimeout(() => done(Math.random()), time));

function App() {
  const [onClick, { loading, error }] = useAsyncHook(sleep(500));

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

render(<App />, window.root);
