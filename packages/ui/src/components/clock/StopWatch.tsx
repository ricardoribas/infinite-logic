import React, { useState, useEffect } from 'react';

import Text from '@infinite/ui/src/components/text';
import { getStopWatchTime } from '@infinite/shared/src/utils/Date';

const Timer: () => JSX.Element = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentCounter) => currentCounter + 1);
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return <Text category="s2">{getStopWatchTime(count)}</Text>;
};

export default Timer;
