import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">

          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#E8B44F" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">

            <div className="inline-flex items-center rounded-full bg-[#E8B44F]/20 px-3 py-1 text-sm font-medium text-[#D4735E] mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#D4735E] mr-2"></span>
              Community-First Health Monitoring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#5C5552] mb-6 leading-tight">
              Protecting herds <br />
              <span className="text-[#D4735E]">together.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5C5552]/80 mb-8 leading-relaxed">
              Join a network of farmers and institutions dedicated to collective
              livestock health. Early detection, shared data, and rapid response
              for a safer agricultural future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#D4735E] rounded-xl hover:bg-[#c06450] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4735E] shadow-lg shadow-[#D4735E]/20">
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#4A7C59] transition-all duration-200 bg-white border-2 border-[#4A7C59]/20 rounded-xl hover:bg-[#4A7C59]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A7C59]">
                View Live Map
              </button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative lg:h-[600px] flex items-center justify-center">

            <div className="relative w-full aspect-square max-w-lg">
              {/* Abstract Network Background */}
              <svg
                className="absolute inset-0 w-full h-full text-[#E8B44F]/20"
                viewBox="0 0 400 400">

                <circle cx="200" cy="200" r="180" fill="currentColor" />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="white"
                  fillOpacity="0.5" />

              </svg>

              {/* Livestock Network Illustration */}
              <svg
                className="relative w-full h-full drop-shadow-xl"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                {/* Connection Lines */}
                <motion.path
                  d="M100 280 L 200 120 L 300 280 Z"
                  stroke="#4A7C59"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{
                    pathLength: 0,
                    opacity: 0
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.4
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5
                  }} />

                <motion.path
                  d="M100 280 L 300 280"
                  stroke="#4A7C59"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{
                    pathLength: 0,
                    opacity: 0
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.4
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5
                  }} />


                {/* Cow Silhouette (Top Center) */}
                <g transform="translate(160, 80) scale(0.8)">
                  <circle cx="50" cy="50" r="45" fill="white" />
                  <path
                    d="M25 60 C 25 60 30 40 40 35 C 45 32 55 32 60 35 C 70 40 75 60 75 60 L 70 75 L 30 75 Z"
                    fill="#D4735E" />

                  <rect
                    x="35"
                    y="50"
                    width="30"
                    height="20"
                    rx="5"
                    fill="#D4735E" />

                </g>

                {/* Sheep Silhouette (Bottom Left) */}
                <g transform="translate(60, 240) scale(0.8)">
                  <circle cx="50" cy="50" r="45" fill="white" />
                  <path
                    d="M30 50 C 30 40 40 30 50 30 C 60 30 70 40 70 50 C 70 60 60 70 50 70 C 40 70 30 60 30 50"
                    fill="#E8B44F" />

                  <circle cx="50" cy="50" r="15" fill="#E8B44F" />
                </g>

                {/* Chicken Silhouette (Bottom Right) */}
                <g transform="translate(260, 240) scale(0.8)">
                  <circle cx="50" cy="50" r="45" fill="white" />
                  <path d="M40 60 L 50 40 L 60 60 Z" fill="#4A7C59" />
                  <circle cx="50" cy="45" r="10" fill="#4A7C59" />
                </g>

                {/* Connection Nodes */}
                <circle cx="200" cy="120" r="6" fill="#4A7C59" />
                <circle cx="100" cy="280" r="6" fill="#4A7C59" />
                <circle cx="300" cy="280" r="6" fill="#4A7C59" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}