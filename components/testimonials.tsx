'use client'

import React, { useState, useEffect } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/theme-context'
import { getTestimonials, addTestimonial } from '@/actions/testimonials'
import { Testimonial } from '@/types/testimonial'
import { FaQuoteLeft } from "react-icons/fa"
import toast from 'react-hot-toast'

export default function Testimonials() {
  const { ref } = useSectionInView('Testimonials')
  const { theme } = useTheme()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    message: ''
  })

  const loadTestimonials = async () => {
    setIsLoading(true)
    try {
      const data = await getTestimonials()
      setTestimonials(data)
    } catch (error) {
      console.error('Error loading testimonials:', error)
      toast.error('Failed to load testimonials')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadTestimonials()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await addTestimonial(newTestimonial)
      setNewTestimonial({ name: '', role: '', message: '' })
      
      if (result.approved) {
        toast.success('Thank you! Your positive testimonial has been posted.')
        await loadTestimonials()
      } else {
        const message = result.sentiment === 'negative' 
          ? 'Thank you for your feedback. Your testimonial requires review before posting.'
          : 'Thank you for your feedback! Your testimonial will be reviewed before posting.'
        toast.success(message)
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error)
      toast.error('Failed to submit testimonial. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      ref={ref}
      id="testimonials"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <div className="w-full px-4">
        <SectionHeading>Testimonials</SectionHeading>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Note that you CAN'T say anything bad as there is an NLP model that will filter out bad comments 😊
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[400px]">
          <div className="animate-pulse text-gray-500 dark:text-gray-400">Loading testimonials...</div>
        </div>
      ) : (
        <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden h-[550px] mb-16">
          <motion.div 
            className="flex absolute left-0 gap-4 py-4"
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              duration: testimonials.length * 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              width: '200vw'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                style={{
                  width: '40vw',
                  flexShrink: 0
                }}
                className="px-2"
              >
                <div className={`min-h-[450px] p-8 rounded-xl border ${
                  theme === 'light' 
                    ? 'bg-white border-gray-200 shadow-md' 
                    : 'bg-gray-800 border-gray-700'
                }`}>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <FaQuoteLeft className="text-3xl text-gray-300 dark:text-gray-700 mb-4" />
                      <p className="text-lg italic text-gray-700 dark:text-white/80">
                        "{testimonial.message}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(testimonial.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8"
        >
          <h3 className="font-semibold text-2xl mb-8 text-center">Say Something Nice about me!</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-gray-900 dark:text-white font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newTestimonial.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={`w-full p-3 rounded-lg bg-white dark:bg-gray-700 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  theme === 'light' ? 'border-gray-300' : 'border-gray-600'
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block mb-2 text-gray-900 dark:text-white font-medium"
              >
                Role / Company
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={newTestimonial.role}
                onChange={handleChange}
                required
                placeholder="Your role or company name"
                className={`w-full p-3 rounded-lg bg-white dark:bg-gray-700 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  theme === 'light' ? 'border-gray-300' : 'border-gray-600'
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-gray-900 dark:text-white font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={newTestimonial.message}
                onChange={handleChange}
                required
                placeholder="Share your experience..."
                rows={4}
                className={`w-full p-3 rounded-lg bg-white dark:bg-gray-700 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  theme === 'light' ? 'border-gray-300' : 'border-gray-600'
                }`}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-800 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}