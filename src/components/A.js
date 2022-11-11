import { Outlet } from 'react-router-dom';

export const A = () => {
  return (
    <div>
      A컴포넌트
      <Outlet />
    </div>
  );
};
