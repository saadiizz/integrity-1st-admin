import * as React from "react";
import Box from "@mui/material/Box";
import crossarrow from "../../assets/images/cross-icon.png";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import appo from "../../assets/images/edit-icon.png";
import { Button, Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "red",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function UpdateNewUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button sx={{ p: 0, minWidth: "10px" }}>
        {" "}
        <img src={appo} onClick={handleOpen} alt="delete-icon" width={20} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              sx={{
                ml: 2,
                color: "#2F496C",
                fontFamily: "inter",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              <h2 id="parent-modal-title">Update User Now </h2>
            </Box>
            <Box>
              <Button onClick={handleClose}>
                <img src={crossarrow} alt="crossarrow" />
              </Button>
            </Box>
          </Box>
          <Box sx={{ bgcolor: "#F9FAFB", py: 1, mt: 2, px: 2 }}>
            <Typography
              color={"#667085"}
              fontFamily={"inter"}
              fontSize={"10px"}
              fontWeight={400}
            >
              Give initial details of user to sync data with tekmetrik
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {/* ---------------left side--------------- */}
            <Grid item xs={6}>
              <Box>
                <Typography
                  fontFamily={"inter"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#899CAF"}
                  sx={{ ml: 2, mt: 3, mb: 1 }}
                  id="starick"
                >
                  Full name
                </Typography>
              </Box>
              <Box>
                <TextField
                  placeholder="Enter full name of user"
                  sx={{
                    ml: 2,
                    width: { sm: 290 },
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  fontFamily={"inter"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#899CAF"}
                  sx={{ ml: 2, mt: 2, mb: 1 }}
                  id="starick"
                >
                  Email address
                </Typography>
              </Box>
              <Box>
                <TextField
                  placeholder="Enter email address of user"
                  sx={{
                    ml: 2,
                    width: { sm: 290 },
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  fontFamily={"inter"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#899CAF"}
                  sx={{ ml: 2, mt: 2, mb: 1 }}
                  id="starick"
                >
                  Enter Password
                </Typography>
              </Box>
              <Box>
                <TextField
                  placeholder="Set password for user "
                  sx={{
                    ml: 2,
                    width: { sm: 290 },
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                />
              </Box>
            </Grid>
            {/* ---------------end left side--------------- */}
            {/* ---------------Right side--------------- */}

            <Grid item xs={6}>
              <Box>
                <Typography
                  fontFamily={"inter"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#899CAF"}
                  sx={{ ml: 2, mt: 3, mb: 1 }}
                  id="starick"
                >
                  Select Shop
                </Typography>
              </Box>
              <Box>
                <Box sx={{ maxWidth: 290, ml: 2 }}>
                  <FormControl fullWidth>
                    <Select
                      value={age}
                      onChange={handleChange}
                      sx={{ height: 47 }}
                      displayEmpty
                      inputProps={{ "aria-label": "Select nearest shop" }}
                    >
                      <MenuItem value="" disabled>
                        Select nearest shop
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Typography
                  fontFamily={"inter"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#899CAF"}
                  sx={{ ml: 2, mt: 2, mb: 1 }}
                  id="starick"
                >
                  Enter Phone no
                </Typography>
              </Box>
              <Box>
                <TextField
                  placeholder='+1 (123) 123 - 3434"'
                  sx={{
                    ml: 2,
                    width: { sm: 290 },
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                />
              </Box>
            </Grid>
            {/* ---------------end Right side--------------- */}
          </Grid>
          {/* ---------------------BUTTON----------------------- */}
          <Box
            display={"flex"}
            justifyContent={"end"}
            sx={{ mt: 5, ml: 6, pt: 5 }}
          >
            <Box>
              <Button
                onClick={handleClose}
                sx={{ bgcolor: "#EEEEEE", borderRadius: "8px", px: 3, mr: 2 }}
              >
                Cancel
              </Button>
            </Box>
            <Box>
              <Button sx={{ bgcolor: "#2E7FFD1F", borderRadius: "8px", px: 4 }}>
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
