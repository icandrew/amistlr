'use client';

// External libraries
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { CardDemoProps } from '@/components/cards-demo-3';

// Internal components (dynamically loaded with no SSR to avoid server-side rendering issues)
const HeroAurora = dynamic(() => import('@/components/HeroAurora'), { ssr: false });
const ScrollBasedVelocityDemo = dynamic(() => import('@/components/ScrollBasedVelocityDemo').then(mod => ({ default: mod.ScrollBasedVelocityDemo })), { ssr: false });
const DockDemo = dynamic(() => import('@/components/DockDemo').then(mod => ({ default: mod.DockDemo })), { ssr: false });
const TimelineDemo = dynamic(() => import('@/components/timeline-demo').then(mod => ({ default: mod.TimelineDemo })), { ssr: false });
const FeaturesSectionDemo = dynamic(() => import('@/components/FeaturesSectionDemo').then(mod => ({ default: mod.FeaturesSectionDemo })), { ssr: false });

const cardGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [CardDemoComponents, setCardDemoComponents] = useState<{
    cardDemoData: CardDemoProps[];
    CardDemo: (props: CardDemoProps) => React.ReactElement;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    // Dynamically load CardDemo data/component
    import('@/components/cards-demo-3').then((mod) => {
      setCardDemoComponents({
        cardDemoData: mod.cardDemoData,
        CardDemo: mod.CardDemo,
      });
    });
  }, []);

  if (!mounted || !CardDemoComponents) return null;

  const { cardDemoData, CardDemo } = CardDemoComponents;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-8 pb-16 gap-8 sm:px-5 sm:py-16 sm:pb-20 md:gap-12 md:px-5 md:py-20 font-[family-name:var(--font-geist-sans)] bg-background">
        <section className="w-full flex items-center justify-center min-h-[100dvh] px-6 pt-8 pb-0 sm:pt-12 sm:pb-0 md:mt-16">
          <HeroAurora />
        </section>

        <div className="block md:hidden" style={{ minHeight: '40vh' }} />

        <section className="w-full px-6 mt-0 sm:mt-12 md:mt-16">
          <motion.div
            variants={cardGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center"
          >
            {cardDemoData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-full h-[300px] md:h-[320px] lg:h-[400px]"
              >
                <CardDemo
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <ScrollBasedVelocityDemo />
        </section>

        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <FeaturesSectionDemo />
        </section>

        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <TimelineDemo />
        </section>
      </div>

      <DockDemo />
    </>
  );
}
