import React from "react";

export default function Socials({ link, socialIcon }) {
  return (
    <a
      href={link}
      className="social-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {socialIcon}
    </a>
  );
}
