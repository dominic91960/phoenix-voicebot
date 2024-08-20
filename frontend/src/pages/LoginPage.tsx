import { useState } from "react";

import Stars from "../components/Stars";
import bgCircles from "../assets/images/bg-circles.png";
import logo from "../assets/images/logo.png";
import "../assets/style/StarBackground.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      window.location.href = "/home";
    } else {
      alert("Please check your username and password");
    }
    console.log(data);
  };

  return (
    <main>
      <Stars />
      <img
        src={bgCircles}
        alt="Blurred background"
        className="bg-height absolute right-0 top-0 -z-10"
      />
      <section className="login-register-height flex items-center justify-center py-10">
        <form
          onSubmit={loginUser}
          className="flex flex-col items-center gap-5 rounded-lg bg-white bg-opacity-5 p-10 backdrop-blur-sm"
        >
          <div className="w-[400px]">
            <img src={logo} alt="Logo" className="h-auto w-fit" />
          </div>
          <h4 className="font-outfit text-3xl font-medium">Welcome Back</h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="&#9993; email"
            className="w-80 rounded-lg border border-white border-opacity-15 bg-secondary px-4 py-2 font-mono"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="&#9998; password"
            className="w-80 rounded-lg border border-white border-opacity-15 bg-secondary px-4 py-2 font-mono"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 transition-transform duration-300 hover:scale-105"
          >
            Sign In
          </button>
          <p>
            Don't have an account? &#160;
            <a href="/register" className="text-primary hover:opacity-70">
              Sign Up
            </a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
