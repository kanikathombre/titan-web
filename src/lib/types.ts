export interface LoginCredentials {

  email: string;

  password: string;
}

/* REAL BACKEND LOGIN RESPONSE */
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

/* SIGNUP */
export interface SignupPayload {

  email: string;

  name: string;

  password: string;
}

export interface SignupResponse {

  id: string;

  email: string;

  name: string;

  role: string;

  is_email_verified: boolean;

  created_at: string;
}

/* PREDICTION INPUT */
/* TEMPORARY until senior gives actual predict schema */
export interface PredictionInput {

  nanoparticle: string;

  shape: string;

  size_nm: number;

  dosage: number;

  exposure_time: number;

  surface_charge: number;

  cell_viability: number;

  cell_line: string;

  ph: number;

  coating?: string;
}

export interface PredictionResponse {

  prediction: "Toxic" | "Safe";

  confidence: number;

  risk_level?: string;

  recommendations?: string[];
}

/* HEALTH */
export interface HealthResponse {

  status: string;
}