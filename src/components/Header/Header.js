import React from "react";
import Navbar from "../Navbars/navbar/Navbar";
import bus from "../../assets/images/bus.png";
import "./Header.css";

const Header = () => {
 
  return (
    <div className="phBackground -z-30 min-h-full font-body">
      <div className="h-screen flex-col">
        <Navbar />
        <div className="absolute -top-0 -left-0 h-full w-full flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat">
          <div className="flex flex-col w-auto lg:flex lg:flex-row md:flex md:flex-row flex-wrap justify-center items-center justify-between">
            <div className="flex flex-col w-40 mx-5 md:mt-20 md:w-80">
              <div className="flex flex-row">
                <span className="p-0.5 md:p-1.5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z" fill="#0384C6"/>
</svg>

                </span>
                <span className="p-0.5 md:p-1.5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z" fill="#0384C6"/>
</svg>

                </span>
                <span className="p-0.5 md:p-1.5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z" fill="#0384C6"/>
</svg>

                </span>
                <span className="p-0.5 md:p-1.5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866ZM23.1341 18.5342L24.5833 26.2686L17.0001 22.6202L9.4169 26.2723L10.8661 18.5379L4.7321 13.058L13.2105 11.9289L17.0001 4.89329L20.7897 11.9289L29.2681 13.058L23.1341 18.5342Z" fill="#0384C6"/>
</svg>

                </span>
                <span className="p-0.5 md:p-1.5">
                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866ZM23.1341 18.5342L24.5833 26.2686L17.0001 22.6202L9.4169 26.2723L10.8661 18.5379L4.7321 13.058L13.2105 11.9289L17.0001 4.89329L20.7897 11.9289L29.2681 13.058L23.1341 18.5342Z" fill="#0384C6"/>
</svg>

                </span>
              </div>
              <div className="flex flex-col py-2.5">
                <div>
                  <h1 className="w-full text-white font-bold text-xl ms:text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
                    Fast movement and easy.
                  </h1>
                </div>
                <div className="py-6">
                  <h3 className="w-full text-white font-regular ms:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                    Get notified anytime, anywhere the bus is.
                  </h3>
                </div>
                <div className="py-6">
                  <button className="bg-primary-600 hover:bg-primary-400 text-white md:text-xl md:font-bold py-2 px-4 rounded">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-80 h-auto mx-20">
              <img src={bus} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
