import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    // Scroll to the question if it's opened
    if (openIndex !== index) {
      document
        .getElementById(`faq-content-${index}`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqData = [
    {
      question: "What is the purpose of the club?",
      answer:
        "The purpose of the club is to bring together students passionate about learning, networking, and growing through collaborative events and activities.",
    },
    {
      question: "Who can join the club?",
      answer:
        "Anyone can join! Whether you’re a beginner or an expert, all students from any department or year are welcome to be a part of the club.",
    },
    {
      question: "What activities does the club organize?",
      answer: [
        "Skill-building workshops and training sessions.",
        "Hackathons and coding challenges.",
        "Networking events with professionals.",
        "Social and community-based projects.",
      ],
    },
    {
      question: "Are there any membership benefits?",
      answer: [
        "Exclusive access to events and workshops.",
        "Networking opportunities with peers and mentors.",
        "Certificates, prizes, and discounts for members.",
      ],
    },
    {
      question: "How can I join the club?",
      answer:
        "You can join by filling out our membership form online or attending our next orientation session. Contact us for more details!",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="divide-y divide-gray-800">
          {faqData.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className={`w-full flex justify-between items-center text-lg font-medium ${
                  openIndex === index
                    ? "text-blue-400 font-bold"
                    : "text-white"
                } focus:outline-none hover:text-blue-400 transition-colors`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {faq.question}
                <span
                  className={`transform transition-transform text-2xl ${
                    openIndex === index ? "rotate-45  " : "rotate-0"
                  }`}
                >
                  <i className="fa-solid fa-satellite-dish"></i>
                </span>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc ml-6 text-gray-300">
                    {faq.answer.map((subAnswer, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {subAnswer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FAQ;