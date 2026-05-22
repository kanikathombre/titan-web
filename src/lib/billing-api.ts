import axios from "axios";

const API =
  process.env
    .NEXT_PUBLIC_API_URL;

export const billingApi =
  axios.create({
    baseURL: `${API}/api/v1`,
  });

billingApi.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem(
        "nanotoxi_token"
      );

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export async function getBilling() {

  const res =
    await billingApi.get(
      "/billing"
    );

  return res.data;
}

export async function createCheckout(
  plan_id: string
) {

  const res =
    await billingApi.post(
      "/stripe/checkout",
      {
        plan_id,
      }
    );

  return res.data;
}

export async function cancelPlan() {

  const res =
    await billingApi.post(
      "/billing/cancel"
    );

  return res.data;
}

export async function resumePlan() {

  const res =
    await billingApi.post(
      "/billing/resume"
    );

  return res.data;
}