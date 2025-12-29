"use client"

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <section className="text-center mb-24">
                    <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-8 py-4 mb-8 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            About NANEXI
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        Where Data Meets Intelligence – Nano + Next + AI
                    </p>
                </section>

                {/* Stats Row */}
                <section className="grid md:grid-cols-4 gap-8 mb-24 text-center">
                    {[
                        { num: "50+", label: "Projects Delivered" },
                        { num: "100%", label: "Uptime Guarantee" },
                        { num: "24/7", label: "Support Coverage" },
                        { num: "5+", label: "Years Expertise" }
                    ].map((stat, idx) => (
                        <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                                {stat.num}
                            </div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Divider */}
                <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Who We Are */}
                <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                            NANEXI is a next-generation software development company specializing in intelligent, scalable, and future-ready digital solutions.
                            Founded by Gunal D in Bangalore, India.
                        </p>
                        <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                            Nano + Next + AI. We blend cutting-edge artificial intelligence, data intelligence, and clean engineering practices
                            to transform business ideas into powerful technology products for global clients.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="border-2 border-white/10 rounded-3xl p-12 bg-white/5 backdrop-blur-xl">
                            <p className="text-xl text-gray-200 leading-relaxed relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                                "Building intelligent systems that evolve with the future of technology – precision engineering at nano scale,
                                next-generation architecture, powered by AI."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                            Build intelligent software systems that simplify complexity, empower businesses worldwide,
                            and create sustainable digital value through AI innovation.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            Our Vision
                        </h3>
                        <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                            Shape the future of technology by creating adaptive, intelligence-driven platforms
                            that grow alongside global innovation and business evolution.
                        </p>
                    </div>
                </section>

                {/* Core Expertise */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-light text-center mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                        Core Expertise
                    </h2>
                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        Specializing in modern technology stacks and AI-driven solutions for forward-thinking businesses worldwide.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Intelligent Software Development",
                            "AI & Machine Learning Systems",
                            "Web & Mobile Applications",
                            "SaaS Product Engineering",
                            "Data Intelligence Platforms",
                            "Cloud-Native Architecture",
                            "Business Process Automation",
                            "Backend & API Development"
                        ].map((service, idx) => (
                            <div
                                key={service}
                                className="group border border-white/10 hover:border-white/30 rounded-3xl p-8 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-sm font-bold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                                        {idx + 1}
                                    </span>
                                </div>
                                <p className="text-gray-300 group-hover:text-white font-medium text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                    {service}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-24 bg-white/5 border-t border-white/10 rounded-4xl mb-24">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-white/20 border-4 border-white/30 rounded-full mx-auto mb-8 flex items-center justify-center">
                            <span className="text-2xl font-bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>GD</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            Gunal D
                        </h3>
                        <p className="text-xl text-gray-300 mb-2 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                            Founder & CEO
                        </p>
                        <p className="text-gray-400 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                            Computer Science Engineer | AI Specialist | Bangalore, India
                        </p>
                        <a href="mailto:contact@nanexi.com" className="inline-block px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-3xl hover:bg-white/20 transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                            Connect with Founder
                        </a>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-20 bg-white/10 border border-white/10 rounded-4xl backdrop-blur-xl">
                    <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                        Ready to Build Something Extraordinary?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        Let's turn your vision into intelligent reality with NANEXI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@nanexi.com"
                            className="px-12 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                            Start Project
                        </a>
                        <a
                            href="/services"
                            className="px-12 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            View Services
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}
