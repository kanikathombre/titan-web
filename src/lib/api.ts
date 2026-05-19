import axios from "axios";

import Cookies from "cookies-next";

import type {
  LoginCredentials,
  LoginResponse,
  PredictionInput,
  PredictionResponse,
  HealthResponse,
} from "./types";

const apiClient = axios.create({

  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-Type":
      "application/json",
  },

  withCredentials: true,
});

/* Attach JWT */
apiClient.interceptors.request.use(
  (config) => {

    const token =
      Cookies.getCookie("token");

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

/* Handle Unauthorized */
apiClient.interceptors.response.use(
  (response) => response,

  (error) => {

    if (
      error.response?.status === 401
    ) {

      window.location.href =
        "/sign-in";
    }

    return Promise.reject(error);
  }
);

export const api = {

  async health():
    Promise<HealthResponse> {

    const response =
      await apiClient.get(
        "/api/health"
      );

    return response.data;
  },

  async login(
    creds: LoginCredentials
  ): Promise<LoginResponse> {

    const response =
      await apiClient.post(
        "/api/v1/auth/login",
        creds
      );

    /* SAVE JWT */
    Cookies.setCookie(
      "token",
      response.data.access_token
    );

    return response.data;
  },

  async predict(
    input: PredictionInput
  ): Promise<PredictionResponse> {

    const response =
      await apiClient.post(
        "/api/v1/predict",
        input
      );

    return response.data;
  },
};