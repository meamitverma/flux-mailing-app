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
`

const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`

const ComposeMail = ({ openDialog, setOpenDialog }) => {

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  }

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogueStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close style={{cursor:'pointer'}} onClick={(e) => closeComposeMail(e)} fontSize="small" />
      </Header>
      <ReceipentsWrapper>
        <InputBase placeholder="Receipents" />
        <InputBase placeholder="Subject" />
      </ReceipentsWrapper>
      <TextField
        multiline
        rows={17}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />
      <Footer>
        <SendButton>Send</SendButton>
        <DeleteOutline />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
