'use client';
import React from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { Input } from './ui/input';
import { Label } from './ui/label';
import SectionHeading from './section-heading';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSectionInView } from '@/lib/hooks';

const ContactForm = () => {
  const { ref } = useSectionInView("Contact", 0.5);  // Changed threshold and properly destructured ref

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await sendEmail(formData);
      if (response.status === 'success') {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section id="contact" ref={ref} className="mb-28 w-full mx-auto scroll-mt-28 sm:mb-40">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading>Hit me up!</SectionHeading>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="block text-left">Name</Label>
              <Input type="text" name="name" id="name" required placeholder="Your name" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senderEmail" className="block text-left">Email</Label>
              <Input type="email" name="senderEmail" id="senderEmail" required placeholder="Your email" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-name" className="block text-left">Company Name</Label>
              <Input type="text" name="company-name" id="company-name" required placeholder="Your Company's name" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="block text-left">Message</Label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                rows={6}
                className="w-full resize-none border border-gray-300 bg-transparent p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </DndProvider>
  );
};

export default ContactForm;