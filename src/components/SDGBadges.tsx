import React from 'react';
import { motion } from 'framer-motion';
export function SDGBadges() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-xl font-bold text-[#5C5552] mb-2">
              Aligned with Global Goals
            </h3>
            <p className="text-[#5C5552]/70">
              We are committed to sustainable development, focusing on food
              security and health for all.
            </p>
          </div>

          <div className="flex gap-6">
            {/* SDG 2: Zero Hunger */}
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 bg-[#D3A029] rounded-lg flex flex-col p-2 sm:p-3 text-white shadow-lg">

              <span className="text-lg sm:text-2xl font-bold leading-none opacity-80">
                2
              </span>
              <div className="mt-auto">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Zero
                </span>
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Hunger
                </span>
              </div>
            </motion.div>

            {/* SDG 3: Good Health */}
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 bg-[#4C9F38] rounded-lg flex flex-col p-2 sm:p-3 text-white shadow-lg">

              <span className="text-lg sm:text-2xl font-bold leading-none opacity-80">
                3
              </span>
              <div className="mt-auto">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Good Health
                </span>
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider">
                  & Well-being
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}