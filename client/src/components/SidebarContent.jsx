import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { useState } from "react";

const Container = styled(Box)`
  padding: 8px;
  & > ul  {
    padding: 10px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  };
  & > ul > li > svg {
    margin-right: 20px;

  }
`;

const ComposeButton = styled(Button)`
  background: #ffffff;
  color: #5f6368;
  border-radius: 16px;
  padding: 15px;
  min-width: 140px;
  text-transform: none;
  & > svg {
    margin-right: 6px;
  }
`;

const SidebarContent = () => {

  const [openDialog, setOpenDialog] = useState(false)

  const onComposeClick = () => {
    setOpenDialog(true);
  }


  return (
    <Container>
      <ComposeButton
        sx={{
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
        onClick={() => onComposeClick()}
      >
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {
          SIDEBAR_DATA.map(data => (
            <ListItem>
              <data.icon fontSize="small"/>
              {data.title}
            </ListItem>
          ))
        }
      </List>
      <ComposeMail openDialog = {openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  );
};

export default SidebarContent;
