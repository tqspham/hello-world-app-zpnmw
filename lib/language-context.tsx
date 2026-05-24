"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    const initialLanguage = storedLanguage || "en";
    setLanguageState(initialLanguage);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      language: "en",
      setLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
}

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      documentation: "Documentation",
      help: "Help Center",
      contact: "Contact",
      brand: "Hello World",
    },
    footer: {
      company: "Company",
      companyDescription:
        "A clean, approachable interface with a warm, friendly tone that prioritizes clarity and simplicity.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      documentation: "Documentation",
      support: "Support",
      helpCenter: "Help Center",
      contactUs: "Contact",
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
      metaTitle: "Home - Hello World",
      metaDescription: "A clean and approachable application built with Next.js",
    },
    contact: {
      heading: "Get in Touch",
      description:
        "We'd love to hear from you. Send us a message and we'll respond as soon as we can.",
      metaTitle: "Contact - Hello World",
      metaDescription: "Get in touch with us. We'd love to hear from you.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        nameRequired: "Name is required",
        emailLabel: "Email",
        emailPlaceholder: "your.email@example.com",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        subjectLabel: "Subject",
        subjectPlaceholder: "What is this about?",
        subjectRequired: "Subject is required",
        messageLabel: "Message",
        messagePlaceholder: "Please tell us more...",
        messageRequired: "Message is required",
        submitButton: "Send Message",
        sending: "Sending...",
        successTitle: "Message Sent",
        successMessage: "Thank you for contacting us. We'll be in touch soon.",
        errorTitle: "Error",
        errorMessage: "Failed to send message. Please try again.",
        genericError: "An error occurred. Please try again.",
      },
    },
    pricing: {
      heading: "Simple, Transparent Pricing",
      description:
        "Choose the perfect plan for your needs. Always flexible to scale up or down.",
      recommended: "Recommended",
      featuresIncluded: "What's included:",
      faq: "Have questions? Contact our sales team for custom enterprise solutions.",
      plans: {
        starter: {
          name: "Starter",
          price: "29",
          billingPeriod: "per month",
          description: "Perfect for getting started",
          cta: "Get Started",
          features: {
            feature1: "Up to 10 projects",
            feature2: "Basic support",
            feature3: "1 GB storage",
          },
        },
        professional: {
          name: "Professional",
          price: "79",
          billingPeriod: "per month",
          description: "For growing teams",
          cta: "Start Free Trial",
          features: {
            feature1: "Unlimited projects",
            feature2: "Priority support",
            feature3: "100 GB storage",
            feature4: "Advanced analytics",
          },
        },
        enterprise: {
          name: "Enterprise",
          price: "Custom",
          billingPeriod: "contact us",
          description: "For large organizations",
          cta: "Contact Sales",
          features: {
            feature1: "Everything in Professional",
            feature2: "Dedicated support",
            feature3: "Unlimited storage",
            feature4: "Custom integrations",
            feature5: "SLA guarantee",
          },
        },
      },
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      features: "Tính Năng",
      pricing: "Giá Cả",
      documentation: "Tài Liệu",
      help: "Trung Tâm Trợ Giúp",
      contact: "Liên Hệ",
      brand: "Hello World",
    },
    footer: {
      company: "Công Ty",
      companyDescription:
        "Một giao diện sạch sẽ, dễ tiếp cận với tông gọi hàng thân thiện ưu tiên sự rõ ràng và đơn giản.",
      product: "Sản Phẩm",
      features: "Tính Năng",
      pricing: "Giá Cả",
      documentation: "Tài Liệu",
      support: "Hỗ Trợ",
      helpCenter: "Trung Tâm Trợ Giúp",
      contactUs: "Liên Hệ",
      status: "Trạng Thái",
      legal: "Pháp Lý",
      privacy: "Chính Sách Bảo Mật",
      terms: "Điều Khoản Dịch Vụ",
      cookies: "Cookie",
      copyright: "© 2024 Hello World. Tất cả các quyền được bảo lưu.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    home: {
      title: "Hello World",
      metaTitle: "Trang Chủ - Hello World",
      metaDescription: "Một ứng dụng sạch sẽ và dễ tiếp cận được xây dựng bằng Next.js",
    },
    contact: {
      heading: "Liên Hệ Với Chúng Tôi",
      description:
        "Chúng tôi rất thích nghe từ bạn. Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất có thể.",
      metaTitle: "Liên Hệ - Hello World",
      metaDescription: "Liên hệ với chúng tôi. Chúng tôi rất thích nghe từ bạn.",
      form: {
        nameLabel: "Tên",
        namePlaceholder: "Tên của bạn",
        nameRequired: "Tên là bắt buộc",
        emailLabel: "Email",
        emailPlaceholder: "email.cua.ban@example.com",
        emailRequired: "Email là bắt buộc",
        emailInvalid: "Vui lòng nhập một địa chỉ email hợp lệ",
        subjectLabel: "Chủ Đề",
        subjectPlaceholder: "Điều này là về cái gì?",
        subjectRequired: "Chủ đề là bắt buộc",
        messageLabel: "Tin Nhắn",
        messagePlaceholder: "Vui lòng cho chúng tôi biết thêm...",
        messageRequired: "Tin nhắn là bắt buộc",
        submitButton: "Gửi Tin Nhắn",
        sending: "Đang gửi...",
        successTitle: "Tin Nhắn Đã Gửi",
        successMessage: "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ liên lạc sớm.",
        errorTitle: "Lỗi",
        errorMessage: "Không thể gửi tin nhắn. Vui lòng thử lại.",
        genericError: "Đã xảy ra lỗi. Vui lòng thử lại.",
      },
    },
    pricing: {
      heading: "Giá Cả Đơn Giản, Minh Bạch",
      description:
        "Chọn gói hoàn hảo cho nhu cầu của bạn. Luôn linh hoạt để tăng hoặc giảm quy mô.",
      recommended: "Được Khuyến Nghị",
      featuresIncluded: "Những gì được bao gồm:",
      faq: "Có câu hỏi? Liên hệ với đội bán hàng của chúng tôi để biết giải pháp doanh nghiệp tùy chỉnh.",
      plans: {
        starter: {
          name: "Khởi Đầu",
          price: "29",
          billingPeriod: "mỗi tháng",
          description: "Hoàn hảo cho những người mới bắt đầu",
          cta: "Bắt Đầu",
          features: {
            feature1: "Tối đa 10 dự án",
            feature2: "Hỗ trợ cơ bản",
            feature3: "1 GB lưu trữ",
          },
        },
        professional: {
          name: "Chuyên Nghiệp",
          price: "79",
          billingPeriod: "mỗi tháng",
          description: "Cho các đội phát triển",
          cta: "Bắt Đầu Dùng Thử Miễn Phí",
          features: {
            feature1: "Dự án không giới hạn",
            feature2: "Hỗ trợ ưu tiên",
            feature3: "100 GB lưu trữ",
            feature4: "Phân tích nâng cao",
          },
        },
        enterprise: {
          name: "Doanh Nghiệp",
          price: "Tùy Chỉnh",
          billingPeriod: "liên hệ với chúng tôi",
          description: "Cho các tổ chức lớn",
          cta: "Liên Hệ Bộ Phận Bán Hàng",
          features: {
            feature1: "Mọi thứ trong Chuyên Nghiệp",
            feature2: "Hỗ trợ dành riêng",
            feature3: "Lưu trữ không giới hạn",
            feature4: "Tích hợp tùy chỉnh",
            feature5: "Đảm bảo SLA",
          },
        },
      },
    },
  },
};
