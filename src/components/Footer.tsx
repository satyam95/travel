import footerLogo from "../assets/logo-sm.png";
import call from "../assets/call-calling.png";
import mail from "../assets/mail.png";
import locationGray from "../assets/location-gray.png";
import printer from "../assets/printer.png";

const Footer = () => {
  return (
    <footer className="pt-14 pb-12">
      <div className="container mx-auto">
        <div className="flex justify-between gap-32 mb-7">
          <div className="max-w-[483px]">
            <div className="flex flex-col gap-4">
              <img src={footerLogo} alt="footer logo" width={32} height={32} />
              <h3 className="text-black text-2xl leading-none font-bold">
                Destinize
              </h3>
              <p className="text-[#9A9EA6] text-sm leading-6">
                Destinize adalah website atau layanan aplikasi yang membantu
                kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden
                gems’ agar lebih dikenal dan ramai
                <span className="text-[#4475F2] font-bold">
                  {" "}
                  Baca Selengkapnya
                </span>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="text-[#9A9EA6] text-sm leading-none flex items-center gap-1.5">
                <img src={call} alt="phone icon" width={20} height={20} />
                0851-5616-2840
              </div>
              <div className="text-[#9A9EA6] text-sm leading-none flex items-center gap-1.5">
                <img src={mail} alt="mail icon" width={20} height={20} />
                syaokay@gmail.com
              </div>
              <div className="text-[#9A9EA6] text-sm leading-none flex items-center gap-1.5">
                <img
                  src={locationGray}
                  alt="location icon"
                  width={20}
                  height={20}
                />
                Ciamis, Jawa Barat. Indonesia
              </div>
              <div className="text-[#9A9EA6] text-sm leading-none flex items-center gap-1.5">
                <img src={printer} alt="printer icon" width={20} height={20} />
                +1-212-9876543
              </div>
            </div>
          </div>
          <div className="grow grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-lg leading-none font-bold">
                Tentang
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Tentang Kami
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Blog</li>
                <li className="text-[#9A9EA6] text-sm leading-none">Karir</li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Pekerjaan
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Berita</li>
                <li className="text-[#9A9EA6] text-sm leading-none">Galeri</li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Afiliasi
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-lg leading-none font-bold">
                Support
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Kontak Kami
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Online Chat
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Whatsapp
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Telegram
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Tiket</li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Call Center
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Bantuan</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-lg leading-none font-bold">FAQ</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-[#9A9EA6] text-sm leading-none">Akun</li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Organisir
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Order</li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Pembayaran
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Pengembalian
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">
                  Copyright
                </li>
                <li className="text-[#9A9EA6] text-sm leading-none">Bahasa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
            © 2021-2022, All Rights Reserved
          </p>
          <ul className="flex items-center gap-10">
            <li className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
              Tentang Kami
            </li>
            <li className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
              Kontak
            </li>
            <li className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
              Privasi & policy
            </li>
            <li className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
              Sitemap
            </li>
            <li className="text-[#9A9EA6] text-sm leading-none cursor-pointer">
              Panduan Pengunaan
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
