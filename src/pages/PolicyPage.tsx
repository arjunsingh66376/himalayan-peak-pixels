// PolicyPage.tsx
// Place this file in: src/pages/PolicyPage.tsx
// Place your background image in: src/assets/nature-bg.jpg  (rename download.jpg)
// Add these routes in App.tsx:
//   <Route path="/shipping-info" element={<PolicyPage />} />
//   <Route path="/privacy-policy" element={<PolicyPage />} />
//   <Route path="/terms-conditions" element={<PolicyPage />} />

import { useLocation, useNavigate } from "react-router-dom";
import { Truck, Shield, FileText, ChevronRight, Leaf, Home } from "lucide-react";
import bgImage from "../assets/download1.jpg"; // ← rename your download.jpg to nature-bg.jpg

// ─────────────────────────────────────────────
//  CONTENT DATA
// ─────────────────────────────────────────────
const policies = {
  "/shipping-info": {
    icon: <Truck size={36} strokeWidth={1.5} />,
    title: "Shipping Information",
    subtitle: "From the Himalayas to your doorstep",
    sections: [
      {
        heading: "Delivery Timelines",
        items: [
          "Standard Delivery (5–7 business days): Available across India — FREE on orders above ₹499.",
          "Express Delivery (2–3 business days): Available in select metro cities for ₹99 extra.",
          "Same-Day Delivery: Available in Delhi NCR for orders placed before 12:00 PM.",
          "International Shipping: We ship to 20+ countries. Delivery takes 10–18 business days.",
        ],
      },
      {
        heading: "Shipping Charges",
        items: [
          "Orders below ₹499: ₹49 flat shipping fee across India.",
          "Orders above ₹499: FREE standard shipping.",
          "Bulk orders (20+ units): Custom shipping rates — contact sales@himalayancare.com.",
          "Remote / hilly areas may incur an additional surcharge of ₹30–₹60.",
        ],
      },
      {
        heading: "Order Processing",
        items: [
          "Orders are processed within 24–48 hours of payment confirmation.",
          "You will receive a tracking link via email and SMS once your order is dispatched.",
          "Orders placed on public holidays or weekends are processed on the next business day.",
          "Himalayan Care partners with Delhivery, Blue Dart, and India Post for reliable delivery.",
        ],
      },
      {
        heading: "Damaged or Lost Shipments",
        items: [
          "If your package arrives damaged, please photograph it and email us within 48 hours.",
          "Lost shipments are investigated within 5 business days; replacements dispatched free of charge.",
          "For perishable / herbal products, please check packaging condition before accepting delivery.",
        ],
      },
    ],
  },

  "/privacy-policy": {
    icon: <Shield size={36} strokeWidth={1.5} />,
    title: "Privacy Policy",
    subtitle: "Your trust is our most precious resource",
    sections: [
      {
        heading: "Information We Collect",
        items: [
          "Personal details: name, email address, phone number, and delivery address when you register or place an order.",
          "Usage data: pages visited, time spent, clicks, and device/browser information for analytics.",
          "Payment information is processed securely via Razorpay/Stripe — we never store card details.",
          "Cookies and similar tracking technologies to improve your browsing experience.",
        ],
      },
      {
        heading: "How We Use Your Data",
        items: [
          "To process orders, send confirmations, and provide customer support.",
          "To personalise your experience and recommend products based on your preferences.",
          "To send promotional emails and offers — you can unsubscribe at any time.",
          "To comply with legal obligations and prevent fraudulent transactions.",
        ],
      },
      {
        heading: "Data Sharing",
        items: [
          "We do NOT sell your personal data to third parties.",
          "Data may be shared with logistics partners solely to fulfil your orders.",
          "Aggregate anonymised analytics may be shared with marketing partners.",
          "We may disclose data if required by law or court order.",
        ],
      },
      {
        heading: "Your Rights",
        items: [
          "You may request a copy of all personal data we hold about you.",
          "You have the right to correct inaccurate information at any time.",
          "You may request deletion of your account and associated data.",
          "For any privacy concerns, contact privacy@himalayancare.com.",
        ],
      },
    ],
  },

  "/terms-conditions": {
    icon: <FileText size={36} strokeWidth={1.5} />,
    title: "Terms & Conditions",
    subtitle: "Simple rules for a fair partnership",
    sections: [
      {
        heading: "Acceptance of Terms",
        items: [
          "By accessing himalayan-care.com, you agree to these terms in full.",
          "If you do not agree, please discontinue use of our website immediately.",
          "We reserve the right to update these terms at any time; changes take effect upon posting.",
          "Continued use of the site after changes constitutes acceptance of the new terms.",
        ],
      },
      {
        heading: "Products & Pricing",
        items: [
          "All prices are listed in Indian Rupees (₹) and include applicable GST.",
          "We reserve the right to change prices without prior notice.",
          "Product images are for illustrative purposes; actual colour/texture may vary slightly.",
          "Himalayan Care does not guarantee the availability of any product at all times.",
        ],
      },
      {
        heading: "Returns & Refunds",
        items: [
          "Products can be returned within 7 days of delivery if unused and in original packaging.",
          "Perishable or opened herbal items cannot be returned for hygiene reasons.",
          "Refunds are processed within 5–7 business days to the original payment method.",
          "To initiate a return, email support@himalayancare.com with your order ID and reason.",
        ],
      },
      {
        heading: "Intellectual Property",
        items: [
          "All content on this site — text, images, logos — is the property of Himalayan Care.",
          "You may not reproduce, distribute, or commercially exploit any content without written permission.",
          "User-generated reviews may be displayed publicly on our platform.",
          "For partnership or licensing enquiries, contact us at legal@himalayancare.com.",
        ],
      },
    ],
  },
};

type PolicyKey = keyof typeof policies;

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
const PolicyPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const policy = policies[pathname as PolicyKey];

  // Fallback if route doesn't match
  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green-800 text-2xl font-semibold">
        Page not found.
      </div>
    );
  }

  const navLinks: { label: string; path: string }[] = [
    { label: "Shipping Info", path: "/shipping-info" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
  ];

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Soft overlay so text is readable without hiding the bg */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">

        {/* ── Back to Home ── */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-green-800 font-semibold text-sm border border-green-300 shadow-sm hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-200 group"
          >
            <Home size={15} className="group-hover:scale-110 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* ── Pill navigation (switch between pages) ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {navLinks.map(({ label, path }) => (
            <a
              key={path}
              href={path}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 shadow-sm
                ${pathname === path
                  ? "bg-green-700 text-white border-green-700 shadow-green-300"
                  : "bg-white/70 text-green-800 border-green-400 hover:bg-green-700 hover:text-white hover:border-green-700"
                }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Hero card ── */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-green-200/60 overflow-hidden mb-8">

          {/* Header strip */}
          <div className="bg-gradient-to-r from-green-800 to-green-600 px-8 py-10 text-white">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-white/20 rounded-2xl p-3">{policy.icon}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  {policy.title}
                </h1>
                <p className="text-green-100 mt-1 text-sm flex items-center gap-1">
                  <Leaf size={14} /> {policy.subtitle}
                </p>
              </div>
            </div>
            {/* Breadcrumb */}
            <p className="text-green-200 text-xs flex items-center gap-1 mt-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={12} />
              <span className="text-white">{policy.title}</span>
            </p>
          </div>

          {/* Sections */}
          <div className="px-8 py-10 space-y-8">
            {policy.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-green-800 text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-green-600 inline-block" />
                  {section.heading}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Footer note inside card */}
            <div className="mt-6 pt-6 border-t border-green-100 text-center text-xs text-gray-500">
              Last updated: April 2026 &nbsp;·&nbsp; Himalayan Care Pvt. Ltd. &nbsp;·&nbsp;
              <a href="mailto:support@himalayancare.com" className="text-green-700 hover:underline">
                support@himalayancare.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Quick links to other policies ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {navLinks
            .filter(({ path }) => path !== pathname)
            .map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-green-200 hover:border-green-600 hover:bg-white/90 transition-all group shadow-sm"
              >
                <p className="text-green-800 font-semibold text-sm group-hover:text-green-700">
                  {label}
                </p>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  Read more <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </a>
            ))}
        </div>

      </div>
    </div>
  );
};

export default PolicyPage;