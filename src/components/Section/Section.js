import React from 'react';

const Section = ({ title, children }) => (
  <section>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

export default Section;
