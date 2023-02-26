import Link from "next/link";
import React, { ReactNode } from "react";
import classes from "./css/Btn.module.css";

type Props = {
  link: string;
  children: ReactNode;
};

export default function Button(props: Props) {
  return (
    <div>
      <Link href={props.link} className={classes.btn}>{props.children}</Link>
    </div>
  );
}
