import React, { useState } from 'react';
import { Plus, Home, DollarSign, MessageCircle, X, Moon, Sun, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function TransactionsPage() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2024-09-09');
  const [endDate, setEndDate] = useState('2024-09-15');
  const [activeFilter, setActiveFilter] = useState('All');
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en', 'hi', 'kn'
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    refId: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    type: 'Income',
    amount: ''
  });

  const [errors, setErrors] = useState({});

  // Translations
  const translations = {
    en: {
      transactions: 'Transactions',
      home: 'Home',
      budget: 'Budget',
      chatbot: 'Chatbot',
      balance: 'Balance',
      savings: 'Savings',
      incomes: 'Incomes',
      expenses: 'Expenses',
      addTransaction: 'Add Transaction',
      all: 'All',
      income: 'Income',
      expense: 'Expense',
      refId: 'Ref ID',
      date: 'Date',
      description: 'Description',
      type: 'Type',
      amount: 'Amount',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',
      noTransactions: 'No transactions found',
      clickToAdd: 'Click "Add Transaction" to create your first transaction',
      editTransaction: 'Edit Transaction',
      cancel: 'Cancel',
      update: 'Update',
      add: 'Add',
      deleteConfirm: 'Delete Transaction',
      deleteMessage: 'Are you sure you want to delete this transaction? This action cannot be undone.',
      referenceId: 'Reference ID',
      descriptionPlaceholder: 'Enter transaction description',
      required: 'required',
      descriptionRequired: 'Description is required',
      amountGreater: 'Amount must be greater than 0',
      dateRequired: 'Date is required'
    },
    hi: {
      transactions: 'लेनदेन',
      home: 'होम',
      budget: 'बजट',
      chatbot: 'चैटबॉट',
      balance: 'शेष राशि',
      savings: 'बचत',
      incomes: 'आय',
      expenses: 'खर्च',
      addTransaction: 'लेनदेन जोड़ें',
      all: 'सभी',
      income: 'आय',
      expense: 'खर्च',
      refId: 'संदर्भ आईडी',
      date: 'तारीख',
      description: 'विवरण',
      type: 'प्रकार',
      amount: 'राशि',
      actions: 'कार्रवाई',
      edit: 'संपादित करें',
      delete: 'हटाएं',
      noTransactions: 'कोई लेनदेन नहीं मिला',
      clickToAdd: 'अपना पहला लेनदेन बनाने के लिए "लेनदेन जोड़ें" पर क्लिक करें',
      editTransaction: 'लेनदेन संपादित करें',
      cancel: 'रद्द करें',
      update: 'अपडेट करें',
      add: 'जोड़ें',
      deleteConfirm: 'लेनदेन हटाएं',
      deleteMessage: 'क्या आप वाकई इस लेनदेन को हटाना चाहते हैं? यह कार्रवाई पूर्ववत नहीं की जा सकती।',
      referenceId: 'संदर्भ आईडी',
      descriptionPlaceholder: 'लेनदेन विवरण दर्ज करें',
      required: 'आवश्यक',
      descriptionRequired: 'विवरण आवश्यक है',
      amountGreater: 'राशि 0 से अधिक होनी चाहिए',
      dateRequired: 'तारीख आवश्यक है'
    },
    kn: {
      transactions: 'ವಹಿವಾಟುಗಳು',
      home: 'ಮುಖಪುಟ',
      budget: 'ಬಜೆಟ್',
      chatbot: 'ಚಾಟ್‌ಬಾಟ್',
      balance: 'ಬಾಕಿ',
      savings: 'ಉಳಿತಾಯ',
      incomes: 'ಆದಾಯ',
      expenses: 'ವೆಚ್ಚಗಳು',
      addTransaction: 'ವಹಿವಾಟು ಸೇರಿಸಿ',
      all: 'ಎಲ್ಲಾ',
      income: 'ಆದಾಯ',
      expense: 'ವೆಚ್ಚ',
      refId: 'ಉಲ್ಲೇಖ ಐಡಿ',
      date: 'ದಿನಾಂಕ',
      description: 'ವಿವರಣೆ',
      type: 'ಪ್ರಕಾರ',
      amount: 'ಮೊತ್ತ',
      actions: 'ಕ್ರಿಯೆಗಳು',
      edit: 'ಸಂಪಾದಿಸಿ',
      delete: 'ಅಳಿಸಿ',
      noTransactions: 'ಯಾವುದೇ ವಹಿವಾಟುಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
      clickToAdd: 'ನಿಮ್ಮ ಮೊದಲ ವಹಿವಾಟು ರಚಿಸಲು "ವಹಿವಾಟು ಸೇರಿಸಿ" ಕ್ಲಿಕ್ ಮಾಡಿ',
      editTransaction: 'ವಹಿವಾಟು ಸಂಪಾದಿಸಿ',
      cancel: 'ರದ್ದುಮಾಡಿ',
      update: 'ನವೀಕರಿಸಿ',
      add: 'ಸೇರಿಸಿ',
      deleteConfirm: 'ವಹಿವಾಟು ಅಳಿಸಿ',
      deleteMessage: 'ನೀವು ಖಚಿತವಾಗಿ ಈ ವಹಿವಾಟು ಅಳಿಸಲು ಬಯಸುವಿರಾ? ಈ ಕ್ರಿಯೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ.',
      referenceId: 'ಉಲ್ಲೇಖ ಐಡಿ',
      descriptionPlaceholder: 'ವಹಿವಾಟು ವಿವರಣೆಯನ್ನು ನಮೂದಿಸಿ',
      required: 'ಅಗತ್ಯವಿದೆ',
      descriptionRequired: 'ವಿವರಣೆ ಅಗತ್ಯವಿದೆ',
      amountGreater: 'ಮೊತ್ತ 0 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರಬೇಕು',
      dateRequired: 'ದಿನಾಂಕ ಅಗತ್ಯವಿದೆ'
    }
  };

  const t = translations[language];

  // Calculate stats based on transactions
  const calculateStats = () => {
    const incomes = transactions
      .filter(t => t.type === 'Income')
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    
    const expenses = transactions
      .filter(t => t.type === 'Expense')
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    
    const balance = incomes - expenses;
    const savings = balance * 0.2;

    return {
      balance: balance.toFixed(2),
      savings: savings.toFixed(2),
      incomes: incomes.toFixed(2),
      expenses: expenses.toFixed(2)
    };
  };

  const stats = calculateStats();

  // Generate unique reference ID
  const generateRefId = () => {
    return 'TXN' + Date.now().toString().slice(-8);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.description.trim()) {
      newErrors.description = t.descriptionRequired;
    }
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = t.amountGreater;
    }
    
    if (!formData.date) {
      newErrors.date = t.dateRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Open modal for adding
  const openAddModal = () => {
    setEditingTransaction(null);
    setFormData({
      refId: generateRefId(),
      date: new Date().toISOString().split('T')[0],
      description: '',
      type: 'Income',
      amount: ''
    });
    setErrors({});
    setShowModal(true);
  };

  // Open modal for editing
  const openEditModal = (transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      refId: transaction.refId,
      date: transaction.date,
      description: transaction.description,
      type: transaction.type,
      amount: transaction.amount
    });
    setErrors({});
    setShowModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Add or update transaction
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (editingTransaction) {
      setTransactions(prev =>
        prev.map(t => t.id === editingTransaction.id ? { ...formData, id: t.id } : t)
      );
    } else {
      const newTransaction = {
        ...formData,
        id: Date.now().toString()
      };
      setTransactions(prev => [...prev, newTransaction]);
    }

    setShowModal(false);
  };

  // Delete transaction
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setTransactions(prev => prev.filter(t => t.id !== deleteId));
    setShowDeleteConfirm(false);
    setDeleteId(null);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: darkMode ? '#111827' : '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      transition: 'background-color 0.3s ease'
    },
    header: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
      padding: '1rem 1.5rem',
      transition: 'background-color 0.3s ease'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    headerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: darkMode ? '#f9fafb' : '#111827'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'none',
      border: 'none',
      color: darkMode ? '#9ca3af' : '#6b7280',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    rightControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    iconButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      color: darkMode ? '#9ca3af' : '#6b7280',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    languageMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: '0.5rem',
      backgroundColor: darkMode ? '#1f2937' : 'white',
      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
      borderRadius: '0.375rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 100,
      minWidth: '150px'
    },
    languageOption: {
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      color: darkMode ? '#f9fafb' : '#111827',
      fontSize: '0.875rem',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
      backgroundColor: 'transparent',
      border: 'none',
      width: '100%',
      textAlign: 'left'
    },
    avatar: {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      backgroundColor: '#10b981'
    },
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem 1.5rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      transition: 'background-color 0.3s ease'
    },
    statLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    iconPurple: {
      width: '1rem',
      height: '1rem',
      backgroundColor: '#9333ea',
      borderRadius: '0.25rem'
    },
    arrowDown: {
      color: '#10b981',
      fontSize: '1.25rem'
    },
    arrowUp: {
      color: '#ef4444',
      fontSize: '1.25rem'
    },
    statValue: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: darkMode ? '#f9fafb' : '#111827'
    },
    filterCard: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      marginBottom: '2rem',
      transition: 'background-color 0.3s ease'
    },
    filterHeader: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    dateRange: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    dateInput: {
      padding: '0.5rem 1rem',
      border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      backgroundColor: darkMode ? '#111827' : 'white',
      color: darkMode ? '#f9fafb' : '#111827'
    },
    dateSeparator: {
      color: darkMode ? '#9ca3af' : '#6b7280'
    },
    addButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#9333ea',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      cursor: 'pointer'
    },
    filterTabs: {
      display: 'flex',
      gap: '1.5rem',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
    },
    filterTab: {
      background: 'none',
      border: 'none',
      paddingBottom: '0.75rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      borderBottom: '2px solid transparent'
    },
    filterTabActive: {
      color: '#9333ea',
      borderBottom: '2px solid #9333ea'
    },
    filterTabInactive: {
      color: darkMode ? '#9ca3af' : '#6b7280'
    },
    tableContainer: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'background-color 0.3s ease'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    thead: {
      backgroundColor: darkMode ? '#111827' : '#f9fafb',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
    },
    th: {
      padding: '1rem 1.5rem',
      textAlign: 'left',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: darkMode ? '#9ca3af' : '#6b7280'
    },
    td: {
      padding: '1rem 1.5rem',
      fontSize: '0.875rem',
      color: darkMode ? '#f9fafb' : '#111827',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#f3f4f6'}`
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 1.5rem'
    },
    emptyMessage: {
      color: darkMode ? '#6b7280' : '#9ca3af',
      marginBottom: '0.5rem',
      fontSize: '1rem'
    },
    emptySubmessage: {
      color: darkMode ? '#4b5563' : '#d1d5db',
      fontSize: '0.875rem'
    },
    badge: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    badgeIncome: {
      backgroundColor: darkMode ? '#064e3b' : '#d1fae5',
      color: darkMode ? '#6ee7b7' : '#065f46'
    },
    badgeExpense: {
      backgroundColor: darkMode ? '#7f1d1d' : '#fee2e2',
      color: darkMode ? '#fca5a5' : '#991b1b'
    },
    amount: {
      fontWeight: '600'
    },
    actionButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginRight: '0.75rem'
    },
    editButton: {
      color: '#9333ea'
    },
    deleteButton: {
      color: '#ef4444'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modal: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      padding: '2rem',
      width: '90%',
      maxWidth: '500px',
      maxHeight: '90vh',
      overflow: 'auto'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: darkMode ? '#f9fafb' : '#111827'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: darkMode ? '#9ca3af' : '#6b7280',
      padding: '0.5rem'
    },
    formGroup: {
      marginBottom: '1.25rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: darkMode ? '#d1d5db' : '#374151'
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: darkMode ? '#111827' : 'white',
      color: darkMode ? '#f9fafb' : '#111827'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    select: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      outline: 'none',
      backgroundColor: darkMode ? '#111827' : 'white',
      color: darkMode ? '#f9fafb' : '#111827',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '0.75rem',
      marginTop: '0.25rem'
    },
    modalActions: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem'
    },
    submitButton: {
      flex: 1,
      backgroundColor: '#9333ea',
      color: 'white',
      border: 'none',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer'
    },
    cancelButton: {
      flex: 1,
      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
      color: darkMode ? '#f9fafb' : '#374151',
      border: 'none',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer'
    },
    confirmDialog: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      padding: '2rem',
      width: '90%',
      maxWidth: '400px',
      textAlign: 'center'
    },
    confirmTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: darkMode ? '#f9fafb' : '#111827',
      marginBottom: '0.5rem'
    },
    confirmMessage: {
      color: darkMode ? '#9ca3af' : '#6b7280',
      marginBottom: '1.5rem'
    },
    confirmActions: {
      display: 'flex',
      gap: '1rem'
    },
    confirmButton: {
      flex: 1,
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t.transactions}</h1>
          <nav style={styles.nav}>
            <button style={styles.navButton}>
              <Home size={20} />
              <span>{t.home}</span>
            </button>
            <button style={styles.navButton}>
              <DollarSign size={20} />
              <span>{t.budget}</span>
            </button>
            <button style={styles.navButton}>
              <MessageCircle size={20} />
              <span>{t.chatbot}</span>
            </button>
            <button style={styles.navButton} onClick={() => navigate('/transactions')}>
              <DollarSign size={20} />
              <span>{t.transactions}</span>
            </button>

          </nav>
          <div style={styles.rightControls}>
            {/* Dark Mode Toggle */}
            <button style={styles.iconButton} onClick={toggleDarkMode} title="Toggle Dark Mode">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Language Selector */}
            <div style={{position: 'relative'}}>
              <button 
                style={styles.iconButton} 
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                title="Change Language"
              >
                <Globe size={20} />
              </button>
              
              {showLanguageMenu && (
                <div style={styles.languageMenu}>
                  <button 
                    style={styles.languageOption}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                  <button 
                    style={styles.languageOption}
                    onClick={() => changeLanguage('hi')}
                  >
                    हिन्दी (Hindi)
                  </button>
                  <button 
                    style={{...styles.languageOption, borderBottom: 'none'}}
                    onClick={() => changeLanguage('kn')}
                  >
                    ಕನ್ನಡ (Kannada)
                  </button>
                </div>
              )}
            </div>
            
            <button 
              style={{...styles.avatar, cursor: 'pointer', border: 'none', padding: 0}}
              onClick={() => navigate('/settings')}
              title="Profile & Settings"
            ></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>{t.balance}</div>
            <div style={styles.statValue}>₹{stats.balance}</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>
              <div style={styles.iconPurple}></div>
              <span>{t.savings}</span>
            </div>
            <div style={styles.statValue}>₹{stats.savings}</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>
              <span style={styles.arrowDown}>↓</span>
              <span>{t.incomes}</span>
            </div>
            <div style={styles.statValue}>₹{stats.incomes}</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>
              <span style={styles.arrowUp}>↑</span>
              <span>{t.expenses}</span>
            </div>
            <div style={styles.statValue}>₹{stats.expenses}</div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div style={styles.filterCard}>
          <div style={styles.filterHeader}>
            {/* Date Range */}
            <div style={styles.dateRange}>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={styles.dateInput}
              />
              <span style={styles.dateSeparator}>-</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={styles.dateInput}
              />
            </div>

            {/* Add Transaction Button */}
            <button style={styles.addButton} onClick={openAddModal}>
              <Plus size={20} />
              <span>{t.addTransaction}</span>
            </button>
          </div>

          {/* Filter Tabs */}
          <div style={styles.filterTabs}>
            {['All', 'Income', 'Expense'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  ...styles.filterTab,
                  ...(activeFilter === filter ? styles.filterTabActive : styles.filterTabInactive)
                }}
              >
                {filter === 'All' ? t.all : filter === 'Income' ? t.income : t.expense}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>{t.refId}</th>
                <th style={styles.th}>{t.date}</th>
                <th style={styles.th}>{t.description}</th>
                <th style={styles.th}>{t.type}</th>
                <th style={styles.th}>{t.amount}</th>
                <th style={styles.th}>{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan="6" style={styles.emptyState}>
                    <div style={styles.emptyMessage}>{t.noTransactions}</div>
                    <div style={styles.emptySubmessage}>{t.clickToAdd}</div>
                  </td>
                </tr>
              ) : (
                transactions
                  .filter(trans => activeFilter === 'All' || trans.type === activeFilter)
                  .map((transaction) => (
                    <tr key={transaction.id}>
                      <td style={styles.td}>{transaction.refId}</td>
                      <td style={styles.td}>{transaction.date}</td>
                      <td style={styles.td}>{transaction.description}</td>
                      <td style={styles.td}>
                        <span style={{
                          ...styles.badge,
                          ...(transaction.type === 'Income' ? styles.badgeIncome : styles.badgeExpense)
                        }}>
                          {transaction.type === 'Income' ? t.income : t.expense}
                        </span>
                      </td>
                      <td style={{...styles.td, ...styles.amount}}>
                        ₹{parseFloat(transaction.amount).toFixed(2)}
                      </td>
                      <td style={styles.td}>
                        <button 
                          style={{...styles.actionButton, ...styles.editButton}}
                          onClick={() => openEditModal(transaction)}
                        >
                          {t.edit}
                        </button>
                        <button 
                          style={{...styles.actionButton, ...styles.deleteButton}}
                          onClick={() => handleDelete(transaction.id)}
                        >
                          {t.delete}
                        </button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Add/Edit Transaction Modal */}
      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {editingTransaction ? t.editTransaction : t.addTransaction}
              </h2>
              <button style={styles.closeButton} onClick={() => setShowModal(false)}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>{t.referenceId}</label>
                <input
                  type="text"
                  name="refId"
                  value={formData.refId}
                  style={styles.input}
                  disabled
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>{t.date} *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    ...(errors.date ? styles.inputError : {})
                  }}
                />
                {errors.date && <div style={styles.errorText}>{errors.date}</div>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>{t.description} *</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder={t.descriptionPlaceholder}
                  style={{
                    ...styles.input,
                    ...(errors.description ? styles.inputError : {})
                  }}
                />
                {errors.description && <div style={styles.errorText}>{errors.description}</div>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>{t.type} *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="Income">{t.income}</option>
                  <option value="Expense">{t.expense}</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>{t.amount} *</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  style={{
                    ...styles.input,
                    ...(errors.amount ? styles.inputError : {})
                  }}
                />
                {errors.amount && <div style={styles.errorText}>{errors.amount}</div>}
              </div>

              <div style={styles.modalActions}>
                <button type="button" style={styles.cancelButton} onClick={() => setShowModal(false)}>
                  {t.cancel}
                </button>
                <button type="submit" style={styles.submitButton}>
                  {editingTransaction ? t.update : t.add} {language === 'en' ? 'Transaction' : language === 'hi' ? 'लेनदेन' : 'ವಹಿವಾಟು'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div style={styles.modalOverlay} onClick={() => setShowDeleteConfirm(false)}>
          <div style={styles.confirmDialog} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.confirmTitle}>{t.deleteConfirm}</h3>
            <p style={styles.confirmMessage}>{t.deleteMessage}</p>
            <div style={styles.confirmActions}>
              <button style={styles.cancelButton} onClick={() => setShowDeleteConfirm(false)}>
                {t.cancel}
              </button>
              <button style={styles.confirmButton} onClick={confirmDelete}>
                {t.delete}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}