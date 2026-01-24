import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { OfflineIndicator } from '../components/OfflineIndicator';
import { LocationCapture } from '../components/LocationCapture';
import { SymptomGrid } from '../components/SymptomGrid';
import { SeveritySlider } from '../components/SeveritySlider';
import { EmergencyButton } from '../components/EmergencyButton';
export function FieldReportPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
    prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };
  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset after success message
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedSymptoms([]);
        setSeverity(1);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 2500);
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <OfflineIndicator />
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">LIVSENSE</h1>
            <p className="text-xs text-gray-500 font-medium">
              Field Officer Mode
            </p>
          </div>
          <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User" />

          </div>
        </div>
      </div>

      <main className="px-4 py-6 space-y-6 max-w-md mx-auto">
        {/* Success Overlay */}
        <AnimatePresence>
          {showSuccess &&
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

              <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl">
                <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Report Submitted!
                </h2>
                <p className="text-gray-600 mb-6">
                  Data has been queued and will sync automatically.
                </p>
                <div className="w-full bg-gray-100 rounded-lg p-3 text-sm text-gray-500">
                  ID: #RPT-{Math.floor(Math.random() * 10000)}
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>

        {/* Location Section */}
        <section>
          <LocationCapture />
        </section>

        {/* Symptoms Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">
              Observed Symptoms
            </h2>
            <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
              Select all that apply
            </span>
          </div>
          <SymptomGrid
            selectedSymptoms={selectedSymptoms}
            onToggle={toggleSymptom} />

        </section>

        {/* Severity Section */}
        <section>
          <SeveritySlider value={severity} onChange={setSeverity} />
        </section>

        {/* Main Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={selectedSymptoms.length === 0 || isSubmitting}
          whileTap={{
            scale: 0.98
          }}
          className={`
            w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2 transition-all duration-200
            ${selectedSymptoms.length > 0 ? 'bg-emerald-600 text-white shadow-emerald-200 hover:bg-emerald-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}
          `}>

          {isSubmitting ?
          <>
              <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear'
              }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />

              <span>Sending...</span>
            </> :

          <>
              <Send className="w-5 h-5" />
              <span>Submit Report</span>
            </>
          }
        </motion.button>

        <p className="text-center text-xs text-gray-400 pb-4">
          Data is encrypted and stored locally until sync.
        </p>
      </main>

      {/* Fixed Emergency Button */}
      <EmergencyButton />
    </div>);

}