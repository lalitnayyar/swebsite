'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type TopicCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  accent?: 'blue' | 'indigo' | 'emerald' | 'cyan';
  imageSrc?: string;
  imageAlt?: string;
};

const accents: Record<NonNullable<TopicCardProps['accent']>, { from: string; via: string; to: string }> = {
  blue: { from: 'from-blue-500/25', via: 'via-indigo-500/10', to: 'to-transparent' },
  indigo: { from: 'from-indigo-500/25', via: 'via-purple-500/10', to: 'to-transparent' },
  emerald: { from: 'from-emerald-500/22', via: 'via-teal-500/10', to: 'to-transparent' },
  cyan: { from: 'from-cyan-500/22', via: 'via-blue-500/10', to: 'to-transparent' }
};

export function TopicCard({ title, description, icon: Icon, accent = 'blue', imageSrc, imageAlt }: TopicCardProps) {
  const reduceMotion = useReducedMotion();
  const gradient = accents[accent];

  return (
    <motion.div
      className="group rounded-2xl border bg-background p-5 shadow-soft transition-shadow hover:shadow-glass"
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="relative overflow-hidden rounded-xl border bg-muted/20">
        {imageSrc ? (
          <div className="relative aspect-[16/9]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? `${title} visual`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to}`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_15%,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to}`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_15%,rgba(255,255,255,0.06),transparent_55%)]" />
          </>
        )}

        <motion.div
          className="relative flex items-center gap-3 p-4"
          animate={reduceMotion ? undefined : { x: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background/60 shadow-soft backdrop-blur">
            <Icon className="h-5 w-5 text-foreground/80" />
          </div>
          <div className="text-sm font-semibold tracking-tight">{title}</div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/0"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.22), transparent 55%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.18), transparent 55%)'
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />

      <div className="mt-3 text-xs text-muted-foreground">
        <span className="transition-colors group-hover:text-foreground">Explore capabilities</span>
      </div>
    </motion.div>
  );
}
