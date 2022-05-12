import { useState } from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigation } from "../navigation";
import { Link, Outlet } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import { Margin } from "@mui/icons-material";

const drawerWidth = 240;

export default function Guide(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Navigation />
      <Toolbar />
      <Divider style={{ background: "black" }} />
      <List>
        {[
          { text: "설치하기전", url: "beforeinstall" },
          { text: "Docker 설치", url: "dockerinstall" },
          { text: "Dockerby 설치", url: "install" },
          { text: "Dockerby 지원 버전", url: "version" },
        ].map((list, index) => (
          <StyledLink to={"/" + list.url}>
            <ListItem button key={list.text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={list.text}
                primaryTypographyProps={{
                  fontSize: 14,
                }}
              />
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <Divider style={{ background: "black" }} />
      <List>
        {[
          { text: "회원가입/로그인", url: "login" },
          { text: "프로젝트 생성", url: "create" },
          { text: "프로젝트 배포", url: "distribute" },
        ].map((list, index) => (
          <StyledLink to={"/" + list.url}>
            <ListItem button key={list.text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={list.text}
                primaryTypographyProps={{
                  fontSize: 14,
                }}
              />
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              my: 2.4,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

const StyledLink = styled(Link)`
  color: black;
`;
