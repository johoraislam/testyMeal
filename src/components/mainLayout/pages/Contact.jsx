
const Contact = () => {
  return (
    <div className="bg-orange-50 py-12 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Contact Us</h2>

        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-orange-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-orange-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-orange-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
