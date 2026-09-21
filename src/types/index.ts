export interface NavItem {
  number?: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}
