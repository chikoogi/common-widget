import { useEffect, useRef } from "react";

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback; // ref를 이용하여 리렌더링 시에도 값이 유지되도록 한다.
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback?.current();
    };

    if (delay !== null) {
      const timerId = setInterval(tick, delay);
      return () => clearInterval(timerId);
    }
  }, [delay]);
};

export default useInterval;
