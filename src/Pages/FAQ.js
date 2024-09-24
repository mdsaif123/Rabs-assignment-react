import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage the active question

  const faqData = [
    {
      question: "What is the purpose of this site?",
      answer: "This site is designed to provide information about our services and founders.",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support via email at support@example.com.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including web development, digital marketing, and consulting.",
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the 'Sign Up' button on the homepage.",
    },
    {
        question: "What is the purpose of this site?",
        answer: "This site is designed to provide information about our services and founders.",
      },
      {
        question: "How can I contact support?",
        answer: "You can contact support via email at support@example.com.",
      },
      {
        question: "What services do you offer?",
        answer: "We offer a range of services including web development, digital marketing, and consulting.",
      },
      {
        question: "How do I sign up?",
        answer: "You can sign up by clicking the 'Sign Up' button on the homepage.",
      },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <div className="faq-container pt-4 pb-4">
      <h1 className="text-center text-white pt-4 ">Frequently Asked Questions</h1>
      <div className="row">
        {faqData.map((item, index) => (
          <div key={index} className="col-md-6"> {/* Dividing into 2 columns */}
            <div className="faq-item">
              <h5
                className="faq-title text-white" 
                onClick={() => handleToggle(index)} 
                style={{ cursor: 'pointer', margin: '10px 0' }}
              >
                Q.{item.question}
              </h5>
              {activeIndex === index && <p className="faq-description text-white">{item.answer}</p>} {/* Show answer if active */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
