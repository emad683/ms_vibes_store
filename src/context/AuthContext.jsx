import { createContext, useContext, useState, useEffect } from 'react';

/*
 * ⚠️ DEMO-ONLY AUTH (no backend yet)
 * Accounts are stored in this browser's localStorage, with passwords SHA-256 hashed.
 * This is NOT secure for production — replace register/login with real API calls
 * (server-side hashing with bcrypt/argon2 + HTTP-only session cookies) before launch.
 */

const AuthContext = createContext();

const USERS_KEY = 'ms_vibes_users';
const SESSION_KEY = 'ms_vibes_session';

async function hashPassword(password) {
  const data = new TextEncoder().encode(`ms-vibes::${password}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  } catch {
    return {};
  }
}

export function normalizeIdentifier(method, value) {
  const v = value.trim();
  return method === 'email' ? v.toLowerCase() : v.replace(/\s|-/g, '');
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      else localStorage.removeItem(SESSION_KEY);
    } catch {
      // Ignore storage errors
    }
  }, [user]);

  const register = async ({ name, method, identifier, password }) => {
    const id = normalizeIdentifier(method, identifier);
    const users = readUsers();
    if (users[id]) {
      throw new Error(
        method === 'email'
          ? 'الإيميل ده مسجّل قبل كده، جرّب تسجّل دخول.'
          : 'الرقم ده مسجّل قبل كده، جرّب تسجّل دخول.'
      );
    }
    users[id] = {
      name: name.trim(),
      method,
      passHash: await hashPassword(password),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ name: name.trim(), method, identifier: id });
  };

  const login = async ({ method, identifier, password }) => {
    const id = normalizeIdentifier(method, identifier);
    const record = readUsers()[id];
    if (!record || record.passHash !== (await hashPassword(password))) {
      throw new Error('البيانات غلط — اتأكد من الرقم/الإيميل والباسورد.');
    }
    setUser({ name: record.name, method: record.method, identifier: id });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
