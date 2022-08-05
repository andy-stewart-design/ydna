import Head from "next/head";
import NextImage from "next/future/image";
import img from "public/img/fpo-01.jpeg";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Andy Stewart Design</title>
        <meta name="description" content="Andy Stewart Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-items-center h-screen">
        <div>
          <NextImage src={img} priority className="w-full max-w-xl" alt="foo" />
          <h1 className="text-5xl">Andy Stewart Design</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
