import { useState } from 'react';

export const Button = () => {
  const [value, setValue] = useState(0);
  const clickHanlder = () => {
    setValue((preVal) => preVal + 1);
  };
  return <button onClick={clickHanlder}>{value}</button>;
};
