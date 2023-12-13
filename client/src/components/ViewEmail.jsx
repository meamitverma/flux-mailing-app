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

const Container = styled(Box)`
  margin-left: 15px;
  width: 100%;
  & > div {
    display: flex;
    & > p > span {
      font-size: 12px;
      color: #8d8d8d;
    }
  }
`;

const Date = styled(Box)`
  margin: 0px 50px 0 auto;
  color: #8d8d8d;
`;

const Image = styled('img') `
  border-radius: '50%';
  width: 40px;
  height: 40px;
  border-radius: 60px;
  margin: 5px 10px 0 10px;
  background: #cccccc;
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
      <Box style={{display: 'flex'}}>
        <Image src={emptyProfilePic} alt="" />
        <Container>
          <Box>
            <Typography style={{marginTop: 10}}>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()} &nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "short",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Date>
          </Box>
          <Typography style={{marginTop: 20}}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmail;
