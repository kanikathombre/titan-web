"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthResponse {
  user: User | null;
  isExpired: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/me");

        const data: AuthResponse = await response.json();

        setUser(data.user);
        setIsExpired(data.isExpired);
      } catch {
        setUser(null);
        setIsExpired(true);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  const isLoggedIn = !!user && !isExpired;
  const hasAccess = isLoggedIn;

  return {
    user,
    isExpired,
    isLoggedIn,
    hasAccess,
    loading,
  };
}