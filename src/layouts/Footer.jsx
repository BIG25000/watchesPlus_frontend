import React from "react";
import Button from "../components/Button";

export default function Footer() {
  return (
    <footer className="footer relative p-10 bg-base-200 text-white z-10">
      <div className="footerImg absolute w-full h-full left-0 -z-10 opacity-80"></div>
      <nav className="ml-20">
        <h6 className="font-bold">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="ml-20">
        <h6 className="font-bold">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="ml-20">
        <h6 className="font-bold">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="ml-20">
        <h6 className="font-bold">Newsletter</h6>
        <fieldset className="form-control w-80 ">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered join-item text-black rounded-lg"
            />
            <Button
              bg="scarlet"
              className=" btn-primary join-item text-black bg-gradient-to-tr from-rose-700 to-red-900 w-[8rem] flex items-center justify-center"
              color='white'
            >
              Subscribe
            </Button>
          </div>
        </fieldset>
      </form>
    </footer>
    //   <footer className="footer p-10 bg-base-200 text-white">
    //   <nav className="ml-20">
    //     <h6 className="footer-title">Services</h6>
    //     <a className="link link-hover">Branding</a>
    //     <a className="link link-hover">Design</a>
    //     <a className="link link-hover">Marketing</a>
    //     <a className="link link-hover">Advertisement</a>
    //   </nav>
    //   <nav className="ml-20">
    //     <h6 className="footer-title">Company</h6>
    //     <a className="link link-hover">About us</a>
    //     <a className="link link-hover">Contact</a>
    //     <a className="link link-hover">Jobs</a>
    //     <a className="link link-hover">Press kit</a>
    //   </nav>
    //   <nav className="ml-20">
    //     <h6 className="footer-title">Legal</h6>
    //     <a className="link link-hover">Terms of use</a>
    //     <a className="link link-hover">Privacy policy</a>
    //     <a className="link link-hover">Cookie policy</a>
    //   </nav>
    //   <form className="ml-20">
    //     <h6 className="footer-title">Newsletter</h6>
    //     <fieldset className="form-control w-80 ">
    //       <label className="label">
    //         <span className="label-text text-white">
    //           Enter your email address
    //         </span>
    //       </label>
    //       <div className="flex gap-2">
    //         <input
    //           type="email"
    //           placeholder="username@site.com"
    //           className="input input-bordered join-item text-black rounded-lg"
    //         />
    //         <Button
    //           bg="scarlet"
    //           className=" btn-primary join-item text-black bg-gradient-to-tr from-rose-700 to-red-900 w-[8rem] flex items-center justify-center"
    //         >
    //           Subscribe
    //         </Button>
    //       </div>
    //     </fieldset>
    //   </form>
    // </footer>
  );
}
