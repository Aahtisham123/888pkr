/**
 * Copy for the site's information pages. Inline `[text](href)` markup renders as a link.
 */

export type InfoSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type InfoPage = {
  path: string;
  title: string;
  metaTitle: string;
  /** Keep under 144 characters. */
  description: string;
  schemaType: "AboutPage" | "ContactPage" | "WebPage";
  intro: string[];
  sections: InfoSection[];
};

const SITE_LINK = "[https://888pkrr.net.pk](/)";

export const aboutPage: InfoPage = {
  path: "/about-us",
  title: "About Us",
  metaTitle: "About Us",
  description:
    "Learn who runs 888PKR, why we publish honest guides on the 888PKR game app, and how we keep our information clear, simple and up to date.",
  schemaType: "AboutPage",
  intro: [
    "Welcome to [888PKR](/), an independent information site for players in Pakistan who want clear, honest answers about the 888PKR game app before they sign up, deposit or download anything.",
  ],
  sections: [
    {
      heading: "Who We Are",
      paragraphs: [
        "We are a small team of writers and mobile gaming enthusiasts from Pakistan. We test the apps we write about, read the bonus terms line by line, and try deposits and withdrawals with our own small amounts so we can explain how things really work.",
      ],
    },
    {
      heading: "What We Do",
      paragraphs: [
        "Our goal is simple: help you make an informed decision. On this site you will find easy guides on downloading the app, creating an account, logging in, claiming bonuses, using local payment methods and joining the agent program.",
      ],
      bullets: [
        "Step-by-step guides written in simple English.",
        "Honest pros and cons, including the real risks.",
        "Updates when features, bonuses or payment methods change.",
        "Tips on playing responsibly and setting a budget.",
      ],
    },
    {
      heading: "Our Promise",
      paragraphs: [
        "We never hide the downsides. Real-money gaming carries financial risk and is legally restricted in Pakistan, so we always say so plainly. We do not promise guaranteed income, and we encourage every reader to treat gaming as entertainment, not a job.",
      ],
    },
    {
      heading: "Independence",
      paragraphs: [
        "This website is not the official app, and it is not owned or operated by the app developer. We do not handle your deposits, withdrawals or account details. For account issues, please contact the app's own customer support.",
      ],
    },
  ],
};

export const contactPage: InfoPage = {
  path: "/contact-us",
  title: "Contact Us",
  metaTitle: "Contact Us",
  description:
    "Have a question, correction or feedback about 888PKR? Contact our team and we will get back to you as soon as possible.",
  schemaType: "ContactPage",
  intro: [
    "Have a question about [888PKR](/), spotted something out of date, or want to share your own experience with the app? We would love to hear from you.",
  ],
  sections: [
    {
      heading: "What You Can Contact Us About",
      bullets: [
        "Corrections or updates to any guide on this site.",
        "Feedback and suggestions for new topics.",
        "Sharing your honest review of the app.",
        "Business, advertising or partnership enquiries.",
      ],
    },
    {
      heading: "Account and Payment Issues",
      paragraphs: [
        "We are an independent information site, so we cannot access your game account, reset your password or process deposits and withdrawals. For these issues, please use the 24/7 customer support inside the app.",
      ],
    },
    {
      heading: "Response Time",
      paragraphs: [
        "We read every message and usually reply within two to three working days. Please never send us your password, OTP codes or banking details.",
      ],
    },
  ],
};

export const termsPage: InfoPage = {
  path: "/terms-and-conditions",
  title: "Terms and Conditions",
  metaTitle: "Terms and Conditions",
  description:
    "Read the terms and conditions for using the 888PKR information website, including age limits, acceptable use and liability.",
  schemaType: "WebPage",
  intro: [
    `These Terms and Conditions apply to your use of ${SITE_LINK}. By using this website, you agree to these terms. If you do not agree, please stop using the site.`,
  ],
  sections: [
    {
      heading: "Age Requirement",
      paragraphs: [
        "This website is intended only for people aged 18 and over. By using it, you confirm that you are at least 18 years old.",
      ],
    },
    {
      heading: "Use of Information",
      paragraphs: [
        "All content on this website is for general information and entertainment purposes only. It is not financial, legal or professional advice. You are responsible for checking the laws that apply to you before using any real-money app.",
      ],
    },
    {
      heading: "Acceptable Use",
      bullets: [
        "Do not use this website for any unlawful purpose.",
        "Do not try to disrupt, hack or damage the website.",
        "Do not copy or republish our content without permission.",
      ],
    },
    {
      heading: "Third-Party Apps and Links",
      paragraphs: [
        "This website may link to third-party apps or websites. We do not control them and are not responsible for their content, services, bonuses or payments. Any account you create with a third party is subject to its own terms.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "The text, design and layout of this website belong to us unless stated otherwise. Game names, logos and screenshots belong to their respective owners and are used for identification and review purposes only.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "We are not liable for any loss or damage, including financial loss, that results from using this website or any app mentioned on it. Real-money gaming carries risk, and you play at your own responsibility.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "We may update these terms from time to time. The latest version will always be available on this page, and continued use of the website means you accept the updated terms.",
      ],
    },
  ],
};

export const disclaimerPage: InfoPage = {
  path: "/disclaimer",
  title: "Disclaimer",
  metaTitle: "Disclaimer",
  description:
    "Important disclaimer for 888PKR: independent information only, no guaranteed earnings, 18+ only, and real-money gaming carries risk.",
  schemaType: "WebPage",
  intro: [
    `The information published on ${SITE_LINK} is provided in good faith for general information purposes only. Please read this disclaimer carefully before using the site.`,
  ],
  sections: [
    {
      heading: "Independent Website",
      paragraphs: [
        "This is an independent information website. It is not the official app, and it is not owned, operated or endorsed by the app developer or any gaming company.",
      ],
    },
    {
      heading: "No Guaranteed Earnings",
      paragraphs: [
        "Nothing on this website is a promise of income. Results from real-money games are uncertain, and you can lose the money you deposit. Never play with money you cannot afford to lose.",
      ],
    },
    {
      heading: "Legal Notice",
      paragraphs: [
        "Real-money gambling is legally restricted in Pakistan. It is your responsibility to understand and follow the laws that apply to you. We do not encourage anyone to break the law.",
      ],
    },
    {
      heading: "Accuracy of Information",
      paragraphs: [
        "We try to keep our guides accurate and up to date, but app features, bonuses, payment methods and rules can change without notice. We make no guarantee that all information is complete or current.",
      ],
    },
    {
      heading: "Responsible Gaming",
      paragraphs: [
        "This website is for adults aged 18 and over. If gaming stops being fun or starts affecting your money, family or health, please take a break and seek support.",
      ],
    },
  ],
};

export const privacyPage: InfoPage = {
  path: "/privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy",
  description:
    "Read the 888PKR privacy policy to learn what data this website collects, how it is used and the choices you have about your privacy.",
  schemaType: "WebPage",
  intro: [
    `Your privacy matters to us. This Privacy Policy explains what information ${SITE_LINK} collects when you visit, how we use it and the choices you have.`,
  ],
  sections: [
    {
      heading: "Information We Collect",
      bullets: [
        "Basic technical data such as browser type, device type and pages visited, collected through standard server logs.",
        "Any information you choose to send us, such as your name and email address when you contact us.",
      ],
    },
    {
      heading: "How We Use Information",
      bullets: [
        "To keep the website running, secure and fast.",
        "To understand which guides are useful and improve our content.",
        "To reply to your messages and questions.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This website may use cookies and similar technologies to remember preferences and measure traffic. You can block or delete cookies in your browser settings at any time.",
      ],
    },
    {
      heading: "Third-Party Services",
      paragraphs: [
        "When you follow a link to a third-party app or website, that service has its own privacy policy. We are not responsible for how third parties collect or use your data.",
      ],
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We take reasonable steps to protect the information we hold. However, no method of transmission over the internet is completely secure.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "This website is for adults aged 18 and over. We do not knowingly collect information from anyone under 18.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.",
      ],
    },
  ],
};
