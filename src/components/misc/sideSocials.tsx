import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SideSocials() {
  return (
    <div className="side-socials">
      <Link href={"https://github.com/gowth6m"} target="_blank">
        <FontAwesomeIcon icon={faGithub} className="h-[20px]" />
      </Link>

      <Link href={"https://www.linkedin.com/in/gowth6m/"} target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} className="h-[20px]" />
      </Link>

      <Link href={"https://www.instagram.com/gowth6m/"} target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="h-[20px]" />
      </Link>

      <Link href={"https://twitter.com/gowth6m"} target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="h-[20px]" />
      </Link>

      <Link href={"https://codepen.io/Gowth6m"} target="_blank">
        <FontAwesomeIcon icon={faCodepen} className="h-[20px]" />
      </Link>
    </div>
  );
}
