'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type HeroVisualProps = {
  imageSrc: string;
  imageAlt: string;
};

export function HeroVisual({ imageSrc, imageAlt }: HeroVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-background/60 shadow-glass backdrop-blur">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(37,99,235,0.30),transparent_55%),radial-gradient(700px_circle_at_80%_10%,rgba(99,102,241,0.22),transparent_55%)]" />

        {reduceMotion ? null : (
          <motion.div
            aria-hidden="true"
            className="absolute -inset-24 opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, rgba(37,99,235,0.0), rgba(37,99,235,0.22), rgba(99,102,241,0.18), rgba(34,197,94,0.10), rgba(37,99,235,0.0))'
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />
      </div>

      <div className="border-t bg-muted/20 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-sm font-medium">Engagement-ready delivery</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Architecture, implementation, and governance patterns aligned with enterprise constraints.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium">Secure by design</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Data protection, evaluation, and observability built into every solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
