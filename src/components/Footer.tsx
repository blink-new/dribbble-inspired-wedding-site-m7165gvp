import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main content */}
        <div className="text-center mb-12">
          {/* Names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-dancing text-4xl md:text-5xl text-rose-300 mb-2">
              Emma & James
            </h3>
            <p className="font-playfair text-xl text-slate-300 italic">
              June 15, 2024
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="font-inter text-slate-300 text-sm">
                emmajames2024@email.com
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="font-inter text-slate-300 text-sm">
                (555) 123-4567
              </span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="font-inter text-slate-300 text-sm">
                Meadowbrook Gardens
              </span>
            </div>
          </motion.div>

          {/* Thank you message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
          >
            <h4 className="font-playfair text-2xl text-white mb-4">
              Thank You
            </h4>
            <p className="font-inter text-slate-300 leading-relaxed">
              Your presence at our wedding would be the greatest gift of all. 
              We're so grateful to have you in our lives and can't wait to 
              celebrate this new chapter with you.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400" />
            <Heart className="w-6 h-6 text-rose-400" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400" />
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center border-t border-white/10 pt-8"
          >
            <p className="font-inter text-slate-400 text-sm">
              © 2024 Emma & James. Made with love for our special day.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}