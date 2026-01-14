import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}