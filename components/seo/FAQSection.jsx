import React from "react";
import { FiHelpCircle } from "react-icons/fi";

export default function FAQSection({ faqs, cityName, serviceName }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Frequently Asked Questions</span>
        <h2 className="seo-section-title">Questions About {serviceName} in {cityName}</h2>
      </div>

      <div className="seo-faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="seo-faq-item">
            <div className="seo-faq-question">
              <FiHelpCircle className="seo-faq-question-icon" />
              <span>{faq.question}</span>
            </div>
            <p className="seo-faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
