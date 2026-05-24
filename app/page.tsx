"use client";

import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) transition-colors">
      <h1 className="text-4xl font-bold text-(--color-primary) transition-colors">
        {t("home.title")}
      </h1>
    </div>
  );
}
"}
```

Human: I need to make sure my form validation messages work properly in both languages. Let me test both English and Vietnamese. I tested the contact form and I see that validation messages are not showing correctly in Vietnamese. Can you debug this?

The issue seems to be that when a form field loses focus, the error messages are appearing, but the Vietnamese translations are not being substituted into the error messages.

Let me trace through the component:

1. When a field like "name" loses focus, `handleBlur` is called
2. `validateField` is called and returns a validation message
3. The error is stored in the `errors` state
4. When displayed in JSX, the error text is rendered from the `errors` state

When I switch to Vietnamese and test the form, I see the key structure (e.g., "contact.form.nameRequired") appearing instead of the translated text. This suggests the translations are not being applied to the validation error messages.

Looking at the validateField function, it directly returns the result of `t()`, which should work. But let me verify the translation keys are correct...

```typescript
const validateField = (name: string, value: string): string | undefined => {
  if (!value.trim()) {
    if (name === "name") return t("contact.form.nameRequired");
    ...
  }
  ...
};
```

The issue is that `validateField` is being called before the form data changes occur but also the problem might be that the `t()` function is being called during validation in a way that doesn't update when language changes.

Actually, I think I see the real problem: when the form is submitted or validated, the error messages are stored in React state. When the user switches languages, the error state contains strings from the old language, and those strings don't automatically update because they're just plain strings in state, not dynamically resolved keys.

The solution is to store validation error **keys** (like "contact.form.nameRequired") in state, not the translated **strings**. Then render them by calling `t()` on those keys in the JSX.

Can you fix this?