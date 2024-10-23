/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '@/assets/logo.jpg';
import { poppins } from '@/fonts/fonts';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <footer className='bg-primary text-white'>
      <div className='container mx-auto py-12 sm:px-6 lg:px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* First Column: Logo and Social Links */}
          <div className='col-span-1'>
            <Link
              href='/'
              className='text-xl font-bold'>
              <Image
                src={logo}
                alt='Company logo'
                width={60}
                height={50}
              />
            </Link>
            <p className='mb-4'>
              <strong>Location</strong>
              <br />
              Windhoek, Namibia
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                  aria-label={link.name}>
                  <link.icon className='h-6 w-6 hover:stroke-secondary transition-all duration-300' />
                </a>
              ))}
            </div>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h3
              className={`${poppins.className} text-sm font-semibold text-white tracking-wider uppercase mb-4`}>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {footerLinks[0].links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='hover:text-secondary transition-colors duration-300'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Contact Info and Newsletter */}
          <div>
            <h3
              className={`${poppins.className} text-sm font-semibold text-white tracking-wider uppercase mb-4`}>
              Contact Info
            </h3>
            <ul className='space-y-2'>
              <li>Email: info@liftwork.com</li>
              <li>Phone: +264 81 234 5678</li>
            </ul>
            <div className='mt-6'>
              <h3
                className={`${poppins.className} font-semibold text-white tracking-wider uppercase mb-4`}>
                Stay Updated!
              </h3>
              <form
                onSubmit={handleNewsletterSubmit}
                className='flex items-center space-x-2 gap-2 relative'>
                <label
                  htmlFor='email'
                  className='md:text-xl'>
                  Email:
                </label>
                <input
                  id='Search'
                  name='search'
                  type='search'
                  placeholder='Type your email...'
                  className='w-full peer px-4 py-2 text-black placeholder-gray-400 bg-primary border-b border-primary outline-none focus:border-white'
                  required
                />
                <Mail className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 opacity-35 peer-focus:opacity-100 transition-colors duration-300' />
              </form>
              <button
                type='submit'
                className='mt-4 bg-secondary hover:bg-secondary/80 text-white w-full py-2 rounded'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 pt-8 border-t border-gray-700'>
          <p className='text-base text-gray-400 text-center'>
            Copyright © Skillhive
          </p>
        </div>
        <div className='mt-4 flex justify-center space-x-6'>
          <Link
            href='/privacy-policy'
            className='text-sm text-gray-400 hover:text-secondary transition-colors duration-300'>
            Privacy Policy
          </Link>
          <Link
            href='/terms-of-service'
            className='text-sm text-gray-400 hover:text-secondary transition-colors duration-300'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
