import hero from "../assets/hero.png";
import airplane from "../assets/airplane.svg";
import play from "../assets/play.png";
import axon from "../assets/axon.png";
import jetstar from "../assets/jetstar.png";
import expedia from "../assets/expedia.png";
import qantas from "../assets/qantas.png";
import alitalia from "../assets/alitalia.png";
import rightArrow from "../assets/right-arrow.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import feature from "../assets/feature.png";
import searchE from "../assets/search-e.png";
import pencile from "../assets/pencile.png";
import smile from "../assets/smile.png";
import map from "../assets/map.svg";
import worldMap from "../assets/world-map.png";
import addLocation from "../assets/add_location.png";
import favorite from "../assets/favorite.png";
import groups from "../assets/groups.png";

import ImageCard from "../components/ImageCard";
import InfoCard from "../components/InfoCard";
import USPCard from "../components/USPCard";

const Home = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between w-full">
            <div className="max-w-[658px]">
              <div className="text-[#4F7DF3] font-bold text-sm leading-none inline-flex gap-2 items-center bg-[#E5EDFF] py-2 px-5 rounded-full">
                <img
                  src={airplane}
                  alt="aeroplane emoji"
                  width={18}
                  height={18}
                />
                <div className="bg-[#4F7DF3] w-1.5 h-1.5 rounded-full" />
                Explore the wonderful indonesia!
              </div>
              <h2 className="mt-3 text-[#181E4B] text-[76px] leading-[89px] font-extrabold tracking--4">
                Liburan & nikmati
                <span className="text-[#4475F2]">tempat baru</span> di indonesia
              </h2>
              <p className="mt-[30px] text-[#5E6282] text-base leading-6 font-medium max-w-[477px]">
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
              </p>
              <div className="mt-[34px] flex items-center gap-10">
                <button className="text-white text-base leading-none font-bold bg-[#4475F2] px-6 py-5 rounded-xl shadow-lg shadow-[#4475F2]/25 max-w-[198px] w-full">
                  Mulai sekarang →
                </button>
                <div className="flex gap-4 items-center">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#4475F2] flex justify-center items-center shadow-lg shadow-[#4475F2]/25">
                    <img
                      src={play}
                      alt="play icon"
                      width={14.42}
                      height={14.42}
                    />
                  </div>
                  <div className="text-[#686D77] font-bold text-[17px] leading-none">
                    Putar Demo
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={hero} alt="hero image" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-24">
            <img src={axon} alt="platform 1" className="grayscale" />
            <img src={jetstar} alt="platform 1" className="grayscale" />
            <img src={expedia} alt="platform 1" className="grayscale" />
            <img src={qantas} alt="platform 1" className="grayscale" />
            <img src={alitalia} alt="platform 1" className="grayscale" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#4475F2] text-[18px] leading-[26.5px] font-extrabold tracking-9">
                DESTINASI FAVORIT
              </p>
              <h2 className="text-[#14183E] text-5xl leading-[50px] tracking--1 font-extrabold flex items-center gap-4">
                <img
                  src={airplane}
                  alt="aeroplane emoji"
                  width={40}
                  height={40}
                />
                <div className="w-2.5 h-2.5 bg-[#14183E] rounded-full" />
                Temukan Destinasi Favoritmu
              </h2>
            </div>
            <button className="text-[#4475F2] text-[17px] leading-[60px] font-semibold flex items-center gap-4">
              Lihat semua{" "}
              <img
                src={rightArrow}
                alt="right arrow icon"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="flex justify-between items-center pt-12">
            <ImageCard
              img={image1}
              imgAlt="image 1"
              title="Raja Ampat"
              subTitle="Bali"
            />
            <ImageCard
              img={image2}
              imgAlt="image 2"
              title="Labuan Bajo"
              subTitle="NTT"
            />
            <ImageCard
              img={image3}
              imgAlt="image 3"
              title="Kawah Ijen"
              subTitle="Jawa Timur"
            />
            <ImageCard
              img={image4}
              imgAlt="image 4"
              title="Bromo"
              subTitle="Jawa Timur"
            />
          </div>
        </div>
      </section>
      <section className="-mt-[120px] -mb-[80px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-[600px] w-full">
              <div className="flex flex-col gap-3">
                <p className="text-[#4475F2] text-[18px] leading-[26.5px] font-extrabold tracking-9">
                  RESERVASI TEMPAT
                </p>
                <h2 className="text-[#14183E] text-5xl leading-[50px] tracking--1 font-extrabold">
                  Gak mau ngantri? reservasi aja! 🤙🏻
                </h2>
              </div>
              <div className="flex flex-col gap-[51px] mt-8">
                <InfoCard
                  icon={searchE}
                  iconAlt="search icon"
                  head="Cari tempat yang kamu mau"
                  subHead="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
                />
                <InfoCard
                  icon={pencile}
                  iconAlt="pencile icon"
                  head="Isi data dan konfirmasi pembayaran"
                  subHead="Tulis dan lengkapi data kamu untuk keperluan data booking"
                />
                <InfoCard
                  icon={smile}
                  iconAlt="smile icon"
                  head="Tinggal masuk dan enjoy!"
                  subHead="Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan"
                />
              </div>
            </div>
            <div className="grow">
              <img src={feature} alt="feature image" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#4737FF] text-[18px] leading-[26.5px] font-extrabold tracking-9">
              CARI TEMPAT WISATA
            </p>
            <h2 className="text-[#151D21] text-5xl leading-[50px] tracking--1 font-extrabold flex items-center gap-4">
              <img src={map} alt="aeroplane emoji" width={40} height={40} />
              <div className="w-2.5 h-2.5 bg-[#151D21] rounded-full" />
              Cari Tempat Wisata Didekatmu
            </h2>
            <p className="max-w-[820px] text-[#18191F] text-[18px] leading-[32px] text-center">
              Fitur ini memungkinkan kamu untuk mencari tempat wisata atau
              tempat yang sedang populer di daerah kamu dengan begitu kamu akan
              selalu update dan gak kudet lagi 👍🏻
            </p>
          </div>
          <div className="mt-[45px] mb-[55px]">
            <img
              src={worldMap}
              alt="world map"
              className="mx-auto shadow-2xl rounded-xl"
            />
          </div>
          <div className="items-center justify-center flex gap-[56px]">
            <USPCard
              icon={addLocation}
              iconAlt="location icon"
              title="Populer di dekatmu"
              sub="Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu"
            />
            <USPCard
              icon={favorite}
              iconAlt="favorite icon"
              title="Favorit di dekatmu"
              sub="Tempat favorit dan disukai semua orang orang di sekitar daerah kamu"
            />
            <USPCard
              icon={groups}
              iconAlt="groups icon"
              title="Ramai di didekatmu"
              sub="Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
