import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SimpleAccordion from "../SimpleAccordion/SimpleAccordion";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import { StyledContainer } from "./PermanentDrawerLeft.styles";

const drawerWidth = 350;

const PermanentDrawerLeft = () => {
  return (
    <StyledContainer>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <SimpleAccordion />
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Typography paragraph>
            <ResponsiveAppBar />
          </Typography>
        </Box>
      </Box>
    </StyledContainer>
  );
};
export default PermanentDrawerLeft;
