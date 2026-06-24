export interface HeadlineOption {
  id: number;
  text: string;
  highlightedParts: {
    text: string;
    color: 'amarelo' | 'verde' | 'normal';
  }[];
  neuromarketingFocus: string;
}

export interface SubheadlineOption {
  id: number;
  text: string;
  focus: string;
}

export interface CtaOption {
  id: number;
  text: string;
  urgencyLevel: 'alta' | 'média' | 'foco-benefício';
}

export interface Benefit {
  iconName: string;
  title: string;
  description: string;
}

export interface WhatYouReceiveItem {
  id: number;
  title: string;
  description?: string;
  features: string[];
  badge: string;
  footerLabel: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
  rating: number;
  result: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface SecondaryBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

