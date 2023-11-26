import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Checkbox, Box, styled, List} from "@mui/material";
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
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false)

  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailToBinService = useApi(API_URLS.moveEmailsToBin);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
    } else {
      moveEmailToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState)
  };

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
          onChange={(e) => selectAllEmails(e)}
        />
        <DeleteOutline
          style={{ color: "lightgray", cursor: "pointer" }}
          onClick={(e) => deleteSelectedEmails(e)}
        />
      </Options>
      {/* list of emails */}
      <List>
        {getEmailService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
          />
        ))}
      </List>
    </Box>
  );
};

export default Emails;
