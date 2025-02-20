import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Design', href: '/design' },
        { name: 'Interactions', href: '/interactions' },
        { name: 'Page Building', href: '/page-building' },
        { name: 'AI Assistant', href: '/ai' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Community', href: '/community' },
        { name: 'Support', href: '/support' },
        { name: 'API', href: '/api' }
      ]
    }
  };

const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaYoutube />, href: 'https://youtube.com' }
  ];



const Footer = () => {

   

  return (
    <footer className='bg-black text-white pt-20 pb-10'>
        <div className='primary-container'>
           {/* top footer  */}
            <div className='flex flex-col md:flex-row justify-between md:gap-24 gap-16 mb-16'>
                {/* left side  */}
                <div className='md:w-1/3'>
                    <Link to="/" className='text-2xl font-bold mb-4 inline-block'> <span className='text-blue-500'>CodeTutor</span>UI</Link>
                    <p className='md:w-2/3 text-gray-400 '>
                    The first-ever website experience platform that lets you create, manage and optimize your digital presence.
                    </p>
                </div>

                {/* right side  */}
                <div className='md:w-2/3'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
                            <ul className='space-y-2'>
                                {
                                   section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                         to={link.href}
                                         className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                                    </li>
                                   )) 
                                }
                            </ul>
                        </div>
                    ))}
                </div>
                </div>
            </div>

            {/* bottom footer  */}

            <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
                <div className='flex space-x-6 mb-4 md:mb-0'>
                    {socialLinks.map((social,index) => (
                        <Link to="/" className='text-gray-400 hover:text-white transition-colors text-xl' >
                            {social.icon}
                        </Link>
                    ))}
                </div>
                <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CodeTutor UI. All rights reserved.
          </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer