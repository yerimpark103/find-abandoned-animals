import Head from "next/head";
import LostAnimalsPage from "./lost-animals";
export default function Home() {
  return (
    <>
      <Head>
        <title>Find Lost Animals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LostAnimalsPage />
      </main>
    </>
  );
}
