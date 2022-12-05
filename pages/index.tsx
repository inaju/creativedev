import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FormComponent from "./Form";
import logo from "./img/logo.svg";
import beach from "./img/beach-work.jpg";
import Hero from "./Hero";
import Cards from "./Cards";
import img_1 from "./img/img_1.jpg";
import img_2 from "./img/img_2.jpg";
import img_3 from "./img/img_3.jpg";
import Thumbnail from "./Thumbnail";

import ThumbnailYT from "./components/ThumbnailYT";
import Main from "./portfolioapp/Main";
import CreativeDev from "./creativedev/CreativeDev";
const Home: NextPage = () => {
  const data = [
    // {
    //   thumbnail:
    //     "https://i.ytimg.com/vi/Y41f7tmB67M/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgYShAMA8=&rs=AOn4CLARwCloVmFiGKM-YabV-pl3ASXoOQ",
    //   timeStamp: "22:10",
    //   videoTitle: "How To Fly High",
    //   author: "Johny Dee",
    //   authorPic:
    //     "https://yt3.ggpht.com/ytc/AMLnZu_jZfBT-ty8j-7FbB31YjlUXnoUriz5zEkLpG5Qhg=s68-c-k-c0x00ffffff-no-rj",
    //   viewNo: 23,
    // },
    {
      thumbnail:
        "https://i.ytimg.com/vi/nxgxkOuNnfg/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDYgJCh_MA8=&rs=AOn4CLAu1rAu0oGGdifSsPnM6GhOvmkkwQ",
      timeStamp: "59:10",
      videoTitle:
        "Spontaneous soaking worship | Sounds of ascension | Prayer &...",
      author: "Godswill Oyor",
      authorPic:
        "https://yt3.ggpht.com/ytc/AMLnZu95jhhXLoE9joPk0X9qgswtEMS6DyOptK5ehbjIrZg=s68-c-k-c0x00ffffff-no-rj",
      viewNo: 20,
    },
    {
      thumbnail: "https://i.ytimg.com/vi/8YA825ZNAIE/sddefault_live.jpg",
      timeStamp: "34:58",
      videoTitle: "Coding in Chicago v2.0 | 🎧 24/7 LoFi Hip-Hop Radio",
      author: "Code Pioneers",
      authorPic:
        "https://yt3.ggpht.com/ytc/AMLnZu81GFOTtgtSexGi_DgTJnuRH3sAccO1cC57C8Hc=s68-c-k-c0x00ffffff-no-rj",
      viewNo: 1,
      link: "https://m.youtube.com/watch?v=3jYkhhAjiQg",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/kap8xrWMNDM/sddefault.jpg",
      timeStamp: "4:52",
      videoTitle: "Setting up Tailwind CSS in a Next.js Project",
      author: "Simonswiss",
      authorPic:
        "https://yt3.ggpht.com/Sjv8m5d3j8d2lteyj73UuQzO6rB2mVJGvnRLWXXHFVOQYTa5kChJ2WVSU22WEaD88sByQMyiCQ=s68-c-k-c0x00ffffff-no-rj",
      viewNo: 10,
      link: "https://m.youtube.com/watch?v=3jYkhhAjiQg",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/izFPJMrQTTE/sddefault.jpg",
      timeStamp: "34:53",
      videoTitle:
        "Genesis // 📕 christian lofi // chill instrumental worship + study",
      author: "The Lofi Christian",
      authorPic:
        "https://yt3.ggpht.com/ytc/AMLnZu8kb83MRleQlF6wvMdb2xNJStMJzXqG_3nvYkBGcA=s68-c-k-c0x00ffffff-no-rj",
      viewNo: 340,
      link: "https://m.youtube.com/watch?v=3jYkhhAjiQg",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/EV5lUPtETts/sddefault.jpg",
      timeStamp: "2:17:23",
      author: "Celebration Church",
      videoTitle: "EVERY WIND OF DOCTRINE|20TH NOVEMBER| Celebration Church",
      authorPic:
        "https://yt3.ggpht.com/fi22CSkNDDSIcSII9vkoXbwkBl0AfeHBO964QXIytTnQcXmHaxDzyHR0IRXqfuc6FYnSEebMLPE=s68-c-k-c0x00ffffff-no-rj",
      viewNo: 7,
      link: "https://m.youtube.com/watch?v=EV5lUPtETts",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/1FHWCJnp-tI/sddefault.jpg",
      timeStamp: "2:45",
      videoTitle: "Limoblaze - Hosanna (Official Music Video) ft. Banky W.",
      author: "Limoblaze",
      authorPic:
        "https://yt3.ggpht.com/zamjY8Y3OgM0JV4dKTovfZdl3tjrNN5KT5tpaRvGFw-qE6r9lEXacHVRoTfkqFltd8JUWBheAw=s88-c-k-c0x00ffffff-no-rj",
      viewNo: 7,
      link: "https://m.youtube.com/watch?v=EV5lUPtETts",
    },
  ];

  // if (typeof window !== "undefined") {
  //   return;
  // }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <CreativeDev />
      {/* https://www.npmjs.com/package/react-animated-css */}
      {/* <Main /> */}
    </>
  );
};

export default Home;

{
  /* <div className="flex flex-wrap sm:mx-1/2 w-full ">
        {data.map((i) => (
          <ThumbnailYT
            thumbnail={i.thumbnail}
            timeStamp={i.timeStamp}
            authorPic={i.authorPic}
            videoTitle={i.videoTitle}
            author={i.author}
            viewNo={i.viewNo}
          />
        ))}
      </div> */
}
{
  /* <Thumbnail /> */
}
{
  /* <Hero />
      <div className="flex flex-col sm:flex-row sm:mx-6 md:mx-24 sm:my-4 sm:flex-wrap">
        {data.map((item) => (
          <div key={item.stateName}>
            <Cards
              stateName={item.stateName}
              amount={item.amount}
              propNo={item.propNo}
              img={item.img}
            />
          </div>
        ))}
      </div> */
}
