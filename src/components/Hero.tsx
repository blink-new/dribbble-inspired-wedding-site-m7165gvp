import { motion } from 'framer-motion'
import { Calendar, MapPin, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-white to-emerald-100/20">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-rose-200/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Heart className="w-8 h-8 mx-auto text-rose-400 mb-4" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-dancing text-6xl md:text-8xl text-rose-600 mb-2">
            Emma
            <span className="font-playfair text-4xl md:text-6xl text-emerald-700 mx-6 italic">
              &
            </span>
            James
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-playfair text-xl md:text-2xl text-slate-600 mb-12 italic"
        >
          are getting married
        </motion.p>

        {/* Wedding details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span className="font-inter text-slate-700 font-medium">
                June 15, 2024
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span className="font-inter text-slate-700 font-medium">
                Meadowbrook Gardens
              </span>
            </div>
          </div>

          {/* Save the date button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-full font-inter font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Save the Date
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16">
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full h-full border-l-2 border-t-2 border-rose-300 rounded-tl-2xl"
        />
      </div>
      <div className="absolute top-8 right-8 w-16 h-16">
        <motion.div
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full h-full border-r-2 border-t-2 border-emerald-300 rounded-tr-2xl"
        />
      </div>
    </section>
  )
}