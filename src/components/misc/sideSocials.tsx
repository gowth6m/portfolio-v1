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
      <Link href={""}>
        <FontAwesomeIcon icon={faGithub} className="h-[20px]" />
      </Link>

      <Link href={""}>
        <FontAwesomeIcon icon={faLinkedinIn} className="h-[20px]" />
      </Link>

      <Link href={""}>
        <FontAwesomeIcon icon={faInstagram} className="h-[20px]" />
      </Link>

      <Link href={""}>
        <FontAwesomeIcon icon={faTwitter} className="h-[20px]" />
      </Link>

      <Link href={""}>
        <FontAwesomeIcon icon={faCodepen} className="h-[20px]" />
      </Link>
    </div>
  );
}
