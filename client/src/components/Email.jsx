import { Box, Checkbox, Typography, styled } from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

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

const Email = ({ email, selectedEmails, setRefreshScreen }) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

  const toggleStarredMails = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prevState) => !prevState);
  };

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
        checked={selectedEmails.includes(email._id)}
      />
      {/* <Star /> */}

      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: 10 }}
          onClick={() => toggleStarredMails()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: 10 }}
          onClick={() => toggleStarredMails()}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}{" "}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()} &nbsp;
          {new window.Date(email.date).toLocaleString("default", {
            month: "short",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
