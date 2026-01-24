import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ThreeStepFlow } from '../components/ThreeStepFlow';
import { TestimonialSection } from '../components/TestimonialSection';
import { SDGBadges } from '../components/SDGBadges';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-[#5C5552]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8B44F]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#4A7C59] rounded-lg flex items-center justify-center text-white">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-[#5C5552] tracking-tight">
                Agri<span className="text-[#4A7C59]">Guard</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-[#5C5552] hover:text-[#D4735E] transition-colors">

                Platform
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[#5C5552] hover:text-[#D4735E] transition-colors">

                Community
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[#5C5552] hover:text-[#D4735E] transition-colors">

                Resources
              </a>
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#D4735E] rounded-lg hover:bg-[#c06450] transition-colors shadow-sm">
                Partner Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#5C5552]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>

              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden">

              <div className="px-4 py-6 space-y-4">
                <a
                href="#"
                className="block text-base font-medium text-[#5C5552]">

                  Platform
                </a>
                <a
                href="#"
                className="block text-base font-medium text-[#5C5552]">

                  Community
                </a>
                <a
                href="#"
                className="block text-base font-medium text-[#5C5552]">

                  Resources
                </a>
                <button className="w-full px-5 py-3 text-base font-semibold text-white bg-[#D4735E] rounded-lg">
                  Partner Login
                </button>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ThreeStepFlow />
        <TestimonialSection />
        <SDGBadges />
      </main>

      {/* Footer */}
      <footer className="bg-[#5C5552] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#E8B44F] rounded-md flex items-center justify-center text-[#5C5552]">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  AgriGuard
                </span>
              </div>
              <p className="text-gray-300 max-w-sm leading-relaxed">
                Empowering agricultural communities with data-driven health
                monitoring. Protecting livelihoods, one herd at a time.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#E8B44F] mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Farmers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Veterinarians
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Governments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#E8B44F] mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-300">
                <li>support@agriguard.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  123 Harvest Lane
                  <br />
                  Sacramento, CA 95814
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 AgriGuard Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}