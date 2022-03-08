import Head from "next/head";
import cl from "./MainLayout.module.css";
import CustomLink from "./../CustomLink/CustomLink";

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
      <header className={cl.header}>
        <div className="container">
          <div className={cl.header_inner}>
            <div className={cl.header__logo}>
              <img src="" alt="app logo" />
            </div>
            <nav className={cl.navbar__links}>
              {links.map((link) => (
                <li key={link.href}>
                  <CustomLink title={link.title} href={link.href} />
                </li>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className={cl.main}>{children}</main>
    </>
  );
}
