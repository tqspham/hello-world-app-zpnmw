export type Language = "en" | "vi";

export const translations = {
  en: {
    navigation: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      documentation: "Documentation",
      help: "Help Center",
      contact: "Contact",
    },
    footer: {
      company: "Company",
      companyDescription: "A clean, approachable interface with a warm, friendly tone that prioritizes clarity and simplicity.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      documentation: "Documentation",
      support: "Support",
      helpCenter: "Help Center",
      contactFooter: "Contact",
      status: "Status",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
      copyright: "© 2024 Hello World. All rights reserved.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    home: {
      title: "Hello World",
    },
    contact: {
      pageTitle: "Get in Touch",
      pageDescription: "We'd love to hear from you. Send us a message and we'll respond as soon as we can.",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formEmailPlaceholder: "your.email@example.com",
      formSubject: "Subject",
      formSubjectPlaceholder: "What is this about?",
      formMessage: "Message",
      formMessagePlaceholder: "Please tell us more...",
      formSubmit: "Send Message",
      formSubmitSending: "Sending...",
      validationRequired: "is required",
      validationEmail: "Please enter a valid email address",
      successTitle: "Message Sent",
      successMessage: "Thank you for contacting us. We'll be in touch soon.",
      errorTitle: "Error",
      errorMessage: "An error occurred while processing your request. Please try again.",
    },
    language: {
      label: "Language",
      english: "English",
      vietnamese: "Tiếng Việt",
    },
  },
  vi: {
    navigation: {
      home: "Trang chủ",
      features: "Tính năng",
      pricing: "Giá cả",
      documentation: "Tài liệu",
      help: "Trung tâm trợ giúp",
      contact: "Liên hệ",
    },
    footer: {
      company: "Công ty",
      companyDescription: "Giao diện sạch sẽ và dễ tiếp cận với tông lạnh thân thiện, ưu tiên sự rõ ràng và đơn giản.",
      product: "Sản phẩm",
      features: "Tính năng",
      pricing: "Giá cả",
      documentation: "Tài liệu",
      support: "Hỗ trợ",
      helpCenter: "Trung tâm trợ giúp",
      contactFooter: "Liên hệ",
      status: "Trạng thái",
      legal: "Pháp lý",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
      cookies: "Cookie",
      copyright: "© 2024 Hello World. Bảo lưu mọi quyền.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    home: {
      title: "Xin chào thế giới",
    },
    contact: {
      pageTitle: "Liên hệ với chúng tôi",
      pageDescription: "Chúng tôi rất muốn nghe từ bạn. Gửi cho chúng tôi một tin nhắn và chúng tôi sẽ trả lời ngay khi có thể.",
      formName: "Tên",
      formNamePlaceholder: "Tên của bạn",
      formEmail: "Email",
      formEmailPlaceholder: "email.cua.ban@example.com",
      formSubject: "Chủ đề",
      formSubjectPlaceholder: "Đây là về cái gì?",
      formMessage: "Tin nhắn",
      formMessagePlaceholder: "Vui lòng cho chúng tôi biết thêm...",
      formSubmit: "Gửi tin nhắn",
      formSubmitSending: "Đang gửi...",
      validationRequired: "là bắt buộc",
      validationEmail: "Vui lòng nhập một địa chỉ email hợp lệ",
      successTitle: "Tin nhắn đã gửi",
      successMessage: "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ trả lời sớm nhất có thể.",
      errorTitle: "Lỗi",
      errorMessage: "Đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.",
    },
    language: {
      label: "Ngôn ngữ",
      english: "English",
      vietnamese: "Tiếng Việt",
    },
  },
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split(".");
  let value: any = translations[lang];
  for (const key of keys) {
    value = value?.[key];
  }
  return value || path;
}
