import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ src, alt, className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // La imagen aparecerá cuando al menos el 50% de ella esté en el viewport
    triggerOnce: true, // La animación solo se reproducirá una vez cuando la imagen se haga visible
  });

  return (
    <div ref={ref}>
      <motion.img
      className={className}
        src={src}
        alt={alt}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export { ScrollAnimation}