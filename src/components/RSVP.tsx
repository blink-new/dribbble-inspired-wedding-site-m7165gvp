import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Heart, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export function RSVP() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('rsvp-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.attendance) {
      toast.error('Please fill in all required fields')
      return
    }

    // Simulate form submission
    toast.loading('Sending RSVP...', { duration: 1000 })
    
    setTimeout(() => {
      setIsSubmitted(true)
      toast.success('RSVP sent successfully! 🎉')
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="rsvp-section" className="py-20 px-6 bg-gradient-to-b from-emerald-50/20 to-rose-50/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-12 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h3 className="font-playfair text-3xl text-slate-800 mb-4">
              Thank You!
            </h3>
            <p className="font-inter text-slate-600 text-lg mb-6">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
            <div className="flex justify-center">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp-section" className="py-20 px-6 bg-gradient-to-b from-emerald-50/20 to-rose-50/30">
      <div className="max-w-2xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-800 mb-4">
            RSVP
          </h2>
          <p className="font-inter text-slate-600 text-lg mb-6">
            Please let us know if you'll be joining us
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                  Full Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Attendance */}
            <div>
              <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                Will you be attending? *
              </label>
              <Select value={formData.attendance} onValueChange={(value) => handleInputChange('attendance', value)}>
                <SelectTrigger className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter">
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, I'll be there! 🎉</SelectItem>
                  <SelectItem value="no">Sorry, I can't make it 😔</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of guests */}
            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                  Number of Guests
                </label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Just me</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            )}

            {/* Dietary restrictions */}
            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                  Dietary Restrictions
                </label>
                <Input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => handleInputChange('dietary', e.target.value)}
                  className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter"
                  placeholder="Any allergies or dietary preferences?"
                />
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className="font-inter text-slate-700 text-sm font-medium mb-2 block">
                Message for the Couple
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white/80 border-slate-200 focus:border-rose-400 font-inter min-h-[100px]"
                placeholder="Share your well wishes or any special requests..."
              />
            </div>

            {/* Submit button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-8 py-3 rounded-full font-inter font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send RSVP
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Deadline notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="font-inter text-slate-600 text-sm">
            Please RSVP by <strong className="text-rose-600">May 15, 2024</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}