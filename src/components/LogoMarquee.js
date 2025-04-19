import React from "react";
import "./LogoMarquee.css";

// Testimonial component
const Testimonial = ({ avatar, name, handle, text }) => (
  <div className="testimonial-item">
    <div className="testimonial-content">
      <div className="testimonial-top">
        <div className="testimonial-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="testimonial-author">
          <h3>{name}</h3>
          <span className="testimonial-handle">{handle}</span>
        </div>
      </div>
      <p className="testimonial-text">{text}</p>
    </div>
  </div>
);

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    handle: '@sarahtech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    text: 'The AI-driven analytics have completely transformed our decision-making process. We can now identify trends in real-time.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    handle: '@mchen_dev',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'Implementation was seamless. Our team was up and running in days, not weeks. The ROI has been incredible.'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    handle: '@aishacodes',
    avatar: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=150&h=150&fit=crop&crop=face',
    text: 'The natural language processing capabilities are mind-blowing. It understands context better than any other tool we\'ve used.'
  },
  {
    id: 4,
    name: 'James Wilson',
    handle: '@jwilsonai',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
    text: 'Customer support is exceptional. Any questions we had were answered promptly and thoroughly.'
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    handle: '@elenatech',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
    text: 'The API documentation is the most comprehensive I\'ve seen. Integration with our existing systems was straightforward.'
  },
  {
    id: 6,
    name: 'Thomas Wright',
    handle: '@tomwright',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'Security features are top-notch. As a financial institution, this was our primary concern and they exceeded expectations.'
  }
];

/**
 * Horizontal testimonial marquee component
 * @returns {JSX.Element} TestimonialMarquee component
 */
const TestimonialMarquee = () => {
  // Duplicate testimonials for a continuous effect
  const allTestimonials = [...testimonials, ...testimonials];
  
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2>Testimonial Marquee Component</h2>
        <p>A React component with vanilla CSS and JS by Alexander 🧑‍💻</p>
      </div>
      <div className="horizontal-marquee-container">
        <div className="horizontal-marquee">
          <div className="horizontal-marquee-content">
            {allTestimonials.map((testimonial, index) => (
              <Testimonial 
                key={`${testimonial.id}-${index}`} 
                name={testimonial.name}
                handle={testimonial.handle}
                avatar={testimonial.avatar}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
        <div className="fade-overlay fade-left"></div>
        <div className="fade-overlay fade-right"></div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
