import Head from "next/head";
import Link from "next/link";
import classes from "./MainLayout.module.css";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="next, next.js, nextjs, javascript, js, react, react.js"
        />
        <meta name="description" content="losos" />
        <meta charSet="utf-8" />
      </Head>
      <nav className={classes.nav}>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </nav>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
