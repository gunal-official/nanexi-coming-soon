import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { steps } from './HowWeWorks';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const ProcessFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
  

        {/* Step Indicators */}
        <div className="flex justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                index === currentStep
                  ? 'bg-gradient-to-r ' + step.color + ' text-white scale-110'
                  : index < currentStep
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-700 text-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>

        {/* Main Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Outer Border */}
            <div className={`bg-gradient-to-r ${steps[currentStep].color} p-1 rounded-2xl shadow-2xl`}>
              {/* Inner Content */}
              <div className="bg-slate-800 rounded-xl p-8">
                {/* Icon and Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`bg-gradient-to-r ${steps[currentStep].color} p-4 rounded-xl`}>
                    {React.createElement(steps[currentStep].icon, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {steps[currentStep].title}
                    </h2>
                    <p className="text-lg text-slate-300">{steps[currentStep].subtitle}</p>
                  </div>
                </div>

                {/* Points */}
                <div className="mb-6 space-y-3">
                  {steps[currentStep].points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-slate-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="text-sm font-semibold text-slate-400 mb-3">Outcome:</div>
                  <div className="flex flex-wrap gap-3">
                    {steps[currentStep].outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-4 py-2 text-green-300 text-sm font-medium"
                      >
                        ✅ {outcome}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentStep === 0
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:shadow-lg'
            }`}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </motion.button>

          <div className="text-slate-400 font-medium">
            {currentStep + 1} of {steps.length}
          </div>

          <motion.button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentStep === steps.length - 1
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
            }`}
            whileHover={currentStep < steps.length - 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep < steps.length - 1 ? { scale: 0.95 } : {}}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;