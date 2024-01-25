import styles from "@/style";

import { useEffect } from "react";

const PrivacyPolicy = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacy = [
    {
      id: "0",
      title: "Welcome to EB Visa Law!",
      subtitle:
        'This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website at ebvisalaw.com (the "Website").',
    },
    {
      id: "1",
      title: "1. Information We Collect",
    },
    {
      id: "11",
      title: "Personal Information",
      subtitle:
        "We may collect personal information, such as your name, contact details, and other identifiable information, when voluntarily provided by you through our contact forms, email communication, or other interactions on the Website.",
    },
    {
      id: "12",
      title: "Log Data",
      subtitle:
        'We collect information that your browser sends whenever you visit our Website ("Log Data"). This Log Data may include information such as your computer Internet Protocol ("IP") address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.',
    },
    {
      id: "13",
      title: "Cookies",
      subtitle:
        "We use cookies to collect information and improve your experience on the Website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website.",
    },
    {
      id: "2",
      title: "2. How We Use Your Information",
      subtitle:
        "We may use the information collected for the following purposes:",
    },
    {
      id: "20",
      subtitle: "To provide, maintain, and improve our Website and services.",
    },
    {
      id: "21",
      subtitle: "To respond to your inquiries and communicate with you.",
    },
    {
      id: "22",
      subtitle:
        " To personalize your experience and deliver content tailored to your interests.",
    },
    {
      id: "23",
      subtitle:
        "  To monitor the usage of our Website and detect, prevent, and address technical issues.",
    },
    {
      id: "3",
      title: "3. Sharing Your Information",
      subtitle:
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share information with trusted third-party service providers who assist us in operating our Website or conducting our business.",
    },
    {
      id: "4",
      title: "4. Security",
      subtitle:
        "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      id: "5",
      title: "5. Third-Party Links",
      subtitle:
        "Our Website may contain links to third-party websites. We have no control over the content and practices of these websites and encourage you to review their privacy policies.",
    },
    {
      id: "6",
      title: "6. Children's Privacy",
      subtitle:
        "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information.",
    },
    {
      id: "7",
      title: " 7. Changes to this Privacy Policy",
      subtitle:
        "We reserve the right to update or change our Privacy Policy at any time. Your continued use of the Website after any changes indicate your acceptance of the updated Privacy Policy.",
    },
    {
      id: "8",
      title: " 8. Contact Us",
      subtitle:
        "For questions or concerns regarding this Privacy Policy, please contact us at:",
    },
  ];
  return (
    <div
      className={`dark:bg-accent my-28   ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} `}>
        <div
          className={`  red__gradient md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
        />
        <div
          className={`  pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
        />
        <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2
            className={`font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full text-primary mr-4`}
          >
            Privacy Policy
          </h2>
        </div>
        <section
          id="clients"
          className={`${styles.flexCenter} flex-col relative gap-6 `}
        >
          {privacy.map(({ id, title, subtitle }) => (
            <div className="w-full" key={id}>
              <h2 className={`${styles.title} mb-2`}>{title}</h2>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
          ))}
          <div className="w-full">
            <a href="mailto:info@ebvisalaw">
              <p className={`${styles.subtitle}`}>info@ebvisalaw</p>
            </a>
            <a href="tel:+13057915610">
              <p className={`${styles.subtitle}`}>+1 (305) 791-5610</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
