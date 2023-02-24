import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>itsaFan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <div>
          <h1>Homepage</h1>
        </div>
      </main>
    </>
  );
}
