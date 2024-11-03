import React from 'react';
import { useSession } from 'next-auth/react';

const FREE_TEMPLATES = [
  {
    id: 1,
    name: 'Portfolio Basic',
    description: 'Clean and minimal portfolio template',
    thumbnail: '/templates/portfolio-basic.jpg',
    isFree: true,
  },
  {
    id: 2,
    name: 'Business Landing',
    description: 'Professional business landing page',
    thumbnail: '/templates/business-landing.jpg',
    isFree: true,
  },
  {
    id: 3,
    name: 'Blog Standard',
    description: 'Classic blog layout with modern design',
    thumbnail: '/templates/blog-standard.jpg',
    isFree: true,
  }
];

export default function TemplateGrid() {
  const { data: session } = useSession();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Your Free Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FREE_TEMPLATES.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={template.thumbnail} 
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = `/editor/${template.id}`}
              >
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 