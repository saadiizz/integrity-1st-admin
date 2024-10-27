import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Reusesearch from "../reuseable/ReuseableSearch";
import userIcon from "../../assets/images/user-icon.jpg";
import blockicon from "../../assets/images/block-icon.png";
import "../../css/style.css";
import Rewardhistory from "./Rewardhistory";
import appointmentdeleteicon from "../../assets/images/delete-icon.png";
import appointmenteyeicon from "../../assets/images/eye-icon.png";
import CreatAppointment from "./CreatAppointment";
import UpdateNewUser from "./UpdateNewUser";

const rows = [
  {
    name: "Olivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
  {
    name: "Glivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
  {
    name: "flivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
  {
    name: "Llivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
  {
    name: "ilivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
  {
    name: "Plivia Rhye",
    image: userIcon,
    reffered: "Ashar Shoaib",
    OwnedVehicle: 3,
    phoneno: "+1 (323)861-5463",
    Email: "olivia@untitledui.com",
    Doller: "30$ ",
    test: {
      name1: "Ramy",
      name2: "Ashar",
      name3: "Ali Shafqat",
      count: "+2",
      detail: "View Detail",
    },
  },
];
export default function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    setusers(rows);
  }, []);

  const handelchange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempuser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setusers(tempuser);
    } else {
      let tempuser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setusers(tempuser);
    }
  };

  return (
    <>
      <Box height={70} />
      <Typography
        variant="h4"
        sx={{ mb: 3, fontFamily: "inter", fontSize: "18px", fontWeight: 600 }}
      >
        Users
      </Typography>
      <Box className="husnain">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Reusesearch />
          <Box display={"flex"}>
            <Box sx={{ mr: 2 }}>
              <button className="appointment-button-delete">
                Block Selected
              </button>
            </Box>
            <Box sx={{ mr: 2 }}>
              <button className="appointment-button-delete">
                Delete Selected
              </button>
            </Box>
            <Box>
              <CreatAppointment />
            </Box>
          </Box>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1 }}
              >
                <Box display={"flex"}>
                  <Box sx={{ mt: 1 }}>
                    <input
                      type="checkbox"
                      name="allSelect"
                      checked={
                        users.filter((user) => user?.isChecked !== true)
                          .length < 1
                      }
                      onChange={handelchange}
                    />
                  </Box>
                  <Box sx={{ ml: 2, mt: 0.5 }}>
                    <Typography variant="body5">Full Name</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.2 }}
              >
                Referred by
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.8 }}
              >
                Owned Vehicle(s).
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.8 }}
              >
                Current Reward
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.8 }}
              >
                Phone Number
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.8 }}
              >
                Email address
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontFamily: "inter",
                  color: "#667085",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                sx={{ pl: 1.8 }}
              >
                Referrals
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                // key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display={"flex"} sx={{ ml: 1 }}>
                    <Box sx={{ mt: 2 }}>
                      <input
                        type="checkbox"
                        name={user.name}
                        onChange={handelchange}
                        checked={user?.isChecked || false}
                      />
                    </Box>
                    <Box sx={{ mx: 2, mt: 1 }}>
                      <img src={user.image} alt="logo" />
                    </Box>
                    <Box
                      fontFamily={"inter"}
                      fontSize={"11px"}
                      fontWeight={400}
                      sx={{ mt: 2.9, color: "#101828" }}
                    >
                      {user.name}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box
                    fontFamily={"inter"}
                    fontSize={"10px"}
                    fontWeight={400}
                    sx={{ color: "#101828", mt: 0.7, ml: 1.5 }}
                  >
                    {user.reffered}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box display={"flex"}>
                    <Box
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={400}
                      sx={{ mt: 1.1, color: "#424A53", ml: 2 }}
                    >
                      {user.OwnedVehicle}
                    </Box>
                    <Box
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={400}
                    >
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          fontSize: "11px",
                          fontWeight: "400",
                          color: "#2E7FFD",
                          ml: 1,
                          mt: 1.1,
                        }}
                      >
                        View Detail
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box display={"flex"}>
                    <Box
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={400}
                      sx={{ color: "#424A53", mt: 1.5, ml: 2 }}
                    >
                      {user.Doller}
                    </Box>
                    <Box sx={{ ml: 1, color: "#2E7FFD" }}>
                      <Rewardhistory />
                    </Box>
                  </Box>
                </TableCell>

                <TableCell align="left">
                  <Box
                    fontFamily={"inter"}
                    fontSize={"10px"}
                    fontWeight={400}
                    sx={{ color: "#424A53", mt: 1.3, ml: 2, mr: 1 }}
                  >
                    {user.phoneno}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box
                    fontFamily={"inter"}
                    fontSize={"10px"}
                    fontWeight={400}
                    sx={{ color: "#424A53", mt: 1.2, ml: 2 }}
                  >
                    {user.Email}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box display={"flex"} sx={{ mt: 1.5, ml: 2 }}>
                    <Typography
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={500}
                      sx={{
                        bgcolor: "#F9F5FF",
                        color: "#6941C6",
                        px: 1,
                        pt: 0.5,
                        borderRadius: "16px",
                      }}
                    >
                      {user.test.name1}
                    </Typography>
                    <Typography
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={500}
                      sx={{
                        bgcolor: "#EFF8FF",
                        mx: 1,
                        px: 1,
                        pt: 0.5,
                        color: "#175CD3",
                        borderRadius: "16px",
                      }}
                    >
                      {user.test.name2}
                    </Typography>
                    <Typography
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={500}
                      sx={{
                        bgcolor: "#EEF4FF",
                        color: "#175CD3",
                        px: 1,
                        pt: 0.5,
                        borderRadius: "16px",
                      }}
                    >
                      {user.test.name3}
                    </Typography>
                    <Typography
                      fontFamily={"inter"}
                      fontSize={"10px"}
                      fontWeight={500}
                      sx={{
                        bgcolor: "#F2F4F7",
                        ml: 2.5,
                        px: 1,
                        pt: 0.5,
                        borderRadius: "16px",
                      }}
                    >
                      {user.test.count}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="end">
                  <Box display={"flex"} sx={{ mt: 1.5 }}>
                    <Box sx={{ mt: 0.2 }}>
                      <img
                        src={appointmenteyeicon}
                        alt="appointmenteyeicon "
                        width={20}
                      />
                    </Box>
                    <Box sx={{ mx: 1 }}>
                      <UpdateNewUser />
                    </Box>
                    <Box sx={{ mr: 0.8, mt: 0.2 }}>
                      <img
                        src={appointmentdeleteicon}
                        alt="delete-icon"
                        width={20}
                      />
                    </Box>
                    <Box sx={{ mt: 0.2 }}>
                      <img src={blockicon} alt="delete-icon" width={20} />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
}
