
import React from 'react';

// Use props to make this component reusable for different content
function ContentSection({ title, children, className = '' }) {
  return (
    <section className={`content-section ${className}`}>
      <h2>{title}</h2>
      <div>
        {children} 
      </div>
    </section>
  );
}

export default ContentSection;