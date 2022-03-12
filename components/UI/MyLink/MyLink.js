import Link from "next/link";
import classes from "./MyLink.module.css";

export default function MyLink({ href, title, props }) {
  return (
    <Link href={href}>
      <a className={classes.a} {...props}>
        {title}{" "}
      </a>
    </Link>
  );
}
