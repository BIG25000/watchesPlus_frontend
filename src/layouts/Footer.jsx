import React from "react";

export default function Footer() {
  return (
    <footer class="footer p-10 bg-base-200 text-white">
    <nav class="ml-20">
      <h6 class="footer-title">Services</h6> 
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav> 
    <nav class="ml-20">
      <h6 class="footer-title">Company</h6> 
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav> 
    <nav class="ml-20">
      <h6 class="footer-title">Legal</h6> 
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav> 
    <form class="ml-20">
      <h6 class="footer-title">Newsletter</h6> 
      <fieldset class="form-control w-80 ">
        <label class="label">
          <span class="label-text text-white">Enter your email address</span>
        </label> 
        <div class="join">
          <input type="text" placeholder="username@site.com" class="input input-bordered join-item" /> 
          <button class=" btn-primary join-item text-white bg-yellow-600 hover:bg-yellow-700 w-[8rem] flex items-center justify-center">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  );
}
