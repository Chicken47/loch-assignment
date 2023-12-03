import { useEffect, useState } from "react";
import Draggable from "react-draggable";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleButtonClick = () => {
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div className="flex flex-col w-full min-h-screen md:h-screen md:flex-row md:bg-black bg-gradient-to-b from-slate-900 via-cyan-700 to-lime-700">
      <div
        className="flex-col hidden w-3/5 h-full py-10 pl-10 bg-black md:flex"
        style={{
          background:
            "radial-gradient(circle at 10% 100%, rgba(31,169,17,1) 16%, rgba(47,21,208,1) 41%, rgba(252,70,107,0) 100%)",
        }}
      >
        <div id="notifs" className="flex overflow-hidden h-1/3">
          <div className="flex flex-col w-1/2 mr-8 space-y-2">
            <img
              src="/images/bellIcon.png"
              className="w-[27px] h-[29px]"
              alt=""
            />
            <span className="text-white text-[25px] font-medium leading-7">
              Get notified when a highly correlated whale makes a move
            </span>
            <span className="text-gray-300 text-[14px]">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </span>
          </div>
          <div className="flex items-center w-1/2 overflow-hidden">
            {/* <div className="absolute h-full w-full bg-gradient-to-r from-[#0000007e] via-[#0000] to-[#0000007e] z-50 rounded-lg" /> */}
            <div className="flex items-center animate-marquee ">
              <img src="/images/notif1.png" alt="" className="w-[200px]" />
              <img src="/images/notif2.png" alt="" className="w-[200px]" />
              <img src="/images/notif3.png" alt="" className="w-[200px]" />
              <img src="/images/notif1.png" alt="" className="w-[200px]" />
              <img src="/images/notif2.png" alt="" className="w-[200px]" />
              <img src="/images/notif3.png" alt="" className="w-[200px]" />
              <img src="/images/notif1.png" alt="" className="w-[200px]" />
              <img src="/images/notif2.png" alt="" className="w-[200px]" />
              <img src="/images/notif3.png" alt="" className="w-[200px]" />
              <img src="/images/notif1.png" alt="" className="w-[200px]" />
              <img src="/images/notif2.png" alt="" className="w-[200px]" />
              <img src="/images/notif3.png" alt="" className="w-[200px]" />
            </div>
          </div>
        </div>
        <div id="whales" className="flex items-center mt-10 h-1/3">
          <div className="w-1/2">
            <img src="/images/cohortImg.png" alt="" className="" />
          </div>
          <div className="flex flex-col w-1/2 pr-10 space-y-2">
            <img
              src="/images/eyeIcon.png"
              className="w-[27px] h-[29px]"
              alt=""
            />
            <span className="text-white text-[25px] font-medium leading-9">
              Watch what the whales are doing
            </span>
            <span className="text-gray-300 text-[14px]">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </span>
          </div>
        </div>
        <div id="testes" className="flex flex-col mt-5 h-1/3">
          <div className="w-full text-right border-b text-white text-[26px] pr-10 font-medium pb-2">
            Testimonial
          </div>
          <div className="flex w-full h-full">
            <div className="flex items-end w-1/12 h-full">
              <img src="/images/logoIcon.png" alt="" />
            </div>
            <div className="flex items-center w-11/12 h-full ml-20 overflow-hidden">
              <Draggable axis="x" bounds="parent">
                <div className="flex items-center w-full h-full mt-10">
                  <img src="/images/test1.png" alt="" className="h-[120px]" />
                  <img src="/images/test2.png" alt="" className="h-[120px]" />
                  <img src="/images/test3.png" alt="" className="h-[120px]" />
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 mx-10 mt-20 bg-white shadow-inner md:py-0 rounded-xl md:rounded-none md:mx-0 md:mt-0 md:w-2/5">
        <div className="w-4/5 md:w-3/5 text-[#B0B1B3] flex flex-col space-y-5">
          <span className="text-[30px] font-medium">
            Sign up for exclusive access.
          </span>
          <input
            className={`px-5 py-2 border rounded ${
              isValidEmail ? "" : "border-red-500"
            }`}
            placeholder="Your email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <span className="text-xs font-bold text-red-500">
              Please enter a valid email
            </span>
          )}
          <button
            className="flex justify-center w-full py-3 font-bold text-white bg-black rounded"
            onClick={handleButtonClick}
          >
            Get started
          </button>
          <span className="text-sm font-medium text-black">
            You’ll receive an email with an invite link to join.
          </span>
        </div>
      </div>
      <div className="flex flex-col m-10 rounded-xl md:hidden">
        <div className="flex flex-col space-y-3">
          <img
            src="/images/bellIcon.png"
            className="w-[27px] h-[29px]"
            alt=""
          />
          <span className="text-white text-[25px] font-medium leading-7">
            Get notified when a highly correlated whale makes a move
          </span>
          <span className="text-gray-300 text-[14px]">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </span>
        </div>
      </div>
      <div className="flex flex-col mb-10 ml-10 mr-10 rounded-xl md:hidden">
        <div className="flex flex-col justify-end space-y-3 text-right">
          <img src="/images/eyeIcon.png" className="w-[27px] h-[29px]" alt="" />
          <span className="text-white text-[25px] font-medium leading-7">
            Watch what the whales are doing
          </span>
          <span className="text-gray-300 text-[14px]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
