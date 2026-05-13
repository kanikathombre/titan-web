"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [signupsEnabled, setSignupsEnabled] = useState(true);

  const [jwtExpiry, setJwtExpiry] = useState(60);

  const [rateLimit, setRateLimit] = useState(100);

  const [webhookUrl, setWebhookUrl] = useState("");

  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    // Dummy frontend-only save simulation

    const config = {
      signupsEnabled,
      jwtExpiry,
      rateLimit,
      webhookUrl,
    };

    console.log("Sending config to /admin/config", config);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Admin Settings
        </h1>

        <p className="text-muted-foreground mt-1">
          Configure authentication, limits, and
          alert integrations.
        </p>
      </div>

      {/* Settings Card */}
      <div className="rounded-2xl border p-6 shadow-sm space-y-6">
        {/* Enable Signups */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">
                Enable Signups
              </h2>

              <p className="text-sm text-muted-foreground">
                Allow new users to create accounts on
                the platform.
              </p>
            </div>

            <button
              onClick={() =>
                setSignupsEnabled(!signupsEnabled)
              }
              className={`w-14 h-7 rounded-full transition relative ${
                signupsEnabled
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition ${
                  signupsEnabled
                    ? "left-7"
                    : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* JWT Expiry */}
        <div className="space-y-2">
          <label className="font-medium">
            Default JWT Expiry (minutes)
          </label>

          <input
            type="number"
            value={jwtExpiry}
            onChange={(e) =>
              setJwtExpiry(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

          <p className="text-sm text-muted-foreground">
            Defines how long authentication tokens stay
            valid before re-login is required.
          </p>
        </div>

        {/* Rate Limit */}
        <div className="space-y-2">
          <label className="font-medium">
            Rate Limit Per User
          </label>

          <input
            type="number"
            value={rateLimit}
            onChange={(e) =>
              setRateLimit(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

          <p className="text-sm text-muted-foreground">
            Maximum API requests allowed per user.
          </p>
        </div>

        {/* Webhook URL */}
        <div className="space-y-2">
          <label className="font-medium">
            Webhook URLs for Alerts
          </label>

          <textarea
            value={webhookUrl}
            onChange={(e) =>
              setWebhookUrl(e.target.value)
            }
            placeholder="https://example.com/webhook"
            className="w-full rounded-xl border p-3 min-h-[120px]"
          />

          <p className="text-sm text-muted-foreground">
            Receive system alerts and monitoring events
            through external webhooks.
          </p>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="rounded-xl bg-black text-white px-5 py-3 font-medium hover:opacity-90 transition"
          >
            Save Settings
          </button>

          {saved && (
            <p className="text-sm text-green-500">
              Settings saved successfully.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}