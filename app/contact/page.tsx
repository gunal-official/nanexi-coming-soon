"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", service: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Message sent! We'll respond within 24 hours.");
        setFormData({ name: "", email: "", company: "", message: "", service: "" });
        setTimeout(() => setStatus(""), 5000);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <section className="text-center mb-28">
                    <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-8 py-6 mb-8 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-6xl font-semibold">Get In Touch</h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">Let's discuss your project[memory:1]</p>
                </section>

                <section className="grid lg:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Contact Info</h2>
                        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center">✉️</div>
                                <h3 className="text-xl font-semibold">Email</h3>
                            </div>
                            <a href="mailto:contact@nanexi.com" className="text-gray-300 hover:text-white text-lg block">contact@nanexi.com</a>
                        </div>
                        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center">💬</div>
                                <h3 className="text-xl font-semibold">WhatsApp</h3>
                            </div>
                            <a href="https://wa.me/+919876543210" className="text-gray-300 hover:text-white text-lg block">+91 98765 43210</a>
                        </div>
                        <p className="text-gray-400 mt-8">Bangalore, India</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-light mb-8">Send Message</h3>
                        {status && <div className="mb-6 p-4 bg-white/10 border border-white/30 rounded-2xl text-center">{status}</div>}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input name="name" onChange={handleChange} required placeholder="Name" className="p-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:border-white/50 focus:ring-2 focus:ring-white/30" />
                                <input name="email" type="email" onChange={handleChange} required placeholder="Email" className="p-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:border-white/50 focus:ring-2 focus:ring-white/30" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input name="company" onChange={handleChange} placeholder="Company" className="p-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:border-white/50 focus:ring-2 focus:ring-white/30" />
                                <select name="service" onChange={handleChange} className="p-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:border-white/50 focus:ring-2 focus:ring-white/30">
                                    <option>Select Service</option>
                                    <option>AI & ML</option><option>Web Development</option><option>SaaS</option><option>Data</option>
                                </select>
                            </div>
                            <textarea name="message" rows="5" onChange={handleChange} required placeholder="Project details..." className="w-full p-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:border-white/50 focus:ring-2 focus:ring-white/30" />
                            <button type="submit" className="w-full bg-white/10 border border-white/30 text-white font-semibold py-4 rounded-3xl hover:bg-white/20 transition-all duration-300">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}
