export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  passwordHash: string;
}

export enum PaymentMethod {
  Cash = 'Cash',
  GPay = 'GPay',
}

export interface Sale {
  id: string;
  serviceName: string;
  qty: number;
  rate: number;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  date: string; // ISO string
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string; // ISO string
}

export interface BikeService {
  id: string;
  customerName: string;
  phone?: string;
  bikeNumber: string;
  serviceDetails: string;
  serviceCost: number;
  paymentMethod: PaymentMethod;
  date: string; // ISO string
  linkedSaleId?: string;
}

// FIX: Add BikeSpec interface to resolve import error in pages/Settings.tsx
export interface BikeSpec {
  id: string;
  brand: string;
  model: string;
  engineCC: number;
  mileage: number;
  price: number;
}

export interface ProfitLossSummary {
  salesCash: number;
  salesGPay: number;
  totalSales: number;
  totalExpenses: number;
  netProfit: number;
}

export interface DashboardData extends ProfitLossSummary {
    dailyProfit: { date: string; profit: number }[];
}

export type DateFilterOption = 'today' | 'this_week' | 'this_month' | 'custom';