import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import  useApi  from '../hooks/useApi'
import { API_URLS } from "../services/api.urls";

const dialogueStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f2f2f2;
  color: #1b335a;
  & > p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const ReceipentsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

const ComposeMail = ({ openDialog, setOpenDialog }) => {

  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);

  const config = {
    Host: process.env.REACT_APP_HOST,
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: process.env.REACT_APP_PORT,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        // todo: add from field to choose the user to send email from
        From: "amit.verma.22080@gmail.com",
        Subject: data.subject,
        Body: data.body
      }).then((message) => alert(message));
    }

    // create a payload to pass to the api
    const payload = {
      to: data.to,
      from: 'amit.verma.22080@gmail.com',
      subject: data.subject,
      date: new Date(),
      body: data.body,
      image: '',
      name: 'Amit',
      starred: false,
      type: 'sent'
    }

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    }
    else {

    }

    setOpenDialog(false);
  };

  const deleteMail = () => {
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogueStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close
          style={{ cursor: "pointer" }}
          onClick={(e) => closeComposeMail(e)}
          fontSize="small"
        />
      </Header>
      <ReceipentsWrapper>
        <InputBase name="to" placeholder="Receipents" onChange={(e) => onValueChange(e)} />
        <InputBase name="subject" placeholder="Subject" onChange={(e) => onValueChange(e)} />
      </ReceipentsWrapper>
      <TextField
        multiline
        rows={17}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        onChange={(e) => onValueChange(e)}
        name="body"
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => deleteMail()} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
