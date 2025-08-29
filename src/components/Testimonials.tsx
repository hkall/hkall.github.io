import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director, TechVision',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=portrait%20of%20professional%20woman&sign=e422ad10f3f0f9e8c217841f5d845c0f',
      quote: 'Working with Mirage Creative Studio was a game-changer for our brand. Their creative approach and attention to detail transformed our digital presence and significantly increased customer engagement.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO, Global Innovations',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=portrait%20of%20professional%20man&sign=ba4dc88817d4204d0ed8c4bac22c4507',
      quote: 'The team at Mirage has an exceptional ability to understand client needs and translate them into stunning visual experiences. Their work exceeded our expectations on every level.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, StyleHaven',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=portrait%20of%20creative%20woman&sign=84c3a95bc793250b321b43389c9417f4',
      quote: 'Mirage Creative Studio brought our vision to life with incredible creativity and technical expertise. They truly care about their clients\' success and go above and beyond to deliver results.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find out how we've made a difference for others
          </h2>
          <p className="text-gray-600">
            Hear from our clients about their experiences working with Mirage Creative Studio and the impact our work has had on their businesses.
          </p>
          <div className="w-20 h-1 bg-purple-700 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 text-purple-700">
                <i className="fa-solid fa-quote-left text-3xl opacity-30"></i>
              </div>
              
              <p className="text-gray-600 italic mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;