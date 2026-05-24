"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "vi" | "fr";

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
    help: {
      heading: "Help Center",
      description:
        "Find answers to your questions. Browse our help topics or search for what you need.",
      searchPlaceholder: "Search help topics...",
      searchAriaLabel: "Search help center",
      clearSearchLabel: "Clear search",
      searchResults: "Found {count} article(s) matching your search",
      noResults: "No results found",
      noResultsMessage: "Try a different search term or browse categories below",
      clearSearchButton: "Clear Search",
      categories: {
        gettingStarted: {
          name: "Getting Started",
          articles: {
            creating: "Creating Your First Account",
            creatingDesc: "Learn how to sign up and get started with our platform in minutes.",
            firstSteps: "Your First Steps",
            firstStepsDesc: "A quick guide to navigating the interface and understanding the basics.",
            basics: "Platform Basics",
            basicsDesc: "Understand core concepts and essential features to get the most from our platform.",
          },
        },
        account: {
          name: "Account",
          articles: {
            profile: "Managing Your Profile",
            profileDesc: "Update your personal information, avatar, and account settings.",
            password: "Password & Authentication",
            passwordDesc: "Change your password and set up two-factor authentication for better security.",
            security: "Account Security",
            securityDesc: "Tips and best practices to keep your account safe from unauthorized access.",
          },
        },
        billing: {
          name: "Billing",
          articles: {
            plans: "Understanding Our Plans",
            plansDesc: "Compare features and pricing across Starter, Professional, and Enterprise plans.",
            payment: "Payment Methods",
            paymentDesc: "Add, update, or remove payment methods linked to your account.",
            invoices: "Invoices & Receipts",
            invoicesDesc: "View and download your billing history and tax receipts.",
          },
        },
        technicalSupport: {
          name: "Technical Support",
          articles: {
            troubleshooting: "Troubleshooting Common Issues",
            troubleshootingDesc: "Solutions to common problems and error messages you may encounter.",
            errors: "Understanding Error Messages",
            errorsDesc: "Explanations of what went wrong and how to resolve error codes.",
            performance: "Performance & Optimization",
            performanceDesc: "Tips to improve speed, reduce latency, and optimize your experience.",
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
    help: {
      heading: "Trung Tâm Trợ Giúp",
      description:
        "Tìm câu trả lời cho các câu hỏi của bạn. Duyệt qua các chủ đề trợ giúp hoặc tìm kiếm những gì bạn cần.",
      searchPlaceholder: "Tìm kiếm chủ đề trợ giúp...",
      searchAriaLabel: "Tìm kiếm trung tâm trợ giúp",
      clearSearchLabel: "Xóa tìm kiếm",
      searchResults: "Tìm thấy {count} bài viết phù hợp với tìm kiếm của bạn",
      noResults: "Không tìm thấy kết quả",
      noResultsMessage: "Thử một từ khóa tìm kiếm khác hoặc duyệt qua các danh mục dưới đây",
      clearSearchButton: "Xóa Tìm Kiếm",
      categories: {
        gettingStarted: {
          name: "Bắt Đầu",
          articles: {
            creating: "Tạo Tài Khoản Đầu Tiên Của Bạn",
            creatingDesc: "Tìm hiểu cách đăng ký và bắt đầu với nền tảng của chúng tôi trong vài phút.",
            firstSteps: "Các Bước Đầu Tiên Của Bạn",
            firstStepsDesc: "Hướng dẫn nhanh để điều hướng giao diện và hiểu những điều cơ bản.",
            basics: "Những Điều Cơ Bản Của Nền Tảng",
            basicsDesc: "Hiểu các khái niệm cốt lõi và các tính năng thiết yếu để tận dụng tối đa nền tảng của chúng tôi.",
          },
        },
        account: {
          name: "Tài Khoản",
          articles: {
            profile: "Quản Lý Hồ Sơ Của Bạn",
            profileDesc: "Cập nhật thông tin cá nhân, ảnh đại diện và cài đặt tài khoản.",
            password: "Mật Khẩu & Xác Thực",
            passwordDesc: "Thay đổi mật khẩu và thiết lập xác thực hai yếu tố để bảo mật tốt hơn.",
            security: "Bảo Mật Tài Khoản",
            securityDesc: "Mẹo và các phương pháp tốt nhất để giữ tài khoản của bạn an toàn khỏi truy cập trái phép.",
          },
        },
        billing: {
          name: "Thanh Toán",
          articles: {
            plans: "Hiểu Các Gói Của Chúng Tôi",
            plansDesc: "So sánh các tính năng và giá trên các gói Khởi Đầu, Chuyên Nghiệp và Doanh Nghiệp.",
            payment: "Phương Thức Thanh Toán",
            paymentDesc: "Thêm, cập nhật hoặc xóa các phương thức thanh toán được liên kết với tài khoản của bạn.",
            invoices: "Hóa Đơn & Biên Lai",
            invoicesDesc: "Xem và tải xuống lịch sử thanh toán và biên lai thuế của bạn.",
          },
        },
        technicalSupport: {
          name: "Hỗ Trợ Kỹ Thuật",
          articles: {
            troubleshooting: "Khắc Phục Các Vấn Đề Thường Gặp",
            troubleshootingDesc: "Giải pháp cho các vấn đề phổ biến và thông báo lỗi mà bạn có thể gặp phải.",
            errors: "Hiểu Các Thông Báo Lỗi",
            errorsDesc: "Giải thích những gì đã xảy ra sai và cách khắc phục các mã lỗi.",
            performance: "Hiệu Suất & Tối Ưu Hóa",
            performanceDesc: "Mẹo để cải thiện tốc độ, giảm độ trễ và tối ưu hóa trải nghiệm của bạn.",
          },
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      pricing: "Tarification",
      documentation: "Documentation",
      help: "Centre d'Aide",
      contact: "Contact",
      brand: "Hello World",
    },
    footer: {
      company: "Entreprise",
      companyDescription:
        "Une interface propre et accessible avec un ton chaleureux et convivial qui privilégie la clarté et la simplicité.",
      product: "Produit",
      features: "Fonctionnalités",
      pricing: "Tarification",
      documentation: "Documentation",
      support: "Support",
      helpCenter: "Centre d'Aide",
      contactUs: "Contact",
      status: "Statut",
      legal: "Juridique",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Cookies",
      copyright: "© 2024 Hello World. Tous droits réservés.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    home: {
      title: "Hello World",
      metaTitle: "Accueil - Hello World",
      metaDescription: "Une application propre et accessible créée avec Next.js",
    },
    contact: {
      heading: "Nous Contacter",
      description:
        "Nous serions ravis d'avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible.",
      metaTitle: "Contact - Hello World",
      metaDescription: "Contactez-nous. Nous serions ravis d'avoir de vos nouvelles.",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        nameRequired: "Le nom est requis",
        emailLabel: "Email",
        emailPlaceholder: "votre.email@example.com",
        emailRequired: "L'email est requis",
        emailInvalid: "Veuillez entrer une adresse email valide",
        subjectLabel: "Sujet",
        subjectPlaceholder: "De quoi s'agit-il ?",
        subjectRequired: "Le sujet est requis",
        messageLabel: "Message",
        messagePlaceholder: "Veuillez nous en dire plus...",
        messageRequired: "Le message est requis",
        submitButton: "Envoyer le Message",
        sending: "Envoi en cours...",
        successTitle: "Message Envoyé",
        successMessage: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
        errorTitle: "Erreur",
        errorMessage: "Impossible d'envoyer le message. Veuillez réessayer.",
        genericError: "Une erreur s'est produite. Veuillez réessayer.",
      },
    },
    pricing: {
      heading: "Tarification Simple et Transparente",
      description:
        "Choisissez le plan parfait pour vos besoins. Toujours flexible pour monter ou descendre en charge.",
      recommended: "Recommandé",
      featuresIncluded: "Ce qui est inclus :",
      faq: "Des questions ? Contactez notre équipe commerciale pour des solutions d'entreprise personnalisées.",
      plans: {
        starter: {
          name: "Démarrage",
          price: "29",
          billingPeriod: "par mois",
          description: "Parfait pour commencer",
          cta: "Commencer",
          features: {
            feature1: "Jusqu'à 10 projets",
            feature2: "Support de base",
            feature3: "1 GB de stockage",
          },
        },
        professional: {
          name: "Professionnel",
          price: "79",
          billingPeriod: "par mois",
          description: "Pour les équipes en croissance",
          cta: "Commencer l'Essai Gratuit",
          features: {
            feature1: "Projets illimités",
            feature2: "Support prioritaire",
            feature3: "100 GB de stockage",
            feature4: "Analytique avancée",
          },
        },
        enterprise: {
          name: "Entreprise",
          price: "Personnalisé",
          billingPeriod: "nous contacter",
          description: "Pour les grandes organisations",
          cta: "Contacter les Ventes",
          features: {
            feature1: "Tout ce qui est en Professionnel",
            feature2: "Support dédié",
            feature3: "Stockage illimité",
            feature4: "Intégrations personnalisées",
            feature5: "Garantie SLA",
          },
        },
      },
    },
    help: {
      heading: "Centre d'Aide",
      description:
        "Trouvez des réponses à vos questions. Parcourez nos rubriques d'aide ou recherchez ce dont vous avez besoin.",
      searchPlaceholder: "Rechercher des rubriques d'aide...",
      searchAriaLabel: "Rechercher le centre d'aide",
      clearSearchLabel: "Effacer la recherche",
      searchResults: "Trouvé {count} article(s) correspondant à votre recherche",
      noResults: "Aucun résultat trouvé",
      noResultsMessage: "Essayez un terme de recherche différent ou parcourez les catégories ci-dessous",
      clearSearchButton: "Effacer la Recherche",
      categories: {
        gettingStarted: {
          name: "Commencer",
          articles: {
            creating: "Créer Votre Premier Compte",
            creatingDesc: "Découvrez comment vous inscrire et commencer avec notre plateforme en quelques minutes.",
            firstSteps: "Vos Premiers Pas",
            firstStepsDesc: "Un guide rapide pour naviguer dans l'interface et comprendre les bases.",
            basics: "Bases de la Plateforme",
            basicsDesc: "Comprendre les concepts clés et les fonctionnalités essentielles pour tirer le meilleur parti de notre plateforme.",
          },
        },
        account: {
          name: "Compte",
          articles: {
            profile: "Gérer Votre Profil",
            profileDesc: "Mettez à jour vos informations personnelles, avatar et paramètres de compte.",
            password: "Mot de Passe & Authentification",
            passwordDesc: "Changez votre mot de passe et configurez l'authentification à deux facteurs pour plus de sécurité.",
            security: "Sécurité du Compte",
            securityDesc: "Conseils et meilleures pratiques pour protéger votre compte contre les accès non autorisés.",
          },
        },
        billing: {
          name: "Facturation",
          articles: {
            plans: "Comprendre Nos Plans",
            plansDesc: "Comparez les fonctionnalités et les tarifs entre les plans Démarrage, Professionnel et Entreprise.",
            payment: "Méthodes de Paiement",
            paymentDesc: "Ajoutez, mettez à jour ou supprimez les méthodes de paiement liées à votre compte.",
            invoices: "Factures & Reçus",
            invoicesDesc: "Consultez et téléchargez votre historique de facturation et vos reçus fiscaux.",
          },
        },
        technicalSupport: {
          name: "Support Technique",
          articles: {
            troubleshooting: "Dépannage des Problèmes Courants",
            troubleshootingDesc: "Solutions aux problèmes courants et messages d'erreur que vous pourriez rencontrer.",
            errors: "Comprendre les Messages d'Erreur",
            errorsDesc: "Explications de ce qui s'est mal passé et comment résoudre les codes d'erreur.",
            performance: "Performance & Optimisation",
            performanceDesc: "Conseils pour améliorer la vitesse, réduire la latence et optimiser votre expérience.",
          },
        },
      },
    },
  },
};
