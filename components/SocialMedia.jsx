import Image from "next/image";

export const SocialMedia = () => {
  return (
    <div className="h-screen bg-cyberkarta-light flex px-16 justify-between items-center">
      <div className="">
        <h1 className="text-5xl mb-4 text-cyberkarta-blue">
          Ikuti Social Media
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 text-cyberkarta-blue">
          Cyberkarta
        </h1>
        <p className="text-xl max-w-[40ch] text-cyberkarta-dark">
          Ikuti Social Media Cyberkarta untuk mendapatkan konten-konten menarik
          seputar Cyber Security
        </p>
        <div className="mt-5 flex w-3/4 justify-between">
          <a href="https://www.instagram.com/thecyberkarta/" className="p-5 bg-white rounded-xl flex justify-center items-center hover:shadow-lg">
            <Image src="/icons/instagramIcon.svg" width={40} height={40} />
          </a>
          <a href="https://www.youtube.com/channel/UCcQK9bKxyx7y-RJlGbCt2CQ" className="p-5 bg-white rounded-xl flex justify-center items-center hover:shadow-lg">
            <Image src="/icons/youtubeIcon.svg" width={40} height={40} />
          </a>
          <a href="https://www.twitch.tv/cyberkarta" className="p-5 bg-white rounded-xl flex justify-center items-center hover:shadow-lg">
            <Image src="/icons/twitchIcon.svg" width={40} height={40} />
          </a>
        </div>
      </div>
      <div>
        <Image src="/socialmedia.webp" width={500} height={500} alt="social media" />
      </div>
    </div>
  );
};
