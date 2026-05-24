export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      documentation: 'Documentation',
      help: 'Help Center',
      contact: 'Contact',
    },
    // Home Page
    home: {
      title: 'Hello World',
    },
    // Contact Page
    contact: {
      pageTitle: 'Get in Touch',
      pageDescription: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as we can.',
    },
    // Contact Form
    contactForm: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your.email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'What is this about?',
      messageLabel: 'Message',
      messagePlaceholder: 'Please tell us more...',
      submitButton: 'Send Message',
      sendingButton: 'Sending...',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      subjectRequired: 'Subject is required',
      messageRequired: 'Message is required',
      invalidEmail: 'Please enter a valid email address',
      successTitle: 'Message Sent',
      successMessage: 'Thank you for contacting us. We\'ll be in touch soon.',
      errorTitle: 'Error',
      errorGeneral: 'An error occurred while processing your request. Please try again.',
      errorServer: 'Failed to send message. Please try again.',
    },
    // Footer
    footer: {
      company: 'Company',
      companyDesc: 'A clean, approachable interface with a warm, friendly tone that prioritizes clarity and simplicity.',
      product: 'Product',
      productFeatures: 'Features',
      productPricing: 'Pricing',
      productDocs: 'Documentation',
      support: 'Support',
      supportHelp: 'Help Center',
      supportContact: 'Contact',
      supportStatus: 'Status',
      legal: 'Legal',
      legalPrivacy: 'Privacy Policy',
      legalTerms: 'Terms of Service',
      legalCookies: 'Cookies',
      copyright: '© 2024 Hello World. All rights reserved.',
      social: {
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    // Language picker
    language: {
      label: 'Language',
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
  },
  vi: {
    // Navigation
    nav: {
      home: 'Trang chủ',
      features: 'Tính năng',
      pricing: 'Giá',
      documentation: 'Tài liệu',
      help: 'Trung tâm trợ giúp',
      contact: 'Liên hệ',
    },
    // Home Page
    home: {
      title: 'Xin chào Thế giới',
    },
    // Contact Page
    contact: {
      pageTitle: 'Liên hệ với chúng tôi',
      pageDescription: 'Chúng tôi rất muốn nghe từ bạn. Gửi cho chúng tôi một tin nhắn và chúng tôi sẽ phản hồi càng sớm càng tốt.',
    },
    // Contact Form
    contactForm: {
      nameLabel: 'Tên',
      namePlaceholder: 'Tên của bạn',
      emailLabel: 'Email',
      emailPlaceholder: 'email.cua.ban@example.com',
      subjectLabel: 'Chủ đề',
      subjectPlaceholder: 'Đó là về cái gì?',
      messageLabel: 'Tin nhắn',
      messagePlaceholder: 'Vui lòng cho chúng tôi biết thêm...',
      submitButton: 'Gửi tin nhắn',
      sendingButton: 'Đang gửi...',
      nameRequired: 'Tên là bắt buộc',
      emailRequired: 'Email là bắt buộc',
      subjectRequired: 'Chủ đề là bắt buộc',
      messageRequired: 'Tin nhắn là bắt buộc',
      invalidEmail: 'Vui lòng nhập một địa chỉ email hợp lệ',
      successTitle: 'Tin nhắn đã được gửi',
      successMessage: 'Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ liên lạc với bạn sớm.',
      errorTitle: 'Lỗi',
      errorGeneral: 'Đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.',
      errorServer: 'Không thể gửi tin nhắn. Vui lòng thử lại.',
    },
    // Footer
    footer: {
      company: 'Công ty',
      companyDesc: 'Một giao diện sạch sẽ, dễ tiếp cận với tính trang và thân thiện ưu tiên độ rõ ràng và đơn giản.',
      product: 'Sản phẩm',
      productFeatures: 'Tính năng',
      productPricing: 'Giá',
      productDocs: 'Tài liệu',
      support: 'Hỗ trợ',
      supportHelp: 'Trung tâm trợ giúp',
      supportContact: 'Liên hệ',
      supportStatus: 'Trạng thái',
      legal: 'Pháp lý',
      legalPrivacy: 'Chính sách bảo mật',
      legalTerms: 'Điều khoản dịch vụ',
      legalCookies: 'Cookie',
      copyright: '© 2024 Hello World. Tất cả các quyền được bảo lưu.',
      social: {
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    // Language picker
    language: {
      label: 'Ngôn ngữ',
      english: 'English',
      vietnamese: 'Tiếng Việt',
    },
  },
};

export type Language = keyof typeof translations;
