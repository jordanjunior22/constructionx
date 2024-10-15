import React from 'react';
import Button from './ui/BlackButton';
import AccordionItem from './ui/AccordionItem'; // Import the AccordionItem component
import linesImage from '../public/lines.png'; // Import the PNG image

function Faqs() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking link sent to your email."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
  ];

  return (
    <div className='bg-background lg:px-40 md:py-10 px-5 py-5 gap-10 flex flex-col relative'>
      <div 
        className='bg-foreground md:p-20 p-4 flex flex-col items-center lg:flex-row relative'
        style={{
          backgroundImage: `url(${linesImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // Adjust size as needed
          position: 'relative',
        }}
      >
        <div className="flex-1 relative z-10"> {/* Ensures content is above the image */}
          <h2 className='md:text-[40px] text-[20px] font-bold leading-tight text-black'>
            EXPLORE SOME OF OUR FAQs
          </h2>
          <Button text='Contact Us' href='/contact-us' className='mt-4'/>
        </div>
        <div className="flex-1 mt-5 lg:mt-0 relative z-10"> {/* Ensures content is above the image */}
          {/* Accordion */}
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
