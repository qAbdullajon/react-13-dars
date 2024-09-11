import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const admin = [
  {
    counter: "Teacher",
    path: "/admin",
    icon: <PersonAddAltIcon />,
  },
  {
    counter: "Students",
    path: "/admin/student",
    icon: <PersonOutlineIcon />,
  },
];

export { admin };
