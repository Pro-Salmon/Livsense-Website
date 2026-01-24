import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Activity, ShieldCheck } from 'lucide-react';
const steps = [
{
  id: 1,
  title: 'Farmers Input Data',
  description:
  'Simple, daily health logs from the field using our offline-first mobile app.',
  icon: Smartphone,
  color: 'bg-[#E8B44F]',
  textColor: 'text-[#E8B44F]'
},
{
  id: 2,
  title: 'System Analyzes',
  description:
  'AI detects potential outbreak patterns across the entire community network.',
  icon: Activity,
  color: 'bg-[#D4735E]',
  textColor: 'text-[#D4735E]'
},
{
  id: 3,
  title: 'Institutions Respond',
  description:
  'Vets and authorities receive alerts to provide rapid, targeted support.',
  icon: ShieldCheck,
  color: 'bg-[#4A7C59]',
  textColor: 'text-[#4A7C59]'
}];

export function ThreeStepFlow() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#5C5552] mb-4">
            How We Protect Together
          </h2>
          <p className="text-lg text-[#5C5552]/70">
            A seamless flow of information from the pasture to the policy
            makers, ensuring no herd is left behind.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10">
            <div className="h-full w-full bg-gradient-to-r from-[#E8B44F] via-[#D4735E] to-[#4A7C59] opacity-30" />
          </div>

          {steps.map((step, index) =>
          <motion.div
            key={step.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="relative flex flex-col items-center text-center group">

              <div
              className={`w-24 h-24 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>

                <step.icon className={`w-10 h-10 ${step.textColor}`} />
              </div>

              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-gray-300">
                0{step.id}
              </div>

              <h3 className="text-xl font-bold text-[#5C5552] mb-3">
                {step.title}
              </h3>
              <p className="text-[#5C5552]/70 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}