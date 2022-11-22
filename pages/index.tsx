import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/GradientLayout";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] })

const Home = () => {
  return (
    <GradientLayout
      color="orange"
      children={undefined}
      image="https://www.pngkit.com/png/detail/2-25926_john-cena-orange-john-cena-thor-ragnarok.png"
      subtitle="Profile"
      title="John Cenna"
      description="Yeah that's it 5 playlist"
      roundImage={undefined}
    >
      HEllo
    </GradientLayout>
  );
};

export default Home;
