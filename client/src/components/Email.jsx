import { Box, Checkbox, Typography, styled } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";

const Wrapper = styled(Box)`
    background-color: #161616;
    color: #b9b9b9;
    padding: 0 0 0 10px;
    
    cursor: pointer;

    display: flex;
    align-items: center;

    & > div {
        display: flex;
        width: 90%;
        

        & > p {
            font-size: 14px;
        }
    }
`;

const Date = styled(Typography)`
    margin-left: auto;
    font-size: 11px;
    color: darkgray;
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background-color: #ddd;
    color: #222;
    padding: 0 4px;
    border-radius: 4px;
    margin-right: 6px;
`;

const Email = ({ email, selectedEmails }) => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Checkbox
        size="small"
        sx={{
          color: "darkgray",
          "&.Mui-checked": {
            color: "darkgray",
          },
        }}
        checked = {selectedEmails.includes(email._id)}
      />
      {/* <Star /> */}
      <StarBorder fontSize="small" style={{ marginRight: 10 }}/>
      <Box onClick={() => navigate(routes.view.path, { state: {email: email} })}>
        <Typography style={{ width: 200, overflow: 'hidden' }}>{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        <Typography>{email.subject} {email.body && '-'} {email.body} </Typography>
        <Date>
            {(new window.Date(email.date)).getDate()} &nbsp;
            {(new window.Date(email.date)).toLocaleString('default', { month: 'short' })}
        </Date>
      </Box>

    </Wrapper>
  );
};

export default Email;
