"use client";

import Hero from "./hero";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6Lf2JdwqAAAAAEexvO0JLz4O-iGSe9jEn-4csFy-"
        strategy="beforeInteractive"
      />
      <Script id="captcha" strategy="afterInteractive">
        {`
        grecaptcha.ready(function () {
          grecaptcha
            .execute("6Lf2JdwqAAAAAEexvO0JLz4O-iGSe9jEn-4csFy-", { action: "homepage" })
            .then(function (token) {
              document.getElementById("captchaResponse").value = token;
            });
        });
        `}
      </Script>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
