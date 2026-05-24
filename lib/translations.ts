const translations = {
  en: {
    navigation: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      documentation: 'Documentation',
      help: 'Help Center',
      contact: 'Contact',
    },
    theme: {
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
    },
    language: {
      label: 'Language',
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
    home: {
      title: 'Hello World',
    },
    contact: {
      pageTitle: 'Get in Touch',
      pageDescription: "We'd love to hear from you. Send us a message and we'll respond as soon as we can.",
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formNamePlaceholder: 'Your name',
      formEmailPlaceholder: 'your.email@example.com',
      formSubjectPlaceholder: 'What is this about?',
      formMessagePlaceholder: 'Please tell us more...',
      formSubmit: 'Send Message',
      formSending: 'Sending...',
      validationRequired: 'is required',
      validationEmail: 'Please enter a valid email address',
      successTitle: 'Message Sent',
      successMessage: "Thank you for contacting us. We'll be in touch soon.",
      errorTitle: 'Error',
      errorDefault: 'An error occurred while processing your request. Please try again.',
      errorInvalid: 'Invalid form data. Please check all fields and try again.',
      errorNetwork: 'An error occurred. Please try again.',
    },
    footer: {
      company: 'Company',
      companyDescription: 'A clean, approachable interface with a warm, friendly tone that prioritizes clarity and simplicity.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      documentation: 'Documentation',
      support: 'Support',
      helpCenter: 'Help Center',
      contact: 'Contact',
      status: 'Status',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookies: 'Cookies',
      copyright: '© 2024 Hello World. All rights reserved.',
      social: {
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
  vi: {
    navigation: {
      home: 'Trang chủ',
      features: 'Tính năng',
      pricing: 'Bảng giá',
      documentation: 'Tài liệu',
      help: 'Trung tâm trợ giúp',
      contact: 'Liên hệ',
    },
    theme: {
      switchToDark: 'Chuyển sang chế độ tối',
      switchToLight: 'Chuyển sang chế độ sáng',
    },
    language: {
      label: 'Ngôn ngữ',
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
    home: {
      title: 'Hello World',
    },
    contact: {
      pageTitle: 'Liên hệ với chúng tôi',
      pageDescription: 'Chúng tôi rất muốn nghe từ bạn. Gửi cho chúng tôi một tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể.',
      formName: 'Tên',
      formEmail: 'Email',
      formSubject: 'Chủ đề',
      formMessage: 'Tin nhắn',
      formNamePlaceholder: 'Tên của bạn',
      formEmailPlaceholder: 'email.cua.ban@example.com',
      formSubjectPlaceholder: 'Cái gì về vấn đề này?',
      formMessagePlaceholder: 'Vui lòng cho chúng tôi biết thêm...',
      formSubmit: 'Gửi tin nhắn',
      formSending: 'Đang gửi...',
      validationRequired: 'là bắt buộc',
      validationEmail: 'Vui lòng nhập địa chỉ email hợp lệ',
      successTitle: 'Tin nhắn đã gửi',
      successMessage: 'Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ liên hệ lại sớm.',
      errorTitle: 'Lỗi',
      errorDefault: 'Đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.',
      errorInvalid: 'Dữ liệu biểu mẫu không hợp lệ. Vui lòng kiểm tra tất cả các trường và thử lại.',
      errorNetwork: 'Đã xảy ra lỗi. Vui lòng thử lại.',
    },
    footer: {
      company: 'Công ty',
      companyDescription: 'Một giao diện sạch sẽ, thân thiện với tôn chỉ ấm áp và lời lẽ thân thiện ưu tiên sự rõ ràng và đơn giản.',
      product: 'Sản phẩm',
      features: 'Tính năng',
      pricing: 'Bảng giá',
      documentation: 'Tài liệu',
      support: 'Hỗ trợ',
      helpCenter: 'Trung tâm trợ giúp',
      contact: 'Liên hệ',
      status: 'Trạng thái',
      legal: 'Pháp lý',
      privacyPolicy: 'Chính sách bảo mật',
      termsOfService: 'Điều khoản dịch vụ',
      cookies: 'Cookie',
      copyright: '© 2024 Hello World. Tất cả quyền được bảo lưu.',
      social: {
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
} as const;

export type Language = keyof typeof translations;

export function getTranslation(language: Language) {
  return translations[language];
}

export function isValidLanguage(lang: unknown): lang is Language {
  return lang === 'en' || lang === 'vi';
}
