import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AkindejiAfeez" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/iamyungfizz?igsh=eWdxcGljemR3azQz",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/iamyungfizz?s=21&t=ozYrtR1X61l6U5KbRntrcA",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/akindeji-afeez-b57836162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
