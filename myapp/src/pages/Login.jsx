import React, { useState } from "react";
import { api } from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, password });

      if (response.data.success) {
        alert("Login successful!");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-slate-100">
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Вход</h1>

      {error && <div className="mb-3 text-red-500">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          className="w-full border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Войти
        </button>
      </form>
    </div>
  </div>
);
}

export default Login;