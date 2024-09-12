'use client';

import React, { useState } from 'react';

import FAQAccordion from './FAQAccordion';

const data = [
  {
    id: 1,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 2,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 3,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 4,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 5,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 6,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
  {
    id: 7,
    question:
      'What is the best thing you can do to leverage the minimal resource and make something new?',
    answer:
      'Welcome to our inquisitive insights corner! Here, we address the most curious and common questions posed by our visitors, potential clients, and collaborators. Dive into a reservior of knowledge and discover the answers you seek about our services, practices and more.',
  },
];

const FAQMain = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className='flex w-full flex-col gap-[18px] px-6 py-14 lg:px-16 lg:py-20 xl:px-[150px] xl:py-[100px]'>
      {data.map((item, index) => (
        <FAQAccordion
          key={item.id}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQMain;
