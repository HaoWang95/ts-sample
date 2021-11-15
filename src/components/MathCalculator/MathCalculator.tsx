import * as React from "react";
import { ShowNumber } from "./ShowNumber";

export const Calculator: React.VFC<{}> = () => {
  const [x, setX] = React.useState<number>(0);

  let y: number = React.useMemo(() => x * 2 + 1, [x]);
  let z: number = React.useMemo(() => x * x, [x]);

  const incrementX = React.useCallback((): void => setX(x + 1), [x]);
  const decrementX = React.useCallback((): void => setX(x - 1), [x]);

  return (
    <React.Fragment>
      <p>
          <button onClick={decrementX}>-</button>
          X is <ShowNumber value={x}/>
          <button onClick={incrementX}>+</button>
      </p>
      <p>Y is <ShowNumber value={y} /></p>
      <p>Z is <ShowNumber value={z} /></p>
    </React.Fragment>
  );
};
