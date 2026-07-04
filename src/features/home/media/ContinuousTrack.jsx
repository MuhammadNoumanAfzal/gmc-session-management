import { motion } from 'framer-motion'

function ContinuousTrack({ children, duration = 22, direction = 'left' }) {
  const animationX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: animationX }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ContinuousTrack
