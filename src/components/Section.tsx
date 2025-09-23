import { motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import clsx from 'classnames';

type Props = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export default function Section({ id, className, children }: Props) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id={id} className={clsx('container mx-auto px-4 py-16', className)}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

