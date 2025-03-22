"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function LinkedInBadge() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div className="mt-6" key={key}>
      {/* Script LinkedIn */}
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />

      {/* Badge LinkedIn */}
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="makha-diakhate-5aa702226"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://sn.linkedin.com/in/makha-diakhate-5aa702226?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on LinkedIn
        </a>
      </div>
    </div>
  );
}
