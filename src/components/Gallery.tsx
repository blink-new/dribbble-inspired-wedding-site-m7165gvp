import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export function Gallery() {
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

    const element = document.getElementById('gallery-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Using beautiful couple and nature photos from Unsplash
  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=600&fit=crop',
      alt: 'Couple in garden',
      className: 'md:row-span-2'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop',
      alt: 'Wedding rings',
      className: ''
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop',
      alt: 'Beautiful landscape',
      className: ''
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=500&fit=crop',
      alt: 'Couple walking',
      className: 'md:row-span-2'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop',
      alt: 'Flowers',
      className: ''
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      alt: 'Romantic moment',
      className: ''
    }
  ]

  return (
    <section id="gallery-section" className="py-20 px-6 bg-gradient-to-b from-white/50 to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-800 mb-4">
            Our Moments
          </h2>
          <p className="font-inter text-slate-600 text-lg mb-6">
            A glimpse into our journey together
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${photo.className} relative group cursor-pointer`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                  <div className="relative">
                    <img
                      src={photo.src.replace('w=400', 'w=800').replace('h=300', 'h=600').replace('h=500', 'h=800').replace('h=600', 'h=900')}
                      alt={photo.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-rose-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}