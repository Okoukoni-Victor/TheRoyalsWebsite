'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Initiatives',
    href: '#',
    isDropdown: true,
    sublinks: [
      {
        category: "Community Support & Empowerment",
        links: [{ label: "Clothe A BoyChild Initiative (CABI)", href: "/initiatives/cabi" }]
      },
      {
        category: "Education",
        links: [{ label: "Urgent 2k Campaign", href: "/initiatives/urgent-2k" }]
      },
      {
        category: "Leadership Pathway",
        isComingSoon: true
      }
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to('.mobile-menu', { x: 0, opacity: 1, visibility: 'visible', duration: 0.5, ease: 'power3.out' });
      gsap.from('.mobile-nav-item', { x: 20, opacity: 0, stagger: 0.05, duration: 0.4, delay: 0.1, ease: 'power2.out' });
    } else {
      gsap.to('.mobile-menu', { x: '100%', opacity: 0, visibility: 'hidden', duration: 0.4, ease: 'power3.in' });
    }
  }, { dependencies: [isMobileMenuOpen] });

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm h-20' : 'bg-white h-[93px]'
      }`}>
        <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between px-6 lg:px-[95px]">
          
          <Link href="/" className="relative z-[160]" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/assets/navLogo-blue.svg"
              alt="The Royals Logo"
              width={160}
              height={40}
              className="w-32 md:w-40 h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group h-full flex items-center">
                {link.isDropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 text-grey-900 font-semibold hover:text-blue-600 transition-colors py-8 focus:outline-none">
                      {link.label}
                      <Icon icon="lucide:chevron-down" width="14" className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 pt-4">
                      <div className="absolute top-0 left-0 w-full h-4" />
                      <div className="bg-white border border-grey-100 shadow-2xl rounded-2xl p-6">
                        {link.sublinks.map((sub, idx) => (
                          <div key={idx} className={`${idx !== 0 ? 'mt-5 pt-5 border-t border-grey-50' : ''}`}>
                            <h5 className="text-[10px] font-bold text-grey-400 uppercase tracking-widest mb-3">
                              {sub.category}
                            </h5>
                            {sub.isComingSoon ? (
                              <div className="inline-block px-2.5 py-0.5 bg-grey-50 rounded-md border border-grey-100">
                                <span className="text-[10px] font-bold text-grey-300 uppercase">Coming Soon</span>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                {sub.links.map((sublink) => (
                                  <Link 
                                    key={sublink.label} 
                                    href={sublink.href}
                                    className="block px-3 py-2 -mx-3 rounded-lg hover:bg-blue-50 text-grey-700 hover:text-blue-600 transition-all font-medium text-[14px]"
                                  >
                                    {sublink.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className="text-grey-900 font-semibold hover:text-blue-600 transition-colors py-8 block relative after:content-[''] after:absolute after:bottom-7 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button 
              label="Get Involved" 
              href="/get-involved" 
              variant="primary"
            />
          </div>

          <button 
            className="flex lg:hidden relative z-[160] p-2 text-grey-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} width="28" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu fixed inset-0 bg-white z-140 flex flex-col lg:hidden translate-x-full opacity-0 invisible overflow-y-auto">
        
        {/* Main Links - Padding to avoid fixed header */}
        <div className="flex flex-col pt-32 px-6 space-y-9">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="mobile-nav-item">
              {link.isDropdown ? (
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between text-lg font-medium text-grey-800"
                  >
                    {link.label}
                    <Icon icon="lucide:chevron-down" width="20" className={`text-grey-400 transition-transform ${activeMobileSubmenu === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeMobileSubmenu === link.label && (
                    <div className="pl-4 space-y-6 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      {link.sublinks.map((sub, idx) => (
                        <div key={idx}>
                          <h4 className="text-[10px] font-bold text-grey-400 uppercase tracking-widest mb-3">{sub.category}</h4>
                          {!sub.isComingSoon && sub.links.map(sl => (
                            <Link key={sl.label} href={sl.href} className="block text-base font-medium text-grey-600 mb-3" onClick={() => setIsMobileMenuOpen(false)}>
                              {sl.label}
                            </Link>
                          ))}
                          {sub.isComingSoon && <span className="text-xs text-grey-300 font-bold uppercase">Coming Soon</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className="text-lg font-medium text-grey-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className='px-6 mt-auto pt-10 pb-12 border-t border-grey-50 space-y-8 mobile-nav-item'>
          <Link 
            href="/privacy-policy" 
            className="block text-lg font-medium text-grey-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Privacy Policy
          </Link>

          <Button 
            label="Get Involved" 
            href="/get-involved" 
            variant="primary"
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
}