import { useState } from 'react';
import { Button } from './Button';

export const Upper = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHanlder = () => {
    setIsClicked((preVal) => !preVal);
  };
  return (
    <>
      <button onClick={clickHanlder}>클릭하세요</button>
      {isClicked && <Button />}
    </>
  );
};
