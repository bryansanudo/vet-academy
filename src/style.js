const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    " font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full dark:text-white text-black",
  heading3:
    " font-poppins font-semibold  text-[18px] sm:text-[24] md:text-[32px] lg:leading-[76.8px] md:leading-[66.8px] w-full text-primary",
  headingForm:
    "font-poppins font-semibold  text-[18px] sm:text-[24] md:text-[32px] lg:leading-[76.8px] md:leading-[66.8px] w-full dark:text-white text-black",

  paragraph:
    "font-poppins font-normal  text-[18px] leading-[30.8px] max-w-[600px] dark:text-dimWhite mt-5",
  title: "font-semibold dark:text-white  text-[18px] leading-[23.4px] ",
  subtitle: "font-normal dark:text-dimWhite text-[16px] leading-[24px]",
  adminTitle: "font-semibold text-black  text-[18px] leading-[23.4px]",
  adminSubtitle: "font-normal text-black text-[16px] leading-[24px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  button:
    " hover:scale-105 duration-700 text-white text-[16px] font-semibold flex bg-primary  py-3 px-5 rounded-lg",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  vercel: '${darkMode ? "shadow-md shadow-white" : "shadow-xl shadow-black"}',
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1  flex-col`,
};

export default styles;
