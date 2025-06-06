import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, MapPin, Camera, Music, Gift, Utensils } from 'lucide-react'

export function Details() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('details-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const details = [
    {
      icon: Clock,
      title: 'Timeline',
      items: [
        '4:00 PM - Ceremony',
        '5:00 PM - Cocktail Hour',
        '6:30 PM - Reception',
        '11:00 PM - Last Dance'
      ]
    },
    {
      icon: MapPin,
      title: 'Venue',
      items: [
        'Meadowbrook Gardens',
        '123 Garden Lane',
        'Bloomfield, CA 90210',
        'Parking Available'
      ]
    },
    {
      icon: Utensils,
      title: 'Reception',
      items: [
        'Cocktail Hour',
        'Three-Course Dinner',
        'Wedding Cake',
        'Open Bar'
      ]
    },
    {
      icon: Music,
      title: 'Entertainment',
      items: [
        'Live Jazz Trio',
        'DJ for Dancing',
        'Photo Booth',
        'Surprise Performance'
      ]
    },
    {
      icon: Camera,
      title: 'Photography',
      items: [
        'Professional Photos',
        'Drone Coverage',
        'Instant Prints',
        'Online Gallery'
      ]
    },
    {
      icon: Gift,
      title: 'Registry',
      items: [
        'Williams Sonoma',
        'Crate & Barrel',
        'Target',
        'Cash Fund'
      ]
    }
  ]

  return (
    <section id="details-section" className="py-20 px-6 bg-gradient-to-b from-rose-50/30 to-emerald-50/20">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-800 mb-4">
            Wedding Details
          </h2>
          <p className="font-inter text-slate-600 text-lg mb-6">
            Everything you need to know for our special day
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" />
        </motion.div>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-slate-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl text-slate-800 text-center mb-4">
                    {detail.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {detail.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        className="font-inter text-slate-600 text-center py-1"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Important notes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl text-center text-slate-800 mb-6">
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 font-inter text-slate-700">
              <div className="text-center">
                <strong className="text-emerald-700">Dress Code:</strong>
                <br />
                Garden Party Attire
                <br />
                <span className="text-sm text-slate-600">Think elegant but comfortable for outdoor celebration</span>
              </div>
              <div className="text-center">
                <strong className="text-rose-700">Special Dietary Needs:</strong>
                <br />
                Please let us know
                <br />
                <span className="text-sm text-slate-600">We'll accommodate all dietary restrictions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}