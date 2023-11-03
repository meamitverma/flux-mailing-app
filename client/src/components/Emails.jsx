import { useOutletContext } from "react-router-dom";
import { Checkbox, Box, styled } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const Options = styled(Box)`
  background-color: #2c2c2c;
  border-top-left-radius: 15px;
  padding: 20px 10px 0 10px;
  display: flex;
  align-items: center;
`;

const Emails = () => {
  const { openDrawer } = useOutletContext();

  return (
    <div style={openDrawer ? { marginLeft: 250, borderRadius: 60 } : { width: "100%" }}>
      <Options>
        <Checkbox
          size="small"
          sx={{
            color: 'lightgray',
            '&.Mui-checked': {
              color: 'lightgray',
            },
          }}
        />
        <DeleteOutline style={{color: 'lightgray'}} />
      </Options>
      <Box></Box>
    </div>
  );
};

export default Emails;
