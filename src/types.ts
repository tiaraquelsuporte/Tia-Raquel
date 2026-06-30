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

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

