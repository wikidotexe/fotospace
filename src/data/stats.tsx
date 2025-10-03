import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "Mudah",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Kelola file dan foto Anda dengan cepat tanpa ribet.",
  },
  {
    title: "Aman",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Data Anda tersimpan dengan enkripsi, hanya Anda yang bisa mengaksesnya.",
  },
  {
    title: "Fleksibel",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Akses dari mana saja dan kapan saja, lewat laptop maupun smartphone.",
  },
];
