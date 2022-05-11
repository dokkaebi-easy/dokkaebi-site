import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation";
import Guide from "./components/guide/guide";
import styled from "@emotion/styled";

const Layout = () => {
  //spinner
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Body>
        <Guide />
        <Outlet />
      </Body>
    </div>
  );
};

export default Layout;

const Body = styled.div`
  margin-left: 260px;
`;
