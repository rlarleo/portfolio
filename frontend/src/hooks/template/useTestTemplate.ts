import { useState, useEffect } from "react";

function useTestTemplate(param: number) {
  const [test, setTest] = useState<number>(0);

  useEffect(() => {
    setTest(param);
  });

  return test;
}
