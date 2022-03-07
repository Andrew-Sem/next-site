import Head from "next/head";
import classes from "./MainLayout.module.css";
import CustomLink from "./../CustomLink/CustomLink";
import Image from "next/image";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="next, next.js, nextjs, javascript, js, react, react.js"
        />
        <meta name="description" content="losos" />
        <meta charSet="utf-8" />
      </Head>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.header__inner}>
            <Image
              src="/assets/img/logo.png"
              alt="app logo"
              width={60}
              height={60}
            />
            <nav className={classes.nav}>
              <CustomLink title={"Home"} href={"/"} />
              <CustomLink title={"About"} href={"/about"} />
              <CustomLink title={"Features"} href={"/features"} />
              <CustomLink title={"Pricing"} href={"/pricing"} />
            </nav>
          </div>
        </div>
      </header>

      <main className={classes.main}>{children}</main>
    </>
  );
}
