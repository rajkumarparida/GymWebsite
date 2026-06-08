import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | AD Fitness Khallikot</title>
                <meta name="description" content="Contact AD Fitness in Khallikot. Get in touch with us for memberships, queries, or book a free trial session." />
            </Helmet>

            <main className="pt-20">

                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-b from-secondary to-primary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
                                Get In <span className="gradient-text">Touch</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We'd love to hear from you. Reach out to us for any queries.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20 bg-primary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="grid md:grid-cols-2 gap-12">

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="font-montserrat font-bold text-4xl mb-12">
                                    Contact <span className="gradient-text">Information</span>
                                </h2>

                                <div className="space-y-8">
                                    {/* Address */}
                                    <div className="flex gap-4">
                                        <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-light mb-2">Our Location</h3>
                                            <p className="text-gray-400">
                                                Khallikot, Odisha 761030<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-4">
                                        <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-light mb-2">Phone</h3>
                                            <p className="text-gray-400">
                                                +91 XXXXX XXXXX<br />
                                                Available 24/7
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4">
                                        <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-light mb-2">Email</h3>
                                            <p className="text-gray-400">
                                                info@adfitness.com<br />
                                                support@adfitness.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex gap-4">
                                        <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-light mb-2">Business Hours</h3>
                                            <p className="text-gray-400">
                                                Morning: 5:00 AM - 10:00 AM<br />
                                                Evening: 4:00 PM - 10:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-12">
                                    <h3 className="font-semibold text-light mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {['Facebook', 'Instagram', 'Twitter'].map((social, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-effect p-8 rounded-xl">
                                    <h2 className="font-montserrat font-bold text-4xl mb-8">
                                        Send us a <span className="gradient-text">Message</span>
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-light font-semibold mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-light font-semibold mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-light font-semibold mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 XXXXXXXXXX"
                                                className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-light font-semibold mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your message..."
                                                rows="5"
                                                className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors resize-none"
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn-primary w-full"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Map Placeholder */}
                <section className="py-20 bg-secondary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-montserrat font-bold text-4xl mb-8 text-center">
                                Find Us On <span className="gradient-text">Map</span>
                            </h2>
                            <div className="h-96 bg-gray-900 rounded-xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="AD Fitness Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.8769876543217!2d85.31234!3d19.85432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUxJzE1LjUiTiA4NcKwMTgnNDkuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
        </>
    );
};