import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const CommitmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Team discussing project"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-700 rounded-lg rotate-12 flex items-center justify-center shadow-lg">
              <div className="text-center text-white transform -rotate-12">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
              <div className="w-16 h-1 bg-purple-700 mb-6 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 mb-4">
              At Mirage Creative Studio, we are dedicated to delivering exceptional quality in every project we undertake. Our commitment to excellence is reflected in our meticulous attention to detail, innovative approach, and unwavering focus on client satisfaction.
            </p>
            
            <p className="text-gray-600 mb-6">
              We believe that great design should not only look beautiful but also serve a purpose. Our team of creative professionals works tirelessly to ensure that every solution we provide meets the highest standards of quality and effectiveness.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-purple-700"></i>
                <span className="text-gray-700">Quality craftsmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-purple-700"></i>
                <span className="text-gray-700">Client-focused solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-purple-700"></i>
                <span className="text-gray-700">Innovative approaches</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-purple-700"></i>
                <span className="text-gray-700">Timely delivery</span>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-purple-700 pl-4 italic text-gray-600">
              "Excellence is not a skill, it's an attitude." We bring this mindset to every project, ensuring that our work exceeds expectations and creates lasting value for our clients.
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;