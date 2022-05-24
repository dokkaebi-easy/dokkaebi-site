import { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Navigation } from "../navigation";
import { Link } from "react-router-dom";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";

const drawerWidth = 240;

export default function Guidecopy(props) {
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
        {[{ text: "홍보영상", url: "video" }].map((list) => (
          <StyledLink to={"/" + list.url} key={list.url}>
            <ListItem button>
              <ListItemIcon>
                {
                  {
                    video: <Filter1Icon />,
                  }[list.url]
                }
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
          { text: "스프링 + 뷰 시연", url: "spring" },
          { text: "장고 시연", url: "django" },
          { text: "리엑트 시연", url: "react" },
        ].map((list) => (
          <StyledLink to={"/" + list.url} key={list.url}>
            <ListItem button>
              <ListItemIcon>
                {
                  {
                    spring: <Filter2Icon />,
                    django: <Filter3Icon />,
                    react: <Filter4Icon />,
                  }[list.url]
                }
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
