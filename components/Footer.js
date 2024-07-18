//components/Footer.js
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="dir-rtl flex content-center items-center justify-center p-4 text-violet-500">
      <p className="text-sm">صنعت بـ❤️ بواسطة</p>
      <Link className="flex items-center mr-2 text-violet-400" href="https://linkedin.com/in/khalenezi"> Khalid <FaLinkedin className="mr-1" /></Link>
      <p className="pr-2 text-sm">برمجة وتصميم</p>
      <Link className="flex items-center mr-2 text-violet-400" href="https://www.linkedin.com/in/muhammad-lardhi/"> Lardhi <FaLinkedin className="mr-1" /></Link>
    </div>
  )
}
