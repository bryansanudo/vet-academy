import styles from "@/style";
import airbnb from "@/assets/airbnb.png";
import binance from "@/assets/binance.png";
import coinbase from "@/assets/coinbase.png";
import dropbox from "@/assets/dropbox.png";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4  `}>
    <div className="flex overflow-hidden  group ">
      {/*  <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
    </div> */}
      <div
        className="flex items-center justify-center space-x-16 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        <img src={airbnb} className="h-14 object-contain" alt="" />
        <img src={binance} className="h-14 object-contain" alt="" />
        <img src={dropbox} className="h-14 object-contain" alt="" />
        <img src={airbnb} className="h-14 object-contain" alt="" />
        <img src={binance} className="h-14 object-contain" alt="" />
        <img src={dropbox} className="h-14 object-contain" alt="" />
        <img src={airbnb} className="h-14 object-contain" alt="" />
        <img src={binance} className="h-14 object-contain" alt="" />
        <img src={dropbox} className="h-14 object-contain" alt="" />
      </div>
    </div>
  </section>
);

export default Clients;
