import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';

export default function Testimonials() {
  if (!testimonials.length) {
    console.warn('No testimonials found');
    return null;
  }

  return (
    <div>
      <h2 className="section-title">Client Reviews & Achievements</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="glass p-6 rounded-2xl flex flex-col h-full transition-transform hover:scale-[1.02]"
          >
            <div className="flex justify-center mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.platform}
                className="h-24 object-contain"
              />
            </div>
            <blockquote className="text-lg text-center text-slate-700 dark:text-slate-200 mb-4 flex-grow">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-center text-lg font-semibold text-primary">
              {testimonial.platform}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
