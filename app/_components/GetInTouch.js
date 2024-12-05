import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function GetInTouch() {
  return (
    <div className="flex items-center gap-6">
      <Link
        className="px-3 py-2 text-sm bg-transparent rounded-full text-primary-100 ring ring-accent-100"
        href="contact"
      >
        Download CV
      </Link>
      <div className="flex gap-3">
        <a href="google.com" target="_blank">
          <FaLinkedin className="hover:text-accent-200" />
        </a>
        <a href="google.com" target="_blank">
          <FaFacebookSquare className="hover:text-accent-200" />
        </a>
        <a href="google.com" target="_blank">
          <FaGithub className="hover:text-accent-200" />
        </a>
      </div>
    </div>
  );
}

export default GetInTouch;
