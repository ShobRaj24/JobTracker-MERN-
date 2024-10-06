import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>navbar</nav>
      {/* <h1>home layout</h1> */}
      <Outlet />
    </>
  );
};
export default HomeLayout;
