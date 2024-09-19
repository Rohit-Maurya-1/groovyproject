import React from "react";
import { Menu, X, MapPin } from "lucide-react";

import { IoBan } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiPhoneCall } from "react-icons/pi";
import bgg2 from "../../public/bgg2.png";
// import bgg2 from "../../public/bgg2.png";

const mapLink = "https://maps.app.goo.gl/KmJVzQw3bakqDppo9";
const embedLink =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.48928263212!2d77.2241349!3d28.5435572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30033d95957%3A0x32e431c65720c158!2sEnhaz%20Beverages%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722020211797!5m2!1sen!2sin";

const locations = [
  // {
  //   title: "Headquarter",
  //   timings: "Mon-Sat 9am to 5pm.",
  //   address:
  //     "Enhaz Beverages Pvt. Ltd. D-09, Second Floor, Panchsheel Enclave, Above HDFC Bank Ltd, Soami Nagar Branch, New Delhi - 110017",
  // },
  {
    title: "Manufacturing Unit 1",
    timings: "Mon-Sat 9am to 5pm.",
    address: "Rudra Pur UttaraKhand",
  },
  {
    title: "Manufacturing Unit 2",
    timings: "Mon-Sat 9am to 5pm.",
    address: "katra , jammu kashmir",
  },
];

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(true); // State for popup

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto  ">
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white px-4 py-8 rounded-lg relative w-full max-w-lg">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex justify-center items-center h-full flex-col">
                <form className="w-full bg-white px-8 rounded-md">
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold "
                      htmlFor="contactFor"
                    >
                      Contact for
                    </label>
                    <select
                      className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="contactFor"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Contact For
                      </option>
                      <option value="Stockiest">Stockiest</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Whole sealer">Whole sealer</option>
                      <option value="Retailer">Retailer</option>
                    </select>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1/2 pr-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1/2 pr-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="contact"
                      >
                        Contact
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="contact"
                        type="text"
                        placeholder="Contact"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1/2 pr-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="state"
                      >
                        State
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="state"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label
                        className="block text-gray-700 text-sm font-bold "
                        htmlFor="districtArea"
                      >
                        District/Area
                      </label>
                      <input
                        className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="districtArea"
                        type="text"
                        placeholder="District, Area"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold "
                      htmlFor="experience"
                    >
                      Past Experience if any
                    </label>
                    <input
                      className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="experience"
                      type="text"
                      placeholder="Experience"
                    />
                  </div>
                  <div className="mb-">
                    <label
                      className="block text-gray-700 text-sm font-bold "
                      htmlFor="message"
                    >
                      Text Message
                    </label>
                    <textarea
                      className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="message"
                      rows="4"
                      placeholder="Text Message"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* Hero Map */}
        <div
          className="px-16 pt-32 bg-fixed bg-contain bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${bgg2})`,
          }}
        >
          <div className="w-full mt-2 backdrop-blur-sm">
            <div className="flex flex-col space-y- pb-1 md:pt-24">
              <p className="text-sm text-center font-bold text-gray-900 md:text-4xl md:py-4 backdrop-blur-sm">
                Get in touch
              </p>
            </div>
            <div className="flex w-full">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <div className=" grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-2  backdrop-blur-sm">
                  <div className="border-zinc-800 border-2 py-4 px-4 rounded-xl">
                    <div className="mx-auto flex h w items-center justify-center rounded-full ">
                      <GoMail className="h-9 w-9 text-green-500 " />
                    </div>
                    <p className="mt-2 text-xs text-black">
                      Please email contact form and we will be assist you. We
                      wotk with you.
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-black">
                      sales@enhazbeverages.com
                    </h3>
                  </div>
                  <div className="border-zinc-800 border-2 py-4 px-4 rounded-xl">
                    <div className="mx-auto flex h w items-center justify-center rounded-full ">
                      <PiPhoneCall className="h-9 w-9 text-blue-500" />
                    </div>
                    <p className="mt-2 text-xs text-black">
                      Please call us and we will be happy to assist you we work
                      with you.
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-black">
                      9289140400
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:pt-8 flex gap-8 px-16">
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl flex items-center font-semibold">
              <MapPin className="h-10 w-10 text-red-500" />
              Headquarter
            </h1>
            <p className="text-xl"> Timings: Mon-Sat 9am to 5pm</p>
            <p className="text-base">
              Enhaz Beverages Pvt. Ltd. D-09, Second Floor, Panchsheel Enclave,
              Above HDFC Bank Ltd, Soami Nagar Branch, New Delhi - 110017
            </p>
          </div>
          <iframe
            src={embedLink}
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-1/2 rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>

        <hr />

        <div className="mb-4 flex flex-col lg:flex-row gap-8 mt-8 px-4 md:px-16">
  {/* Left Section: Manufacturing Units */}
  <div className="w-full lg:w-1/2 h-auto flex flex-col items-center justify-around">
    <h1 className="text-2xl md:text-4xl text-center font-semibold">
      Manufacturing Units
    </h1>
    {/* Manufacturing Unit 1 */}
    <div className="w-full py-8 border-[1px] rounded-xl px-4 mt-4">
      <p className="w-full flex text-xl items-center font-semibold text-gray-900">
        <MapPin className="h-5 w-5 text-red-500" />
        Manufacturing Unit 1
      </p>
      <p className="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
      <p className="text-sm font-medium">Uttarakhand</p>
    </div>
    {/* Manufacturing Unit 2 */}
    <div className="w-full py-8 border-[1px] rounded-xl px-4 mt-4">
      <p className="w-full flex text-xl items-center font-semibold text-gray-900">
        <MapPin className="h-5 w-5 text-red-500" />
        Manufacturing Unit 2
      </p>
      <p className="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
      <p className="text-sm font-medium">Jammu Katra</p>
    </div>
  </div>

  {/* Right Section: Contact Form */}
  <div className="w-full lg:w-1/2">
    <div className="flex justify-center items-center flex-col">
      <h1 className="pb-4 uppercase text-xl font-semibold text-center">
        Our friendly team would love to hear from you
      </h1>
      <form className="w-full bg-white px-4 md:px-8 rounded-md">
        {/* Contact for */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="contactFor"
          >
            Contact for
          </label>
          <select
            className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="contactFor"
            defaultValue=""
          >
            <option value="" disabled>
              Select Contact For
            </option>
            <option value="Stockiest">Stockiest</option>
            <option value="Distributor">Distributor</option>
            <option value="Whole sealer">Whole sealer</option>
            <option value="Retailer">Retailer</option>
          </select>
        </div>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row mb-2">
          <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="flex flex-col md:flex-row mb-2">
          <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="contact"
              type="text"
              placeholder="Contact"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        {/* State and District */}
        <div className="flex flex-col md:flex-row mb-2">
          <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="state"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="districtArea"
            >
              District/Area
            </label>
            <input
              className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="districtArea"
              type="text"
              placeholder="District, Area"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Past Experience if any
          </label>
          <input
            className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="experience"
            type="text"
            placeholder="Experience"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Text Message
          </label>
          <textarea
            className="appearance-none border-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            rows="4"
            placeholder="Text Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
