

import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import crossarrow from "../../assets/images/cross-icon.png";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import arrow from "../../assets/images/arrow.png";
import greenarrow from "../../assets/images/greenarrow.png";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const rows = [
  {
    img: arrow,
    name: "98$ Redeemed",
    secondname: "Got Oil change for BMW i8 2020",
    date: "23 Feb, 2022",
  },
  {
    img: greenarrow,
    name: "98$ Redeemed",
    secondname:
      "Referral bonus on referring  Ashar Shoaib to Integrity 1st Automotive",
    date: "23 Feb, 2022",
  },
  {
    img: arrow,
    name: "98$ Redeemed",
    secondname: "Break leather change for BMW i8 2020",
    date: "23 Feb, 2022",
  },
  {
    img: arrow,
    name: "98$ Redeemed",
    secondname: "Got Oil change for BMW i8 2020",
    date: "23 Feb, 2022",
  },
];

export default function Rewardhistory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "capitalize",
          borderBottom: " 1px solid #488FFD",
          padding: 0,
          mt: 1.3,
          borderRadius: "0",
          color: "#488FFD",
          fontFamily: "inter",
          fontSize: "10px",
          fontWeight: 400,
        }}
      >
        Reward History
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: "70%" }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"}>
              <Box sx={{ mr: 5, mt: 0.7 }}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#2F496C",
                    fontFamily: "inter",
                    fontSize: "28px",
                    fontWeight: 600,
                  }}
                >
                  Reward History
                </Typography>
              </Box>
              {/* dropdown --------------------------------------------------------*/}
              <Box>
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10}>Filter: Redeemed</MenuItem>
                      <MenuItem value={20}>Filter: Redeemed</MenuItem>
                      <MenuItem value={30}>Filter: Redeemed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* dropdown --------------------------------------------------------*/}
            </Box>
            <Button onClick={handleClose}>
              <img src={crossarrow} alt="crossarrow" />
            </Button>
          </Box>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667085",
                      fontFamily: "inter",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    History{" "}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667085",
                      fontFamily: "inter",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667085",
                      fontFamily: "inter",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      <Box display={"flex"}>
                        <Box sx={{ mt: 2 }}>
                          <img src={row.img} alt="arrow" />
                        </Box>
                        <Box
                          sx={{
                            ml: 2,
                            mt: 3,
                            color: "#101828",
                            fontFamily: "inter",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {row.name}
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Typography
                        sx={{
                          color: "#344054",
                          fontFamily: "inter",
                          fontSize: "12px",
                          fontWeight: 500,
                          mt: 2.3,
                          py: 1,
                        }}
                      >
                        {row.secondname}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          color: "#424A53",
                          fontFamily: "inter",
                          fontSize: "14px",
                          fontWeight: 400,
                          mt: 2,
                        }}
                      >
                        {row.date}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
