import Head from "next/head";
import cl from "./MainLayout.module.css";
import CustomLink from "./../CustomLink/CustomLink";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function MainLayout({ children, title = "Next App" }) {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

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
            <ThemeSwitcher />
            <nav>
              <ul className={cl.navbar__links}>
                {links.map((link) => (
                  <li key={link.href}>
                    <CustomLink title={link.title} href={link.href} />
                  </li>
                ))}
              </ul>

              <div className={cl.navbar_smallscreen}>
                <GiHamburgerMenu
                  className={cl.overlay__open}
                  onClick={() => setToggleMenu(true)}
                />
              </div>

              {toggleMenu && (
                <div
                  className={[
                    cl.navbar_smallscreen__overlay,
                    cl.slide_bottom,
                  ].join(" ")}
                >
                  <VscClose
                    fontSize={27}
                    className={cl.overlay__close}
                    onClick={() => setToggleMenu(false)}
                  />
                  <ul className={cl.navbar_smallscreen__links}>
                    {links.map((link) => (
                      <li key={link.href}>
                        <CustomLink
                          title={link.title}
                          href={link.href}
                          onClick={() => setToggleMenu(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className={cl.main}>{children}</main>
    </>
  );
}
