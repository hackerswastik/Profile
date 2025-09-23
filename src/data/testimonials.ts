export type Testimonial = {
  platform: string;
  image: string;
  quote: string;
  author?: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    platform: 'Upwork',
    image: '/assets/Upworkreview.png',
    quote: 'Exceptional work with our data pipeline project. Deep expertise in Spark and data engineering.',
    rating: 5
  },
  {
    platform: 'Topmate Teaching',
    image: '/assets/topmateTeachingReview.png',
    quote: 'Outstanding mentor for backend development. Clear explanations and practical insights.',
    rating: 5
  },
  {
    platform: 'Topmate Reviews',
    image: '/assets/topmatereview.png',
    quote: 'Invaluable guidance on system design and architecture. Highly recommended!',
    rating: 5
  },
  {
    platform: '100% Job Success',
    image: '/assets/100jobsuccess.png',
    quote: 'Maintained perfect job success score through consistent high-quality deliveries.',
    rating: 5
  },
  {
    platform: 'Teaching Excellence',
    image: '/assets/teachingreview.png',
    quote: 'Excellent teacher with deep technical knowledge. Made complex concepts easy to understand.',
    rating: 5
  },
  {
    platform: 'Client Satisfaction',
    image: '/assets/topmate1.png',
    quote: 'Top-notch consulting session on data engineering and cloud architecture.',
    rating: 5
  }
];

