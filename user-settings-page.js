import React, { useState } from 'react';
import { Home, DollarSign, MessageCircle, Moon, Sun, Globe, User, Mail, Phone, MapPin, Lock, Bell, Shield, Save, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function UserSettingsPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile state
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: 'Bengaluru, Karnataka, India',
    avatar: ''
  });

  // Settings state
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    weeklyReport: true,
    monthlyReport: true,
    twoFactorAuth: false,
    currency: 'INR',
    dateFormat: 'DD/MM/YYYY',
    theme: 'light'
  });

  // Password state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Translations
  const translations = {
    en: {
      transactions: 'Transactions',
      settings: 'Settings',
      home: 'Home',
      budget: 'Budget',
      chatbot: 'Chatbot',
      profile: 'Profile',
      notifications: 'Notifications',
      security: 'Security',
      preferences: 'Preferences',
      personalInfo: 'Personal Information',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
      uploadPhoto: 'Upload Photo',
      saveChanges: 'Save Changes',
      notificationSettings: 'Notification Settings',
      emailNotifications: 'Email Notifications',
      pushNotifications: 'Push Notifications',
      smsNotifications: 'SMS Notifications',
      weeklyReport: 'Weekly Report',
      monthlyReport: 'Monthly Report',
      securitySettings: 'Security Settings',
      changePassword: 'Change Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
      twoFactorAuth: 'Two-Factor Authentication',
      enable2FA: 'Enable 2FA for extra security',
      preferenceSettings: 'Preference Settings',
      currency: 'Currency',
      dateFormat: 'Date Format',
      themePreference: 'Theme Preference',
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto',
      updatePassword: 'Update Password',
      success: 'Changes saved successfully!',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      passwordMismatch: 'Passwords do not match',
      passwordLength: 'Password must be at least 6 characters'
    },
    hi: {
      settings: 'सेटिंग्स',
      home: 'होम',
      budget: 'बजट',
      chatbot: 'चैटबॉट',
      profile: 'प्रोफ़ाइल',
      notifications: 'सूचनाएं',
      security: 'सुरक्षा',
      preferences: 'प्राथमिकताएं',
      personalInfo: 'व्यक्तिगत जानकारी',
      fullName: 'पूरा नाम',
      email: 'ईमेल पता',
      phone: 'फ़ोन नंबर',
      address: 'पता',
      uploadPhoto: 'फोटो अपलोड करें',
      saveChanges: 'परिवर्तन सहेजें',
      notificationSettings: 'सूचना सेटिंग्स',
      emailNotifications: 'ईमेल सूचनाएं',
      pushNotifications: 'पुश सूचनाएं',
      smsNotifications: 'एसएमएस सूचनाएं',
      weeklyReport: 'साप्ताहिक रिपोर्ट',
      monthlyReport: 'मासिक रिपोर्ट',
      securitySettings: 'सुरक्षा सेटिंग्स',
      changePassword: 'पासवर्ड बदलें',
      currentPassword: 'वर्तमान पासवर्ड',
      newPassword: 'नया पासवर्ड',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      twoFactorAuth: 'दो-कारक प्रमाणीकरण',
      enable2FA: 'अतिरिक्त सुरक्षा के लिए 2FA सक्षम करें',
      preferenceSettings: 'प्राथमिकता सेटिंग्स',
      currency: 'मुद्रा',
      dateFormat: 'तिथि प्रारूप',
      themePreference: 'थीम प्राथमिकता',
      light: 'लाइट',
      dark: 'डार्क',
      auto: 'ऑटो',
      updatePassword: 'पासवर्ड अपडेट करें',
      success: 'परिवर्तन सफलतापूर्वक सहेजे गए!',
      nameRequired: 'नाम आवश्यक है',
      emailRequired: 'ईमेल आवश्यक है',
      passwordMismatch: 'पासवर्ड मेल नहीं खाते',
      passwordLength: 'पासवर्ड कम से कम 6 वर्णों का होना चाहिए',
      transactions: 'लेनदेन'
    },
    kn: {
      transactions: 'ವಹಿವಾಟುಗಳು',
      settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      home: 'ಮುಖಪುಟ',
      budget: 'ಬಜೆಟ್',
      chatbot: 'ಚಾಟ್‌ಬಾಟ್',
      profile: 'ಪ್ರೊಫೈಲ್',
      notifications: 'ಅಧಿಸೂಚನೆಗಳು',
      security: 'ಭದ್ರತೆ',
      preferences: 'ಆದ್ಯತೆಗಳು',
      personalInfo: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ',
      fullName: 'ಪೂರ್ಣ ಹೆಸರು',
      email: 'ಇಮೇಲ್ ವಿಳಾಸ',
      phone: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
      address: 'ವಿಳಾಸ',
      uploadPhoto: 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      saveChanges: 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
      notificationSettings: 'ಅಧಿಸೂಚನೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      emailNotifications: 'ಇಮೇಲ್ ಅಧಿಸೂಚನೆಗಳು',
      pushNotifications: 'ಪುಶ್ ಅಧಿಸೂಚನೆಗಳು',
      smsNotifications: 'ಎಸ್‌ಎಂಎಸ್ ಅಧಿಸೂಚನೆಗಳು',
      weeklyReport: 'ವಾರದ ವರದಿ',
      monthlyReport: 'ಮಾಸಿಕ ವರದಿ',
      securitySettings: 'ಭದ್ರತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      changePassword: 'ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಿ',
      currentPassword: 'ಪ್ರಸ್ತುತ ಪಾಸ್‌ವರ್ಡ್',
      newPassword: 'ಹೊಸ ಪಾಸ್‌ವರ್ಡ್',
      confirmPassword: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
      twoFactorAuth: 'ಎರಡು-ಅಂಶ ದೃಢೀಕರಣ',
      enable2FA: 'ಹೆಚ್ಚುವರಿ ಭದ್ರತೆಗಾಗಿ 2FA ಸಕ್ರಿಯಗೊಳಿಸಿ',
      preferenceSettings: 'ಆದ್ಯತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      currency: 'ಕರೆನ್ಸಿ',
      dateFormat: 'ದಿನಾಂಕ ಸ್ವರೂಪ',
      themePreference: 'ಥೀಮ್ ಆದ್ಯತೆ',
      light: 'ಲೈಟ್',
      dark: 'ಡಾರ್ಕ್',
      auto: 'ಆಟೋ',
      updatePassword: 'ಪಾಸ್‌ವರ್ಡ್ ನವೀಕರಿಸಿ',
      success: 'ಬದಲಾವಣೆಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
      nameRequired: 'ಹೆಸರು ಅಗತ್ಯವಿದೆ',
      emailRequired: 'ಇಮೇಲ್ ಅಗತ್ಯವಿದೆ',
      passwordMismatch: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
      passwordLength: 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳಷ್ಟಿರಬೇಕು'
    }
  };

  const t = translations[language];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSettingToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateProfile = () => {
    const newErrors = {};
    if (!profileData.name.trim()) {
      newErrors.name = t.nameRequired;
    }
    if (!profileData.email.trim()) {
      newErrors.email = t.emailRequired;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (passwordData.newPassword.length < 6) {
      newErrors.newPassword = t.passwordLength;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = t.passwordMismatch;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveProfile = () => {
    if (validateProfile()) {
      setSuccessMessage(t.success);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleSavePassword = () => {
    if (validatePassword()) {
      setSuccessMessage(t.success);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSuccessMessage(''), 3000);
    }
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '2rem'
    },
    sidebar: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      height: 'fit-content'
    },
    tabButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      marginBottom: '0.5rem',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      textAlign: 'left',
      transition: 'background-color 0.2s'
    },
    tabButtonActive: {
      backgroundColor: '#9333ea',
      color: 'white'
    },
    tabButtonInactive: {
      backgroundColor: 'transparent',
      color: darkMode ? '#d1d5db' : '#6b7280'
    },
    contentArea: {
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: darkMode ? '#f9fafb' : '#111827',
      marginBottom: '1.5rem'
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
    },
    avatarLarge: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    avatarIcon: {
      color: 'white'
    },
    uploadButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#9333ea',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
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
    errorText: {
      color: '#ef4444',
      fontSize: '0.75rem',
      marginTop: '0.25rem'
    },
    successMessage: {
      backgroundColor: '#d1fae5',
      color: '#065f46',
      padding: '1rem',
      borderRadius: '0.375rem',
      marginBottom: '1.5rem',
      fontSize: '0.875rem'
    },
    saveButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#9333ea',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '1rem'
    },
    toggleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
    },
    toggleLabel: {
      fontSize: '0.875rem',
      color: darkMode ? '#d1d5db' : '#374151',
      fontWeight: '500'
    },
    toggleSwitch: {
      width: '48px',
      height: '24px',
      backgroundColor: '#d1d5db',
      borderRadius: '12px',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    toggleSwitchActive: {
      backgroundColor: '#9333ea'
    },
    toggleKnob: {
      width: '20px',
      height: '20px',
      backgroundColor: 'white',
      borderRadius: '50%',
      position: 'absolute',
      top: '2px',
      left: '2px',
      transition: 'left 0.3s'
    },
    toggleKnobActive: {
      left: '26px'
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
    }
  };

  const renderProfileTab = () => (
    <>
      <h2 style={styles.sectionTitle}>{t.personalInfo}</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      
      <div style={styles.profileHeader}>
        <div style={styles.avatarLarge}>
          <User size={48} style={styles.avatarIcon} />
          <button style={styles.uploadButton}>
            <Camera size={16} />
          </button>
        </div>
        <div>
          <h3 style={{ color: darkMode ? '#f9fafb' : '#111827', marginBottom: '0.25rem' }}>
            {profileData.name}
          </h3>
          <p style={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.875rem' }}>
            {profileData.email}
          </p>
        </div>
      </div>

      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>{t.fullName}</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleProfileChange}
            style={styles.input}
          />
          {errors.name && <div style={styles.errorText}>{errors.name}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>{t.email}</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleProfileChange}
            style={styles.input}
          />
          {errors.email && <div style={styles.errorText}>{errors.email}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>{t.phone}</label>
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleProfileChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>{t.address}</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleProfileChange}
            style={styles.input}
          />
        </div>
      </div>

      <button style={styles.saveButton} onClick={handleSaveProfile}>
        <Save size={20} />
        {t.saveChanges}
      </button>
    </>
  );

  const renderNotificationsTab = () => (
    <>
      <h2 style={styles.sectionTitle}>{t.notificationSettings}</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      
      <div style={styles.toggleContainer}>
        <span style={styles.toggleLabel}>{t.emailNotifications}</span>
        <div 
          style={{
            ...styles.toggleSwitch,
            ...(settings.emailNotifications ? styles.toggleSwitchActive : {})
          }}
          onClick={() => handleSettingToggle('emailNotifications')}
        >
          <div style={{
            ...styles.toggleKnob,
            ...(settings.emailNotifications ? styles.toggleKnobActive : {})
          }} />
        </div>
      </div>

      <div style={styles.toggleContainer}>
        <span style={styles.toggleLabel}>{t.pushNotifications}</span>
        <div 
          style={{
            ...styles.toggleSwitch,
            ...(settings.pushNotifications ? styles.toggleSwitchActive : {})
          }}
          onClick={() => handleSettingToggle('pushNotifications')}
        >
          <div style={{
            ...styles.toggleKnob,
            ...(settings.pushNotifications ? styles.toggleKnobActive : {})
          }} />
        </div>
      </div>

      <div style={styles.toggleContainer}>
        <span style={styles.toggleLabel}>{t.smsNotifications}</span>
        <div 
          style={{
            ...styles.toggleSwitch,
            ...(settings.smsNotifications ? styles.toggleSwitchActive : {})
          }}
          onClick={() => handleSettingToggle('smsNotifications')}
        >
          <div style={{
            ...styles.toggleKnob,
            ...(settings.smsNotifications ? styles.toggleKnobActive : {})
          }} />
        </div>
      </div>

      <div style={styles.toggleContainer}>
        <span style={styles.toggleLabel}>{t.weeklyReport}</span>
        <div 
          style={{
            ...styles.toggleSwitch,
            ...(settings.weeklyReport ? styles.toggleSwitchActive : {})
          }}
          onClick={() => handleSettingToggle('weeklyReport')}
        >
          <div style={{
            ...styles.toggleKnob,
            ...(settings.weeklyReport ? styles.toggleKnobActive : {})
          }} />
        </div>
      </div>

      <div style={styles.toggleContainer}>
        <span style={styles.toggleLabel}>{t.monthlyReport}</span>
        <div 
          style={{
            ...styles.toggleSwitch,
            ...(settings.monthlyReport ? styles.toggleSwitchActive : {})
          }}
          onClick={() => handleSettingToggle('monthlyReport')}
        >
          <div style={{
            ...styles.toggleKnob,
            ...(settings.monthlyReport ? styles.toggleKnobActive : {})
          }} />
        </div>
      </div>
    </>
  );

  const renderSecurityTab = () => (
    <>
      <h2 style={styles.sectionTitle}>{t.securitySettings}</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      
      <h3 style={{ color: darkMode ? '#f9fafb' : '#111827', fontSize: '1.125rem', marginBottom: '1rem' }}>
        {t.changePassword}
      </h3>

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.currentPassword}</label>
        <input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handlePasswordChange}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.newPassword}</label>
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
          style={styles.input}
        />
        {errors.newPassword && <div style={styles.errorText}>{errors.newPassword}</div>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.confirmPassword}</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handlePasswordChange}
          style={styles.input}
        />
        {errors.confirmPassword && <div style={styles.errorText}>{errors.confirmPassword}</div>}
      </div>

      <button style={styles.saveButton} onClick={handleSavePassword}>
        <Lock size={20} />
        {t.updatePassword}
      </button>

      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}` }}>
        <h3 style={{ color: darkMode ? '#f9fafb' : '#111827', fontSize: '1.125rem', marginBottom: '1rem' }}>
          {t.twoFactorAuth}
        </h3>
        <div style={styles.toggleContainer}>
          <div>
            <span style={styles.toggleLabel}>{t.twoFactorAuth}</span>
            <p style={{ fontSize: '0.75rem', color: darkMode ? '#9ca3af' : '#6b7280', marginTop: '0.25rem' }}>
              {t.enable2FA}
            </p>
          </div>
          <div 
            style={{
              ...styles.toggleSwitch,
              ...(settings.twoFactorAuth ? styles.toggleSwitchActive : {})
            }}
            onClick={() => handleSettingToggle('twoFactorAuth')}
          >
            <div style={{
              ...styles.toggleKnob,
              ...(settings.twoFactorAuth ? styles.toggleKnobActive : {})
            }} />
          </div>
        </div>
      </div>
    </>
  );

  const renderPreferencesTab = () => (
    <>
      <h2 style={styles.sectionTitle}>{t.preferenceSettings}</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.currency}</label>
        <select
          value={settings.currency}
          onChange={(e) => setSettings(prev => ({ ...prev, currency: e.target.value }))}
          style={styles.select}
        >
          <option value="INR">₹ INR - Indian Rupee</option>
          <option value="USD">$ USD - US Dollar</option>
          <option value="EUR">€ EUR - Euro</option>
          <option value="GBP">£ GBP - British Pound</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.dateFormat}</label>
        <select
          value={settings.dateFormat}
          onChange={(e) => setSettings(prev => ({ ...prev, dateFormat: e.target.value }))}
          style={styles.select}
        >
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>{t.themePreference}</label>
        <select
          value={settings.theme}
          onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
          style={styles.select}
        >
          <option value="light">{t.light}</option>
          <option value="dark">{t.dark}</option>
          <option value="auto">{t.auto}</option>
        </select>
      </div>
    </>
  );

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t.settings}</h1>
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
            
            <div style={styles.avatar}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentGrid}>
          {/* Sidebar */}
          <aside style={styles.sidebar}>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === 'profile' ? styles.tabButtonActive : styles.tabButtonInactive)
              }}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} />
              {t.profile}
            </button>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === 'notifications' ? styles.tabButtonActive : styles.tabButtonInactive)
              }}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={18} />
              {t.notifications}
            </button>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === 'security' ? styles.tabButtonActive : styles.tabButtonInactive)
              }}
              onClick={() => setActiveTab('security')}
            >
              <Shield size={18} />
              {t.security}
            </button>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === 'preferences' ? styles.tabButtonActive : styles.tabButtonInactive)
              }}
              onClick={() => setActiveTab('preferences')}
            >
              <Globe size={18} />
              {t.preferences}
            </button>
          </aside>

          {/* Content Area */}
          <div style={styles.contentArea}>
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'notifications' && renderNotificationsTab()}
            {activeTab === 'security' && renderSecurityTab()}
            {activeTab === 'preferences' && renderPreferencesTab()}
          </div>
        </div>
      </main>
    </div>
  );
}