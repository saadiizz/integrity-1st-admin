import * as React from "react";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import crossarrow from "../../assets/images/cross-icon.png";
import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReuseableModal from "../reuseable/ReuseableModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CreatAppointment() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [childModalVisible, setchildModalVisible] = React.useState(false);
  const handlechildModalVisible = () => {
    setchildModalVisible(true);
  };
  const handleClosechildModalVisible = () => {
    setchildModalVisible(false);
  };
  // function ChildModal() {
  //   return (
  //     <React.Fragment>
  //       {/*------------------- child modal------------------- */}
  //       <Modal
  //         hideBackdrop
  //         open={childModalVisible}
  //         onClose={handleClosechildModalVisible}
  //         aria-labelledby="child-modal-title"
  //         aria-describedby="child-modal-description"
  //       >
  //         <Box sx={{ ...style, width: 800 }}>
  //           <Box display={"flex"} justifyContent={"space-between"}>
  //             <Box
  //               sx={{
  //                 ml: 2,
  //                 color: "#2F496C",
  //                 fontFamily: "inter",
  //                 fontSize: "16px",
  //                 fontWeight: 500,
  //               }}
  //             >
  //               <h2 id="parent-modal-title">Register New User </h2>
  //             </Box>
  //             <Box>
  //               <Button
  //                 onClick={handleClosechildModalVisible}
  //                 style={{
  //                   maxWidth: "30px",
  //                   maxHeight: "30px",
  //                   minWidth: "30px",
  //                   minHeight: "30px",
  //                 }}
  //               >
  //                 <img src={crossarrow} alt="crossarrow" width={15} />
  //               </Button>
  //             </Box>
  //           </Box>
  //           <Box sx={{ bgcolor: "#F9FAFB", py: 1, mt: 2, px: 2 }}>
  //             <Typography
  //               color={"#667085"}
  //               fontFamily={"inter"}
  //               fontSize={"12px"}
  //               fontWeight={400}
  //             >
  //               Give initial details of user to sync data with tekmetrik
  //             </Typography>
  //           </Box>
  //           <Box>
  //             <Typography
  //               fontFamily={"inter"}
  //               fontSize={"12px"}
  //               fontWeight={400}
  //               color={"#899CAF"}
  //               sx={{ ml: 2, mt: 3 }}
  //               id="starick"
  //             >
  //               Select Shop
  //             </Typography>
  //           </Box>
  //           {/* ----------Dropdown--------------------- */}

  //           <Box width={"57.5%"}>
  //             <Box sx={{ minWidth: 120, ml: 2, mt: 1 }}>
  //               <FormControl fullWidth>
  //                 <InputLabel id="demo-simple-select-label">
  //                   Select nearest shop
  //                 </InputLabel>
  //                 <Select
  //                   labelId="demo-simple-select-label"
  //                   id="demo-simple-select"
  //                   value={age}
  //                   label="Select nearest shop"
  //                   onChange={handleChange}
  //                   sx={{ height: 50 }}
  //                 >
  //                   <MenuItem value={10}>Ten</MenuItem>
  //                   <MenuItem value={20}>Twenty</MenuItem>
  //                   <MenuItem value={30}>Thirty</MenuItem>
  //                 </Select>
  //               </FormControl>
  //             </Box>
  //           </Box>

  //           {/* ----------end Dropdown--------------------- */}
  //           <Box>
  //             <Typography
  //               fontFamily={"inter"}
  //               fontSize={"12px"}
  //               fontWeight={400}
  //               color={"#899CAF"}
  //               sx={{ ml: 2, mt: 1 }}
  //               id="starick"
  //             >
  //               Enter Phone no
  //             </Typography>
  //           </Box>
  //           {/* ---------------------Email-textfield --------------------------------*/}

  //           <Box
  //             component="form"
  //             sx={{
  //               "& > :not(style)": { ml: 2, width: "45.5ch", mt: 1 },
  //             }}
  //             noValidate
  //             autoComplete="off"
  //           >
  //             <TextField
  //               id="outlined-basic"
  //               label="+1 (123) 123 - 3434"
  //               variant="outlined"
  //               sx={{
  //                 "& .MuiInputBase-root": {
  //                   height: 50,
  //                 },
  //               }}
  //             />
  //           </Box>
  //           {/* ---------------------end Email-textfield --------------------------------*/}
  //           <Box>
  //             <Typography
  //               fontFamily={"inter"}
  //               fontSize={"12px"}
  //               fontWeight={400}
  //               color={"#899CAF"}
  //               sx={{ ml: 2, mt: 1 }}
  //               id="starick"
  //             >
  //               Enter Password
  //             </Typography>
  //           </Box>
  //           {/* ---------------------Email-textfield --------------------------------*/}

  //           <Box
  //             component="form"
  //             sx={{
  //               "& > :not(style)": {
  //                 ml: 2,
  //                 width: "45.5ch",
  //                 mt: 1,
  //                 pb: 6,
  //                 mb: 5,
  //               },
  //               "& .MuiInputBase-root": {
  //                 height: 50,
  //               },
  //             }}
  //             noValidate
  //             autoComplete="off"
  //           >
  //             <TextField
  //               id="outlined-basic"
  //               label="Set password for user "
  //               variant="outlined"
  //             />
  //           </Box>
  //           {/* ---------------------end Email-textfield --------------------------------*/}

  //           <Box display={"flex"} justifyContent={"end"} sx={{ mt: 5, ml: 6 }}>
  //             <Box>
  //               <Button
  //                 onClick={handleClosechildModalVisible}
  //                 sx={{
  //                   bgcolor: "#EEEEEE",
  //                   color: "#8B8D90",
  //                   borderRadius: "8px",
  //                   px: 3,
  //                   mr: 2,
  //                   textTransform: "capitalize",
  //                 }}
  //               >
  //                 Cancel
  //               </Button>
  //             </Box>
  //             <Box>
  //               <Button
  //                 onClick={handlechildModalVisible}
  //                 sx={{
  //                   bgcolor: "#2E7FFD1F",
  //                   borderRadius: "8px",
  //                   px: 3.5,
  //                   textTransform: "capitalize",
  //                 }}
  //               >
  //                 Create{" "}
  //               </Button>
  //             </Box>
  //           </Box>
  //           <Box borderTop={"1px solid #E4E7EC"} sx={{ mt: 5 }}>
  //             <Box display={"flex"} justifyContent={"center"} sx={{ mt: 3 }}>
  //               <Button
  //                 sx={{ mt: 0.1, mr: 2 }}
  //                 onClick={handleClosechildModalVisible}
  //                 style={{
  //                   maxWidth: "35px",
  //                   maxHeight: "35px",
  //                   minWidth: "35px",
  //                   minHeight: "35px",
  //                 }}
  //               >
  //                 1
  //               </Button>
  //               <Button
  //                 sx={{ bgcolor: "#2E7FFD1F", px: 2, py: 1, color: "blue" }}
  //                 style={{
  //                   maxWidth: "35px",
  //                   maxHeight: "35px",
  //                   minWidth: "35px",
  //                   minHeight: "35px",
  //                 }}
  //               >
  //                 2
  //               </Button>
  //             </Box>
  //           </Box>
  //         </Box>
  //         {/*------------------- end child modal------------------- */}
  //       </Modal>
  //     </React.Fragment>
  //   );
  // }
  return (
    <div>
      <ReuseableModal handleClose={handleClose} open={open} width={"40%"}>
        <Box sx={{ ...style, width: 800 }}>
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
              <h2 id="parent-modal-title">Register New User </h2>
            </Box>
            <Box>
              <Button
                onClick={handleClose}
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  minWidth: "30px",
                  minHeight: "30px",
                }}
              >
                <img src={crossarrow} alt="crossarrow" width={15} />
              </Button>
            </Box>
          </Box>
          <Box sx={{ bgcolor: "#F9FAFB", py: 1, mt: 2, px: 2 }}>
            <Typography
              color={"#667085"}
              fontFamily={"inter"}
              fontSize={"12px"}
              fontWeight={400}
            >
              Give initial details of user to sync data with tekmetrik
            </Typography>
          </Box>
          <Box>
            <Typography
              fontFamily={"inter"}
              fontSize={"12px"}
              fontWeight={400}
              color={"#899CAF"}
              sx={{ ml: 2, mt: 3 }}
              id="starick"
            >
              Select Shop
            </Typography>
          </Box>
          {/* ----------Dropdown--------------------- */}

          <Box width={"57%"}>
            <Box sx={{ minWidth: 120, ml: 2, mt: 1 }}>
              {/* <FormControl fullWidth>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={age}
                  // placeholder="Select nearest shop"
                  onChange={handleChange}
                  sx={{ height: 50 }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
              <FormControl fullWidth>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Select nearest shop</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
              </FormControl>
            </Box>
          </Box>

          {/* ----------end Dropdown--------------------- */}
          <Box>
            <Typography
              fontFamily={"inter"}
              fontSize={"12px"}
              fontWeight={400}
              color={"#899CAF"}
              sx={{ ml: 2, mt: 1 }}
              id="starick"
            >
              Enter Phone no
            </Typography>
          </Box>
          {/* ---------------------Email-textfield --------------------------------*/}

          <Box
            component="form"
            sx={{
              "& > :not(style)": { ml: 2, width: "45.5ch", mt: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{ sx: { height: 50 } }}
              id="outlined-basic"
              placeholder="+1 (123) 123 - 3434"
              variant="outlined"
            />
          </Box>
          {/* ---------------------end Email-textfield --------------------------------*/}
          <Box>
            <Typography
              fontFamily={"inter"}
              fontSize={"12px"}
              fontWeight={400}
              color={"#899CAF"}
              sx={{ ml: 2, mt: 1 }}
              id="starick"
            >
              Enter Password
            </Typography>
          </Box>
          {/* ---------------------Email-textfield --------------------------------*/}

          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                ml: 2,
                width: "45.5ch",
                mt: 1,
                mb: 6,
                pb: 6,
              },
              "& .MuiInputBase-root": {},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{ sx: { height: 50 } }}
              id="outlined-basic"
              placeholder="Set password for user "
              variant="outlined"
            />
          </Box>
          {/* ---------------------end Email-textfield --------------------------------*/}

          <Box display={"flex"} justifyContent={"end"} sx={{ mt: 5, ml: 6 }}>
            <Box>
              <Button
                onClick={handleClose}
                sx={{
                  bgcolor: "#EEEEEE",
                  borderRadius: "8px",
                  px: 3,
                  mr: 2,
                  textTransform: "capitalize",
                  color: "#8B8D90",
                }}
              >
                Cancel
              </Button>
            </Box>
            <Box>
              <Button
                onClick={handlechildModalVisible}
                sx={{
                  bgcolor: "#2E7FFD1F",
                  borderRadius: "8px",
                  px: 4,
                  textTransform: "capitalize",
                }}
              >
                next
              </Button>
            </Box>
          </Box>
          <Box borderTop={"1px solid #E4E7EC"} sx={{ mt: 5 }}>
            <Box display={"flex"} justifyContent={"center"} sx={{ mt: 2 }}>
              <Button
                sx={{
                  mr: 2,
                  bgcolor: "#2E7FFD1F",
                  px: 1.5,
                  py: 0.8,
                  color: "blue",
                  borderRadius: "8px",
                }}
                style={{
                  maxWidth: "35px",
                  maxHeight: "35px",
                  minWidth: "35px",
                  minHeight: "35px",
                }}
              >
                1
              </Button>
              <Button
                sx={{}}
                onClick={handlechildModalVisible}
                style={{
                  maxWidth: "35px",
                  maxHeight: "35px",
                  minWidth: "35px",
                  minHeight: "35px",
                }}
              >
                2
              </Button>
            </Box>
          </Box>
        </Box>
      </ReuseableModal>
      <Button
        onClick={handleOpen}
        sx={{
          background: "#2E7FFD1F",
          border: "1px solid #2E7FFD",
          borderRadius: "8px",
          mt: 2.5,
          py: 1.2,
          mr: 2,
          textTransform: "capitalize",
          fontFamily: "inter",
          fontSize: "px",
          fontWeight: 400,
          color: "#2E7FFD",
        }}
      >
        Register New User
      </Button>
    </div>
  );
}
