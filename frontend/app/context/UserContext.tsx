"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  email: string;
  role?: string;
  bio?: string;
  avatar?: string;
}

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Lakshmi",
    email: "lakshmi@example.com",
    role: "Student / Developer",
    bio: "Learning, building and growing with Brilligo.",
    avatar: "",
  });

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
}
