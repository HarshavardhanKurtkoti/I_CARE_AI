import { create } from 'zustand';
import type { EyeCondition, User, DiagnosticResult } from '../types';

interface AppState {
  selectedCondition: EyeCondition | null;
  user: User | null;
  diagnosticHistory: DiagnosticResult[];
  setSelectedCondition: (condition: EyeCondition | null) => void;
  setUser: (user: User | null) => void;
  addDiagnosticResult: (result: DiagnosticResult) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedCondition: null,
  user: null,
  diagnosticHistory: [],
  setSelectedCondition: (condition) => set({ selectedCondition: condition }),
  setUser: (user) => set({ user }),
  addDiagnosticResult: (result) =>
    set((state) => ({
      diagnosticHistory: [...state.diagnosticHistory, result],
    })),
}));