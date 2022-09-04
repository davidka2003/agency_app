import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles/navlink.module.scss";
interface NavlinkPropsI {
  text: string;
  href: string;
}
const Navlink = ({ text, href }: NavlinkPropsI) => {
  const { asPath } = useRouter();
  return (
    <li className={href === asPath ? styles.Navlink_active : styles.Navlink}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default Navlink;
