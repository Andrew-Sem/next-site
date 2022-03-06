import Link from "next/link";
import classes from "./CustomLink.module.css";

export default function CustomLink({ href, title, linkProps }) {
  return (
    <Link className={classes.link} href={href} {...linkProps}>
      <a className={classes.a}>{title}</a>
    </Link>
  );
}
