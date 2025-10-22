import React, { useState } from "react";
import "./budget.css";

export default function Budget() {
  const [budget, setBudget] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [language, setLanguage] = useState("en");

  const texts = {
    en: {
      title: "Make Notes of Your Ideal Budget 💜",
      totalBudget: "Enter Total Monthly Budget (₹)",
      categoryTitle: "Set Spending Categories",
      lang: "Switch to Hindi",
      addCategory: "Add Category",
      placeholderCategory: "Category Name",
      overBudget: "⚠️ Budget Exceeded!",
      underBudget: "✅ Within Budget!",
      budgetLeft: "Remaining Budget",
    },
    hi: {
      title: "एआई वित्त ट्रैकर 💜",
      totalBudget: "कुल मासिक बजट दर्ज करें (₹)",
      categoryTitle: "खर्च श्रेणियाँ सेट करें",
      lang: "Switch to Kannada",
      addCategory: "श्रेणी जोड़ें",
      placeholderCategory: "श्रेणी का नाम",
      overBudget: "⚠️ बजट से अधिक खर्च!",
      underBudget: "✅ बजट के भीतर हैं!",
      budgetLeft: "बचा हुआ बजट",
    },
    kn: {
      title: "ಎಐ ಹಣಕಾಸು ಟ್ರ್ಯಾಕರ್ 💜",
      totalBudget: "ಒಟ್ಟು ಮಾಸಿಕ ಬಜೆಟ್ ನಮೂದಿಸಿ (₹)",
      categoryTitle: "ಖರ್ಚು ವರ್ಗಗಳನ್ನು ಸೆಟ್ ಮಾಡಿ",
      lang: "Switch to English",
      addCategory: "ವರ್ಗ ಸೇರಿಸಿ",
      placeholderCategory: "ವರ್ಗದ ಹೆಸರು",
      overBudget: "⚠️ ಬಜೆಟ್ ಮೀರಿ ಹೋಗಿದೆ!",
      underBudget: "✅ ಬಜೆಟ್ ಒಳಗೆ ಇದೆ!",
      budgetLeft: "ಉಳಿದ ಬಜೆಟ್",
    },
  };

  const handleCategoryChange = (index, value) => {
    const updated = [...categories];
    updated[index].amount = value;
    setCategories(updated);
  };

  const addCategory = () => {
    if (newCategory.trim() === "") return;
    setCategories([...categories, { name: newCategory, amount: "" }]);
    setNewCategory("");
  };

  const totalSpent = categories.reduce(
    (sum, c) => sum + Number(c.amount || 0),
    0
  );

  const isOverBudget = Number(budget) < totalSpent;

  return (
    <div className="budget-app">
      <div className="budget-sidebar">
        <button
          className="lang-btn"
          onClick={() =>
            setLanguage(language === "en" ? "hi" : language === "hi" ? "kn" : "en")
          }
        >
          {texts[language].lang}
        </button>

        <div className="add-category">
          <input
            type="text"
            placeholder={texts[language].placeholderCategory}
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={addCategory}>{texts[language].addCategory}</button>
        </div>
      </div>

      <div className="budget-content">
        <h1>{texts[language].title}</h1>

        <div className="input-section">
          <label>{texts[language].totalBudget}</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="₹ 20000"
          />
        </div>

        <h2>{texts[language].categoryTitle}</h2>

        <div className="categories">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <h3>{cat.name}</h3>
              <div className="input-wrapper">
                <span>₹</span>
                <input
                  type="number"
                  value={cat.amount}
                  onChange={(e) => handleCategoryChange(i, e.target.value)}
                  placeholder="0"
                />
              </div>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{
                    width: budget
                      ? `${Math.min((Number(cat.amount) / Number(budget)) * 100, 100)}%`
                      : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="result">
          {isOverBudget ? (
            <p className="alert over">{texts[language].overBudget}</p>
          ) : (
            <p className="alert under">{texts[language].underBudget}</p>
          )}
          {budget && (
            <p className="budget-left">
              {texts[language].budgetLeft}: ₹{Math.abs(Number(budget) - totalSpent)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
