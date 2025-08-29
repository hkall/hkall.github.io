import { cn } from '@/lib/utils';

const Footer = () => {
  // Footer navigation links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
  
  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', href: '#' },
    { name: 'Twitter', icon: 'fa-twitter', href: '#' },
    { name: 'Instagram', icon: 'fa-instagram', href: '#' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', href: '#' },
    { name: 'Dribbble', icon: 'fa-dribbble', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-900 font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Mirage
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Crafting digital experiences that inspire. We are a creative studio dedicated to delivering exceptional design solutions.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <i className={`fa-brands fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Content Creation</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-map-marker-alt text-purple-500 mt-1"></i>
                <span className="text-gray-400">123 Creative Street, Design District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-purple-500"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-purple-500"></i>
                <span className="text-gray-400">info@miragecreativestudio.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mirage Creative Studio. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;