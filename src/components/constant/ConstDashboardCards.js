
import Patientimg from "../../assets/images/profile-2user.svg";
import Groupimg from "../../assets/images/Group 92262 (1).svg";
import Userimg from "../../assets/images/user-add.svg";
import Clockimg from "../../assets/images/clock.svg";

export const ConstDashboardCards = [
  {
    today: "Total Patients",
    title: "1000",
    persent: "+30%",
    icon: Patientimg,
    bnb: "bnb2",
  },
  {
    today: "Total Embryo Graded",
    title: "3000",
    persent: "+20%",
    icon: Groupimg,
    bnb: "bnb2",
  },
  {
    today: "Avg #Emb Graded/Patient",
    title: "06",
    persent: "-20%",
    icon: Userimg,
    bnb: "redtext",
  },
  {
    today: "Avg Turnaround Time",
    title: "123 Hrs",
    persent: "10%",
    icon: Clockimg,
    bnb: "bnb2",
  },
];
