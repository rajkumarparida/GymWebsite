import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' }
  ];

  const programs = [
    { name: 'Weight Training', path: '/' },
    { name: 'Fat Loss', path: '/about' },
    { name: 'Cardio', path: '/programs' },
    { name: 'Strength Training', path: '/membership' }
  ];

  return (
    <footer className="bg-secondary border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">
              <span className="gradient-text">AD</span>
              <span className="text-light"> FITNESS</span>
            </h3>
            <p className="text-gray-500 text-sm">
              Transform your body. Transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-light mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-500 text-sm hover:text-accent transition-colors cursor-pointer">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-light mb-4">Programs</h4>
            <div className="space-y-2">
              {programs.map((prog) => (
                <Link
                  key={prog.name}
                  to={prog.path} className="block text-gray-500 text-sm hover:text-accent transition-colors cursor-pointer">
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-light mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <MapPin size={16} />
                <span>Khallikot, Odisha 761030</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 text-sm cursor-pointer hover:text-accent">
                <Phone size={16} />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Mail size={16} />
                <span>info@adfitness.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 AD Fitness. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
              <Icon key={i} size={20} className="text-gray-500 hover:text-accent cursor-pointer transition-colors" />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};