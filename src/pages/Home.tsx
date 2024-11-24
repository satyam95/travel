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
import framedPicture from "../assets/framed-picture.svg";
import bgCover from "../assets/bg-cover.png";
import whitePlay from "../assets/white-play.png";
import mountain from "../assets/mountains.png";
import cover from "../assets/cover2.jpg";
import filter from "../assets/filter.png";
import comment from "../assets/comment.svg";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import illstration from "../assets/illstration.png";
import thinkingFace from "../assets/thinking-face.svg";

import ImageCard from "../components/ImageCard";
import InfoCard from "../components/InfoCard";
import USPCard from "../components/USPCard";
import TestimonialCard from "../components/TestimonialCard";
import Accordion from "../components/Accordion";

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
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#4475F2] text-[18px] leading-[26.5px] font-extrabold tracking-9">
                MENGENAL DESTINIZE
              </p>
              <h2 className="text-[#14183E] text-5xl leading-[50px] tracking--1 font-extrabold flex items-center gap-4">
                <img
                  src={framedPicture}
                  alt="framed picture emoji"
                  width={40}
                  height={40}
                />
                <div className="w-2.5 h-2.5 bg-[#14183E] rounded-full" />
                Galeri Pariwisata & Blog Travel
              </h2>
            </div>
            <button className="text-[#4475F2] text-[17px] leading-[60px] font-semibold flex items-center gap-4">
              Lihat semua
              <img
                src={rightArrow}
                alt="right arrow icon"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="pt-[54px] flex justify-center items-center gap-[43px]">
            <div className="max-w-[276px] h-[455px] rounded-2xl	shadow-lg">
              <img
                src={mountain}
                alt="mountains image"
                className="rounded-t-lg"
              />
              <div className="flex flex-col gap-4 px-6 py-5 bg-white">
                <p className="text-[#BDBDBD] font-semibold text-sm leading-6 tracking-wide">
                  26 DESEMBER 2021
                </p>
                <h3 className="text-[#252B42] leading-6 text-base font-bold ">
                  Tips naik gunung Bromo Biar gak capek cyin 😥😛
                </h3>
                <p className="text-[#737373] font-sm leading-6 font-semibold tracking-wide">
                  Jadi gini gann, anda tau bromo? yaaa gunung kann!
                </p>
                <p className="text-[#23A6F0] cursor-pointer font-sm leading-6 font-semibold tracking-wide">
                  Baca selengkapnya ..
                </p>
              </div>
            </div>
            <div className="grow h-[455px] relative shadow-2xl rounded-2xl flex justify-center items-center">
              <img
                src={bgCover}
                alt="cover image"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="bg-[#23A6F0] w-24 h-24 rounded-full flex justify-center items-center z-20 cursor-pointer">
                <img src={whitePlay} alt="play button" width={19} height={22} />
              </div>
            </div>
          </div>
          <div className="relative h-[205px] w-full mt-[37px] shadow-lg">
            <img
              src={cover}
              alt="cover image"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10"
            />
            <img
              src={filter}
              alt="filter image"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-20"
            />
            <div className="p-[25px] h-[182px] max-w-[745px] flex flex-col gap-[15px] absolute left-0 bottom-0 z-30">
              <h3 className="text-white font-extrabold text-xl leading-[32px] tracking-wide">
                Tips meminum air kawah biar lidah melepuh 😁
              </h3>
              <p className="text-white font-medium text-base leading-[26px] tracking-wide">
                Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi
                untuk di minum.. rasakan kepanasan yang brutal 🔥
              </p>
              <p className="text-white font-semibold text-sm leading-6 tracking-wide">
                Google Trending Baru
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#4737FF] text-[18px] leading-[26.5px] font-extrabold tracking-9">
              TESTIMONIAL DESTINIZE
            </p>
            <h2 className="text-[#151D21] text-5xl leading-[50px] tracking--1 font-extrabold flex items-center gap-4">
              <img src={comment} alt="aeroplane emoji" width={40} height={40} />
              <div className="w-2.5 h-2.5 bg-[#151D21] rounded-full" />
              Apa Kata Mereka Tentang Kami
            </h2>
            <p className="max-w-[820px] text-[#18191F] text-[18px] leading-[32px] text-center">
              Penasaran apa saja review dari pengguna yang memakai aplikasi dan
              website Destinize buat nentuin kemana liburan mereka selanjutnya?
              Yuk cek dibawah!
            </p>
          </div>
          <div className="flex gap-[52px] justify-center items-center pt-20">
            <TestimonialCard
              img={man1}
              name="Sandhika Galih"
              post="Dosen di WPU"
              desp="Destinize membantu saya Mencari spot tempat wisata baru di Indonesia
          dengan Mudah"
              rating={4}
            />
            <TestimonialCard
              img={man2}
              name="Syauqizaidan Khairan Khalaf"
              post="Mahasiswa di WPU"
              desp="Destinize membantu saya
mendapatkan jodoh, tidak disangka
bahwa jodoh saya adalah CS nya"
              rating={4}
            />
            <TestimonialCard
              img={man3}
              name="Petrik Sesat"
              post="Warga di Bikini Bottom"
              desp="Bikini Bottom menjadi sangat
ramai dikunjungi saat saya 
memasukkannya di Destinize"
              rating={4}
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#4475F2] text-[18px] leading-[26.5px] font-extrabold tracking-9">
                FREQUENTLY ASKED QUESTION
              </p>
              <h2 className="text-[#14183E] text-5xl leading-[50px] tracking--1 font-extrabold flex items-center gap-4">
                <img
                  src={thinkingFace}
                  alt="thinking face emoji"
                  width={40}
                  height={40}
                />
                <div className="w-2.5 h-2.5 bg-[#14183E] rounded-full" />
                Pertanyaan yang Sering Diajukan
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
          <div className="pt-20">
            <Accordion
              title="Kenapa ya pembayaranku gagal banh? 😁"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, wh"
            />
            <Accordion
              title="Apakah rehan wangsaff adalah CEO dari Destinize? 😅😅😅"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, wh"
            />
            <Accordion
              title="Kenapa harus memilih Destinize?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, wh"
            />
            <Accordion
              title="Afa iyah bang? Gapeduli 👆🏻😅"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, wh"
            />
            <Accordion
              title="Apa rekomendasi tempat buat orang yang jomblo? 😥"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, wh"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="bg-[#4372EB] h-[378px] w-full rounded-2xl shadow-xl">
            <div className="flex items-center justify-between">
              <div className="px-12 py-10">
                <div className="max-w-[470px] flex flex-col justify-between gap-8">
                  <h3 className="text-white leading-[54px] text-[40px] font-extrabold">
                    Masih bingung cari tempat yang cocok? 🤔
                  </h3>
                  <p className="text-[#F1F2F6] text-lg leading-[32px]">
                    Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
                    mencari tempat berlibur yang tepat dengan menjawab
                    pertanyaan yang kami berikan.
                  </p>
                  <p className="text-white text-xl leading-[30px] font-bold">
                    Mulai sekarang →
                  </p>
                </div>
              </div>
              <img src={illstration} alt="illstration image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
