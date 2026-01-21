'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const Footer = () => {
  const footerRef = useRef(null);
  const {ref, inView} = useInView<HTMLDivElement>()

  const linkColumns = [
    {
      title: 'Product',
      links: ['Features', 'Templates', 'Pricing', 'Roadmap']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Guide', 'Examples', 'API']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Contact', 'Careers']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
    }
  ];

  const socialIcons = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Product Hunt',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.604 9.279h-3.487v2.558h3.487c.711 0 1.279-.568 1.279-1.279s-.568-1.279-1.279-1.279zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.604 13.117h-3.487v3.487H8.395V7.396h5.209c1.662 0 3.001 1.339 3.001 3.001s-1.339 2.72-3.001 2.72z"/>
        </svg>
      )
    }
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-[#050812] border-t border-white/10 pt-20 pb-8 overflow-x-hidden w-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-2 -mt-8 mb-3 group cursor-pointer">
                <Image className="w-38 h-18 tny:w-40 tny:h-20 pulse" src={require('@/assets/logo.png')} alt='Logo' loading='eager'/>
              
            </div>
            <p className="text-slate-400 text-base mb-8">
              AI-powered landing pages that convert.
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300"
                  aria-label={social.name}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {linkColumns.map((column, columnIndex) => (
            <div
              key={column.title}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(columnIndex + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold uppercase text-white mb-5 tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 text-[15px] hover:text-cyan-400 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-sm text-slate-400/70 text-center md:text-left">
            © 2025 Landing Page Generator. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-400/70">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Privacy
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Terms
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;