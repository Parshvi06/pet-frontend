import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        {/* Brand */}
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
          <h1 className="font-extrabold text-black text-2xl mt-2">
            WaggingTails Hub
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            © 2024, All Rights Reserved
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase">Services</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <a
              className="text-gray-600 hover:text-gray-800"
              href="/explorePets"
            >
              Pet Gallery
            </a>
            <a
              className="text-gray-600 hover:text-gray-800"
              href="/addPet"
            >
              Register Pet
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Docs
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Download
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase">Company</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <a className="text-gray-600 hover:text-gray-800" href="/aboutUs">
              About Us
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="/blog">
              Blog
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="/contact">
              Contact
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Customers
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase">Resources</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Community
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Help &amp; Support
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              eBook
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              What&apos;s New

            </a>
          </div>
        </div>

        {/* Policy */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase">Policy</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Terms & Conditions
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="https://github.com">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-5 mt-5 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Made with ❤️ by WaggingTails Hub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
