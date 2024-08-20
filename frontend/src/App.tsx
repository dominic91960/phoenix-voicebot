// Multi page app
// Routing enabled using react-router-dom library
// Authentication enabled using jwt libarary (JSON Web Token)
// Pages : login register home components features pastrecords livefeed
// Erropage included
// Chatbot controller
// Animations using animate on scroll library
// Animations using react slick and slick carousel

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import FeaturesPage from "./pages/FeaturesPage";
import PastRecordsPage from "./pages/PastRecordsPage";
import LiveFeedPage from "./pages/LiveFeedPage";
import NoPage from "./pages/NoPage";
import Controller from "./components/Controller";
import Voicebot from "./components/Voicebot";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const enableChatbot = (isEnabled: boolean) => {
    setIsLoggedIn(isEnabled);
  };
  const toggleChatbot = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl px-10 text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              index
              element={<HomePage enableFunction={enableChatbot} />}
            />
            <Route
              path="/home"
              element={<HomePage enableFunction={enableChatbot} />}
            />
            <Route
              path="/components"
              element={<ComponentsPage enableFunction={enableChatbot} />}
            />
            <Route
              path="/features"
              element={<FeaturesPage enableFunction={enableChatbot} />}
            />
            <Route
              path="/past-records"
              element={<PastRecordsPage enableFunction={enableChatbot} />}
            />
            <Route
              path="/live-feed"
              element={<LiveFeedPage enableFunction={enableChatbot} />}
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div
        className={`fixed right-0 top-0 z-10 h-full w-1/3 ${isShown ? "block animate-slide-left" : "hidden"}`}
      >
        <Controller toggleFunction={toggleChatbot} />
      </div>
      {isLoggedIn && (
        <Voicebot isVisible={isShown} toggleFunction={toggleChatbot} />
      )}
      <div className="h-[6px] rounded-lg bg-gradient-to-r from-primary to-white"></div>
    </>
  );
};

export default App;
