"use client";

import { useState } from "react";

function RegisterContainer() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Sign up işlemi için backend'e istekte bulunabilirsiniz
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      console.log("User signed up successfully");
    } else {
      console.error("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Kullanıcı Adı:
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
        />
      </label>
      <label>
        Şifre:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default RegisterContainer;
