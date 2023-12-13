import { useOutletContext, useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constant";

const IconWrapper = styled(Box)`
  /* background-color: #2c2c2c; */
  /* border-top-left-radius: 15px; */
  padding: 15px;
`;

const Subject = styled(Typography)`
  font-size: 22px;
  margin: 10px 0px 20px 60px;
  display: flex;
`;

const Indicator = styled(Box)`
  font-size: 12px;
  background-color: #ddd;
  color: #222;
  padding: 2px 4px;
  margin-left: 6px;
  border-radius: 4px;
  align-self: center;
`;

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;

  const drawerStyle = openDrawer
    ? { marginLeft: 250, borderRadius: 60, color: "white" }
    : { width: "100%", color: "white" };

  return (
    <Box style={drawerStyle}>
      {/* icons */}
      <IconWrapper>
        <ArrowBack
          fontSize="small"
          onClick={() => window.history.back()}
          style={{ color: "lightgray", cursor: "pointer" }}
        />
        <Delete
          fontSize="small"
          style={{ color: "lightgray", cursor: "pointer", marginLeft: 20 }}
        />
      </IconWrapper>

      {/* Heading/Subject */}
      <Subject>
        {email.subject} 
        <Indicator component="span">Inbox</Indicator>
      </Subject>

      {/* email body */}
      <Box>
        <img src={emptyProfilePic} alt="" />
        <Box>
          <Box>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Box>
              {new window.Date(email.date).getDate()} &nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "long",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Box>
          </Box>
          <Typography>{email.body}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewEmail;
