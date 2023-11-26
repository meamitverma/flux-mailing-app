import { useOutletContext, useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constant";

const Options = styled(Box)`
  background-color: #2c2c2c;
  border-top-left-radius: 15px;
  padding: 20px 10px 0 10px;
`;

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;

  const drawerStyle = openDrawer ? { marginLeft: 250, borderRadius: 60, color: "white" } : { width: "100%", color: 'white' };

  return (
    <Box
      style={drawerStyle}
    >
      {/* icons */}
      <Options>
        <ArrowBack
          fontSize="small"
          onClick={() => window.history.back()}
          style={{ color: "lightgray", cursor: "pointer" }}
        />
        <Delete
          fontSize="small"
          style={{ color: "lightgray", cursor: "pointer", marginLeft: 20 }}
        />
      </Options>
      
      {/* Heading/Subject */}
      <Typography>{email.subject}</Typography>

      {/* email body */}
      <Box>
        <img src={emptyProfilePic} alt="" />
        
      </Box>
        
      
    </Box>
  );
};

export default ViewEmail;
