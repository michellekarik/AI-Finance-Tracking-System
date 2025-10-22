import React, { useState } from "react";
import { DollarSign, LogOut } from "lucide-react";
import "./FinanceApp.css";
import Budget from "./budget";
import TransactionsPage from "./transactions-page";

export default function FinanceApp() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email && password) setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setEmail("");
    setPassword("");
    setActiveTab("home");
  };

  if (!isSignedIn) {
    return (
      <div className="app-container">
        <div className="signin-box">
          <div>
            <DollarSign size={32} color="#4f46e5" />
          </div>
          <h1>Finance Tracker</h1>
          <p>Sign in to manage your finances</p>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    );
  }

  const tabs = ["home", "budget", "transactions", "chatbot"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "budget":
        return <Budget />;
      case "transactions":
        return <TransactionsPage />;  
      default:
        return (
          <div className="card">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p>Content for the {activeTab} tab goes here.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <nav className="navbar">
        <span>
          <DollarSign size={24} color="#4f46e5" /> Finance Tracker
        </span>
        <button onClick={handleSignOut}>
          <LogOut size={16} /> Sign Out
        </button>
      </nav>

      <div className="finance-layout">
        <aside className="sidebar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </aside>

        <main className="main-content">{renderTabContent()}</main>
      </div>
    </div>
  );
}
