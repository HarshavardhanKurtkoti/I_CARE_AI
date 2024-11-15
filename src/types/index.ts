export interface EyeCondition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  severity: 'mild' | 'moderate' | 'severe';
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedConditions: string[];
  diagnosticHistory: DiagnosticResult[];
}

export interface DiagnosticResult {
  id: string;
  date: string;
  condition: string;
  confidence: number;
  notes?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType;
}