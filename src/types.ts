export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  cta: string;
  colorScheme: string;
}

export type FeatureTab = 'Chat' | 'Idea' | 'Narration';

export interface SimulatedApp {
  id: string;
  name: string;
  prompt: string;
  category: string;
  accent: string;
  previewType: 'dashboard' | 'ledger' | 'planner' | 'social';
}
