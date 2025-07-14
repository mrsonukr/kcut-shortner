"use client";

import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider';
import { URLShortener } from '@/components/url-shortener';
import { ThemeSelector } from '@/components/theme-selector';

export default function Home() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 transition-all duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative">
            <ThemeSelector />
            <URLShortener />
          </div>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}