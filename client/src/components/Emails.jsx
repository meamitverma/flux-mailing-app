import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Checkbox, Box, styled, List, ListItem } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import Email from "./Email.jsx";

const Options = styled(Box)`
  background-color: #2c2c2c;
  border-top-left-radius: 15px;
  padding: 20px 10px 0 10px;
  display: flex;
  align-items: center;
`;

const Emails = () => {
  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailFromType);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type]);

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, borderRadius: 60 } : { width: "100%" }
      }
    >
      <Options>
        <Checkbox
          size="small"
          sx={{
            color: "lightgray",
            "&.Mui-checked": {
              color: "lightgray",
            },
          }}
        />
        <DeleteOutline style={{ color: "lightgray" }} />
      </Options>
      {/* list of emails */}
      <List>
        {getEmailService?.response?.map((email) => (
          <Email key={email._id} email={email} />
        ))}
      </List>
    </Box>
  );
};

export default Emails;
