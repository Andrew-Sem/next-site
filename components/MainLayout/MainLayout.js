import Head from "next/head";
import classes from "./MainLayout.module.css";
import CustomLink from "./../CustomLink/CustomLink";
import Image from "next/image";

export default function MainLayout({ children, title = "Next App" }) {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
  ];

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
      <nav className={classes.app__navbar}>
        <div className="container">
          <div className={classes.app__navbar_inner}>
            <div className={classes.app__navbar_logo}>
              <img src="" alt="app logo" />
            </div>
            <ul className={classes.app__navbar_links}>
              {links.map((link) => (
                <li key={link.href}>
                  <CustomLink title={link.title} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className={classes.main}>{children}</main>
    </>
  );
}
