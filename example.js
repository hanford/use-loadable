import * as React from "react";
import { render } from "react-dom";

import useLoadable from "./";

const sleep = time => () =>
  new Promise(done => setTimeout(() => done(Math.random()), time));

function App() {
  const [{ loading, error }, onClick] = useLoadable(sleep(500), { delayMs: 300 });

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
