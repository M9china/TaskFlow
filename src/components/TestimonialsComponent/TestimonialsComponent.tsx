import React, { useState } from 'react';

import { TestamonialsProps } from './TestimonialsDto';

interface PersonData {
  name: string;
  image: string;
  statement: string;
}

export const TestimonialComponent: React.FC<TestamonialsProps> = ({}) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const personData: PersonData[] = [
    { name: 'John', image: 'client1.png', statement: 'Hello, I love programming!' },
    { name: 'Alice', image: 'client2.png', statement: 'I enjoy learning new things!' },
    { name: 'Nqobile', image: 'client3.png', statement: 'Madlebe' },
    
  ];

  const displayImageAndStatement = (name: string) => {
    const person = personData.find((person) => person.name === name);
    if (person) {
      setSelectedName(person.name);
    } else {
      setSelectedName(null);
    }
  };

  return (
    <div className="Testimonial">
      <h1>Image and Statement Viewer</h1>
      <div className="name-list">
        {personData.map((person) => (
          <button key={person.name} onClick={() => displayImageAndStatement(person.name)}>
            {person.name}
          </button>
        ))}
      </div>
      <div className="image-display">
        {selectedName && (
          <>
            <img src={selectedName + '.png'} alt={selectedName} />
            <p>{selectedName}: {personData.find((person) => person.name === selectedName)?.statement}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialComponent;
