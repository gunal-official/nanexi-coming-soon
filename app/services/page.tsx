"use client";

import { useState } from "react";

export default function Services() {
    const [activeTab, setActiveTab] = useState("ai");

    const services = {
        ai: { title: "AI & Machine Learning", features: ["Custom AI Models", "Computer Vision", "NLP Solutions", "Predictive Analytics", "MLOps", "Automation"] },
        web: { title: "Web & Mobile", features: ["Next.js Apps", "React Native", "PWA", "Real-time Dashboards", "API Architecture", "Cross-platform"] },
        saas: { title: "SaaS Engineering", features: ["Multi-tenant", "Subscriptions", "Scalable Backend", "Dashboards", "Payments", "Analytics"] },
        data: { title: "Data Intelligence", features: ["Data Pipelines", "Real-time Processing", "BI Tools", "ETL", "Visualization", "Data Science"] }
    };

    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <section className="text-center mb-28">
                    <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-8 py-6 mb-8 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">Our Services</h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Cutting-edge AI and software solutions[memory:1]</p>
                </section>

                <section className="grid md:grid-cols-4 gap-8 mb-24 text-center">
                    {[
                        { num: "50+", label: "Projects" }, { num: "98%", label: "Satisfaction" },
                        { num: "12x", label: "Faster" }, { num: "100%", label: "Ownership" }
                    ].map((stat, idx) => (
                        <div key={idx} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">{stat.num}</div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </section>

                {/* Tabs */}
                <section className="grid lg:grid-cols-2 gap-12 mb-32">
                    <div className="space-y-4">
                        {Object.entries(services).map(([key, service]) => (
                            <div key={key} onClick={() => setActiveTab(key)} className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${activeTab === key
                                    ? "border-white/50 bg-white/10 backdrop-blur-xl shadow-2xl"
                                    : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                                }`}>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-light mb-8">{services[activeTab].title}</h2>
                        <ul className="space-y-3">
                            {services[activeTab].features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-gray-300">
                                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-24 bg-white/10 border-2 border-white/20 rounded-4xl backdrop-blur-2xl">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Transform?</h2>
                    <a href="mailto:contact@nanexi.com" className="px-12 py-5 bg-white/10 border border-white/30 text-white font-semibold rounded-3xl hover:bg-white/20 transition-all duration-300">
                        Start Consultation
                    </a>
                </section>
            </div>
        </main>
    );
}
