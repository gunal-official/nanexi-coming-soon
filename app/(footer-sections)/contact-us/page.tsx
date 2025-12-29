

export default function ContactUs() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Have a question, idea, or partnership in mind?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                Reach out to us for collaborations, support, or general inquiries.
              </p>
            </div>

            <div className="space-y-4 text-gray-800">
              <p>
                <span className="font-medium text-black">Email:</span>{" "}
                <a href="mailto:contact@heizen.com" className="hover:underline">contact@nanexi.com</a>
              </p>
             
              <p>
                <span className="font-medium text-black">Location:</span>{" "}
                Jain University, #44/4, District Fund Road, Jayanagar 9th Block,
                Bengaluru, Karnataka 560069, India
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form className="bg-gray-50 rounded-lg shadow p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
