import Head from "next/head";
import Link from "next/link";

const siteTitle = "Chaos and Creation in the Backyard";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
          <p className="desc">
            The logs of <a href="https://github.com/JohnTitor">@JohnTitor</a>,
            a.k.a. #times-huyuumi
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
