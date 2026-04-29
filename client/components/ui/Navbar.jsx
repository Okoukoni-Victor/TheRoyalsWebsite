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
        title: "Community Support & Empowerment",
        subtitle: "Clothe A BoyChild Initiative (CABI)",
        href: "/initiative/cabi"
      },
      {
        title: "Education",
        subtitle: "Urgent 2K Campaign",
        href: "/initiative/urgent-2k"
      },
      {
        title: "Leadership Pathway",
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
      <nav className={`fixed top-0 left-0 w-full z-150 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md h-20' : 'bg-white h-20'
      }`}>
        <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between px-6 lg:px-[95px]">
          
          <Link href="/" className="relative z-160" onClick={() => setIsMobileMenuOpen(false)}>
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
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group h-full flex items-center">
                {link.isDropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 text-grey-900 py-8 focus:outline-none">
                      {link.label}
                      <Icon icon="lucide:chevron-down" width="14" className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-22 left-1/2 -translate-x-1/2 w-[440px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="absolute top-0 left-0 w-full h-4" />
                      <div className="bg-white border border-grey-100 p-4">
                        <div className="flex flex-col gap-1">
                          {link.sublinks.map((sub, idx) => (
                            sub.isComingSoon ? (
                              <div key={idx} className="p-4 rounded-xl flex flex-col gap-2">
                                <span className="font-bold text-grey-900 text-base">{sub.title}</span>
                                <div className="inline-block self-start px-3 py-1 bg-grey-50 rounded-lg border border-grey-100">
                                  <button className="text-[11px] font-bold text-grey-400 uppercase">Coming soon</button>
                                </div>
                              </div>
                            ) : (
                              <Link 
                                key={idx} 
                                href={sub.href}
                                className="group/item relative flex items-center justify-between p-4 transition-all duration-300"
                              >
                                {/* Left indicator bar */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover/item:h-8 bg-blue-300 transition-all duration-300 rounded" />
                                
                                <div className="flex flex-col">
                                  <span className="font-bold text-grey-900 text-base transition-colors">
                                    {sub.title}
                                  </span>
                                  <span className="text-sm text-grey-400 font-medium">
                                    {sub.subtitle}
                                  </span>
                                </div>

                                {/* Arrow button */}
                                <div className="w-9 h-9 rounded-full bg-blue-300 flex items-center justify-center opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                  <Icon icon="lucide:arrow-right" className="text-white" width="18" />
                                </div>
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className="text-grey-900 hover:text-blue-300 transition-colors py-8 block"
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
            className="flex lg:hidden relative z-160 p-2 text-grey-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} width="28" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu top-20 pt-8 fixed inset-0 bg-white z-140 flex flex-col lg:hidden translate-x-full opacity-0 invisible overflow-y-auto">
        
        {/* Main Links - Padding to avoid fixed header */}
        <div className="flex flex-col px-6 space-y-9">
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
                    <div className="pl-4 space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      {link.sublinks.map((sub, idx) => (
                        <div key={idx}>
                          {!sub.isComingSoon ? (
                            <Link 
                              href={sub.href} 
                              className="flex items-center justify-between py-3 border-b border-grey-50 last:border-0" 
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex flex-col">
                                <span className="font-bold text-grey-900 text-base">{sub.title}</span>
                                <span className="text-sm text-grey-400 font-medium">{sub.subtitle}</span>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center shrink-0">
                                <Icon icon="lucide:arrow-right" className="text-white" width="16" />
                              </div>
                            </Link>
                          ) : (
                            <div className="flex flex-col gap-2 py-3 border-b border-grey-50 last:border-0">
                              <span className="font-bold text-grey-900 text-base">{sub.title}</span>
                              <button className="inline-block self-start px-2 py-0.5 bg-grey-50 rounded border border-grey-100">
                                <span className="text-[10px] font-bold text-grey-400 uppercase">Coming Soon</span>
                              </button>
                            </div>
                          )}
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
        <div className='px-6 mt-auto pt-10 pb-12 space-y-8 mobile-nav-item'>
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