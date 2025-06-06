import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Story() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('story-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="story-section" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" />
        </motion.div>

        {/* Story timeline */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* First meeting */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center group"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-200 to-rose-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-dancing text-3xl text-rose-700">2018</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rose-400 rounded-full" />
            </div>
            <h3 className="font-playfair text-xl text-slate-800 mb-3">First Met</h3>
            <p className="font-inter text-slate-600 leading-relaxed">
              A chance encounter at the local coffee shop changed everything. 
              Emma was reading her favorite book when James accidentally bumped into her table.
            </p>
          </motion.div>

          {/* First date */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center group"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-dancing text-3xl text-emerald-700">2019</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full" />
            </div>
            <h3 className="font-playfair text-xl text-slate-800 mb-3">First Date</h3>
            <p className="font-inter text-slate-600 leading-relaxed">
              A romantic picnic in the park under the cherry blossoms. 
              They talked for hours and knew this was something special.
            </p>
          </motion.div>

          {/* Proposal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center group"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-dancing text-3xl text-amber-700">2023</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full" />
            </div>
            <h3 className="font-playfair text-xl text-slate-800 mb-3">The Proposal</h3>
            <p className="font-inter text-slate-600 leading-relaxed">
              During a sunset hike at their favorite trail, James got down on one knee. 
              Emma said yes through happy tears as the golden hour painted the sky.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-rose-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            <blockquote className="font-playfair text-2xl md:text-3xl text-slate-700 italic mb-4 leading-relaxed">
              "True love stories never have endings"
            </blockquote>
            <cite className="font-inter text-slate-500 font-medium">— Richard Bach</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}