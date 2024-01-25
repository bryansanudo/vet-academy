import styles from "@/style";

import { useEffect } from "react";

const TermsOfServices = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const terms = [
    {
      id: "0",
      title: "Welcome to EB Visa Law!",
      subtitle:
        'These Terms of Service ("Terms") govern your use of the EB Visa Law website at ebvisalaw.com (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Website.',
    },
    {
      id: "1",
      title: "1. Scope of Services",
      subtitle:
        "EB Visa Law provides immigration legal services and information through its Website. The content on the Website is for informational purposes only and does not constitute legal advice. Consult with our attorneys directly for personalized legal advice.",
    },
    {
      id: "2",
      title: "2. Attorney-Client Relationship",
      subtitle:
        "No attorney-client relationship is established by your use of the Website or by contacting EB Visa Law through the provided contact information unless explicitly agreed upon in writing. Confidential information should not be submitted through the Website.",
    },
    {
      id: "3",
      title: "Jurisdiction",
      subtitle:
        "The Website is operated from the state of Florida, and these Terms are governed by the laws of the state of Florida, without regard to its conflict of law principles.",
    },
    {
      id: "4",
      title: "4. Intellectual Property",
      subtitle:
        "All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of EB Visa Law and is protected by intellectual property laws. You may not reproduce, distribute, or display any part of the Website without prior written consent.",
    },
    {
      id: "5",
      title: "5. Privacy Policy",
      subtitle:
        "Your use of the Website is also governed by our Privacy Policy. Please review the Privacy Policy to understand our practices.",
    },
    {
      id: "6",
      title: "6. Disclaimers",
      subtitle:
        'The information on the Website is provided "as is" without any warranties, express or implied. EB Visa Law makes no representations or warranties regarding the accuracy, completeness, or reliability of the information.',
    },
    {
      id: "7",
      title: "7. Limitation of Liability",
      subtitle:
        "EB Visa Law, its partners, attorneys, and employees shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use the Website.",
    },
    {
      id: "8",
      title: "8. Modifications",
      subtitle:
        "EB Visa Law reserves the right to modify or update these Terms at any time without notice. Your continued use of the Website after any changes indicates your acceptance of the updated Terms.",
    },
    {
      id: "9",
      title: "9. Contact Information",
      subtitle:
        "For questions or concerns regarding these Terms, please contact us at:",
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
            Terms of Services
          </h2>
        </div>
        <section
          id="clients"
          className={`${styles.flexCenter} flex-col relative gap-6 `}
        >
          {terms.map(({ id, title, subtitle }) => (
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

export default TermsOfServices;
