export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface PredictionInput {
  age: number;
  tumorSize: number;
  glucoseLevel: number;
}

export interface PredictionResponse {
  prediction: string;
  confidence: number;
}

export interface HealthResponse {
  status: string;
}