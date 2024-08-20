import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Stars from "../components/Stars";
import bgCircles from "../assets/images/bg-circles.png";
import logo from "../assets/images/logo.png";
import "../assets/style/StarBackground.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (password != "") {
      password === matchPassword ? setIsDisabled(false) : setIsDisabled(true);
    } else {
      setIsDisabled(true);
    }
  }, [password, matchPassword]);

  const navigate = useNavigate();
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    }
  };

  return (
    <main>
      <Stars />
      <img
        src={bgCircles}
        alt="Blurred background"
        className="bg-height absolute right-0 top-0 -z-10"
      />
      <section className="login-register-height flex items-center justify-center">
        <form
          onSubmit={registerUser}
          className="flex flex-col items-center gap-5 rounded-lg bg-white bg-opacity-5 p-10 backdrop-blur-sm"
        >
          <div className="w-[400px]">
            <img src={logo} alt="Logo" className="h-auto w-fit" />
          </div>
          <h4 className="font-outfit text-3xl font-medium">
            Create an account
          </h4>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="&#9823; username"
            className="w-80 rounded-lg border border-white border-opacity-15 bg-secondary px-4 py-2 font-mono"
            required
          />
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
          <input
            type="password"
            placeholder="&#9998; confirm password"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            className="w-80 rounded-lg border border-white border-opacity-15 bg-secondary px-4 py-2 font-mono"
            required
          />
          <button
            type="submit"
            className={`rounded-lg bg-primary px-4 py-2 ${isDisabled ? "opacity-10" : "transition-transform duration-300 hover:scale-105"}`}
            disabled={isDisabled}
          >
            Sign Up
          </button>
          <p>
            Have an account already? &#160;
            <a href="/login" className="text-primary hover:opacity-70">
              Sign In
            </a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
