import React from "react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nanexi, we build intelligent and scalable digital products.
            We’re looking for curious minds and passionate builders to shape
            the future with us.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
            Open Positions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Frontend Developer",
              "Backend Developer",
              "UI/UX Designer",
              "Marketing Specialist",
            ].map((role) => (
              <div
                key={role}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {role}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Work with a talented team to build impactful digital
                  experiences.
                </p>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  Full Time
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="bg-white rounded-3xl shadow-sm p-10 md:p-14 mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            How to Apply
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Send your resume and a brief cover letter to{" "}
            <a
              href="mailto:careers@nanexi.com"
              className="font-medium text-gray-900 underline underline-offset-4"
            >
              careers@nanexi.com
            </a>
            . Please mention the position you’re applying for in the subject
            line.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 md:p-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Don’t See the Right Role?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            We’re always open to spontaneous applications from talented people
            who believe they can make an impact at Nanexi.
          </p>

          <a
            href="mailto:careers@nanexi.com"
            className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-medium bg-white text-gray-900 rounded-xl hover:bg-gray-200 transition"
          >
            Apply Now
          </a>
        </section>
      </div>
    </main>
  );
}
