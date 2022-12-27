import "./App.css";
import three from "./images/Rectangle19.png";
import four from "./images/Rectangle20.png";
import six from "./images/Rectangle21.png";
import seven from "./images/Rectangle22.png";
import eight from "./images/Rectangle23.png";
import five from "./images/Vector3.png";

function App() {
  return (
    <div className="App">
      {/* banner part start */}
      <div className="grid grid-cols-2 opacity-75  relative pt-10 ">
        <div
          className="banner"
          style={{
            backgroundImage: `url("https://i.ibb.co/wz6zgFj/Rectangle16.png")`,
          }}
        ></div>
        <div
          className="banner"
          style={{
            backgroundImage: `url("https://i.ibb.co/rpbc9Kw/Rectangle17.png")`,
          }}
        ></div>
        <div className="absolute left-32 sm:left-56 top-36 sm:top-1/2 w-1/2 text-white text-left z-50 ">
          <h4 className="text-white text-4xl sm:text-7xl capitalize">
            about us
          </h4>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      {/* banner part end */}
      {/* section part start */}
      <div className="container mx-auto px-8">
        <div className="grid sm:grid-cols-2 pt-10 sm:pt-28 sm:space-x-14">
          <div className="relative">
            <img className="pl-6  lg:pl-28 h-96" src={three} alt="" />
            <img
              className=" absolute w-2/4 md:w-3/5 lg:w-1/2 lg:h-4/5 top-4 sm:top-10"
              src={four}
              alt=""
            />
          </div>
          <div className="text-left sm:pr-20">
            <h2 className="text-3xl sm:text-4xl pb-6">passenger</h2>
            <p className="text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 pt-10 sm:pt-28 space-x-40 sm:space-x-14">
          <div className="text-left sm:pr-20">
            <h2 className="text-3xl sm:text-4xl pb-6">
              Modern and simple method of bus ticketing
            </h2>
            <p className="text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised
            </p>
          </div>
          <div className=" ">
            <img className=" h-96 pt-10 sm:pt-0 sm:mx-auto" src={five} alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 pt-10 sm:pt-28 sm:space-x-14">
          <div className="">
            <img className=" h-96" src={six} alt="" />
          </div>
          <div className="text-left ">
            <h2 className="text-3xl sm:text-4xl pb-6">Bus Operator</h2>
            <p className="text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 pt-10 sm:pt-28 ">
          <div className="text-left sm:pr-20">
            <h2 className="text-3xl sm:text-4xl pb-6">Ticket Seller</h2>
            <p className="text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>
          </div>
          <div className="">
            <img className=" h-96" src={seven} alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 pt-10 sm:pt-28 sm:space-x-14">
          <div className="">
            <img className=" h-96" src={eight} alt="" />
          </div>
          <div className="text-left sm:pr-20">
            <h2 className="text-3xl sm:text-4xl pb-6">Ride Shareing </h2>
            <p className="text-base sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in
            </p>
          </div>
        </div>
      </div>
      {/* section part end */}
    </div>
  );
}

export default App;
