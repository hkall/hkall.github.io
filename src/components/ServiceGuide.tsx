import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ServiceGuide = () => {
  // Service steps data
  const serviceSteps = [
    {
      icon: 'fa-comments',
      title: 'Consultation',
      description: 'We start by understanding your goals, needs, and vision for the project.'
    },
    {
      icon: 'fa-pencil-ruler',
      title: 'Design',
      description: 'Our creative team develops concepts and designs tailored to your brand.'
    },
    {
      icon: 'fa-code',
      title: 'Development',
      description: 'We bring designs to life with cutting-edge technology and craftsmanship.'
    },
    {
      icon: 'fa-rocket',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support and optimization.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A quick and easy guide to using our service
          </h2>
          <p className="text-gray-600">
            Our streamlined process ensures a smooth experience from concept to completion, delivering exceptional results every time.
          </p>
          <div className="w-20 h-1 bg-purple-700 mx-auto mt-6 rounded-full"></div></motion.div>
        
        {/* Service steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-700 text-2xl group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid fa-${step.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGuide;