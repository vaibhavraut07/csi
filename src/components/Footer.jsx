import React from 'react';

const footerData = {
  about: {
    heading: "ACOE",
    description:
      "CSI, our vision is to foster a dynamic community where creativity meets technology, empowering students to become leaders in the ever-evolving digital world. We strive to create an environment that encourages innovation, collaboration, and continuous learning, enabling our members to develop the skills and mindset needed to drive technological advancement and make a meaningful impact on society.",
  },
  contact: {
    heading: "Contact",
    details: [
      "csi@atharvacoe.ac.in",
      "+91 93261 94769  ",
    ],
  },
  address: {
    heading: "Address",
    details: [
      "Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop Naka, Malad West, Mumbai, Maharashtra 400095",
    ],
  },
  links: {
    heading: "Quick Links",
    items: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Bootcamp", href: "/bootcamp" },
    ],
  },
  social: {
    heading: "Follow Us",
    items: [
      { name: "Instagram", href: "https://www.instagram.com/csi_acoe", icon: "fa-brands fa-instagram" },
      { name: "Whatsapp", href: "https://chat.whatsapp.com/FAtxcJseime0LrrUWC2Xqr", icon: "fa-brands fa-whatsapp" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/computer-society-of-india-ace/", icon: "fa-brands fa-linkedin" },
    ],
  },
};

function Footer() {
  return (
    <footer className="bg-[#002567] text-gray-300 pt-14 sm:px-12 px-8">
      <div className='flex flex-col'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{footerData.about.heading}</h3>
              <p>{footerData.about.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">{footerData.address.heading}</h3>
              {footerData.address.details.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <h3 className="text-lg font-bold text-white mt-6 mb-4">{footerData.contact.heading}</h3>
              {footerData.contact.details.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">{footerData.links.heading}</h3>
              <ul>
                {footerData.links.items.map((item) => (
                  <li key={item.name} className="mb-2">
                    <a
                      href={item.href}
                      className="hover:text-white hover:underline transition duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">{footerData.social.heading}</h3>
              <ul className="flex flex-row gap-2">
                {footerData.social.items.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={item.name}
                  >
                    <i
                      alt={item.name} 
                      className={`text-3xl pr-3 ${item.icon}`} 
                    />
                  </a>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex h-[14vw] md:h-[10vw] overflow-hidden justify-center mt-6">
            <span
              className="absolute top-[-7%] md:top-[-6vw] text-transparent text-[14vw] md:text-[17.5vw] font-productsans opacity-10 font-bold uppercase tracking-wide text-stroke-3px"
            >
              CSI - ACE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
