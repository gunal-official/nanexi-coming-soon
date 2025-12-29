import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            About Nanexi
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nanexi is a forward-thinking technology company focused on building
            intelligent, scalable, and future-ready digital solutions for
            modern businesses.
          </p>
        </header>

        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base leading-7">
              We are a passionate team of developers, designers, and engineers
              driven by technology, creativity, and purpose. At Nanexi, we
              specialize in crafting intelligent systems and scalable products
              that solve real-world problems and deliver meaningful impact.
            </p>
          </div>

          <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1767006990/Whisk_y2yzqtn0qzn0ugnk1sm3imytqty3qtlkjtoj1iy_rqkdq2.png"
              alt="Nanexi Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-3xl shadow-sm p-10 md:p-14 mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Our mission is to empower individuals and businesses through
            cutting-edge products, intelligent automation, and scalable digital
            solutions that drive growth, efficiency, and long-term innovation.
          </p>
        </section>

        {/* Leadership Section */}
        <section className="mb-24">

          <div className="flex flex-col items-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-3 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-gray-500 text-base md:text-lg text-center max-w-2xl mb-6">
              The passionate minds behind Nanexi’s innovation and success.
            </p>
            <span className="block w-16 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 mb-2"></span>
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Founder Card */}
            <div className="group bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-blue-500 transition">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQEou95M-kjJFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709698937928?e=1768435200&v=beta&t=n3FLNlIBASLxeYBf-sIu0Qrc9orEdxR7d2YltORR3Ok"
                  alt="Gunal D"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Gunal D</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-center text-sm leading-6">
                Gunal has over 3 years of experience in building SaaS products, leading teams, and driving innovation.
              </p>
            </div>

            {/* CEO Card */}
            <div className="group bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-blue-500 transition">
                <Image
                  src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1767007785/sagarChaurasia_v8ae9c.png"
                  alt="John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sagar Chaurasia</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-center text-sm leading-6">
                Sagar is a visionary leader with a passion for technology and innovation, steering Nanexi towards new horizons.
              </p>
            </div>

          
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 md:p-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Contact Us
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Have questions, ideas, or want to collaborate with Nanexi?
            We’d love to hear from you.
          </p>

          <a
            href="mailto:info@nanexi.com"
            className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-medium bg-white text-gray-900 rounded-xl hover:bg-gray-200 transition"
          >
            info@nanexi.com
          </a>
        </section>
      </div>
    </main>
  );
}
