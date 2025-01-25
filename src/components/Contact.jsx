import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

function ContactPage() {
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hritikpathak888@gmail.com",
      link: "mailto:hritikpathak888@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "9561964641",
      link: "tel:9561964641",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/hritikpathak",
      link: "https://www.linkedin.com/in/hritikpathak/",
    },
  ];

  return (
    <footer className=" py-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <ul className="flex flex-col md:flex-row justify-center max-md:gap-3 md:gap-6 text-gray-900">
          {contactDetails.map((contact, index) => (
            <li
              key={index}
              className="flex items-center max-md:justify-start max-md:text-center gap-2"
            >
              <span className="text-blue-700 hover:text-blue-800 ">
                {contact.icon}
              </span>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition cursor-cell max-md:text-xs md:text-sm  xl:text-lg"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-md:text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Hritik Pathak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default ContactPage;
