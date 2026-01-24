import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  "Knowing my neighbors' herds are healthy gives me peace of mind. We're not just farming alone anymore; we're a defensive line.",
  author: 'Elena Rodriguez',
  role: 'Dairy Farmer',
  location: 'Central Valley',
  initials: 'ER',
  color: 'bg-[#D4735E]'
},
{
  quote:
  'The early warning system saved my flock last season. The vet arrived before symptoms even spread to the second barn.',
  author: 'Marcus Chen',
  role: 'Poultry Producer',
  location: 'Highland District',
  initials: 'MC',
  color: 'bg-[#4A7C59]'
},
{
  quote:
  "Finally, a system that respects our privacy while helping us protect the community. It's built by people who understand agriculture.",
  author: "Sarah O'Connor",
  role: 'Sheep Breeder',
  location: 'West Plains',
  initials: 'SO',
  color: 'bg-[#E8B44F]'
}];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#5C5552] mb-4">
              Trusted by the Community
            </h2>
            <p className="text-lg text-[#5C5552]/70">
              Real stories from farmers who are strengthening their biosecurity
              through connection.
            </p>
          </div>
          <button className="text-[#D4735E] font-semibold hover:text-[#b05d4b] transition-colors">
            Read all stories &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.1
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8B44F]/10 flex flex-col h-full">

              <Quote className="w-8 h-8 text-[#E8B44F]/40 mb-6" />
              <p className="text-lg text-[#5C5552] mb-8 flex-grow italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg`}>

                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[#5C5552]">{item.author}</h4>
                  <p className="text-sm text-[#5C5552]/60">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}