'use client'

import React, { useState, useEffect } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/theme-context'
import { getTestimonials, addTestimonial } from '@/actions/testimonials'
import { Testimonial } from '@/types/testimonial'
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

  useEffect(() => {
    async function loadTestimonials() {
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
    loadTestimonials()
  }, [])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await addTestimonial(newTestimonial)
      setNewTestimonial({ name: '', role: '', message: '' })
      
      if (result.approved) {
        toast.success('Thank you! Your positive testimonial has been posted.')
        // Refresh the testimonials list since this one was approved
        await loadTestimonials()
      } else {
        // More specific message based on sentiment
        const message = result.sentiment === 'negative' 
          ? 'Thank you for your feedback. Your testimonial requires review before posting.'
          : 'Thank you for your feedback! Your testimonial will be reviewed before posting.';
        toast.success(message)
      
      // Refresh the testimonials list
      await loadTestimonials()
    } }
    catch (error) {
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

  return (
    <section
      ref={ref}
      id="testimonials"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] mx-auto leading-8"
    >
      <SectionHeading>Testimonials</SectionHeading>
    <p className="mb-3">
        Note that you CAN'T say anything bad as there is an NLP model that will filter out bad comments :)
    </p>
      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500 dark:text-gray-400">Loading testimonials...</div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
              }`}
            >
              <p className="italic text-gray-700 dark:text-white/70">
                "{testimonial.message}"
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(testimonial.date).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h2 className="font-semibold text-lg mb-6">Say Something Nice about me!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-gray-900 dark:text-white"
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
              className={`w-full p-3 rounded bg-transparent border ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-gray-900 dark:text-white"
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
              className={`w-full p-3 rounded bg-transparent border ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={newTestimonial.message}
              onChange={handleChange}
              required
              rows={4}
              className={`w-full p-3 rounded bg-transparent border ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-700'
              }`}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-800 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 mt-2"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}