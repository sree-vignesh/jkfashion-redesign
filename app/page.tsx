// app/page.tsx
import Head from "next/head";
import HeroSection from "../components/HeroSection/Herosection.js";
import FounderHistory from "../components/FounderSection/FoundersHistory.js";
import ZigzagContainers from "../components/ZigZagContainer/ZigzagContainers.js";

const Home = () => {
  return (
    <>
      <Head>
        <title>JK Fashion - Home</title> {/* Set your custom page title */}
        <meta
          name="description"
          content="Welcome to JK Fashion, your destination for the latest fashion trends."
        />
      </Head>

      {/* Main content
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center">
          Welcome to <br />
          JK Fashion
        </h1>
      </div> */}
      <HeroSection />
      <FounderHistory />
      <ZigzagContainers />

      {/* Footer (optional, uncomment if needed) */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
