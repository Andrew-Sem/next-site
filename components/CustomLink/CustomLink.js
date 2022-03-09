import Link from "next/link";
import classes from "./CustomLink.module.css";

export default function CustomLink({ href, title, onClick }) {
  return (
    <Link href={href}>
      <a className={classes.a} onClick={onClick}>
        {title}{" "}
      </a>
    </Link>
  );
}
