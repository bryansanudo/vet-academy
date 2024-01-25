import styles from "@/style";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeedComponent = ({ darkMode }) => {
  const feed = [
    {
      guid: "a28cf09a-169e-4155-a4a0-1da5e04aadd5",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-changes-filing-location-for-form-i-907-for-pending-form-i-140",
      title:
        "USCIS Changes Filing Location for Form I-907 for Pending Form I-140",
      content_html:
        "U.S. Citizenship and Immigration Services will begin transitioning the filing location for Form I-907, Request for Premium Processing, when filed for a pending Form I-140, Immigrant Petition for Alien Workers, from the service centers to appropriate USCIS lockboxes on Dec. 15.",
      summary:
        "U.S. Citizenship and Immigration Services will begin transitioning the filing location for Form I-907, Request for Premium Processing, when filed for a pending Form I-140, Immigrant Petition for Alien Workers, from the service centers to appropriate USCIS lockboxes on Dec. 15.",
      date_published: "2023-12-13T19:56:46.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "08b41c54-ad0c-4a0d-aecd-3ca9d598d18c",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-fiscal-year-2024-h-1b-cap",
      title: "USCIS Reaches Fiscal Year 2024 H-1B Cap",
      content_html:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2024.We will send non-selection notices to registrants through their online accounts over the next few days. When we finish sending these non-selection notifications, the status for properly submitted registrations that we did not select for the FY 2024 H-1B numerical allocations will show:",
      summary:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2024.We will send non-selection notices to registrants through their online accounts over the next few days. When we finish sending these non-selection notifications, the status for properly submitted registrations that we did not select for the FY 2024 H-1B numerical allocations will show:",
      date_published: "2023-12-13T16:19:06.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "42ea6e70-6834-4f91-b022-18bbe6f99ace",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-federal-register-notice-announcing-the-extensions-of-re-registration-periods-for",
      title:
        "DHS Publishes Federal Register Notice Announcing the Extensions of Re-Registration Periods for Temporary Protected Status for El Salvador, Haiti, Honduras, Nepal, Nicaragua and Sudan",
      content_html:
        "Consistent with its September announcement, the Department of Homeland Security today published a Federal Register notice reiterating the extensions of the periods to re-register for Temporary Protected Status (TPS) under the existing designations of El Salvador, Haiti, Honduras, Nepal, Nicaragua, and Sudan.",
      summary:
        "Consistent with its September announcement, the Department of Homeland Security today published a Federal Register notice reiterating the extensions of the periods to re-register for Temporary Protected Status (TPS) under the existing designations of El Salvador, Haiti, Honduras, Nepal, Nicaragua, and Sudan.",
      date_published: "2023-12-13T14:51:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "65cf23e3-2285-4efa-a062-a6b63dc28b98",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-and-clarifies-policy-on-family-based-conditional-permanent-residence",
      title:
        "USCIS Updates Guidance and Clarifies Policy on Family-Based Conditional Permanent Residence",
      content_html:
        "U.S. Citizenship and Immigration Services is updating guidance on family-based conditional permanent residence in its Policy Manual. The update consolidates and updates guidance on eligibility, filing, and adjudication for Form I-751, Petition to Remove Conditions on Residence.",
      summary:
        "U.S. Citizenship and Immigration Services is updating guidance on family-based conditional permanent residence in its Policy Manual. The update consolidates and updates guidance on eligibility, filing, and adjudication for Form I-751, Petition to Remove Conditions on Residence.",
      date_published: "2023-12-12T14:27:10.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "804a26b9-56e9-4e16-bd9d-1554b360c667",
      url: "https://www.uscis.gov/newsroom/alerts/tools-outage",
      title: "Tools Outage",
      content_html:
        "USCIS will conduct system maintenance to the Contact Relationship Interface System (CRIS) on Wednesday, Dec. 13, 2023 at 11:50 p.m. through Thursday, Dec. 14, 2023 at 2:00 a.m. Eastern.",
      summary:
        "USCIS will conduct system maintenance to the Contact Relationship Interface System (CRIS) on Wednesday, Dec. 13, 2023 at 11:50 p.m. through Thursday, Dec. 14, 2023 at 2:00 a.m. Eastern.",
      date_published: "2023-12-11T15:41:25.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "84bdb8c2-ec35-4f2c-9689-eac4a69a64ce",
      url: "https://www.uscis.gov/newsroom/alerts/tampa-asylum-office-moving-to-new-location",
      title: "Tampa Asylum Office Moving to New Location",
      content_html: "USCIS’ Tampa Asylum Office is moving to a new location.",
      summary: "USCIS’ Tampa Asylum Office is moving to a new location.",
      date_published: "2023-11-27T17:41:30.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f74979b4-498e-48e3-863a-0ffd16b1bd59",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-expands-myprogress-to-form-i-485-and-form-i-821",
      title: "USCIS Expands myProgress to Form I-485 and Form I-821",
      content_html:
        "U.S. Citizenship and Immigration Services announced today that we are expanding myProgress (formerly known as personalized processing times) to Form I-821, Application for Temporary Protected Status, and Form I-485, Application to Register Permanent Residence or Adjust Status. myProgress will initially only be available for family-based or Afghan special immigrant I-485 applicants.",
      summary:
        "U.S. Citizenship and Immigration Services announced today that we are expanding myProgress (formerly known as personalized processing times) to Form I-821, Application for Temporary Protected Status, and Form I-485, Application to Register Permanent Residence or Adjust Status. myProgress will initially only be available for family-based or Afghan special immigrant I-485 applicants.",
      date_published: "2023-11-21T18:15:00.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "bcf9df61-3895-4fac-8351-702f999e8fd2",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-availability-of-additional-h-2b-visas-for-fiscal-year-2024",
      title:
        "USCIS Announces Availability of Additional H-2B Visas for Fiscal Year 2024",
      content_html:
        "Today, the Department of Homeland Security (DHS), through the U.S. Citizenship and Immigration Services (USCIS), and the Department of Labor (DOL) published a temporary final rule making available an additional 64,716 H-2B temporary nonagricultural worker visas for fiscal year (FY) 2024, on top of the statutory cap of 66,000 H-2B visas that are available each fiscal year.",
      summary:
        "Today, the Department of Homeland Security (DHS), through the U.S. Citizenship and Immigration Services (USCIS), and the Department of Labor (DOL) published a temporary final rule making available an additional 64,716 H-2B temporary nonagricultural worker visas for fiscal year (FY) 2024, on top of the statutory cap of 66,000 H-2B visas that are available each fiscal year.",
      date_published: "2023-11-16T16:56:02.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a639274d-09aa-4a0b-8459-7369ca62e2d4",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-establishes-family-reunification-parole-process-for-ecuador",
      title:
        "USCIS Establishes Family Reunification Parole Process for Ecuador",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced a Federal Register notice implementing a new family reunification parole (FRP) process for Ecuador, advancing the Biden-Harris Administration’s successful combination of expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced a Federal Register notice implementing a new family reunification parole (FRP) process for Ecuador, advancing the Biden-Harris Administration’s successful combination of expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      date_published: "2023-11-15T20:09:04.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2af724ea-71e8-44c5-8dc9-e225fb4befa2",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-changes-filing-location-for-form-i-907-with-form-i-140",
      title: "USCIS Changes Filing Location for Form I-907 With Form I-140",
      content_html:
        "U.S. Citizenship and Immigration Services will begin transitioning the filing location for Form I-907, Request for Premium Processing, when filed with Form I-140, Immigrant Petition for Alien Workers, from the service centers to the USCIS lockbox on Nov. 13.",
      summary:
        "U.S. Citizenship and Immigration Services will begin transitioning the filing location for Form I-907, Request for Premium Processing, when filed with Form I-140, Immigrant Petition for Alien Workers, from the service centers to the USCIS lockbox on Nov. 13.",
      date_published: "2023-11-09T14:43:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "71885021-69d4-4c27-9183-7b86b828b29d",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-for-special-immigrant-juvenile-petitions",
      title: "USCIS Updates Guidance for Special Immigrant Juvenile Petitions",
      content_html:
        "Effective immediately, we are updating guidance in the USCIS Policy Manual for adjudicating Special Immigrant Juvenile (SIJ) petitions.",
      summary:
        "Effective immediately, we are updating guidance in the USCIS Policy Manual for adjudicating Special Immigrant Juvenile (SIJ) petitions.",
      date_published: "2023-11-08T17:23:34.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "50215359-8116-4ca2-8f1a-9ada669f90fa",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-announces-countries-eligible-for-h-2a-and-h-2b-visa-programs-1",
      title: "DHS Announces Countries Eligible for H-2A and H-2B Visa Programs",
      content_html:
        "The Department of Homeland Security (DHS), in consultation with the Department of State (DOS), has announced the lists of countries whose nationals are eligible to participate in the H-2A and H-2B visa programs in the next year.",
      summary:
        "The Department of Homeland Security (DHS), in consultation with the Department of State (DOS), has announced the lists of countries whose nationals are eligible to participate in the H-2A and H-2B visa programs in the next year.",
      date_published: "2023-11-08T14:10:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "bf4cbbb1-1962-4c8e-9095-c70f249e5728",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-potomac-service-center-will-no-longer-accept-paper-responses",
      title:
        "USCIS Potomac Service Center Will No Longer Accept Paper Responses",
      content_html:
        "As of Aug. 21, 2023, the Potomac Service Center (PSC) has begun to move to a new facility in Camp Springs, MD, and can no longer receive paper responses to correspondence such as Notices of Intent to Deny (NOID), Notices of Intent to Revoke (NOIR), Intents to Deny (ITD), Requests for Evidence (RFE) or supporting documentation for filings currently pending at the PSC.",
      summary:
        "As of Aug. 21, 2023, the Potomac Service Center (PSC) has begun to move to a new facility in Camp Springs, MD, and can no longer receive paper responses to correspondence such as Notices of Intent to Deny (NOID), Notices of Intent to Revoke (NOIR), Intents to Deny (ITD), Requests for Evidence (RFE) or supporting documentation for filings currently pending at the PSC.",
      date_published: "2023-11-06T20:39:17.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "888bd667-8cf7-4e1f-8992-8cf1afadd7e6",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-to-supplement-h-2b-cap-with-nearly-65000-additional-visas-for-fy-2024",
      title:
        "DHS to Supplement H-2B Cap with Nearly 65,000 Additional Visas for FY 2024",
      content_html:
        "Today, the Department of Homeland Security (DHS), in consultation with the Department of Labor (DOL), announced that it expects to make an additional 64,716 H-2B temporary nonagricultural worker visas available for Fiscal Year (FY) 2024, on top of the congressionally mandated 66,000 H-2B visas that are available each fiscal year.",
      summary:
        "Today, the Department of Homeland Security (DHS), in consultation with the Department of Labor (DOL), announced that it expects to make an additional 64,716 H-2B temporary nonagricultural worker visas available for Fiscal Year (FY) 2024, on top of the congressionally mandated 66,000 H-2B visas that are available each fiscal year.",
      date_published: "2023-11-03T20:24:16.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2cc8ae8a-5804-4a1c-8484-ef602a30ae47",
      url: "https://www.uscis.gov/newsroom/alerts/certain-renewal-applicants-for-employment-authorization-to-receive-automatic-180-day-extension",
      title:
        "Certain Renewal Applicants for Employment Authorization to Receive Automatic 180 Day Extension",
      content_html:
        "Certain renewal applicants who have filed Form I-765, Application for Employment Authorization, qualify for an automatic extension of their expiring employment authorization and/or employment authorization documents (EADs) while their renewal application is pending.",
      summary:
        "Certain renewal applicants who have filed Form I-765, Application for Employment Authorization, qualify for an automatic extension of their expiring employment authorization and/or employment authorization documents (EADs) while their renewal application is pending.",
      date_published: "2023-10-27T19:03:05.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "da949b2a-18a2-4b13-a9ba-f3bf91462478",
      url: "https://www.uscis.gov/newsroom/alerts/filing-location-change-for-h-2a-h-2b-cnmi-related-form-i-129-petitions-form-i-129cw-petitions-and",
      title:
        "Filing Location Change for H-2A, H-2B, CNMI-related Form I-129 Petitions, Form I-129CW Petitions, and CNMI-related Form I-539 Applications",
      content_html:
        "Beginning Nov. 1, 2023, all H-2A, H-2B, CNMI-related Form I-129 petitions, Form I-129CW petitions, and CNMI-related Form I-539 applications must be filed directly at the Texas Service Center.",
      summary:
        "Beginning Nov. 1, 2023, all H-2A, H-2B, CNMI-related Form I-129 petitions, Form I-129CW petitions, and CNMI-related Form I-539 applications must be filed directly at the Texas Service Center.",
      date_published: "2023-10-27T12:57:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0e9c5e37-06d6-4db3-b54a-9be53ccbce3d",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-parole-by-two-years-for-certain-afghan-nationals-under-age-14",
      title:
        "USCIS Extends Parole by Two Years for Certain Afghan Nationals Under Age 14",
      content_html:
        "USCIS announced today that we will consider two-year extensions of the initial parole period on a case-by-case basis for certain Afghan nationals who:",
      summary:
        "USCIS announced today that we will consider two-year extensions of the initial parole period on a case-by-case basis for certain Afghan nationals who:",
      date_published: "2023-10-26T15:41:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b09ffbee-d114-4c3f-85a7-947493c088a8",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-on-eb-5-regional-center-program",
      title: "USCIS Updates Guidance on EB-5 Regional Center Program",
      content_html:
        "We are updating the USCIS Policy Manual with new guidance on the EB-5 Regional Center Program and new content on regional center designation and obligations, project applications, and direct and third-party promoters.",
      summary:
        "We are updating the USCIS Policy Manual with new guidance on the EB-5 Regional Center Program and new content on regional center designation and obligations, project applications, and direct and third-party promoters.",
      date_published: "2023-10-26T13:18:59.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "88afb634-1964-4f47-8670-bb85e686a50c",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-policy-guidance-regarding-the-2-year-foreign-residence-requirement-for-the-j",
      title:
        "USCIS Issues Policy Guidance Regarding the 2-Year Foreign Residence Requirement for the J Nonimmigrant Classification",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing policy guidance in the USCIS Policy Manual regarding the 2-year foreign residence requirement for the nonimmigrant exchange visitor (J) classification.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing policy guidance in the USCIS Policy Manual regarding the 2-year foreign residence requirement for the nonimmigrant exchange visitor (J) classification.",
      date_published: "2023-10-24T13:29:35.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "49184dc2-6e0d-4ae0-a0a9-a2a5a8502d9e",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-issues-proposed-rule-to-modernize-the-h-1b-specialty-occupation-worker-program",
      title:
        "DHS Issues Proposed Rule to Modernize the H-1B Specialty Occupation Worker Program",
      content_html:
        "Today, the Department of Homeland Security (DHS), through U.S. Citizenship and Immigration Services (USCIS), published a Notice of Proposed Rulemaking (NPRM) that would modernize the H-1B specialty occupation worker program by streamlining eligibility requirements, improving program efficiency, providing greater benefits and flexibilities for employers and workers, and strengthening integrity measures.",
      summary:
        "Today, the Department of Homeland Security (DHS), through U.S. Citizenship and Immigration Services (USCIS), published a Notice of Proposed Rulemaking (NPRM) that would modernize the H-1B specialty occupation worker program by streamlining eligibility requirements, improving program efficiency, providing greater benefits and flexibilities for employers and workers, and strengthening integrity measures.",
      date_published: "2023-10-20T19:35:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c795066a-8d2a-40d4-baaf-909cd9468ffe",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-clarifies-policy-on-l-1-petitions",
      title: "USCIS Clarifies Policy on L-1 Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services has issued policy guidance in the USCIS Policy Manual clarifying that a sole proprietorship may not file a petition on behalf of its owner because the sole proprietorship does not exist as a distinct legal entity separate and apart from the owner.",
      summary:
        "U.S. Citizenship and Immigration Services has issued policy guidance in the USCIS Policy Manual clarifying that a sole proprietorship may not file a petition on behalf of its owner because the sole proprietorship does not exist as a distinct legal entity separate and apart from the owner.",
      date_published: "2023-10-20T17:16:58.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f9bea6cd-90ca-4c8d-bceb-d925e24ef89b",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-family-reunification-parole-process-for-ecuador",
      title: "DHS Announces Family Reunification Parole Process for Ecuador",
      content_html:
        "The Department of Homeland Security (DHS) today announced a new family reunification parole process for certain nationals of Ecuador, advancing the Biden-Harris Administration’s effective strategy to combine expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      summary:
        "The Department of Homeland Security (DHS) today announced a new family reunification parole process for certain nationals of Ecuador, advancing the Biden-Harris Administration’s effective strategy to combine expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      date_published: "2023-10-18T19:50:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2294aeb1-1eea-4416-bc09-31dd8a78e439",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-h-2b-cap-for-first-half-of-fy-2024",
      title: "USCIS Reaches H-2B Cap for First Half of FY 2024",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the congressionally mandated cap on H-2B visas for temporary nonagricultural workers for the first half of fiscal year (FY) 2024.",
      summary:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the congressionally mandated cap on H-2B visas for temporary nonagricultural workers for the first half of fiscal year (FY) 2024.",
      date_published: "2023-10-13T20:27:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7408c59d-30b4-437f-8927-80f3e174cbeb",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-new-instructions-for-filing-asylum-applications-with-uscis-after-eoir-dismissal-or",
      title:
        "USCIS Issues New Instructions for Filing Asylum Applications with USCIS After EOIR Dismissal or Termination of Removal Proceedings",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing new instructions for asylum applications submitted by individuals whose removal proceedings were dismissed or terminated by the Executive Office for Immigration Review (EOIR).",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing new instructions for asylum applications submitted by individuals whose removal proceedings were dismissed or terminated by the Executive Office for Immigration Review (EOIR).",
      date_published: "2023-10-13T18:01:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1b757ec8-72d1-482d-b12a-408fdeef774c",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-launches-new-online-change-of-address-tool",
      title: "USCIS Launches New Online Change of Address Tool",
      content_html:
        "U.S. Citizenship and Immigration Services has launched a new Enterprise Change of Address (E-COA) self-service tool to allow customers with pending applications, petitions, or requests to update their address with USCIS more easily.",
      summary:
        "U.S. Citizenship and Immigration Services has launched a new Enterprise Change of Address (E-COA) self-service tool to allow customers with pending applications, petitions, or requests to update their address with USCIS more easily.",
      date_published: "2023-10-12T16:44:59.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f1641292-d736-4e2c-8985-7639586dde82",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-provides-additional-guidance-for-eb-5-required-investment-timeframe-and-investors-associated",
      title:
        "USCIS Provides Additional Guidance for EB-5 Required Investment Timeframe and Investors Associated with Terminated Regional Centers",
      content_html:
        "We are providing additional guidance on our interpretation of changes to the EB-5 program in the Immigration and Nationality Act (INA) made by the EB-5 Reform and Integrity Act of 2022 (RIA), specifically the required investment timeframe and how we treat investors who are associated with a terminated regional center.",
      summary:
        "We are providing additional guidance on our interpretation of changes to the EB-5 program in the Immigration and Nationality Act (INA) made by the EB-5 Reform and Integrity Act of 2022 (RIA), specifically the required investment timeframe and how we treat investors who are associated with a terminated regional center.",
      date_published: "2023-10-11T14:26:34.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "67579815-4ac5-4e04-8036-787bde00fa9b",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-announces-extension-and-redesignation-of-cameroon-for-temporary-protected-status",
      title:
        "Secretary Mayorkas Announces Extension and Redesignation of Cameroon for Temporary Protected Status",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of Cameroon for Temporary Protected Status (TPS) for 18 months, from December 8, 2023, through June 7, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Cameroon that prevent individuals from safely returning.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of Cameroon for Temporary Protected Status (TPS) for 18 months, from December 8, 2023, through June 7, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Cameroon that prevent individuals from safely returning.",
      date_published: "2023-10-06T15:43:53.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e656f0cd-2229-4c79-a0eb-baa3d658fd30",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-previews-federal-register-notice-extending-and-separately-redesignating-venezuela-for-temporary",
      title:
        "DHS Previews Federal Register Notice Extending and Separately Redesignating Venezuela for Temporary Protected Status",
      content_html:
        "Today, the Department of Homeland Security is previewing a Federal Register notice for an 18-month extension of Venezuela’s 2021 Temporary Protected Status (TPS) designation and a separate redesignation of Venezuela for TPS. The notice explains how to register for TPS under Venezuela’s redesignation and how to re-register for the extension. Applicants for TPS are eligible to apply for an Employment Authorization Document (EAD) during the duration of the TPS designation.",
      summary:
        "Today, the Department of Homeland Security is previewing a Federal Register notice for an 18-month extension of Venezuela’s 2021 Temporary Protected Status (TPS) designation and a separate redesignation of Venezuela for TPS. The notice explains how to register for TPS under Venezuela’s redesignation and how to re-register for the extension. Applicants for TPS are eligible to apply for an Employment Authorization Document (EAD) during the duration of the TPS designation.",
      date_published: "2023-09-29T20:45:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9551f834-a972-454e-a4c1-83748253e33f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-continues-fee-exemptions-and-expedited-processing-for-afghan-nationals",
      title:
        "USCIS Continues Fee Exemptions and Expedited Processing for Afghan Nationals",
      content_html:
        "Today, U.S. Citizenship and Immigration Services (USCIS) announced it is extending and expanding previously announced filing fee exemptions and expedited application processing for certain Afghan nationals.",
      summary:
        "Today, U.S. Citizenship and Immigration Services (USCIS) announced it is extending and expanding previously announced filing fee exemptions and expedited application processing for certain Afghan nationals.",
      date_published: "2023-09-29T18:24:44.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e7384ca0-1ee9-492b-b988-27ba9c8db363",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-awards-22-million-in-fy-2023-citizenship-and-integration-grants",
      title:
        "USCIS Awards $22 Million in FY 2023 Citizenship and Integration Grants",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today awarded over $22 million in grants to 65 organizations in 29 states to help prepare lawful permanent residents (LPRs) for naturalization.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today awarded over $22 million in grants to 65 organizations in 29 states to help prepare lawful permanent residents (LPRs) for naturalization.",
      date_published: "2023-09-28T19:01:38.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ea1eeec4-07f5-4832-8d7b-0ab0438dc04f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-increases-employment-authorization-document-validity-period-for-certain-categories",
      title:
        "USCIS Increases Employment Authorization Document Validity Period for Certain Categories",
      content_html:
        "We are updating guidance in the Policy Manual to increase the maximum validity period to 5 years for initial and renewal Employment Authorization Documents (EADs) for certain noncitizens who are employment authorized incident to status or circumstance, including those admitted as refugees, paroled as refugees, and granted asylum, as well as recipients of withholding of removal.",
      summary:
        "We are updating guidance in the Policy Manual to increase the maximum validity period to 5 years for initial and renewal Employment Authorization Documents (EADs) for certain noncitizens who are employment authorized incident to status or circumstance, including those admitted as refugees, paroled as refugees, and granted asylum, as well as recipients of withholding of removal.",
      date_published: "2023-09-27T18:13:04.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d9c77256-7985-4e68-b151-8e0e3dc59326",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-exempts-biometric-services-fee-for-all-form-i-539-applicants",
      title:
        "USCIS Exempts Biometric Services Fee for all Form I-539 Applicants",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced that it is exempting the biometric services fee for Form I-539, Application to Extend/Change Nonimmigrant Status.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced that it is exempting the biometric services fee for Form I-539, Application to Extend/Change Nonimmigrant Status.",
      date_published: "2023-09-25T16:46:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "4f5f8246-8ca3-4a21-85fe-6e6b043bd2d2",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-announces-extension-and-redesignation-of-afghanistan-for-temporary-protected",
      title:
        "Secretary Mayorkas Announces Extension and Redesignation of Afghanistan for Temporary Protected Status",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of Afghanistan for Temporary Protected Status (TPS) for 18 months, from November 21, 2023, to May 20, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Afghanistan that prevent individuals from safely returning.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of Afghanistan for Temporary Protected Status (TPS) for 18 months, from November 21, 2023, to May 20, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Afghanistan that prevent individuals from safely returning.",
      date_published: "2023-09-21T21:07:44.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c18fcbb5-2e3b-4745-9158-ffe64d6d1c37",
      url: "https://www.uscis.gov/newsroom/alerts/important-update-on-deferred-action-for-childhood-arrivals",
      title: "Important Update on Deferred Action for Childhood Arrivals",
      content_html:
        "On Sept. 13, 2023, the U.S. District Court for the Southern District of Texas issued a decision finding the Deferred Action for Childhood Arrivals (DACA) Final Rule unlawful and expanding the original July 16, 2021 injunction and order of vacatur to cover the Final Rule.",
      summary:
        "On Sept. 13, 2023, the U.S. District Court for the Southern District of Texas issued a decision finding the Deferred Action for Childhood Arrivals (DACA) Final Rule unlawful and expanding the original July 16, 2021 injunction and order of vacatur to cover the Final Rule.",
      date_published: "2023-09-18T16:06:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "6569d0e0-e225-4c47-b744-163ee79a6383",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-issues-proposed-rule-to-modernize-h-2-temporary-visa-programs-and-strengthen-worker-protections",
      title:
        "DHS Issues Proposed Rule to Modernize H-2 Temporary Visa Programs and Strengthen Worker Protections",
      content_html:
        "Today, the Department of Homeland Security (DHS) took steps to strengthen protections for temporary workers through the H-2A temporary agricultural and the H-2B temporary nonagricultural worker programs (H-2 programs).",
      summary:
        "Today, the Department of Homeland Security (DHS) took steps to strengthen protections for temporary workers through the H-2A temporary agricultural and the H-2B temporary nonagricultural worker programs (H-2 programs).",
      date_published: "2023-09-18T14:18:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a529a832-b4a0-45be-a2b2-dcf9812b32fd",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-to-celebrate-constitution-day-and-citizenship-day-by-welcoming-more-than-6900-new-citizens",
      title:
        "USCIS to Celebrate Constitution Day and Citizenship Day by Welcoming More Than 6,900 New Citizens",
      content_html:
        "U.S. Citizenship and Immigration Services will celebrate Constitution Day and Citizenship Day by welcoming more than 6,900 new citizens in over 130 naturalization ceremonies across the nation between Sept. 17 and Sept. 22.",
      summary:
        "U.S. Citizenship and Immigration Services will celebrate Constitution Day and Citizenship Day by welcoming more than 6,900 new citizens in over 130 naturalization ceremonies across the nation between Sept. 17 and Sept. 22.",
      date_published: "2023-09-15T15:39:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1f7585b1-5a0c-4eac-ba6a-e3a788e2872a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-clarifies-guidance-for-eb-1-eligibility-criteria",
      title: "USCIS Clarifies Guidance for EB-1 Eligibility Criteria",
      content_html:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in our Policy Manual to clarify the types of evidence that we may evaluate to determine eligibility for extraordinary ability (E11) and outstanding professor or researcher (E12) EB-1 immigrant visa classifications.",
      summary:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in our Policy Manual to clarify the types of evidence that we may evaluate to determine eligibility for extraordinary ability (E11) and outstanding professor or researcher (E12) EB-1 immigrant visa classifications.",
      date_published: "2023-09-12T13:35:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ce1ded58-76e6-42fe-8cef-bb44023b8d34",
      url: "https://www.uscis.gov/newsroom/alerts/affirmative-asylum-applicants-must-provide-interpreters-starting-sept-13",
      title:
        "Affirmative Asylum Applicants Must Provide Interpreters Starting Sept. 13",
      content_html:
        "U.S. Citizenship and Immigration Services reminds affirmative asylum applicants that, starting Sept. 13, 2023, you must bring an interpreter to your asylum interview if you are not fluent in English or wish to proceed with your interview in a language other than English.",
      summary:
        "U.S. Citizenship and Immigration Services reminds affirmative asylum applicants that, starting Sept. 13, 2023, you must bring an interpreter to your asylum interview if you are not fluent in English or wish to proceed with your interview in a language other than English.",
      date_published: "2023-09-11T18:40:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b5ea3eab-4f61-4b83-9fe1-2084c8939453",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-extends-tps-re-registration-periods-for-el-salvador-haiti-honduras-nepal-nicaragua-and-sudan-to",
      title:
        "DHS Extends TPS Re-registration Periods for El Salvador, Haiti, Honduras, Nepal, Nicaragua and Sudan to 18 Months",
      content_html:
        "The Department of Homeland Security (DHS) is extending from 60 days to 18 months the periods to re-register for Temporary Protected Status (TPS) under the designations of El Salvador, Haiti, Honduras, Nepal, Nicaragua and Sudan.",
      summary:
        "The Department of Homeland Security (DHS) is extending from 60 days to 18 months the periods to re-register for Temporary Protected Status (TPS) under the designations of El Salvador, Haiti, Honduras, Nepal, Nicaragua and Sudan.",
      date_published: "2023-09-08T18:39:07.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ab2be980-70e9-4652-9933-724ee49e4b11",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-south-sudan",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for South Sudan",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of South Sudan for Temporary Protected Status for 18 months, from November 4, 2023, through May 3, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in South Sudan that prevent individuals from safely returning.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension and redesignation of South Sudan for Temporary Protected Status for 18 months, from November 4, 2023, through May 3, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in South Sudan that prevent individuals from safely returning.",
      date_published: "2023-09-05T14:21:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d2c2e0bb-ddac-4658-8249-6385452a7044",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-voter-registration-guidance-for-naturalization-ceremonies",
      title:
        "USCIS Updates Voter Registration Guidance for Naturalization Ceremonies",
      content_html:
        "U.S. Citizenship and Immigration Services is updating guidance in our Policy Manual to provide clarification on voter registration access at our administrative naturalization ceremonies.",
      summary:
        "U.S. Citizenship and Immigration Services is updating guidance in our Policy Manual to provide clarification on voter registration access at our administrative naturalization ceremonies.",
      date_published: "2023-08-25T13:33:06.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "58ba0c5c-6642-42e1-9451-b9ad073ee95a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-guidance-for-the-sought-to-acquire-requirement-under-the-child-status",
      title:
        "USCIS Updates Policy Guidance for the “Sought to Acquire” Requirement Under the Child Status Protection Act",
      content_html:
        "We are updating the USCIS Policy Manual to clarify how we will apply the extraordinary circumstances exception to the “sought to acquire” requirement under the Child Status Protection Act (CSPA) in light of a Feb. 14, 2023, policy change.",
      summary:
        "We are updating the USCIS Policy Manual to clarify how we will apply the extraordinary circumstances exception to the “sought to acquire” requirement under the Child Status Protection Act (CSPA) in light of a Feb. 14, 2023, policy change.",
      date_published: "2023-08-24T13:43:15.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "938b64f0-dd5a-42b8-9171-957014ca00cd",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-launches-online-appointment-request-form",
      title: "USCIS Launches Online Appointment Request Form",
      content_html:
        "U.S. Citizenship and Immigration Services has launched a new online form for individuals, attorneys, and accredited representatives to request an in-person appointment at their local field office without having to call the USCIS Contact Center.",
      summary:
        "U.S. Citizenship and Immigration Services has launched a new online form for individuals, attorneys, and accredited representatives to request an in-person appointment at their local field office without having to call the USCIS Contact Center.",
      date_published: "2023-08-21T15:09:51.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7fc1384a-441b-41ec-b61c-2dcf1b2d8bfd",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-sudan",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for Sudan",
      content_html:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Sudan for 18 months, from October 20, 2023, through April 19, 2025, due to extraordinary and temporary conditions in Sudan that prevent individuals from safely returning.",
      summary:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Sudan for 18 months, from October 20, 2023, through April 19, 2025, due to extraordinary and temporary conditions in Sudan that prevent individuals from safely returning.",
      date_published: "2023-08-18T16:54:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1301b1ad-60dc-4c38-9c6d-be3f75cba749",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-ukraine",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for Ukraine",
      content_html:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Ukraine for 18 months, from October 20, 2023, through April 19, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Ukraine that prevent individuals from safely returning.",
      summary:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Ukraine for 18 months, from October 20, 2023, through April 19, 2025, due to ongoing armed conflict and extraordinary and temporary conditions in Ukraine that prevent individuals from safely returning.",
      date_published: "2023-08-18T13:20:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c0ed7e2f-822c-4d09-be36-0fd73fad5783",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reopens-field-office-in-havana-cuba",
      title: "USCIS Reopens Field Office in Havana, Cuba",
      content_html:
        "U.S. Citizenship and Immigration Services will reopen an international field office in Havana, Cuba.",
      summary:
        "U.S. Citizenship and Immigration Services will reopen an international field office in Havana, Cuba.",
      date_published: "2023-08-17T17:53:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d8e7ee01-241e-4044-bd63-ec0d9965621f",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-reopens-uscis-field-office-in-havana-cuba",
      title: "DHS Reopens USCIS Field Office in Havana, Cuba",
      content_html:
        "Today, the Department of Homeland Security (DHS), through the United States Citizenship and Immigration Services (USCIS), announced the reopening of an international field office in Havana, Cuba.",
      summary:
        "Today, the Department of Homeland Security (DHS), through the United States Citizenship and Immigration Services (USCIS), announced the reopening of an international field office in Havana, Cuba.",
      date_published: "2023-08-17T17:41:46.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f65d7fb9-a6dc-4a7d-ad99-72b4f80e0d0d",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-modernizes-cuban-and-haitian-family-reunification-parole-processes",
      title:
        "DHS Modernizes Cuban and Haitian Family Reunification Parole Processes",
      content_html:
        "The Department of Homeland Security (DHS) today published Federal Register notices that will update and modernize the Cuban and Haitian family reunification parole (FRP) processes, reflecting extensive feedback from stakeholders on these important programs.",
      summary:
        "The Department of Homeland Security (DHS) today published Federal Register notices that will update and modernize the Cuban and Haitian family reunification parole (FRP) processes, reflecting extensive feedback from stakeholders on these important programs.",
      date_published: "2023-08-10T14:41:11.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d2c03181-0d6d-4333-99ca-06cab6fd2116",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-receipts-process-for-form-i-129s",
      title: "USCIS Updates Receipts Process for Form I-129S",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced changes to the way we issue receipts for L-1 nonimmigrant intracompany transferees (executives, managers, or specialized knowledge professionals) under a previously approved blanket L petition.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced changes to the way we issue receipts for L-1 nonimmigrant intracompany transferees (executives, managers, or specialized knowledge professionals) under a previously approved blanket L petition.",
      date_published: "2023-08-03T15:25:44.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8419d140-62b1-4991-937f-3cdbdad08bf9",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-issues-guidance-for-stateless-noncitizens-in-the-united-states",
      title:
        "DHS Issues Guidance for Stateless Noncitizens in the United States",
      content_html:
        "The Department of Homeland Security (DHS), through U.S. Citizenship and Immigration Services (USCIS), today issued new guidance to assist stateless noncitizens in the United States who wish to obtain immigration benefits or have submitted other requests to USCIS.",
      summary:
        "The Department of Homeland Security (DHS), through U.S. Citizenship and Immigration Services (USCIS), today issued new guidance to assist stateless noncitizens in the United States who wish to obtain immigration benefits or have submitted other requests to USCIS.",
      date_published: "2023-08-01T16:22:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b1427975-2fb6-47fe-83dc-2baad5e9219c",
      url: "https://www.uscis.gov/newsroom/alerts/second-random-selection-from-previously-submitted-registrations-complete-for-fy-2024-h-1b-cap",
      title:
        "Second Random Selection from Previously Submitted Registrations Complete for FY 2024 H-1B Cap",
      content_html:
        "USCIS recently announced that we would need to select additional registrations to reach the FY 2024 H-1B numerical allocations.",
      summary:
        "USCIS recently announced that we would need to select additional registrations to reach the FY 2024 H-1B numerical allocations.",
      date_published: "2023-07-31T21:22:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "771ed550-1922-4c9f-a83d-6b6e75904fff",
      url: "https://www.uscis.gov/newsroom/alerts/invitations-to-be-issued-for-family-reunification-parole-process",
      title: "Invitations to be Issued for Family Reunification Parole Process",
      content_html:
        "The Department of State’s National Visa Center (NVC) will begin issuing invitations under the family reunification parole (FRP) processes for Colombia, El Salvador, Guatemala, and Honduras on July 31, 2023.",
      summary:
        "The Department of State’s National Visa Center (NVC) will begin issuing invitations under the family reunification parole (FRP) processes for Colombia, El Salvador, Guatemala, and Honduras on July 31, 2023.",
      date_published: "2023-07-28T18:22:37.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d266952e-9bcf-4b0a-ac11-08828a9d2c41",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-will-conduct-second-random-selection-from-previously-submitted-fy-2024-h-1b-cap-registrations",
      title:
        "USCIS Will Conduct Second Random Selection from Previously Submitted FY 2024 H-1B Cap Registrations",
      content_html:
        "In March 2023, USCIS conducted an initial random selection on properly submitted electronic registrations for the fiscal year (FY) 2024 H-1B cap, including for beneficiaries eligible for the advanced degree exemption. Only those petitioners with selected registrations for FY 2024 are eligible to file H-1B cap-subject petitions.",
      summary:
        "In March 2023, USCIS conducted an initial random selection on properly submitted electronic registrations for the fiscal year (FY) 2024 H-1B cap, including for beneficiaries eligible for the advanced degree exemption. Only those petitioners with selected registrations for FY 2024 are eligible to file H-1B cap-subject petitions.",
      date_published: "2023-07-27T16:33:53.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f57f3763-5897-4030-92c7-653d1d4d5522",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-publish-revised-form-i-9",
      title: "USCIS To Publish Revised Form I-9",
      content_html:
        "On Aug. 1, 2023, U.S. Citizenship and Immigration Services will publish a revised version of Form I-9, Employment Eligibility Verification.",
      summary:
        "On Aug. 1, 2023, U.S. Citizenship and Immigration Services will publish a revised version of Form I-9, Employment Eligibility Verification.",
      date_published: "2023-07-21T15:16:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e7867da3-2deb-41ce-a27e-5580b4570f58",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-manual-to-make-it-easier-to-identify-who-is-subject-to-the-public-charge-ground",
      title:
        "USCIS Updates Policy Manual to Make It Easier to Identify Who Is Subject to the Public Charge Ground of Inadmissibility",
      content_html:
        "We have incorporated important information regarding the categories of adjustment of status applicants to whom the public charge ground of inadmissibility applies from the appendices in Volume 8, Part G, of the USCIS Policy Manual, to Chapter 3, Applicability, to make it easier to identify whether the public charge ground of inadmissibility applies to a specific adjustment of status category.",
      summary:
        "We have incorporated important information regarding the categories of adjustment of status applicants to whom the public charge ground of inadmissibility applies from the appendices in Volume 8, Part G, of the USCIS Policy Manual, to Chapter 3, Applicability, to make it easier to identify whether the public charge ground of inadmissibility applies to a specific adjustment of status category.",
      date_published: "2023-07-20T13:33:54.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2f6b5d86-8715-42bc-ace8-376bf45eee6f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-visa-availability-approach-for-managing-form-i-526-petition-inventory",
      title:
        "USCIS Updates Visa Availability Approach for Managing Form I-526 Petition Inventory",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced it would update its visa availability approach for managing the inventory of Form I-526, Immigrant Petition by Alien Investor, to promote greater efficiency.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced it would update its visa availability approach for managing the inventory of Form I-526, Immigrant Petition by Alien Investor, to promote greater efficiency.",
      date_published: "2023-07-18T18:25:13.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0ce98e1b-3ec0-473b-9803-8970fed65dfe",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-expands-myprogress-to-form-i-765-and-form-i-131",
      title: "USCIS Expands myProgress to Form I-765 and Form I-131",
      content_html:
        "U.S. Citizenship and Immigration Services announced today that we are expanding myProgress (formerly known as personalized processing times) to Form I-765, Application for Employment Authorization, and Form I-131, Application for Travel Document.",
      summary:
        "U.S. Citizenship and Immigration Services announced today that we are expanding myProgress (formerly known as personalized processing times) to Form I-765, Application for Employment Authorization, and Form I-131, Application for Travel Document.",
      date_published: "2023-07-12T13:43:48.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "520d3570-e1f7-4b1a-8f13-6f0a7d472632",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-family-reunification-parole-processes-for-colombia-el-salvador-guatemala-and-honduras",
      title:
        "DHS Announces Family Reunification Parole Processes for Colombia, El Salvador, Guatemala, and Honduras",
      content_html:
        "The U.S. Department of Homeland Security (DHS) today announced the implementation of new family reunification parole (FRP) processes for Colombia, El Salvador, Guatemala, and Honduras, advancing the Biden-Harris Administration’s successful combination of expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      summary:
        "The U.S. Department of Homeland Security (DHS) today announced the implementation of new family reunification parole (FRP) processes for Colombia, El Salvador, Guatemala, and Honduras, advancing the Biden-Harris Administration’s successful combination of expanded lawful pathways and strengthened enforcement to reduce irregular migration.",
      date_published: "2023-07-07T15:53:54.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "86ff1a6a-ee44-4edf-9d2c-9c1dc8ab9736",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-launches-online-rescheduling-of-biometrics-appointments",
      title: "USCIS Launches Online Rescheduling of Biometrics Appointments",
      content_html:
        "On June 28, U.S. Citizenship and Immigration Services launched a new self-service tool allowing benefit requestors, and their attorneys and accredited representatives, to reschedule most biometric services appointments before the date of the appointment.",
      summary:
        "On June 28, U.S. Citizenship and Immigration Services launched a new self-service tool allowing benefit requestors, and their attorneys and accredited representatives, to reschedule most biometric services appointments before the date of the appointment.",
      date_published: "2023-07-06T17:45:38.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1406528b-8324-4bb6-a673-5ba61e63896d",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-celebrates-independence-day-2023-and-continues-its-commitment-to-naturalization",
      title:
        "USCIS Celebrates Independence Day 2023 and Continues its Commitment to Naturalization",
      content_html:
        "U.S. Citizenship and Immigration Services will celebrate Independence Day this year by welcoming more than 5,500 new citizens in more than 180 naturalization ceremonies between June 30 and July 7.",
      summary:
        "U.S. Citizenship and Immigration Services will celebrate Independence Day this year by welcoming more than 5,500 new citizens in more than 180 naturalization ceremonies between June 30 and July 7.",
      date_published: "2023-06-30T16:09:38.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "669343fe-0994-4c9b-9314-eb1e89bf6e25",
      url: "https://www.uscis.gov/newsroom/news-releases/temporary-protected-status-designations-for-el-salvador-honduras-nepal-and-nicaragua-reinstated-and",
      title:
        "Temporary Protected Status Designations for El Salvador, Honduras, Nepal and Nicaragua Reinstated and Extended for 18 Months",
      content_html:
        "The Department of Homeland Security (DHS) today posted Federal Register notices extending the Temporary Protected Status (TPS) designations of El Salvador, Honduras, Nepal, and Nicaragua for 18 months.",
      summary:
        "The Department of Homeland Security (DHS) today posted Federal Register notices extending the Temporary Protected Status (TPS) designations of El Salvador, Honduras, Nepal, and Nicaragua for 18 months.",
      date_published: "2023-06-20T14:37:25.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d6e045e8-3182-4223-a22e-eabd5e564c84",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-provides-guidance-on-employment-authorization-documents-based-on-compelling-circumstances",
      title:
        "USCIS Provides Guidance on Employment Authorization Documents Based on Compelling Circumstances",
      content_html:
        "U.S. Citizenship and Immigration Services today released policy guidance on the eligibility criteria for initial and renewal applications for employment authorization documents (EADs) in compelling circumstances based on existing regulatory requirements at 8 CFR 204.5(p).",
      summary:
        "U.S. Citizenship and Immigration Services today released policy guidance on the eligibility criteria for initial and renewal applications for employment authorization documents (EADs) in compelling circumstances based on existing regulatory requirements at 8 CFR 204.5(p).",
      date_published: "2023-06-14T15:09:21.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a1ba5689-5a99-4b68-8a19-7a4965b90089",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-rescinds-prior-administrations-termination-of-temporary-protected-status-designations-for-el",
      title:
        "DHS Rescinds Prior Administration’s Termination of Temporary Protected Status Designations for El Salvador, Honduras, Nepal, and Nicaragua",
      content_html:
        "Today, the Department of Homeland Security (DHS) announced the rescission of the prior Administration’s terminations of the Temporary Protected Status (TPS) designations for El Salvador, Honduras, Nepal, and Nicaragua and the extension of TPS for these for countries for 18 months.",
      summary:
        "Today, the Department of Homeland Security (DHS) announced the rescission of the prior Administration’s terminations of the Temporary Protected Status (TPS) designations for El Salvador, Honduras, Nepal, and Nicaragua and the extension of TPS for these for countries for 18 months.",
      date_published: "2023-06-13T21:21:31.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "952e4516-1f5a-4837-86d9-437c4b0f451f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-expands-premium-processing-for-applicants-seeking-to-change-into-f-m-or-j-nonimmigrant-status",
      title:
        "USCIS Expands Premium Processing for Applicants Seeking to Change into F, M, or J Nonimmigrant Status",
      content_html:
        "U.S. Citizenship and Immigration Services today announced the expansion of premium processing for applicants filing Form I-539, Application to Extend/Change Nonimmigrant Status, and seeking a change of status to F-1, F-2, M-1, M-2, J-1, or J-2 nonimmigrant status. Online filing of Form I-907, Request for Premium Processing Service, will also be available for these applicants.",
      summary:
        "U.S. Citizenship and Immigration Services today announced the expansion of premium processing for applicants filing Form I-539, Application to Extend/Change Nonimmigrant Status, and seeking a change of status to F-1, F-2, M-1, M-2, J-1, or J-2 nonimmigrant status. Online filing of Form I-907, Request for Premium Processing Service, will also be available for these applicants.",
      date_published: "2023-06-12T17:48:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2d9c2186-4246-464b-88a7-b77e4ecd5b4e",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-expansion-of-citizenship-and-integration-grant-program-and-the-opening-of-the-grant",
      title:
        "USCIS Announces Expansion of Citizenship and Integration Grant Program and the Opening of the Grant Application Period",
      content_html:
        "U.S. Citizenship and Immigration Services today announced the expansion of the Citizenship and Integration Grant Program, which provides funding for citizenship preparation programs in communities across the country.",
      summary:
        "U.S. Citizenship and Immigration Services today announced the expansion of the Citizenship and Integration Grant Program, which provides funding for citizenship preparation programs in communities across the country.",
      date_published: "2023-06-09T19:09:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "3c63c477-7584-43d1-8dc6-d916db1489e6",
      url: "https://www.uscis.gov/newsroom/alerts/certain-individuals-requesting-parole-can-now-file-form-i-131-online",
      title:
        "Certain Individuals Requesting Parole Can Now File Form I-131 Online",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced that certain individuals requesting parole based on urgent humanitarian reasons or significant public benefit can file Form I-131, Application for Travel Document, online.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced that certain individuals requesting parole based on urgent humanitarian reasons or significant public benefit can file Form I-131, Application for Travel Document, online.",
      date_published: "2023-06-09T15:12:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2a338176-c19f-44e3-9666-74d7ff62f796",
      url: "https://www.uscis.gov/newsroom/alerts/applications-for-re-parole-and-work-authorization-renewal-are-fee-exempt-for-certain-afghan",
      title:
        "Applications for Re-Parole and Work Authorization Renewal Are Fee-Exempt for Certain Afghan Nationals",
      content_html:
        "Effective June 9, 2023, through July 31, 2024, the Department of Homeland Security (DHS) will consider, on a case-by-case basis for urgent humanitarian reasons or significant public benefit, a two-year extension of the original parole period for Afghan parolees who have already applied for asylum or for adjustment to lawful permanent resident (LPR) status (such as adjustment of status as a special immigrant).",
      summary:
        "Effective June 9, 2023, through July 31, 2024, the Department of Homeland Security (DHS) will consider, on a case-by-case basis for urgent humanitarian reasons or significant public benefit, a two-year extension of the original parole period for Afghan parolees who have already applied for asylum or for adjustment to lawful permanent resident (LPR) status (such as adjustment of status as a special immigrant).",
      date_published: "2023-06-09T13:03:54.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "47a4a785-f563-4346-a9f0-a59676488806",
      url: "https://www.uscis.gov/newsroom/alerts/certain-afghan-parolees-are-employment-authorized-incident-to-parole",
      title:
        "Certain Afghan Parolees Are Employment Authorized Incident to Parole",
      content_html:
        "Effective June 8, 2023, certain additional Afghan parolees are employment authorized incident to parole.",
      summary:
        "Effective June 8, 2023, certain additional Afghan parolees are employment authorized incident to parole.",
      date_published: "2023-06-08T18:10:15.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9c9e2b88-286d-4346-9daa-5523914da8b1",
      url: "https://www.uscis.gov/newsroom/alerts/lockbox-filing-location-updates-webpage-expanded-to-include-service-center-filing-location-updates",
      title:
        "Lockbox Filing Location Updates Webpage Expanded to Include Service Center Filing Location Updates",
      content_html:
        "USCIS has updated the Lockbox Filing Location Updates page on our website to now include service center filing location updates as well: Lockbox and Service Center Filing Location Updates.",
      summary:
        "USCIS has updated the Lockbox Filing Location Updates page on our website to now include service center filing location updates as well: Lockbox and Service Center Filing Location Updates.",
      date_published: "2023-06-06T16:36:07.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9832c869-b91b-4e06-bdf2-607db21cda14",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-changes-filing-location-and-documentation-requirements-for-certain-affirmative-asylum",
      title:
        "USCIS Changes Filing Location and Documentation Requirements for Certain Affirmative Asylum Applications Using Form I-589",
      content_html:
        "Effective today, U.S. Citizenship and Immigration Services has changed the filing location for certain affirmative asylum applications submitted by mail.",
      summary:
        "Effective today, U.S. Citizenship and Immigration Services has changed the filing location for certain affirmative asylum applications submitted by mail.",
      date_published: "2023-05-31T14:51:13.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f1218efc-a0e1-4861-b77f-37b9ee95e13b",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-review-process-for-the-processes-for-cubans-haitians-nicaraguans-and-venezuelans",
      title:
        "USCIS Updates Review Process for the Processes for Cubans, Haitians, Nicaraguans, and Venezuelans",
      content_html:
        "The U.S. government is granting advance travel authorization for up to 30,000 noncitizens each month to come to the United States to seek parole on a case-by-case basis under the processes for Cubans, Haitians, Nicaraguans, and Venezuelans.",
      summary:
        "The U.S. government is granting advance travel authorization for up to 30,000 noncitizens each month to come to the United States to seek parole on a case-by-case basis under the processes for Cubans, Haitians, Nicaraguans, and Venezuelans.",
      date_published: "2023-05-18T14:37:48.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1f5205a1-f4c9-4cac-a101-8c966483ebc5",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-celebrates-public-service-recognition-week-0",
      title: "USCIS Celebrates Public Service Recognition Week",
      content_html:
        "U.S. Citizenship and Immigration Services is honoring its dedicated workforce during Public Service Recognition Week, May 7-13.",
      summary:
        "U.S. Citizenship and Immigration Services is honoring its dedicated workforce during Public Service Recognition Week, May 7-13.",
      date_published: "2023-05-08T15:51:32.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "75f37797-3e17-4cd8-8fba-b3f9c2c5c759",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-providing-documents-after-notice-of-immigration-judge-and-bia-decisions-about-immigration",
      title:
        "USCIS Providing Documents After Notice of Immigration Judge and BIA Decisions About Immigration Status",
      content_html:
        "We now are affirmatively creating and providing documented evidence of their status to certain new asylees and lawful permanent residents upon our receiving notification that an immigration judge or the Board of Immigration Appeals (BIA) has granted status.",
      summary:
        "We now are affirmatively creating and providing documented evidence of their status to certain new asylees and lawful permanent residents upon our receiving notification that an immigration judge or the Board of Immigration Appeals (BIA) has granted status.",
      date_published: "2023-05-04T14:34:54.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "12ae8e25-bc64-420a-8066-84874d3c41e5",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-extends-and-expands-employment-authorization-for-hong-kong-residents-covered-by-ded",
      title:
        "USCIS Extends and Expands Employment Authorization for Hong Kong Residents Covered by DED",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today posted a Federal Register notice on the extension and expansion of eligibility for Deferred Enforced Departure (DED) for Hong Kong residents.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today posted a Federal Register notice on the extension and expansion of eligibility for Deferred Enforced Departure (DED) for Hong Kong residents.",
      date_published: "2023-05-03T12:56:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ef5cec31-c072-4b68-ae79-973e1ed7ae0e",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-clarifies-guidance-on-citizenship-and-naturalization-for-adopted-children",
      title:
        "USCIS Clarifies Guidance on Citizenship and Naturalization for Adopted Children",
      content_html:
        "Effective immediately, we are updating Volumes 5 and 12 of the USCIS Policy Manual to clarify how U.S. citizenship and naturalization provisions apply to adopted children.",
      summary:
        "Effective immediately, we are updating Volumes 5 and 12 of the USCIS Policy Manual to clarify how U.S. citizenship and naturalization provisions apply to adopted children.",
      date_published: "2023-04-21T14:09:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c828ed26-e1e0-4ee7-b34f-ee1881a0c01d",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-releases-new-strategic-plan-aimed-at-strengthening-a-diverse-workforce",
      title:
        "USCIS Releases New Strategic Plan Aimed at Strengthening a Diverse Workforce",
      content_html:
        "U.S. Citizenship and Immigration Services today released its 2023-2026 Diversity, Equity, Inclusion and Accessibility (DEIA) Strategic Plan, marking the agency’s first comprehensive strategy to incorporate a culture of DEIA principles as a foundational element of its daily work.",
      summary:
        "U.S. Citizenship and Immigration Services today released its 2023-2026 Diversity, Equity, Inclusion and Accessibility (DEIA) Strategic Plan, marking the agency’s first comprehensive strategy to incorporate a culture of DEIA principles as a foundational element of its daily work.",
      date_published: "2023-04-20T14:09:39.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f842f2a3-d080-4b5a-a6ab-a0b02fd067c2",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-temporary-suspension-of-biometrics-submission-for-certain-form-i-539-applicants",
      title:
        "USCIS Extends Temporary Suspension of Biometrics Submission for Certain Form I-539 Applicants",
      content_html:
        "USCIS has extended the temporary suspension of the biometrics submission requirement for certain applicants filing Form I-539, Application to Extend/Change Nonimmigrant Status, requesting an extension of stay in or change of status to H-4, L-2, or E nonimmigrant status.",
      summary:
        "USCIS has extended the temporary suspension of the biometrics submission requirement for certain applicants filing Form I-539, Application to Extend/Change Nonimmigrant Status, requesting an extension of stay in or change of status to H-4, L-2, or E nonimmigrant status.",
      date_published: "2023-04-19T14:02:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0e601e8b-b82e-454d-a836-7292bdc0f57f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-guidance-on-safe-mailing-address-and-case-handling-procedures-for-certain",
      title:
        "USCIS Updates Policy Guidance on Safe Mailing Address and Case Handling Procedures for Certain Protected Persons",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is updating policy guidance in the USCIS Policy Manual to provide guidance on mailing address procedures for persons eligible for and recipients of victim-based immigration relief, specifically Violence Against Women Act (VAWA) self-petitioners as well as those who are seeking or currently hold T or U nonimmigrant status (protected persons).",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is updating policy guidance in the USCIS Policy Manual to provide guidance on mailing address procedures for persons eligible for and recipients of victim-based immigration relief, specifically Violence Against Women Act (VAWA) self-petitioners as well as those who are seeking or currently hold T or U nonimmigrant status (protected persons).",
      date_published: "2023-04-11T18:47:22.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7782fc12-1334-41d0-9ba6-91e6908984eb",
      url: "https://www.uscis.gov/newsroom/alerts/employers-may-file-h-2b-petitions-for-fy-2023-late-second-half-returning-workers",
      title:
        "Employers May File H-2B Petitions for FY 2023 Late Second Half Returning Workers",
      content_html:
        "Starting April 13, 2023, USCIS will begin accepting petitions for workers for the late second half of fiscal year (FY) 2023, requesting employment start dates from May 15, 2023, to Sept. 30, 2023 under the H-2B supplemental cap temporary final rule.",
      summary:
        "Starting April 13, 2023, USCIS will begin accepting petitions for workers for the late second half of fiscal year (FY) 2023, requesting employment start dates from May 15, 2023, to Sept. 30, 2023 under the H-2B supplemental cap temporary final rule.",
      date_published: "2023-04-10T16:40:16.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a145c5af-72f0-401b-90a0-669a58d7cef6",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-on-administrative-naturalization-ceremony-venues",
      title:
        "USCIS Updates Guidance on Administrative Naturalization Ceremony Venues",
      content_html:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in the USCIS Policy Manual to clarify the types of venues USCIS may use for administrative naturalization ceremonies.",
      summary:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in the USCIS Policy Manual to clarify the types of venues USCIS may use for administrative naturalization ceremonies.",
      date_published: "2023-04-04T13:41:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1d88e355-04df-42a7-9b72-2302cb3a1f20",
      url: "https://www.uscis.gov/newsroom/alerts/cap-reached-for-additional-returning-worker-h-2b-visas-for-the-early-second-half-of-fy-2023",
      title:
        "Cap Reached for Additional Returning Worker H-2B Visas for the Early Second Half of FY 2023",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the cap for the additional 16,500 H-2B visas made available for returning workers for the early second half of fiscal year (FY) 2023 with start dates from April 1, 2023 to May 14, 2023, under the FY 2023 H-2B supplemental visa temporary final rule.",
      summary:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the cap for the additional 16,500 H-2B visas made available for returning workers for the early second half of fiscal year (FY) 2023 with start dates from April 1, 2023 to May 14, 2023, under the FY 2023 H-2B supplemental visa temporary final rule.",
      date_published: "2023-03-31T20:33:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "6011354e-02b1-427c-bd18-8f95d8d20261",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-guidance-on-self-selecting-a-gender-marker-on-forms-and-documents",
      title:
        "USCIS Updates Policy Guidance on Self-Selecting a Gender Marker on Forms and Documents",
      content_html:
        "U.S. Citizenship and Immigration Services is updating policy guidance in the USCIS Policy Manual to clarify that, effective immediately, USCIS will accept the self-identified gender marker for individuals requesting immigration benefits",
      summary:
        "U.S. Citizenship and Immigration Services is updating policy guidance in the USCIS Policy Manual to clarify that, effective immediately, USCIS will accept the self-identified gender marker for individuals requesting immigration benefits",
      date_published: "2023-03-31T18:53:23.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0cb94482-01b5-4d42-ade9-cd444a0c2d89",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-removes-60-day-rule-for-civil-surgeon-signatures-on-form-i-693",
      title:
        "USCIS Removes 60-Day Rule for Civil Surgeon Signatures on Form I-693",
      content_html:
        "U.S. Citizenship and Immigration Services is removing the requirement that civil surgeons sign Form I-693, Report of Immigration Medical Examination and Vaccination Record, no more than 60 days before an individual applies for an underlying immigration benefit, including Form I-485, Application to Register Permanent Residence or Adjust Status.",
      summary:
        "U.S. Citizenship and Immigration Services is removing the requirement that civil surgeons sign Form I-693, Report of Immigration Medical Examination and Vaccination Record, no more than 60 days before an individual applies for an underlying immigration benefit, including Form I-485, Application to Register Permanent Residence or Adjust Status.",
      date_published: "2023-03-31T13:12:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "90521359-d790-4a78-868e-f9cc7be8b51e",
      url: "https://www.uscis.gov/newsroom/alerts/new-filing-address-for-courier-delivery-services-to-uscis-phoenix-lockbox",
      title:
        "New Filing Address for Courier Delivery Services to USCIS Phoenix Lockbox",
      content_html:
        "U.S. Citizenship and Immigration Services has changed the filing location for courier delivery services to the Phoenix lockbox.  The facility has moved to Tempe, Arizona, and the filing location for courier delivery services for UPS, FedEx, and DHL has also changed to Tempe. The filing location remains the same when using the U.S. Postal Service.",
      summary:
        "U.S. Citizenship and Immigration Services has changed the filing location for courier delivery services to the Phoenix lockbox.  The facility has moved to Tempe, Arizona, and the filing location for courier delivery services for UPS, FedEx, and DHL has also changed to Tempe. The filing location remains the same when using the U.S. Postal Service.",
      date_published: "2023-03-30T17:03:22.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "25d67c55-ca39-4be3-8524-c472d3140ea6",
      url: "https://www.uscis.gov/newsroom/alerts/provision-allowing-special-immigrant-juveniles-to-file-form-i-360-in-person-before-their-21st",
      title:
        "Provision Allowing Special Immigrant Juveniles to File Form I-360 in Person Before Their 21st Birthday",
      content_html:
        "Petitioners for Special Immigrant Juvenile (SIJ) classification (or their representatives) may schedule an appointment within two weeks before their 21st birthday to file Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, in person.",
      summary:
        "Petitioners for Special Immigrant Juvenile (SIJ) classification (or their representatives) may schedule an appointment within two weeks before their 21st birthday to file Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, in person.",
      date_published: "2023-03-30T15:22:04.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1a3fc9b2-dae9-4aba-85ed-400c8bf5b55c",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-on-time-frames-for-paper-based-filings-and-responses-ending-on-saturdays",
      title:
        "USCIS Updates Policy on Time Frames for Paper-Based Filings and Responses Ending on Saturdays, Sundays, or Federal Holidays",
      content_html:
        "We are updating the USCIS Policy Manual to address situations when the last day to file a benefit request or respond to a USCIS action falls on a Saturday, Sunday, or federal holiday.",
      summary:
        "We are updating the USCIS Policy Manual to address situations when the last day to file a benefit request or respond to a USCIS action falls on a Saturday, Sunday, or federal holiday.",
      date_published: "2023-03-29T13:43:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "170b7ce2-8fcd-455d-8324-6d491bbe9f84",
      url: "https://www.uscis.gov/newsroom/alerts/fy-2024-h-1b-cap-season-updates",
      title: "FY 2024 H-1B Cap Season Updates",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) has received enough electronic registrations during the initial registration period to reach the fiscal year (FY) 2024 H-1B numerical allocations (H-1B cap), including the advanced degree exemption (master’s cap).",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) has received enough electronic registrations during the initial registration period to reach the fiscal year (FY) 2024 H-1B numerical allocations (H-1B cap), including the advanced degree exemption (master’s cap).",
      date_published: "2023-03-27T18:34:00.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b3bd5f50-4565-4b39-b094-a91620547759",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-announces-end-of-covid-related-flexibilities",
      title: "USCIS Announces End of COVID-Related Flexibilities",
      content_html:
        "U.S. Citizenship and Immigration Services today announced that certain flexibilities it first announced in March 2020, to address the COVID-19 pandemic will end on March 23, 2023.",
      summary:
        "U.S. Citizenship and Immigration Services today announced that certain flexibilities it first announced in March 2020, to address the COVID-19 pandemic will end on March 23, 2023.",
      date_published: "2023-03-23T13:43:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "6cad8835-c2e7-438c-bf27-aa3c477da2f8",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-form-and-policy-updates-for-applying-for-naturalization-based-on-military-service",
      title:
        "USCIS Form and Policy Updates for Applying for Naturalization Based on Military Service",
      content_html:
        "U.S. Citizenship and Immigration Services today announced updated policy guidance in the USCIS Policy Manual to clarify and conform with the revision of Form N-426, Request for Certification of Military or Naval Service.",
      summary:
        "U.S. Citizenship and Immigration Services today announced updated policy guidance in the USCIS Policy Manual to clarify and conform with the revision of Form N-426, Request for Certification of Military or Naval Service.",
      date_published: "2023-03-22T14:10:26.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "00dd6abc-14e5-4806-b876-6fbebd84e0fd",
      url: "https://www.uscis.gov/newsroom/alerts/update-to-filing-location-for-u-nonimmigrant-based-form-i-485",
      title: "Update to Filing Location for U Nonimmigrant-Based Form I-485",
      content_html:
        "U nonimmigrants applying to become lawful permanent residents must now file Form I-485, Application to Register Permanent Residence or Adjust Status, only at the Nebraska Service Center and not at the Vermont Service Center.",
      summary:
        "U nonimmigrants applying to become lawful permanent residents must now file Form I-485, Application to Register Permanent Residence or Adjust Status, only at the Nebraska Service Center and not at the Vermont Service Center.",
      date_published: "2023-03-20T13:32:27.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a05e9ee5-80ac-4619-970f-8ccaf773f657",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-relocates-lockbox-from-phoenix-to-tempe-arizona-for-courier-delivery-services",
      title:
        "USCIS Relocates Lockbox From Phoenix To Tempe, Arizona for Courier Delivery Services",
      content_html:
        "On March 31, applicants and petitioners filing at the Phoenix lockbox will see a new filing location for courier delivery services such as UPS, FedEx, and DHL.",
      summary:
        "On March 31, applicants and petitioners filing at the Phoenix lockbox will see a new filing location for courier delivery services such as UPS, FedEx, and DHL.",
      date_published: "2023-03-17T14:44:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b9892b05-501d-42d0-8549-49366f348f40",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-announces-additional-mail-delivery-process-for-receiving-adit-stamp",
      title:
        "USCIS Announces Additional Mail Delivery Process for Receiving ADIT Stamp",
      content_html:
        "Lawful permanent residents may receive temporary evidence of their lawful permanent resident status by mail rather than physically visiting a field office to receive an Alien Documentation, Identification and Telecommunication (ADIT) stamp (also known as an I-551 stamp).",
      summary:
        "Lawful permanent residents may receive temporary evidence of their lawful permanent resident status by mail rather than physically visiting a field office to receive an Alien Documentation, Identification and Telecommunication (ADIT) stamp (also known as an I-551 stamp).",
      date_published: "2023-03-16T18:56:50.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "404cac00-8847-4043-baa2-4206b0cfceb2",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-removes-biometrics-requirement-for-form-i-526e-petitioners",
      title: "USCIS Removes Biometrics Requirement for Form I-526E Petitioners",
      content_html:
        "Beginning on March 15, 2023, U.S. Citizenship and Immigration Services is removing the biometrics submission requirement and $85 fee requirement for petitioners filing Form I-526E, Immigrant Petition by Regional Center Investor.",
      summary:
        "Beginning on March 15, 2023, U.S. Citizenship and Immigration Services is removing the biometrics submission requirement and $85 fee requirement for petitioners filing Form I-526E, Immigrant Petition by Regional Center Investor.",
      date_published: "2023-03-15T19:15:35.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a795f656-2501-4c4c-817f-38b0105d76eb",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-rule-providing-interpreters-at-affirmative-asylum-interviews",
      title:
        "USCIS Extends Rule Providing Interpreters at Affirmative Asylum Interviews",
      content_html:
        "U.S. Citizenship and Immigration Services announced today a fourth extension to a temporary final rule (TFR) requiring use of a USCIS interpreter at certain affirmative asylum interviews.",
      summary:
        "U.S. Citizenship and Immigration Services announced today a fourth extension to a temporary final rule (TFR) requiring use of a USCIS interpreter at certain affirmative asylum interviews.",
      date_published: "2023-03-15T16:13:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5efb9dd2-bb3e-4796-baa3-9481e5e1a02b",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-guidance-on-analyzing-employers-ability-to-pay-wages",
      title:
        "USCIS Issues Guidance on Analyzing Employers’ Ability to Pay Wages",
      content_html:
        "U.S. Citizenship and Immigration Services today issued policy guidance on how we analyze an employer’s ability to pay the proffered wage for immigrant petitions in certain first, second, and third preference employment-based immigrant visa classifications.",
      summary:
        "U.S. Citizenship and Immigration Services today issued policy guidance on how we analyze an employer’s ability to pay the proffered wage for immigrant petitions in certain first, second, and third preference employment-based immigrant visa classifications.",
      date_published: "2023-03-15T13:43:07.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "3b4b8dd2-d685-4a8b-96e5-d4fe611f2c4f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-processing-times-for-orphan-and-hague-adoption-cases",
      title: "USCIS Processing Times for Orphan and Hague Adoption Cases",
      content_html:
        "On Nov. 2, 2022 USCIS announced a change in our method for calculating orphan and Hague adoption case processing times.",
      summary:
        "On Nov. 2, 2022 USCIS announced a change in our method for calculating orphan and Hague adoption case processing times.",
      date_published: "2023-03-13T13:34:35.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "392001b6-7082-4b73-a6b2-1219d288197d",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-federal-register-notice-extending-and-redesignating-somalia-for-temporary-protected",
      title:
        "DHS Publishes Federal Register Notice Extending and Redesignating Somalia for Temporary Protected Status",
      content_html:
        "The Department of Homeland Security today published a Federal Register notice extending and redesignating Somalia for Temporary Protected Status (TPS) for 18 months, from March 18, 2023, through September 17, 2024.",
      summary:
        "The Department of Homeland Security today published a Federal Register notice extending and redesignating Somalia for Temporary Protected Status (TPS) for 18 months, from March 18, 2023, through September 17, 2024.",
      date_published: "2023-03-10T14:39:51.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e9e143d0-80c9-4618-9b1b-0b0da11ab5c5",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-provides-guidance-on-program-for-international-entrepreneurs",
      title:
        "USCIS Provides Guidance on Program for International Entrepreneurs",
      content_html:
        "U.S. Citizenship and Immigration Services has issued comprehensive guidance on parole for international entrepreneurs.",
      summary:
        "U.S. Citizenship and Immigration Services has issued comprehensive guidance on parole for international entrepreneurs.",
      date_published: "2023-03-10T13:23:38.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "bcbf6bb9-c556-4594-a9d7-609e055180ee",
      url: "https://www.uscis.gov/newsroom/alerts/new-entrepreneur-resources-available-on-uscis-website",
      title: "New Entrepreneur Resources Available on USCIS Website",
      content_html:
        "U.S. Citizenship and Immigration Services has published additional online resources on uscis.gov to provide an overview of some of the temporary and permanent pathways for noncitizen entrepreneurs to work in the United States.",
      summary:
        "U.S. Citizenship and Immigration Services has published additional online resources on uscis.gov to provide an overview of some of the temporary and permanent pathways for noncitizen entrepreneurs to work in the United States.",
      date_published: "2023-03-09T19:51:32.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "790396ed-e6b2-434f-8bef-17f8a38e9846",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-guidance-on-mobile-biometrics-services",
      title: "USCIS Updates Policy Guidance on Mobile Biometrics Services",
      content_html:
        "We are issuing policy guidance in the USCIS Policy Manual to address how we provide mobile biometrics services.",
      summary:
        "We are issuing policy guidance in the USCIS Policy Manual to address how we provide mobile biometrics services.",
      date_published: "2023-03-07T14:38:15.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e18beb33-3721-42e0-baa5-207ef85f2453",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-premium-processing-new-online-filing-procedures-for-certain-f-1-students-seeking-opt",
      title:
        "USCIS Announces Premium Processing; New Online-Filing Procedures for Certain F-1 Students Seeking OPT or STEM OPT Extensions",
      content_html:
        "U.S. Citizenship and Immigration Services announced today the expansion of premium processing for certain F-1 students seeking Optional Practical Training (OPT) and F-1 students seeking science, technology, engineering, and mathematics (STEM) OPT extensions who have a pending Form I-765, Application for Employment Authorization, and wish to request a premium processing upgrade.",
      summary:
        "U.S. Citizenship and Immigration Services announced today the expansion of premium processing for certain F-1 students seeking Optional Practical Training (OPT) and F-1 students seeking science, technology, engineering, and mathematics (STEM) OPT extensions who have a pending Form I-765, Application for Employment Authorization, and wish to request a premium processing upgrade.",
      date_published: "2023-03-06T16:49:13.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "017305ab-bbe1-467f-9fbe-45ceca92a955",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-clarifying-guidance-on-eligibility-for-the-o-1b-visa-classification",
      title:
        "USCIS Issues Clarifying Guidance on Eligibility for the O-1B Visa Classification",
      content_html:
        "U.S. Citizenship and Immigration Services today issued policy guidance clarifying how it evaluates evidence to determine eligibility for O-1B nonimmigrants of extraordinary ability in the arts and nonimmigrants of extraordinary achievement in the motion picture or television industry.",
      summary:
        "U.S. Citizenship and Immigration Services today issued policy guidance clarifying how it evaluates evidence to determine eligibility for O-1B nonimmigrants of extraordinary ability in the arts and nonimmigrants of extraordinary achievement in the motion picture or television industry.",
      date_published: "2023-03-03T15:36:21.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b799deb5-88cf-4498-9eee-b96119b9918f",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-h-2b-cap-for-second-half-of-fy-2023-and-announces-filing-dates-for-the-second-half-of",
      title:
        "USCIS Reaches H-2B Cap for Second Half of FY 2023 and Announces Filing Dates for the Second Half of FY 2023 Supplemental Visas",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) has received enough petitions to meet the H-2B cap for the second half of fiscal year (FY) 2023 and is announcing the filing dates for supplemental H-2B visas for the reminder of FY 2023 made available under the FY 2023 H-2B supplemental visa temporary final rule.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) has received enough petitions to meet the H-2B cap for the second half of fiscal year (FY) 2023 and is announcing the filing dates for supplemental H-2B visas for the reminder of FY 2023 made available under the FY 2023 H-2B supplemental visa temporary final rule.",
      date_published: "2023-03-02T14:25:47.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a6971411-466b-4758-88cb-93c3a2157e8d",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-start-collecting-fee-for-eb-5-integrity-fund",
      title: "USCIS to Start Collecting Fee for EB-5 Integrity Fund",
      content_html:
        "Today, the Department of Homeland Security posted a Federal Register notice providing information related to the EB-5 Integrity Fund.",
      summary:
        "Today, the Department of Homeland Security posted a Federal Register notice providing information related to the EB-5 Integrity Fund.",
      date_published: "2023-03-01T14:31:03.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c2ef501a-7f19-4dfc-b2af-9a91786387d2",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-clarifying-guidance-for-individuals-authorized-to-work-under-special-student-relief",
      title:
        "USCIS Issues Clarifying Guidance for Individuals Authorized to Work Under Special Student Relief Provisions",
      content_html:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in the USCIS Policy Manual to clarify the validity period of employment authorization for F-1 nonimmigrant students experiencing severe economic hardship due to emergent circumstances (also known as special student relief (SSR)) who are work authorized under the SSR provisions of 8 CFR.",
      summary:
        "U.S. Citizenship and Immigration Services is issuing policy guidance in the USCIS Policy Manual to clarify the validity period of employment authorization for F-1 nonimmigrant students experiencing severe economic hardship due to emergent circumstances (also known as special student relief (SSR)) who are work authorized under the SSR provisions of 8 CFR.",
      date_published: "2023-02-22T14:37:09.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2c9268a9-d1ff-455b-9340-715a80cf8902",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-child-status-protection-act-cspa-age-calculation-for-certain-adjustment-of-status",
      title:
        "USCIS Updates Child Status Protection Act (CSPA) Age Calculation for Certain Adjustment of Status Applicants",
      content_html:
        "WASHINGTON—U.S. Citizenship and Immigration Services has issued guidance in the USCIS Policy Manual to update when an immigrant visa number “becomes available” for the purpose of calculating a noncitizen’s age in certain situations under the Child Status Protection Act (CSPA).",
      summary:
        "WASHINGTON—U.S. Citizenship and Immigration Services has issued guidance in the USCIS Policy Manual to update when an immigrant visa number “becomes available” for the purpose of calculating a noncitizen’s age in certain situations under the Child Status Protection Act (CSPA).",
      date_published: "2023-02-14T18:32:59.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d0c4a31f-f837-4090-a5db-5afdd44b3958",
      url: "https://www.uscis.gov/newsroom/alerts/reminder-to-submit-all-required-initial-evidence-and-supporting-documentation-including-form-i-693",
      title:
        "Reminder to Submit All Required Initial Evidence and Supporting Documentation, including Form I-693, for Form I-485",
      content_html:
        "Save time by filing all required initial evidence and supporting documentation listed under the “Checklist of Required Initial Evidence” heading at the same time you file Form I-485, Application to Register Permanent Residence or Adjust Status.",
      summary:
        "Save time by filing all required initial evidence and supporting documentation listed under the “Checklist of Required Initial Evidence” heading at the same time you file Form I-485, Application to Register Permanent Residence or Adjust Status.",
      date_published: "2023-02-10T18:30:44.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a9252dff-b909-4bf0-ae91-a9e39bbb82fc",
      url: "https://www.uscis.gov/newsroom/alerts/update-to-filing-location-for-form-i-360-and-form-i-485-for-self-petitioning-abused-spouses-children",
      title:
        "Update to Filing Location for Form I-360 and Form I-485 for Self-Petitioning Abused Spouses, Children, and Parents",
      content_html:
        "Starting February 10, 2023, self-petitioning abused spouses, children, and parents must file Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, and Form I-485, Application to Register Permanent Residence or Adjust Status, at the Nebraska Service Center instead of the Vermont Service Center.",
      summary:
        "Starting February 10, 2023, self-petitioning abused spouses, children, and parents must file Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, and Form I-485, Application to Register Permanent Residence or Adjust Status, at the Nebraska Service Center instead of the Vermont Service Center.",
      date_published: "2023-02-08T18:03:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8900a758-f8e2-47b5-b428-d82145476835",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-clarifies-physical-presence-guidance-for-asylees-and-refugees-applying-for-adjustment-of",
      title:
        "USCIS Clarifies Physical Presence Guidance for Asylees and Refugees Applying for Adjustment of Status",
      content_html:
        "Effective immediately, U.S. Citizenship and Immigration Services (USCIS) has updated guidance in the USCIS Policy Manual to clarify that both asylees and refugees must have been physically present in the United States for one year when we adjudicate their Form I-485, Application to Register Permanent Residence or Adjust Status, rather than at the time they file their adjustment of status application.",
      summary:
        "Effective immediately, U.S. Citizenship and Immigration Services (USCIS) has updated guidance in the USCIS Policy Manual to clarify that both asylees and refugees must have been physically present in the United States for one year when we adjudicate their Form I-485, Application to Register Permanent Residence or Adjust Status, rather than at the time they file their adjustment of status application.",
      date_published: "2023-02-02T18:17:11.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "71fcc031-c82b-4a0e-9979-d9312e985e04",
      url: "https://www.uscis.gov/newsroom/alerts/cap-reached-for-additional-returning-worker-h-2b-visas-for-the-first-half-of-fy-2023",
      title:
        "Cap Reached for Additional Returning Worker H-2B Visas for the First Half of FY 2023",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the cap for the additional 18,216 H-2B visas made available for returning workers for the first half of fiscal year (FY) 2023 with start dates on or before March 31, 2023, under the recently announced H-2B supplemental cap temporary final rule.",
      summary:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the cap for the additional 18,216 H-2B visas made available for returning workers for the first half of fiscal year (FY) 2023 with start dates on or before March 31, 2023, under the recently announced H-2B supplemental cap temporary final rule.",
      date_published: "2023-01-31T20:07:37.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "027ea861-e079-48fd-a3e3-6d9846df8e1f",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-redesigns-green-card-and-employment-authorization-document",
      title: "USCIS Redesigns Green Card and Employment Authorization Document",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) announced today new designs to improve security of Permanent Resident Cards (also known as Green Cards) and Employment Authorization Documents (EADs). USCIS will begin issuing the redesigned cards on Jan. 30, 2023.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) announced today new designs to improve security of Permanent Resident Cards (also known as Green Cards) and Employment Authorization Documents (EADs). USCIS will begin issuing the redesigned cards on Jan. 30, 2023.",
      date_published: "2023-01-30T16:41:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a0e57a2a-b6c8-498a-9f5d-0bde9682ea26",
      url: "https://www.uscis.gov/newsroom/alerts/fy-2024-h-1b-cap-initial-registration-period-opens-on-march-1",
      title: "FY 2024 H-1B Cap Initial Registration Period Opens on March 1",
      content_html:
        "Today, U.S. Citizenship and Immigration Services announced that the initial registration period for the fiscal year 2024 H-1B cap will open at noon Eastern on March 1 and run through noon Eastern on March 17, 2023.",
      summary:
        "Today, U.S. Citizenship and Immigration Services announced that the initial registration period for the fiscal year 2024 H-1B cap will open at noon Eastern on March 1 and run through noon Eastern on March 17, 2023.",
      date_published: "2023-01-27T18:56:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5d65b83c-8eb5-4f0c-98ed-ce37a88aa8a3",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-releases-new-strategic-plan-highlighting-long-term-goals",
      title: "USCIS Releases New Strategic Plan Highlighting Long-Term Goals",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today released its FY 2023-2026 Strategic Plan, which provides a roadmap for the agency’s workforce to better strengthen its capabilities and help the country reach its highest ideals.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today released its FY 2023-2026 Strategic Plan, which provides a roadmap for the agency’s workforce to better strengthen its capabilities and help the country reach its highest ideals.",
      date_published: "2023-01-27T14:56:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "fde2face-9437-4ab3-a7fb-861141a1026c",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-registration-process-for-temporary-protected-status-for-haiti",
      title:
        "DHS Announces Registration Process for Temporary Protected Status for Haiti",
      content_html:
        "The Department of Homeland Security (DHS) today posted a Federal Register notice on Temporary Protected Status (TPS) for Haiti.",
      summary:
        "The Department of Homeland Security (DHS) today posted a Federal Register notice on Temporary Protected Status (TPS) for Haiti.",
      date_published: "2023-01-25T15:02:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "74254089-9bee-48f8-ab69-b03de7112707",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-covid-19-related-flexibilities-1",
      title: "USCIS Extends COVID-19-related Flexibilities",
      content_html:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through March 23, 2023.",
      summary:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through March 23, 2023.",
      date_published: "2023-01-24T15:39:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7b72dab6-63d2-49cf-b14e-4c5a24daa779",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-for-conditional-permanent-residents-with-a-pending-form-i-751-or",
      title:
        "USCIS Extends Green Card Validity for Conditional Permanent Residents with a Pending Form I-751 or Form I-829",
      content_html:
        "USCIS is extending the validity of Permanent Resident Cards (also known as Green Cards) for petitioners who properly file Form I-751, Petition to Remove Conditions on Residence, or Form I-829, Petition by Investor to Remove Conditions on Permanent Resident Status for 48 months beyond the card’s expiration date.",
      summary:
        "USCIS is extending the validity of Permanent Resident Cards (also known as Green Cards) for petitioners who properly file Form I-751, Petition to Remove Conditions on Residence, or Form I-829, Petition by Investor to Remove Conditions on Permanent Resident Status for 48 months beyond the card’s expiration date.",
      date_published: "2023-01-23T18:14:10.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "27435d76-4dc8-4fe8-893b-7bf2fd920c1e",
      url: "https://www.uscis.gov/newsroom/alerts/asylum-applicants-can-now-file-form-i-765-online",
      title: "Asylum Applicants Can Now File Form I-765 Online",
      content_html:
        "U.S. Citizenship and Immigration Services today announced that certain asylum applicants can now file Form I-765, Application for Employment Authorization, online.",
      summary:
        "U.S. Citizenship and Immigration Services today announced that certain asylum applicants can now file Form I-765, Application for Employment Authorization, online.",
      date_published: "2023-01-23T15:38:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c9f7f202-7d38-4690-a96e-fe98bd057c60",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-process-enhancements-for-supporting-labor-enforcement-investigations",
      title:
        "DHS Announces Process Enhancements for Supporting Labor Enforcement Investigations",
      content_html:
        "The U.S. Department of Homeland Security (DHS) has announced that noncitizen workers who are victims of, or witnesses to, the violation of labor rights, can now access a streamlined and expedite deferred action request process.",
      summary:
        "The U.S. Department of Homeland Security (DHS) has announced that noncitizen workers who are victims of, or witnesses to, the violation of labor rights, can now access a streamlined and expedite deferred action request process.",
      date_published: "2023-01-13T16:48:17.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "97fd1910-d855-43ae-bc4f-f5cc5e4623df",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-announces-final-phase-of-premium-processing-expansion-for-eb-1-and-eb-2-form-i-140-petitions",
      title:
        "USCIS Announces Final Phase of Premium Processing Expansion for EB-1 and EB-2 Form I-140 Petitions and Future Expansion for F-1 Students Seeking OPT and Certain Student and Exchange Visitors",
      content_html:
        "U.S. Citizenship and Immigration Services is implementing the final phase of the premium processing expansion for Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      summary:
        "U.S. Citizenship and Immigration Services is implementing the final phase of the premium processing expansion for Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      date_published: "2023-01-12T21:07:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d43513ba-4f4f-4116-ae9b-0d688b418bef",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-somalia-for-temporary-protected-status-for-18-months",
      title:
        "Secretary Mayorkas Extends and Redesignates Somalia for Temporary Protected Status for 18 Months",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension of Temporary Protected Status (TPS) for Somalia for an additional 18 months, from March 18, 2023, through September 17, 2024.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension of Temporary Protected Status (TPS) for Somalia for an additional 18 months, from March 18, 2023, through September 17, 2024.",
      date_published: "2023-01-12T20:05:55.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "502d6756-59fd-498e-b61a-a2986dee4794",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-implements-new-processes-for-cubans-haitians-and-nicaraguans-and-eliminates-cap-for-venezuelans",
      title:
        "DHS Implements New Processes for Cubans, Haitians, and Nicaraguans and Eliminates Cap for Venezuelans",
      content_html:
        "On Jan. 5, 2023, the Department of Homeland Security (DHS) announced a safe and lawful way for qualifying Cubans, Haitians, and Nicaraguans with U.S.-based supporters to travel by air to and temporarily reside in the United States.",
      summary:
        "On Jan. 5, 2023, the Department of Homeland Security (DHS) announced a safe and lawful way for qualifying Cubans, Haitians, and Nicaraguans with U.S.-based supporters to travel by air to and temporarily reside in the United States.",
      date_published: "2023-01-06T14:18:48.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "fff57d10-4552-446e-9548-7e4c70bad2fe",
      url: "https://www.uscis.gov/newsroom/alerts/filing-location-change-for-form-i-730-refugeeasylee-relative-petition",
      title:
        "Filing Location Change for Form I-730, Refugee/Asylee Relative Petition",
      content_html:
        "U.S. Citizenship and Immigration Services is changing the filing location for Form I-730, Refugee/Asylee Relative Petition, to streamline workloads in an ever-increasing electronic environment.",
      summary:
        "U.S. Citizenship and Immigration Services is changing the filing location for Form I-730, Refugee/Asylee Relative Petition, to streamline workloads in an ever-increasing electronic environment.",
      date_published: "2023-01-04T20:07:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b4919893-bf2c-4f86-997c-85764b8833a4",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-releases-new-immigrant-investor-form",
      title: "USCIS Releases New Immigrant Investor Form",
      content_html:
        "We have published Form I-956K, Registration for Direct and Third-Party Promoters.",
      summary:
        "We have published Form I-956K, Registration for Direct and Third-Party Promoters.",
      date_published: "2023-01-04T17:49:37.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "471e1f68-9347-48fe-9ed4-6952274c2e3e",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-issues-proposed-rule-to-adjust-certain-immigration-and-naturalization-fees",
      title:
        "USCIS Issues Proposed Rule to Adjust Certain Immigration and Naturalization Fees",
      content_html:
        "Today, U.S. Citizenship and Immigration Services (USCIS) published a Notice of Proposed Rulemaking (NPRM) to adjust certain immigration and naturalization benefit request fees.",
      summary:
        "Today, U.S. Citizenship and Immigration Services (USCIS) published a Notice of Proposed Rulemaking (NPRM) to adjust certain immigration and naturalization benefit request fees.",
      date_published: "2023-01-03T16:16:23.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "df5d1d92-6cc1-48e5-804a-b3acc9321abf",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-yemen",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for Yemen",
      content_html:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Yemen for 18 months, from March 4, 2023, through Sept. 3, 2024, due to ongoing armed conflict and extraordinary and temporary conditions that prevent Yemeni nationals from safely returning to their country.",
      summary:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Yemen for 18 months, from March 4, 2023, through Sept. 3, 2024, due to ongoing armed conflict and extraordinary and temporary conditions that prevent Yemeni nationals from safely returning to their country.",
      date_published: "2022-12-30T14:53:45.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8ac8a80b-dffe-4357-a41e-c421257e186d",
      url: "https://www.uscis.gov/newsroom/alerts/options-for-nonimmigrant-workers-following-termination-of-employment",
      title:
        "Options for Nonimmigrant Workers Following Termination of Employment",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is providing information for nonimmigrant workers whose employment has terminated, either voluntarily or involuntarily.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is providing information for nonimmigrant workers whose employment has terminated, either voluntarily or involuntarily.",
      date_published: "2022-12-19T21:20:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5e3bcfab-775d-44d6-b8d5-efb2961c4611",
      url: "https://www.uscis.gov/newsroom/alerts/dhss-public-charge-final-rule-goes-into-effect-on-dec-23",
      title: "DHS’s Public Charge Final Rule Goes into Effect on Dec. 23",
      content_html:
        "On Dec. 23, 2022, the Department of Homeland Security’s (DHS) Public Charge Ground of Inadmissibility final rule will go into effect.",
      summary:
        "On Dec. 23, 2022, the Department of Homeland Security’s (DHS) Public Charge Ground of Inadmissibility final rule will go into effect.",
      date_published: "2022-12-19T15:42:24.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "302b86c1-97d8-4ae2-8c56-e92dc7d2f9fc",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-trial-for-updates-to-the-naturalization-test",
      title: "USCIS Announces Trial for Updates to the Naturalization Test",
      content_html:
        "The Department of Homeland Security (DHS) today published a notice in the Federal Register announcing that U.S. Citizenship and Immigration Services (USCIS) plans to conduct a trial for updates to the current naturalization test.",
      summary:
        "The Department of Homeland Security (DHS) today published a notice in the Federal Register announcing that U.S. Citizenship and Immigration Services (USCIS) plans to conduct a trial for updates to the current naturalization test.",
      date_published: "2022-12-14T14:22:58.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5106623c-e4ec-4ec5-b37b-6d003dafe3e6",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-and-dol-announce-availability-of-additional-h-2b-visas-for-fiscal-year-2023",
      title:
        "DHS and DOL Announce Availability of Additional H-2B Visas for Fiscal Year 2023",
      content_html:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) are issuing a temporary final rule that makes available 64,716 additional H-2B temporary nonagricultural worker visas for fiscal year (FY) 2023.",
      summary:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) are issuing a temporary final rule that makes available 64,716 additional H-2B temporary nonagricultural worker visas for fiscal year (FY) 2023.",
      date_published: "2022-12-12T22:48:20.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "17d34e0c-d618-4245-9fd0-62e181cdb75a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-to-automatically-extend-green-cards-for-naturalization-applicants",
      title:
        "USCIS Updates Policy to Automatically Extend Green Cards for Naturalization Applicants",
      content_html:
        "Effective Dec. 12, 2022, U.S. Citizenship and Immigration Services (USCIS) is updating the USCIS Policy Manual to allow USCIS to automatically extend the validity of Permanent Resident Cards (commonly called Green Cards) for lawful permanent residents who have applied for naturalization.",
      summary:
        "Effective Dec. 12, 2022, U.S. Citizenship and Immigration Services (USCIS) is updating the USCIS Policy Manual to allow USCIS to automatically extend the validity of Permanent Resident Cards (commonly called Green Cards) for lawful permanent residents who have applied for naturalization.",
      date_published: "2022-12-09T17:19:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "de62b68d-83e8-432f-bb83-51ad66539205",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-registration-process-for-temporary-protected-status-for-ethiopia",
      title:
        "DHS Announces Registration Process for Temporary Protected Status for Ethiopia",
      content_html:
        "The Department of Homeland Security today posted a Federal Register notice on Temporary Protected Status (TPS) for Ethiopia.",
      summary:
        "The Department of Homeland Security today posted a Federal Register notice on Temporary Protected Status (TPS) for Ethiopia.",
      date_published: "2022-12-09T14:25:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d1aaa823-3243-4d47-b7e4-cde210734071",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-announces-important-filing-information-for-upcoming-fy-2023-h-2b-supplemental-cap-petitions",
      title:
        "USCIS Announces Important Filing Information for Upcoming FY 2023 H-2B Supplemental Cap Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is announcing important filing updates for petitioners who will be requesting additional H-2B workers for fiscal year 2023 under the upcoming temporary final rule.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is announcing important filing updates for petitioners who will be requesting additional H-2B workers for fiscal year 2023 under the upcoming temporary final rule.",
      date_published: "2022-12-08T14:32:31.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "708977ed-6d3f-473f-a5eb-7ebc07c57465",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-releases-new-data-on-effective-reduction-of-backlogs-support-for-humanitarian-missions-and",
      title:
        "USCIS Releases New Data on Effective Reduction of Backlogs, Support for Humanitarian Missions, and Fiscal Responsibility",
      content_html:
        "Today, USCIS released its Fiscal Year (FY) 2022 progress report with new information demonstrating how it reduced backlogs in certain programs and supported humanitarian missions.",
      summary:
        "Today, USCIS released its Fiscal Year (FY) 2022 progress report with new information demonstrating how it reduced backlogs in certain programs and supported humanitarian missions.",
      date_published: "2022-12-07T16:16:24.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0d82d52e-042d-43a3-88a5-a71417d86a37",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-haiti-for-18-months",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for Haiti for 18 Months",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension of Temporary Protected Status (TPS) for Haiti for an additional 18 months, from February 4, 2023, through August 3, 2024, due to extraordinary and temporary conditions in Haiti.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas today announced the extension of Temporary Protected Status (TPS) for Haiti for an additional 18 months, from February 4, 2023, through August 3, 2024, due to extraordinary and temporary conditions in Haiti.",
      date_published: "2022-12-06T00:40:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c0ee2d10-e081-4827-82a7-8a590a323d5b",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-and-expands-fee-exemptions-and-expedited-processing-for-afghan-nationals",
      title:
        "USCIS Extends and Expands Fee Exemptions and Expedited Processing for Afghan Nationals",
      content_html:
        "Today, U.S. Citizenship and Immigration Services announced it is extending and expanding previously announced filing fee exemptions and expedited application processing for certain Afghan nationals.",
      summary:
        "Today, U.S. Citizenship and Immigration Services announced it is extending and expanding previously announced filing fee exemptions and expedited application processing for certain Afghan nationals.",
      date_published: "2022-11-22T18:03:21.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0c69617e-3d62-49df-80ee-33a6d8c81b0d",
      url: "https://www.uscis.gov/newsroom/alerts/certain-afghan-and-ukrainian-parolees-are-employment-authorized-incident-to-parole",
      title:
        "Certain Afghan and Ukrainian Parolees Are Employment Authorized Incident to Parole",
      content_html:
        "Congress has recently passed laws relating to certain Afghan and Ukrainian parolees that have included language providing that parolees covered by the legislation “…shall be eligible for resettlement assistance, entitlement programs, and other benefits available to refugees admitted under section 207 of the Immigration and Nationality Act (8 U.S.C. 1157)....” Under DHS regulations, refugees are authorized employment incident to status, and under current USCIS policy and practice, refugees are not charged a fee by USCIS for their initial Form I-766, Employment Authorization Document (EAD).",
      summary:
        "Congress has recently passed laws relating to certain Afghan and Ukrainian parolees that have included language providing that parolees covered by the legislation “…shall be eligible for resettlement assistance, entitlement programs, and other benefits available to refugees admitted under section 207 of the Immigration and Nationality Act (8 U.S.C. 1157)....” Under DHS regulations, refugees are authorized employment incident to status, and under current USCIS policy and practice, refugees are not charged a fee by USCIS for their initial Form I-766, Employment Authorization Document (EAD).",
      date_published: "2022-11-21T20:13:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "516dab61-5f99-435e-8afb-2d5d804baa58",
      url: "https://www.uscis.gov/newsroom/alerts/recommendations-for-paper-filings-to-avoid-scanning-delays",
      title: "Recommendations for Paper Filings to Avoid Scanning Delays",
      content_html:
        "As we move toward an increasing electronic environment, we now scan and upload many documents into electronic database systems. If you are filing your form with a USCIS service center, To avoid delays and improve scanning efficiency, we recommend that you do not:",
      summary:
        "As we move toward an increasing electronic environment, we now scan and upload many documents into electronic database systems. If you are filing your form with a USCIS service center, To avoid delays and improve scanning efficiency, we recommend that you do not:",
      date_published: "2022-11-16T16:18:32.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2b47c3cc-0370-45ac-ab2e-f2f7177a46a4",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-continues-temporary-protected-status-and-related-documentation-for-certain-beneficiaries-of-tps",
      title:
        "DHS Continues Temporary Protected Status and Related Documentation for Certain Beneficiaries of TPS",
      content_html:
        "On Nov. 10, 2022, the Department of Homeland Security (DHS) posted a Federal Register Notice announcing the continuation of Temporary Protected Status (TPS) and certain related documents for beneficiaries under the TPS designations that remain subject to the court orders in the Ramos et al. v. Nielsen and Bhattarai et al. v. Nielsen et al. lawsuits.",
      summary:
        "On Nov. 10, 2022, the Department of Homeland Security (DHS) posted a Federal Register Notice announcing the continuation of Temporary Protected Status (TPS) and certain related documents for beneficiaries under the TPS designations that remain subject to the court orders in the Ramos et al. v. Nielsen and Bhattarai et al. v. Nielsen et al. lawsuits.",
      date_published: "2022-11-14T15:36:08.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "03a0c3ae-d270-4d0b-a2cc-70fc53aaa119",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-hosts-special-naturalization-ceremonies-in-honor-of-veterans-day",
      title:
        "USCIS Hosts Special Naturalization Ceremonies in Honor of Veterans Day",
      content_html:
        "U.S. Citizenship and Immigration Services will host several Veterans Day-themed naturalization ceremonies across the country, welcoming veterans, service members, and military spouses as America’s newest citizens.",
      summary:
        "U.S. Citizenship and Immigration Services will host several Veterans Day-themed naturalization ceremonies across the country, welcoming veterans, service members, and military spouses as America’s newest citizens.",
      date_published: "2022-11-10T14:47:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e3131bce-dccd-4395-8361-00a270a28379",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-online-filing-for-affirmative-asylum-applications",
      title:
        "USCIS Announces Online Filing for Affirmative Asylum Applications",
      content_html:
        "U.S. Citizenship and Immigration Services announced today that Form I-589, Application for Asylum and for Withholding of Removal, is available to file online for certain affirmative asylum applicants. USCIS continues to accept the latest paper version of this form by mail.",
      summary:
        "U.S. Citizenship and Immigration Services announced today that Form I-589, Application for Asylum and for Withholding of Removal, is available to file online for certain affirmative asylum applicants. USCIS continues to accept the latest paper version of this form by mail.",
      date_published: "2022-11-09T17:15:51.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b7e2ca0b-4933-42e3-b6b7-34c5c2443cc0",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-announces-countries-eligible-for-h-2a-and-h-2b-visa-programs-0",
      title: "DHS Announces Countries Eligible for H-2A and H-2B Visa Programs",
      content_html:
        "The Department of Homeland Security (DHS), in consultation with the Department of State (DOS), has announced the lists of countries whose nationals are eligible to participate in the H-2A and H-2B visa programs in the next year.",
      summary:
        "The Department of Homeland Security (DHS), in consultation with the Department of State (DOS), has announced the lists of countries whose nationals are eligible to participate in the H-2A and H-2B visa programs in the next year.",
      date_published: "2022-11-09T15:34:36.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b12cc216-382c-4ba0-ad82-af292988e084",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-begins-limited-implementation-of-daca-under-final-rule",
      title: "DHS Begins Limited Implementation of DACA under Final Rule",
      content_html:
        "On Monday, October 31, 2022, the Department of Homeland Security’s final rule to preserve and fortify Deferred Action for Childhood Arrivals (DACA) went into effect.",
      summary:
        "On Monday, October 31, 2022, the Department of Homeland Security’s final rule to preserve and fortify Deferred Action for Childhood Arrivals (DACA) went into effect.",
      date_published: "2022-11-03T19:43:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "94181623-bb35-4ac2-b9dd-5e17a957d002",
      url: "https://www.uscis.gov/newsroom/alerts/new-processing-time-method-for-orphan-and-hague-applications-and-petitions",
      title:
        "New Processing Time Method for Orphan and Hague Applications and Petitions",
      content_html:
        "Starting in mid-November, U.S. Citizenship and Immigration Services (USCIS) will change how we calculate processing times for orphan and Hague cases.",
      summary:
        "Starting in mid-November, U.S. Citizenship and Immigration Services (USCIS) will change how we calculate processing times for orphan and Hague cases.",
      date_published: "2022-11-02T13:49:50.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "aec74c2d-8841-48c6-845b-74d0553a9587",
      url: "https://www.uscis.gov/newsroom/alerts/acics-loss-of-recognition-may-affect-certain-students-applying-for-english-language-study-and-24",
      title:
        "ACICS Loss of Recognition May Affect Certain Students Applying for English Language Study and 24-month STEM OPT Extension Programs, H-1B, and I-140 Applicants",
      content_html:
        "On Aug. 19, the U.S. Department of Education (ED) announced that it no longer recognizes the Accrediting Council for Independent Colleges and Schools (ACICS) as an accrediting agency.",
      summary:
        "On Aug. 19, the U.S. Department of Education (ED) announced that it no longer recognizes the Accrediting Council for Independent Colleges and Schools (ACICS) as an accrediting agency.",
      date_published: "2022-11-01T15:43:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b527d048-24c0-4204-902c-6514f1869858",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-will-only-consider-cw-1-petitions-approved-and-with-starting-validity-on-or-after-june-18-2020",
      title:
        "USCIS Will Only Consider CW-1 Petitions Approved and with Starting Validity on or after June 18, 2020, when Applying the Temporary Departure Requirement",
      content_html:
        "U.S. Citizenship and Immigration Services is clarifying its Aug. 25, 2020, policy on implementing the requirement that workers leave the United States for at least 30 days after two renewals of their CNMI-Only Transitional Worker (CW-1) visa classification.",
      summary:
        "U.S. Citizenship and Immigration Services is clarifying its Aug. 25, 2020, policy on implementing the requirement that workers leave the United States for at least 30 days after two renewals of their CNMI-Only Transitional Worker (CW-1) visa classification.",
      date_published: "2022-10-27T16:00:36.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "174a3cc5-5521-409f-a92a-8e47d5da1208",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-covid-19-related-flexibilities-0",
      title: "USCIS Extends COVID-19-related Flexibilities",
      content_html:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through Jan. 24, 2023, to assist applicants, petitioners, and requestors.",
      summary:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through Jan. 24, 2023, to assist applicants, petitioners, and requestors.",
      date_published: "2022-10-24T13:51:58.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "6563f19b-2fe6-4e47-bbf5-4a100e69dcdb",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-designates-ethiopia-for-temporary-protected-status-for-18-months",
      title:
        "DHS Designates Ethiopia for Temporary Protected Status for 18 Months",
      content_html:
        "Today, the Department of Homeland Security (DHS) announced the designation of Ethiopia for Temporary Protected Status (TPS) for 18 months.",
      summary:
        "Today, the Department of Homeland Security (DHS) announced the designation of Ethiopia for Temporary Protected Status (TPS) for 18 months.",
      date_published: "2022-10-21T16:59:10.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d20fa9a4-e441-42ec-91d9-e8251076e864",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-form-and-policy-updates-remove-barriers-to-naturalization-for-applicants-with-disabilities",
      title:
        "USCIS Form and Policy Updates Remove Barriers to Naturalization for Applicants with Disabilities",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced updated policy guidance to clarify and conform with the revision of Form N-648, Medical Certification for Disability Exceptions.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced updated policy guidance to clarify and conform with the revision of Form N-648, Medical Certification for Disability Exceptions.",
      date_published: "2022-10-19T13:19:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "30e72f6a-8432-4049-a255-8dc507f4ea71",
      url: "https://www.uscis.gov/newsroom/alerts/filing-guidance-for-cw-1-petitions-seeking-to-extend-status",
      title: "Filing Guidance for CW-1 Petitions Seeking to Extend Status",
      content_html:
        "U.S. Citizenship and Immigration Services will consider certain CW-1 petitions seeking an extension of status for temporary workers present in the Commonwealth of the Northern Mariana Islands (CNMI) to be filed on time, even if USCIS receives them after the worker’s current period of CW-1 petition validity expires.",
      summary:
        "U.S. Citizenship and Immigration Services will consider certain CW-1 petitions seeking an extension of status for temporary workers present in the Commonwealth of the Northern Mariana Islands (CNMI) to be filed on time, even if USCIS receives them after the worker’s current period of CW-1 petition validity expires.",
      date_published: "2022-10-18T18:27:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a153ab12-2cac-4b29-9c6d-5ecc1eca2387",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-implements-new-process-for-venezuelans",
      title: "USCIS Implements New Process for Venezuelans",
      content_html:
        "On Oct. 12, the Department of Homeland Security (DHS) announced a new process for Venezuelans.",
      summary:
        "On Oct. 12, the Department of Homeland Security (DHS) announced a new process for Venezuelans.",
      date_published: "2022-10-18T14:59:40.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e86571c3-83fb-4006-a9c8-04595e48d2d6",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-to-supplement-h-2b-cap-with-nearly-65000-additional-visas-for-fiscal-year-2023",
      title:
        "DHS to Supplement H-2B Cap with Nearly 65,000 Additional Visas for Fiscal Year 2023",
      content_html:
        "Today the Department of Homeland Security (DHS), in consultation with the Department of Labor (DOL), announced that it will be issuing a regulation that will make available to employers an additional 64,716 H-2B temporary nonagricultural worker visas for fiscal year (FY) 2023, on top of the 66,000 H-2B visas that are normally available each fiscal year.",
      summary:
        "Today the Department of Homeland Security (DHS), in consultation with the Department of Labor (DOL), announced that it will be issuing a regulation that will make available to employers an additional 64,716 H-2B temporary nonagricultural worker visas for fiscal year (FY) 2023, on top of the 66,000 H-2B visas that are normally available each fiscal year.",
      date_published: "2022-10-12T21:19:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e77328aa-7b10-4f30-86b1-28ad3ceed080",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-policy-guidance-on-the-eb-5-reform-and-integrity-act-of-2022-0",
      title:
        "USCIS Issues Policy Guidance on the EB-5 Reform and Integrity Act of 2022",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) has issued policy guidance in the USCIS Policy Manual based on the vacatur of the EB-5 Modernization Rule and the EB-5 Reform and Integrity Act of 2022.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) has issued policy guidance in the USCIS Policy Manual based on the vacatur of the EB-5 Modernization Rule and the EB-5 Reform and Integrity Act of 2022.",
      date_published: "2022-10-11T13:43:00.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "6c5a0db2-fd1b-4f43-9173-3faa94c60585",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-military-naturalization-guidance-for-calixto-class-members",
      title:
        "USCIS Updates Military Naturalization Guidance for Calixto Class Members",
      content_html:
        "U.S. Citizenship and Immigration Services published updated guidance in the USCIS Policy Manual as a result of a settlement agreement in Calixto v. Department of the Army, Civ. A. No. 18-1551 (PLF) (D.D.C.), known as the Calixto Agreement. In the Calixto Agreement, effective Sept. 22, 2022, the U.S. Army agreed to certify Form N-426, Request for Certification of Military or Naval Service, for Calixto class members.",
      summary:
        "U.S. Citizenship and Immigration Services published updated guidance in the USCIS Policy Manual as a result of a settlement agreement in Calixto v. Department of the Army, Civ. A. No. 18-1551 (PLF) (D.D.C.), known as the Calixto Agreement. In the Calixto Agreement, effective Sept. 22, 2022, the U.S. Army agreed to certify Form N-426, Request for Certification of Military or Naval Service, for Calixto class members.",
      date_published: "2022-10-07T19:55:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ff1f3e6a-863b-4759-bb68-84188009506c",
      url: "https://www.uscis.gov/newsroom/news-releases/statement-from-uscis-director-ur-m-jaddou-on-daca-ruling",
      title: "Statement from USCIS Director Ur M. Jaddou on DACA Ruling",
      content_html:
        "“While today’s decision is deeply disappointing, it does not change current USCIS operations. Consistent with the court’s order, USCIS will continue to accept and process DACA renewal requests, and continue to accept but not process initial DACA requests. We remain committed to preserve and fortify DACA within our authority, but ultimately Congress must act to provide permanent protections to DACA recipients and their families.”",
      summary:
        "“While today’s decision is deeply disappointing, it does not change current USCIS operations. Consistent with the court’s order, USCIS will continue to accept and process DACA renewal requests, and continue to accept but not process initial DACA requests. We remain committed to preserve and fortify DACA within our authority, but ultimately Congress must act to provide permanent protections to DACA recipients and their families.”",
      date_published: "2022-10-06T01:25:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e08c5d99-a691-43d8-b800-7753f9bc0e56",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-awards-fy-2022-citizenship-and-integration-grants",
      title: "USCIS Awards FY 2022 Citizenship and Integration Grants",
      content_html:
        "U.S. Citizenship and Immigration Services today awarded nearly $20 million in grants to 66 organizations in 35 states to help prepare lawful permanent residents (LPRs) and those with a clear pathway to lawful permanent residency for naturalization.",
      summary:
        "U.S. Citizenship and Immigration Services today awarded nearly $20 million in grants to 66 organizations in 35 states to help prepare lawful permanent residents (LPRs) and those with a clear pathway to lawful permanent residency for naturalization.",
      date_published: "2022-09-29T21:29:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d03f7d2f-458e-4740-8df7-9d7ab9d4360e",
      url: "https://www.uscis.gov/newsroom/alerts/extension-of-temporary-waiver-of-60-day-rule-for-civil-surgeon-signatures-on-form-i-693",
      title:
        "Extension of Temporary Waiver of 60-Day Rule for Civil Surgeon Signatures on Form I-693",
      content_html:
        "U.S. Citizenship and Immigration Services is extending our temporary waiver of the requirement that civil surgeons must sign Form I-693, Report of Medical Examination and Vaccination Record, no more than 60 days before an individual applies for the underlying immigration benefit (including Form I-485, Application to Register Permanent Residence or Adjust Status).",
      summary:
        "U.S. Citizenship and Immigration Services is extending our temporary waiver of the requirement that civil surgeons must sign Form I-693, Report of Medical Examination and Vaccination Record, no more than 60 days before an individual applies for the underlying immigration benefit (including Form I-485, Application to Register Permanent Residence or Adjust Status).",
      date_published: "2022-09-29T13:38:37.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1d8cfa03-9311-4b9b-b138-10f0a68d576a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-extension-to-24-months-for-green-card-renewals",
      title:
        "USCIS Extends Green Card Validity Extension to 24 Months for Green Card Renewals",
      content_html:
        "Effective Sept. 26, U.S. Citizenship and Immigration Services (USCIS) is automatically extending the validity of Permanent Resident Cards (also known as Green Cards) to 24 months for lawful permanent residents who file Form I-90, Application to Replace Permanent Resident Card.",
      summary:
        "Effective Sept. 26, U.S. Citizenship and Immigration Services (USCIS) is automatically extending the validity of Permanent Resident Cards (also known as Green Cards) to 24 months for lawful permanent residents who file Form I-90, Application to Replace Permanent Resident Card.",
      date_published: "2022-09-28T16:30:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2f5c5d57-8bd5-4449-82be-a35b94d29b79",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-stops-accepting-cw-1-petitions-under-the-disaster-recovery-workforce-act",
      title:
        "USCIS Stops Accepting CW-1 Petitions Under the Disaster Recovery Workforce Act",
      content_html:
        "USCIS will no longer accept CW-1 petitions filed by employers in the Commonwealth of the Northern Mariana Islands (the CNMI) under the Disaster Recovery Workforce Act on or after Oct. 1, 2022.",
      summary:
        "USCIS will no longer accept CW-1 petitions filed by employers in the Commonwealth of the Northern Mariana Islands (the CNMI) under the Disaster Recovery Workforce Act on or after Oct. 1, 2022.",
      date_published: "2022-09-28T15:00:02.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "132f9cc9-64e1-4085-bc81-ed02856b9088",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-extends-and-redesignates-temporary-protected-status-for-burma",
      title:
        "Secretary Mayorkas Extends and Redesignates Temporary Protected Status for Burma",
      content_html:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Burma for an additional 18 months, from Nov. 26, 2022, through May 25, 2024, due to extraordinary and temporary conditions in Burma that prevent individuals from safely returning.",
      summary:
        "The Department of Homeland Security (DHS) today announced an extension of Temporary Protected Status (TPS) for Burma for an additional 18 months, from Nov. 26, 2022, through May 25, 2024, due to extraordinary and temporary conditions in Burma that prevent individuals from safely returning.",
      date_published: "2022-09-26T14:44:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9af748d1-1da8-4692-9c8f-3922104ed994",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reviewing-military-naturalization-policy-based-on-settlement-agreement-in-calixto-v-department",
      title:
        "USCIS Reviewing Military Naturalization Policy Based on Settlement Agreement in Calixto v. Department of the Army, Civ. A. No 18-1551 (PLF) (D.D.C.)",
      content_html:
        "On Sept. 22, 2022, USCIS was notified of a settlement agreement between the U.S. Army and class members of the civil action captioned Calixto v. Department of the Army, Civ. A. No. 18-1551 (PLF) (D.D.C.).",
      summary:
        "On Sept. 22, 2022, USCIS was notified of a settlement agreement between the U.S. Army and class members of the civil action captioned Calixto v. Department of the Army, Civ. A. No. 18-1551 (PLF) (D.D.C.).",
      date_published: "2022-09-22T17:34:21.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e71405f2-0cd5-40ab-bce6-650461158403",
      url: "https://www.uscis.gov/newsroom/alerts/immigration-help-available-to-those-affected-by-natural-disasters-and-other-unforeseen-circumstances-2",
      title:
        "Immigration Help Available to Those Affected by Natural Disasters and Other Unforeseen Circumstances",
      content_html:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by unforeseen circumstances such as natural disasters in the United States and abroad.",
      summary:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by unforeseen circumstances such as natural disasters in the United States and abroad.",
      date_published: "2022-09-21T20:53:27.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a444b866-f51c-4a59-9b06-e86cb5be6f79",
      url: "https://www.uscis.gov/newsroom/alerts/dhs-publishes-final-rule-to-restore-asylum-regulations-consistent-with-asylumworks-vacatur",
      title:
        "DHS Publishes Final Rule to Restore Asylum Regulations Consistent with Asylumworks Vacatur",
      content_html:
        "The Department of Homeland Security (DHS) today announced publication of a final rule consistent with the vacatur of the U.S. District Court for the District of Columbia in Asylumworks et al. v. Mayorkas et al. This final rule is effective starting Feb. 7, 2022.",
      summary:
        "The Department of Homeland Security (DHS) today announced publication of a final rule consistent with the vacatur of the U.S. District Court for the District of Columbia in Asylumworks et al. v. Mayorkas et al. This final rule is effective starting Feb. 7, 2022.",
      date_published: "2022-09-21T13:24:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ef377539-f64a-4879-8709-25d4c223b4fd",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-to-welcome-19000-new-citizens-in-celebration-of-constitution-day-and-citizenship-day",
      title:
        "USCIS to Welcome 19,000 New Citizens in Celebration of  Constitution Day and Citizenship Day",
      content_html:
        "U.S. Citizenship and Immigration Services will celebrate Constitution Day and Citizenship Day this year by welcoming more than 19,000 new citizens in more than 235 naturalization ceremonies across the nation between Sept. 17 and Sept. 23.",
      summary:
        "U.S. Citizenship and Immigration Services will celebrate Constitution Day and Citizenship Day this year by welcoming more than 19,000 new citizens in more than 235 naturalization ceremonies across the nation between Sept. 17 and Sept. 23.",
      date_published: "2022-09-16T16:48:26.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c7c5690c-123e-44d1-9bda-9a0e86c2c182",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-implement-next-phase-of-premium-processing-for-certain-previously-filed-eb-1-and-eb-2-form",
      title:
        "USCIS to Implement Next Phase of Premium Processing for Certain Previously Filed EB-1 and EB-2 Form I-140 Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services is implementing the next phase of the premium processing expansion for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      summary:
        "U.S. Citizenship and Immigration Services is implementing the next phase of the premium processing expansion for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      date_published: "2022-09-15T17:37:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b7af4166-bbc9-4373-bd24-8d2f9638758d",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-h-2b-cap-for-first-half-of-fy-2023",
      title: "USCIS Reaches H-2B Cap for First Half of FY 2023",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the congressionally mandated cap on H-2B visas for temporary nonagricultural workers for the first half of fiscal year (FY) 2023.",
      summary:
        "U.S. Citizenship and Immigration Services has received enough petitions to reach the congressionally mandated cap on H-2B visas for temporary nonagricultural workers for the first half of fiscal year (FY) 2023.",
      date_published: "2022-09-14T16:34:07.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "642aa397-51f7-4ca0-9ad8-59c5523077b3",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-urdu",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Urdu)",
      content_html:
        "امریکی محکمہ برائے ملکی سالمیت (U.S. Department  of Homeland Security (DHS)) نے ایک حتمی اصول جاری کیا ہے، جسے وفاقی رجسٹر میں شائع کیا جائے گا، جو غیر شہریوں کے لیے اس امر کی وضاحت اور تسلسل فراہم کرتا ہے کہ DHS عدم قبولیت کے پبلک عوامیچارج کی بنیاد کا نظام کیسے",
      summary:
        "امریکی محکمہ برائے ملکی سالمیت (U.S. Department  of Homeland Security (DHS)) نے ایک حتمی اصول جاری کیا ہے، جسے وفاقی رجسٹر میں شائع کیا جائے گا، جو غیر شہریوں کے لیے اس امر کی وضاحت اور تسلسل فراہم کرتا ہے کہ DHS عدم قبولیت کے پبلک عوامیچارج کی بنیاد کا نظام کیسے",
      date_published: "2022-09-08T20:56:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "4e813d67-545c-41ff-8512-0415e0d3aecd",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-vietnamese",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Vietnamese)",
      content_html:
        "Bộ An ninh Nội địa Hoa Kỳ (DHS) đã ban hành một quy định chung cuộc, sẽ được đăng trong Công báo Liên bang, để thể hiện sự nhất quán và rõ ràng về cách mà DHS áp dụng lý do gánh nặng xã hội để từ chối nhập cư những người không phải là công dân Hoa Kỳ.",
      summary:
        "Bộ An ninh Nội địa Hoa Kỳ (DHS) đã ban hành một quy định chung cuộc, sẽ được đăng trong Công báo Liên bang, để thể hiện sự nhất quán và rõ ràng về cách mà DHS áp dụng lý do gánh nặng xã hội để từ chối nhập cư những người không phải là công dân Hoa Kỳ.",
      date_published: "2022-09-08T20:56:27.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "04c7c0d3-b23e-4e44-a716-734a246f4cb6",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-ukrainian",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Ukrainian)",
      content_html:
        "Міністерство внутрішньої безпеки США (DHS) оприлюднило остаточне правило, яке буде опубліковане у Федеральному реєстрі (Federal Register), що забезпечує ясність і послідовність для осіб, які не є громадянами країни, щодо того, як DHS буде застосовувати недопущення до країни на підставі визначення суспільного тягаря.",
      summary:
        "Міністерство внутрішньої безпеки США (DHS) оприлюднило остаточне правило, яке буде опубліковане у Федеральному реєстрі (Federal Register), що забезпечує ясність і послідовність для осіб, які не є громадянами країни, щодо того, як DHS буде застосовувати недопущення до країни на підставі визначення суспільного тягаря.",
      date_published: "2022-09-08T20:56:26.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ca54d968-1154-4443-8ff9-790b3bb3dfe1",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-tagalog",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Tagalog)",
      content_html:
        "Ang Department of Homeland Security (DHS o Kagawaran ng Pambansang Seguridad) ng Estados Unidos ay naglabas ng pinal na tuntunin, na ilalathala sa Federal Register (Pederal na Rehistro) na nagbibigay ng paglilinaw para sa mga noncitizens (dayuhan) kung paano ipapatupad ng DHS ang tuntunin ukol sa public charge (dayuhan na umaasa sa pampublikong benepisyo) bilang batayan ng inadmissibility (hindi pagtanggap).",
      summary:
        "Ang Department of Homeland Security (DHS o Kagawaran ng Pambansang Seguridad) ng Estados Unidos ay naglabas ng pinal na tuntunin, na ilalathala sa Federal Register (Pederal na Rehistro) na nagbibigay ng paglilinaw para sa mga noncitizens (dayuhan) kung paano ipapatupad ng DHS ang tuntunin ukol sa public charge (dayuhan na umaasa sa pampublikong benepisyo) bilang batayan ng inadmissibility (hindi pagtanggap).",
      date_published: "2022-09-08T20:56:24.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "aa05aed8-620d-4425-9d8a-dfd88cabd443",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-portuguese",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Portuguese)",
      content_html:
        "O Departamento de Segurança Interna dos EUA (DHS) emitiu uma regra final, a ser publicada no Registro Federal, que proporciona clareza e consistência aos não-cidadãos sobre a forma como o DHS administrará o fundamento de inadmissibilidade por encargo público.",
      summary:
        "O Departamento de Segurança Interna dos EUA (DHS) emitiu uma regra final, a ser publicada no Registro Federal, que proporciona clareza e consistência aos não-cidadãos sobre a forma como o DHS administrará o fundamento de inadmissibilidade por encargo público.",
      date_published: "2022-09-08T20:56:23.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "90bf8d06-a0e5-4379-a494-eb2db3b46191",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-pashto",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Pashto)",
      content_html:
        "د متحده ايالتونو د کورني امنيت وزارت (DHS) داسې يو نهائی مقرره منظور کړی چې د فډرال په رسمي جريده کې خپرېږي. دغه مقرره د متحده ايالتونو د کورني امنيت وزارت له‌خوا د پرديو وګړيو ( بې تابعته کسان) له‌پاره د دولتی کمکونو د استفاده څرنګوالي موضوع توضيح کوي.",
      summary:
        "د متحده ايالتونو د کورني امنيت وزارت (DHS) داسې يو نهائی مقرره منظور کړی چې د فډرال په رسمي جريده کې خپرېږي. دغه مقرره د متحده ايالتونو د کورني امنيت وزارت له‌خوا د پرديو وګړيو ( بې تابعته کسان) له‌پاره د دولتی کمکونو د استفاده څرنګوالي موضوع توضيح کوي.",
      date_published: "2022-09-08T20:56:21.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "93192cc8-c3b0-4d2e-8a0d-5981cf4cc30b",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-nepali",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Nepali)",
      content_html:
        "अमेरिकी गृहभुमि सुरक्षा विभाग (DHS) ले संघीय रजिस्टरमा प्रकाशित हुने अन्तिम नियम जारी गरेको छ, जसले DHS ले अस्वीकार्यताको सार्वजनिक प्रभार आधारलाई कसरी व्यवस्थापन गर्नेछ भनेर गैर-नागरिकहरूलाई स्पष्टता र स्थिरता उपलब्ध गराउँछ",
      summary:
        "अमेरिकी गृहभुमि सुरक्षा विभाग (DHS) ले संघीय रजिस्टरमा प्रकाशित हुने अन्तिम नियम जारी गरेको छ, जसले DHS ले अस्वीकार्यताको सार्वजनिक प्रभार आधारलाई कसरी व्यवस्थापन गर्नेछ भनेर गैर-नागरिकहरूलाई स्पष्टता र स्थिरता उपलब्ध गराउँछ",
      date_published: "2022-09-08T20:56:20.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a397547c-7379-4556-a8dc-8e56dccc0534",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-korean",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Korean)",
      content_html:
        "미국 국토안보부 (DHS)는 이민거부사유의 공적부조 심사를 DHS에서 어떻게 집행하는지와 관련해 비시민권자들에게 분명하고 일관성있는 정보를 제공하는 공적부조 규정 최종안을 연방정부 공보에 고시했다.",
      summary:
        "미국 국토안보부 (DHS)는 이민거부사유의 공적부조 심사를 DHS에서 어떻게 집행하는지와 관련해 비시민권자들에게 분명하고 일관성있는 정보를 제공하는 공적부조 규정 최종안을 연방정부 공보에 고시했다.",
      date_published: "2022-09-08T20:56:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2dedec51-5c89-40be-9135-c72bfa1adabd",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-dari",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Dari)",
      content_html:
        "وزارت امنیت داخلی ایالات متحده (DHS) یک مقرره نهایی را که قرار است در جریده رسمی فدرال به نشر برسد، منظور نموده است.",
      summary:
        "وزارت امنیت داخلی ایالات متحده (DHS) یک مقرره نهایی را که قرار است در جریده رسمی فدرال به نشر برسد، منظور نموده است.",
      date_published: "2022-09-08T20:56:18.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "43f2ad01-7679-41ff-9256-8f5f2d610388",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-creole",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Creole)",
      content_html:
        "Depatman Sekirite Enteryè Ameriken an (DHS) te pibliye yon desizyon final, ki dwe parèt nan Rejis Federal la, ki pote klète ak konsistans pou moun ki pa sitwayen yo sou fason DHS pral jere motif pou non-kalifikasyon pou chaj piblik.",
      summary:
        "Depatman Sekirite Enteryè Ameriken an (DHS) te pibliye yon desizyon final, ki dwe parèt nan Rejis Federal la, ki pote klète ak konsistans pou moun ki pa sitwayen yo sou fason DHS pral jere motif pou non-kalifikasyon pou chaj piblik.",
      date_published: "2022-09-08T20:56:16.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "4d462382-f430-449d-8a7b-2a38aa2311f6",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-chinese",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Chinese)",
      content_html:
        "美国国土安全部（DHS）已经公布了一项将在《联邦公报》上发布的最终规则，该规则为非公民明确且一致地说明了有关DHS将如何管理公共负担原因的禁止入境。",
      summary:
        "美国国土安全部（DHS）已经公布了一项将在《联邦公报》上发布的最终规则，该规则为非公民明确且一致地说明了有关DHS将如何管理公共负担原因的禁止入境。",
      date_published: "2022-09-08T20:56:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "99478aaa-1fd3-4f08-b58d-c7fac4934796",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule-bengali",
      title: "DHS Publishes Fair and Humane Public Charge Rule (Bengali)",
      content_html:
        "মার্কিন যুক্তরাষ্ট্রের ডিপার্টমেন্ট অফ হোমল্যান্ড সিকিউরিটি (DHS) একটি চূড়ান্ত নিয়ম জারি করেছে, যা ফেডারেল রেজিস্টারে প্রকাশিত হবে, এবং যেটি অনাগরিকদের জন্য ধারাবাহিকতা বজায় রেখে খুব স্পষ্ট করে প্রকাশ করেছে যে কোন ক্ষেত্রে DHS পাবলিক চার্জ গ্রাউন্ড গ্রহণ করবে না। কয়েক দশক ধরে বজায় থাকা এই নিয়মটি '",
      summary:
        "মার্কিন যুক্তরাষ্ট্রের ডিপার্টমেন্ট অফ হোমল্যান্ড সিকিউরিটি (DHS) একটি চূড়ান্ত নিয়ম জারি করেছে, যা ফেডারেল রেজিস্টারে প্রকাশিত হবে, এবং যেটি অনাগরিকদের জন্য ধারাবাহিকতা বজায় রেখে খুব স্পষ্ট করে প্রকাশ করেছে যে কোন ক্ষেত্রে DHS পাবলিক চার্জ গ্রাউন্ড গ্রহণ করবে না। কয়েক দশক ধরে বজায় থাকা এই নিয়মটি '",
      date_published: "2022-09-08T16:56:35.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2e104e6c-acfa-4ccb-8999-5cac77e77e13",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-publishes-fair-and-humane-public-charge-rule",
      title: "DHS Publishes Fair and Humane Public Charge Rule",
      content_html:
        "The U.S. Department of Homeland Security (DHS) has issued a final rule, to be published in the Federal Register, that provides clarity and consistency for noncitizens on how DHS will administer the public charge ground of inadmissibility.",
      summary:
        "The U.S. Department of Homeland Security (DHS) has issued a final rule, to be published in the Federal Register, that provides clarity and consistency for noncitizens on how DHS will administer the public charge ground of inadmissibility.",
      date_published: "2022-09-08T13:49:04.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "560e04b8-5d2e-45b2-881b-d09ca3d2ec88",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-released-revised-editions-of-forms-i-589-and-i-765",
      title: "USCIS Released Revised Editions of Forms I-589 and I-765",
      content_html:
        "U.S. Citizenship and Immigration Services released revised editions of Form I-589, Application for Asylum and for Withholding of Removal, and Form I-765, Application for Employment Authorization, dated 07/26/22.",
      summary:
        "U.S. Citizenship and Immigration Services released revised editions of Form I-589, Application for Asylum and for Withholding of Removal, and Form I-765, Application for Employment Authorization, dated 07/26/22.",
      date_published: "2022-09-07T18:23:31.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5597af49-df98-456c-a834-c949de131408",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-re-registration-process-for-current-venezuela-temporary-protected-status-beneficiaries",
      title:
        "DHS Announces Re-Registration Process for Current Venezuela Temporary Protected Status Beneficiaries",
      content_html:
        "The Department of Homeland Security (DHS) posted for public inspection a Federal Register notice describing how beneficiaries under Venezuela’s existing TPS designation can re-register to retain TPS and renew their Employment Authorization Documents (EADs).",
      summary:
        "The Department of Homeland Security (DHS) posted for public inspection a Federal Register notice describing how beneficiaries under Venezuela’s existing TPS designation can re-register to retain TPS and renew their Employment Authorization Documents (EADs).",
      date_published: "2022-09-07T13:21:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "908245fa-cdf4-41bb-a369-08671ebeda68",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-extends-and-expands-employment-authorization-for-individuals-covered-by-ded-for-liberia",
      title:
        "USCIS Extends and Expands Employment Authorization for Individuals Covered by DED for Liberia",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today published a Federal Register notice for the extension and expansion of eligibility for Deferred Enforced Departure (DED) for Liberians and explaining how eligible Liberians may apply for Employment Authorization Documents (EADs).",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today published a Federal Register notice for the extension and expansion of eligibility for Deferred Enforced Departure (DED) for Liberians and explaining how eligible Liberians may apply for Employment Authorization Documents (EADs).",
      date_published: "2022-09-02T13:25:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f2daaba3-2dcf-4631-860f-8bdd66d60909",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-resumes-cuban-family-reunification-parole-program-operations",
      title:
        "USCIS Resumes Cuban Family Reunification Parole Program Operations",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is resuming operations under the Cuban Family Reunification Parole (CFRP) program, beginning with pending CFRP program applications.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is resuming operations under the Cuban Family Reunification Parole (CFRP) program, beginning with pending CFRP program applications.",
      date_published: "2022-09-01T14:00:56.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "886798fd-529a-4ca8-b7d1-579fc8147d07",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-related-to-religious-workers",
      title: "USCIS Updates Guidance Related to Religious Workers",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing policy guidance in the USCIS Policy Manual to reorganize and expand on existing guidance related to special immigrant and nonimmigrant religious workers.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is issuing policy guidance in the USCIS Policy Manual to reorganize and expand on existing guidance related to special immigrant and nonimmigrant religious workers.",
      date_published: "2022-08-30T17:34:46.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "932b385f-29a2-4c36-952c-c8bc8059e792",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-issues-regulation-to-preserve-and-fortify-daca",
      title: "DHS Issues Regulation to Preserve and Fortify DACA",
      content_html:
        "Homeland Security Secretary Alejandro N. Mayorkas today announced that the Department has issued a final rule that will preserve and fortify the Deferred Action for Childhood Arrivals (DACA) policy for certain eligible noncitizens who arrived in the United States as children, deferring their removal and allowing them an opportunity to access a renewable, two-year work permit.",
      summary:
        "Homeland Security Secretary Alejandro N. Mayorkas today announced that the Department has issued a final rule that will preserve and fortify the Deferred Action for Childhood Arrivals (DACA) policy for certain eligible noncitizens who arrived in the United States as children, deferring their removal and allowing them an opportunity to access a renewable, two-year work permit.",
      date_published: "2022-08-24T21:29:00.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c092f8e5-398a-4fee-956b-d26400f714e9",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-fiscal-year-2023-h-1b-cap",
      title: "USCIS Reaches Fiscal Year 2023 H-1B Cap",
      content_html:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2023.",
      summary:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2023.",
      date_published: "2022-08-23T13:38:16.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e4c7b0ad-7370-449c-9f5b-c5b78f93462d",
      url: "https://www.uscis.gov/newsroom/alerts/updated-covid-19-vaccination-requirements-for-uniting-for-ukraine-parolees",
      title:
        "Updated COVID-19 Vaccination Requirements for Uniting for Ukraine Parolees",
      content_html:
        "The U.S. Department of Homeland Security (DHS) has updated the COVID-19 vaccination requirements for beneficiaries paroled into the United States under Uniting for Ukraine.",
      summary:
        "The U.S. Department of Homeland Security (DHS) has updated the COVID-19 vaccination requirements for beneficiaries paroled into the United States under Uniting for Ukraine.",
      date_published: "2022-08-10T16:16:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1e0163bf-6793-4431-bb42-8ca290b7ad0e",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-interpretation-of-under-honorable-conditions-for-military-naturalization",
      title:
        "USCIS Updates Interpretation of “Under Honorable Conditions” for Military Naturalization",
      content_html:
        "U.S. Citizenship and Immigration Services is publishing an update to its Policy Manual to clarify that a current or former service member who received an uncharacterized discharge may be eligible for naturalization under sections 328 and 329 of the Immigration and Naturalization Act (INA).",
      summary:
        "U.S. Citizenship and Immigration Services is publishing an update to its Policy Manual to clarify that a current or former service member who received an uncharacterized discharge may be eligible for naturalization under sections 328 and 329 of the Immigration and Naturalization Act (INA).",
      date_published: "2022-08-02T17:23:41.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "feee536b-b97e-415e-a994-2069121c7614",
      url: "https://www.uscis.gov/newsroom/alerts/new-stem-resources-available-on-uscis-website",
      title: "New STEM Resources Available on USCIS Website",
      content_html:
        "U.S. Citizenship and Immigration Services has published additional online resources on uscis.gov to provide an overview of some of the temporary and permanent pathways for noncitizens to work in the United States in the fields of science, technology, engineering, and math (STEM). This guide also highlights some of the most important considerations for STEM professionals who want to work in the United States.",
      summary:
        "U.S. Citizenship and Immigration Services has published additional online resources on uscis.gov to provide an overview of some of the temporary and permanent pathways for noncitizens to work in the United States in the fields of science, technology, engineering, and math (STEM). This guide also highlights some of the most important considerations for STEM professionals who want to work in the United States.",
      date_published: "2022-07-28T21:27:48.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "cd3c63ac-5eb9-4200-846f-c8f337a0e885",
      url: "https://www.uscis.gov/newsroom/alerts/parolees-can-now-file-form-i-765-online",
      title: "Parolees Can Now File Form I-765 Online",
      content_html:
        "U.S. Citizenship and Immigration Services today announced that certain parolees can now file Form I-765, Application for Employment Authorization, online.",
      summary:
        "U.S. Citizenship and Immigration Services today announced that certain parolees can now file Form I-765, Application for Employment Authorization, online.",
      date_published: "2022-07-28T17:24:51.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d55f6d08-196e-4d17-8b57-936f92f56172",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-covid-19-related-flexibilities",
      title: "USCIS Extends COVID-19-related Flexibilities",
      content_html:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through Oct. 23, 2022, to assist applicants, petitioners, and requestors.",
      summary:
        "U.S. Citizenship and Immigration Services is extending certain COVID-19-related flexibilities through Oct. 23, 2022, to assist applicants, petitioners, and requestors.",
      date_published: "2022-07-25T19:20:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "773b8cdb-b9ef-456f-a952-c79fe52e3302",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-for-o-1-petitions-with-a-focus-on-stem-fields",
      title:
        "USCIS Updates Guidance for O-1 Petitions with a Focus on STEM Fields",
      content_html:
        "U.S. Citizenship and Immigration Services today updated its Policy Manual to provide further guidance on evidence that can be used to support a petition for an O-1A nonimmigrant of extraordinary ability with a focus on science, technology, engineering, and mathematics (STEM) fields.",
      summary:
        "U.S. Citizenship and Immigration Services today updated its Policy Manual to provide further guidance on evidence that can be used to support a petition for an O-1A nonimmigrant of extraordinary ability with a focus on science, technology, engineering, and mathematics (STEM) fields.",
      date_published: "2022-07-22T15:57:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "bce1ddc5-bb81-4a4c-8146-200000d485df",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-for-afghans-and-iraqis-seeking-special-immigrant-classification",
      title:
        "USCIS Updates Guidance for Afghans and Iraqis Seeking Special Immigrant Classification",
      content_html:
        "USCIS is updating guidance in the USCIS Policy Manual regarding Afghan and Iraqi nationals seeking special immigrant classification.",
      summary:
        "USCIS is updating guidance in the USCIS Policy Manual regarding Afghan and Iraqi nationals seeking special immigrant classification.",
      date_published: "2022-07-20T21:31:55.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b451643b-9c25-4886-9ead-426505ea0bf0",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-implement-second-phase-of-premium-processing-for-certain-previously-filed-eb-1-and-eb-2",
      title:
        "USCIS to Implement Second Phase of Premium Processing for Certain Previously Filed EB-1 and EB-2 Form I-140 Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is implementing the second phase of the premium processing expansion for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is implementing the second phase of the premium processing expansion for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      date_published: "2022-07-15T13:56:30.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "c24ed521-d94d-402a-97ad-e84b3b286d28",
      url: "https://www.uscis.gov/newsroom/alerts/time-frame-extended-for-uniting-for-ukraine-parolees-to-comply-with-medical-screening-and",
      title:
        "Time Frame Extended for Uniting for Ukraine Parolees to Comply with Medical Screening and Attestation After Arrival to the United States",
      content_html:
        "The U.S. Department of Homeland Security (DHS) has extended the time beneficiaries paroled into the United States under Uniting for Ukraine have to attest to their compliance with the medical screening for tuberculosis and additional vaccinations, if required. Effective immediately, beneficiaries paroled into the United States under Uniting for Ukraine must complete their medical attestation within 90 days of arrival in the United States. Previously, beneficiaries paroled into the United States under Uniting for Ukraine were required to complete the medical screening and attestation within 14 days of arrival to the United States.",
      summary:
        "The U.S. Department of Homeland Security (DHS) has extended the time beneficiaries paroled into the United States under Uniting for Ukraine have to attest to their compliance with the medical screening for tuberculosis and additional vaccinations, if required. Effective immediately, beneficiaries paroled into the United States under Uniting for Ukraine must complete their medical attestation within 90 days of arrival in the United States. Previously, beneficiaries paroled into the United States under Uniting for Ukraine were required to complete the medical screening and attestation within 14 days of arrival to the United States.",
      date_published: "2022-07-13T19:38:58.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e8f0e831-875d-46b0-bf91-c7ff75934146",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-releases-new-forms-for-immigrant-investor-program-0",
      title: "USCIS Releases New Forms for Immigrant Investor Program",
      content_html:
        "USCIS is revising Form I-526, Immigrant Petition by Alien Entrepreneur, to accommodate the EB-5 Reform and Integrity Act of 2022, which made significant changes to both the filing and eligibility requirements for investors under the EB-5 program.",
      summary:
        "USCIS is revising Form I-526, Immigrant Petition by Alien Entrepreneur, to accommodate the EB-5 Reform and Integrity Act of 2022, which made significant changes to both the filing and eligibility requirements for investors under the EB-5 program.",
      date_published: "2022-07-12T19:13:24.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e4a3b59d-53d3-45a4-b27f-2ca784992a5e",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-new-citizenship-ambassador-initiative",
      title: "USCIS Announces New Citizenship Ambassador Initiative",
      content_html:
        "Today, U.S. Citizenship and Immigration Services (USCIS) announced the launch of the first-ever citizenship ambassador initiative.",
      summary:
        "Today, U.S. Citizenship and Immigration Services (USCIS) announced the launch of the first-ever citizenship ambassador initiative.",
      date_published: "2022-07-12T17:03:34.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8b2248cf-a40d-43bb-9b20-4e99ca962712",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-extension-of-temporary-protected-status-for-venezuela",
      title:
        "DHS Announces Extension of Temporary Protected Status for Venezuela",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas is extending the designation of Venezuela for Temporary Protected Status (TPS) for 18 months.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas is extending the designation of Venezuela for Temporary Protected Status (TPS) for 18 months.",
      date_published: "2022-07-11T21:48:31.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "67ac4d90-be25-4d5e-a529-51088d657662",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-celebrates-independence-day-2022-and-continues-its-commitment-to-naturalization",
      title:
        "USCIS Celebrates Independence Day 2022 and Continues its Commitment to Naturalization",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) will celebrate Independence Day this year by welcoming more than 6,600 new citizens in more than 140 naturalization ceremonies between July 1 and July 8.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) will celebrate Independence Day this year by welcoming more than 6,600 new citizens in more than 140 naturalization ceremonies between July 1 and July 8.",
      date_published: "2022-07-01T14:19:54.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "fc52ad42-38f7-468c-b966-559f6c8ddfda",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-expansion-of-citizenship-and-integration-grant-program-and-open-application-period",
      title:
        "DHS Announces Expansion of Citizenship and Integration Grant Program and Open Application Period",
      content_html:
        "The Department of Homeland Security (DHS) today announced the open application period for the Citizenship and Integration Grant Program, which provides funding for citizenship preparation programs in communities across the country.",
      summary:
        "The Department of Homeland Security (DHS) today announced the open application period for the Citizenship and Integration Grant Program, which provides funding for citizenship preparation programs in communities across the country.",
      date_published: "2022-06-27T14:46:29.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "05819e21-86d2-4bb9-95f4-fd8382cb418c",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-transfers-certain-h-1b-petitions-to-the-california-service-center",
      title:
        "USCIS Transfers Certain H-1B Petitions to the California Service Center",
      content_html:
        "U.S. Citizenship and Immigration Services announced today that certain H-1B petitions and fiscal year (FY) 2023 H-1B cap petitions awaiting intake at the Vermont Service Center (VSC) are being transferred to the California Service Center (CSC) for data entry and adjudication.",
      summary:
        "U.S. Citizenship and Immigration Services announced today that certain H-1B petitions and fiscal year (FY) 2023 H-1B cap petitions awaiting intake at the Vermont Service Center (VSC) are being transferred to the California Service Center (CSC) for data entry and adjudication.",
      date_published: "2022-06-16T19:00:03.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9fc9a982-6b1c-4c42-913f-533cd7992ba3",
      url: "https://www.uscis.gov/newsroom/all-news/dhs-and-dos-announce-exemptions-allowing-eligible-afghans-to-qualify-for-protection-and-immigration",
      title:
        "DHS and DOS Announce Exemptions Allowing Eligible Afghans to Qualify for Protection and Immigration Benefits",
      content_html:
        "Today, the Department of Homeland Security and Department of State took steps to ensure that vulnerable Afghans who have supported and worked with the United States in Afghanistan, and who have undergone rigorous screening and vetting, can qualify for protection and other immigration benefits in the United States.",
      summary:
        "Today, the Department of Homeland Security and Department of State took steps to ensure that vulnerable Afghans who have supported and worked with the United States in Afghanistan, and who have undergone rigorous screening and vetting, can qualify for protection and other immigration benefits in the United States.",
      date_published: "2022-06-14T21:37:32.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b589e4be-3597-419b-ba90-6cadfc0a11c8",
      url: "https://www.uscis.gov/newsroom/alerts/parole-requests-in-response-to-the-shooting-in-uvalde-texas",
      title: "Parole Requests in Response to the Shooting in Uvalde, Texas",
      content_html:
        "If you are seeking parole into the United States for yourself or someone else to attend a funeral or provide emergency assistance to a family member affected by the shooting at Robb Elementary School in Uvalde, Texas, submit a request for urgent humanitarian or significant public benefit parole by filing Form I-131, Application for Travel Document.",
      summary:
        "If you are seeking parole into the United States for yourself or someone else to attend a funeral or provide emergency assistance to a family member affected by the shooting at Robb Elementary School in Uvalde, Texas, submit a request for urgent humanitarian or significant public benefit parole by filing Form I-131, Application for Travel Document.",
      date_published: "2022-06-08T21:37:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d22be31d-1cd1-4e2a-9735-49e685117128",
      url: "https://www.uscis.gov/newsroom/news-releases/le-dhs-annonce-le-processus-denregistrement-du-statut-de-protection-temporaire-pour-le-cameroun",
      title:
        "Le DHS annonce le processus d'enregistrement du statut de protection temporaire pour le Cameroun",
      content_html:
        "Le Département de la Sécurité Intérieure a publié dans le Registre Fédéral un avis sur le Statut de Protection Temporaire (TPS) pour le Cameroun.",
      summary:
        "Le Département de la Sécurité Intérieure a publié dans le Registre Fédéral un avis sur le Statut de Protection Temporaire (TPS) pour le Cameroun.",
      date_published: "2022-06-06T18:59:19.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8abb384f-d37e-4e15-bd66-260a5b50ce58",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-registration-process-for-temporary-protected-status-for-cameroon",
      title:
        "DHS Announces Registration Process for Temporary Protected Status for Cameroon",
      content_html:
        "The Department of Homeland Security posted for public inspection a Federal Register notice on Temporary Protected Status (TPS) for Cameroon.",
      summary:
        "The Department of Homeland Security posted for public inspection a Federal Register notice on Temporary Protected Status (TPS) for Cameroon.",
      date_published: "2022-06-06T13:32:17.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2c2e79fe-0fbe-425f-86b4-6d3f7cdc578e",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-public-charge-resources-webpage-to-provide-information-on-the-public-charge-ground-of",
      title:
        "USCIS Updates Public Charge Resources Webpage to Provide Information on the Public Charge Ground of Inadmissibility and Public Benefits Available to Noncitizens",
      content_html:
        "U.S. Citizenship and Immigration Services has updated our public charge resources webpage with more information to help reduce undue fear and confusion among immigrants and their families, including U.S. citizens and their children, that may prevent them from obtaining access to critical government services available to them.",
      summary:
        "U.S. Citizenship and Immigration Services has updated our public charge resources webpage with more information to help reduce undue fear and confusion among immigrants and their families, including U.S. citizens and their children, that may prevent them from obtaining access to critical government services available to them.",
      date_published: "2022-06-03T13:54:06.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "081da55f-9254-4be8-8fff-6e803d981ed6",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-releases-new-forms-for-immigrant-investor-program",
      title: "USCIS Releases New Forms for Immigrant Investor Program",
      content_html:
        "U.S. Citizenship and Immigration Services has released two new forms under the EB-5 Reform and Integrity Act of 2022, which revised INA 203(b)(5).",
      summary:
        "U.S. Citizenship and Immigration Services has released two new forms under the EB-5 Reform and Integrity Act of 2022, which revised INA 203(b)(5).",
      date_published: "2022-06-02T20:19:30.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "770b716e-167f-4c79-a84c-a55f2e9d1304",
      url: "https://www.uscis.gov/newsroom/alerts/cap-reached-for-additional-returning-worker-h-2b-visas-for-second-half-of-fy-2022",
      title:
        "Cap Reached for Additional Returning Worker H-2B Visas for Second Half of FY 2022",
      content_html:
        "Under the recently announced H-2B supplemental cap temporary final rule increasing the cap by up to 35,000 additional H-2B nonimmigrant visas through the end of fiscal year (FY) 2022, USCIS has received enough petitions to reach the cap for the additional 23,500 visas made available for returning workers only.",
      summary:
        "Under the recently announced H-2B supplemental cap temporary final rule increasing the cap by up to 35,000 additional H-2B nonimmigrant visas through the end of fiscal year (FY) 2022, USCIS has received enough petitions to reach the cap for the additional 23,500 visas made available for returning workers only.",
      date_published: "2022-05-31T14:52:31.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5ea8f7f0-50d9-455a-89e9-25a47b1affcf",
      url: "https://www.uscis.gov/newsroom/all-news/immigration-help-available-to-those-affected-by-special-situations-including-the-shooting-in-uvalde",
      title:
        "Immigration Help Available to Those Affected by Special Situations, Including the Shooting in Uvalde, Texas",
      content_html:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by unforeseen circumstances, including the shooting in Uvalde, Texas.",
      summary:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by unforeseen circumstances, including the shooting in Uvalde, Texas.",
      date_published: "2022-05-27T21:56:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "ec14f68e-0f57-4734-8d86-667ac36d5d08",
      url: "https://www.uscis.gov/newsroom/all-news/statement-from-secretary-mayorkas-on-efficiently-and-fairly-processing-asylum-claims",
      title:
        "Statement from Secretary Mayorkas on Efficiently and Fairly Processing Asylum Claims",
      content_html:
        "Secretary of Homeland Security Alejandro N. Mayorkas released the following statement regarding the implementation of a rule that will ensure that noncitizens placed in expedited removal who are eligible for asylum are granted relief quickly, while those who are not are promptly removed.",
      summary:
        "Secretary of Homeland Security Alejandro N. Mayorkas released the following statement regarding the implementation of a rule that will ensure that noncitizens placed in expedited removal who are eligible for asylum are granted relief quickly, while those who are not are promptly removed.",
      date_published: "2022-05-26T22:44:22.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "659c3d48-8a66-4e78-a773-09f56d3c2b06",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-implement-premium-processing-for-certain-previously-filed-eb-1-and-eb-2-form-i-140",
      title:
        "USCIS to Implement Premium Processing for Certain Previously Filed EB-1 and EB-2 Form I-140 Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services is implementing premium processing for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      summary:
        "U.S. Citizenship and Immigration Services is implementing premium processing for certain petitioners who have a pending Form I-140, Immigrant Petition for Alien Workers, under the EB-1 and EB-2 classifications.",
      date_published: "2022-05-24T14:23:20.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "025a4fad-b9aa-49a0-819e-c32def5c6bd8",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-registration-process-for-temporary-protected-status-for-afghanistan",
      title:
        "DHS Announces Registration Process for Temporary Protected Status for Afghanistan",
      content_html:
        "The Department of Homeland Security (DHS) posted for public inspection a Federal Register notice on Temporary Protected Status (TPS) for Afghanistan.",
      summary:
        "The Department of Homeland Security (DHS) posted for public inspection a Federal Register notice on Temporary Protected Status (TPS) for Afghanistan.",
      date_published: "2022-05-19T13:28:24.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "eaf69904-4803-415b-83ce-e73e8241444d",
      url: "https://www.uscis.gov/newsroom/news-releases/readout-of-national-public-engagement-on-backlog-reduction",
      title: "Readout of National Public Engagement on Backlog Reduction",
      content_html:
        "Today U.S. Citizenship and Immigration Services Director Ur M. Jaddou and agency leadership participated in a virtual public engagement with nearly 2,000 stakeholders nationwide to discuss the agency’s efforts to reduce backlogs and improve processing times.",
      summary:
        "Today U.S. Citizenship and Immigration Services Director Ur M. Jaddou and agency leadership participated in a virtual public engagement with nearly 2,000 stakeholders nationwide to discuss the agency’s efforts to reduce backlogs and improve processing times.",
      date_published: "2022-05-18T20:03:00.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "24c8d8e4-1b06-4f73-90a9-23c039759574",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-and-dol-announce-availability-of-additional-h-2b-visas-for-second-half-of-fiscal-year",
      title:
        "DHS and DOL Announce Availability of Additional H-2B Visas for Second Half of Fiscal Year",
      content_html:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) announced today the availability of an additional 35,000 H-2B temporary nonagricultural worker visas during the second half of fiscal year (FY) 2022.",
      summary:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) announced today the availability of an additional 35,000 H-2B temporary nonagricultural worker visas during the second half of fiscal year (FY) 2022.",
      date_published: "2022-05-16T21:00:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "bc9a1991-d3d7-497c-982e-fe3599cb52e8",
      url: "https://www.uscis.gov/newsroom/alerts/two-new-forms-published-for-regional-center-designation",
      title: "Two New Forms Published for Regional Center Designation",
      content_html:
        "U.S. Citizenship and Immigration Services today published two new forms for regional center designation under the EB-5 Immigrant Investor Program: Form I-956, Application for Regional Center Designation, and Form I-956H, Bona Fides of Persons Involved with Regional Center Program. Both forms are available on the USCIS website.",
      summary:
        "U.S. Citizenship and Immigration Services today published two new forms for regional center designation under the EB-5 Immigrant Investor Program: Form I-956, Application for Regional Center Designation, and Form I-956H, Bona Fides of Persons Involved with Regional Center Program. Both forms are available on the USCIS website.",
      date_published: "2022-05-13T17:54:14.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "9da0f669-c3e7-43ff-9273-796e9b480386",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-nadae-informaciyu-schodo-ednannya-zaradi-ukraini",
      title: "USCIS надає інформацію щодо «Єднання заради України»",
      content_html:
        "21 квітня Сполучені Штати оголосили про започаткування програми «Єднання заради України», яка є ключовим кроком у виконанні зобов’язання президента Байдена вітати українців, які рятуються від вторгнення Росії в Україну.",
      summary:
        "21 квітня Сполучені Штати оголосили про започаткування програми «Єднання заради України», яка є ключовим кроком у виконанні зобов’язання президента Байдена вітати українців, які рятуються від вторгнення Росії в Україну.",
      date_published: "2022-05-06T20:45:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "4ec7c7db-cea6-4324-9677-3a86ba8f48b8",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-simplifying-improving-communication-of-case-processing-data",
      title:
        "USCIS Simplifying, Improving Communication of Case Processing Data",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) announced changes to simplify and improve how the agency communicates case processing time data to the public.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) announced changes to simplify and improve how the agency communicates case processing time data to the public.",
      date_published: "2022-05-05T14:19:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "cf8bdf39-27fa-4067-921e-9c351612e483",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-celebrates-public-service-recognition-week",
      title: "USCIS Celebrates Public Service Recognition Week",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) is honoring its dedicated workforce during Public Service Recognition Week, May 1-7. Celebrated during the first full week in May since 1985, Public Service Recognition Week is a time set aside to honor those who serve our nation as federal, state, county, and local government employees.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) is honoring its dedicated workforce during Public Service Recognition Week, May 1-7. Celebrated during the first full week in May since 1985, Public Service Recognition Week is a time set aside to honor those who serve our nation as federal, state, county, and local government employees.",
      date_published: "2022-05-03T15:55:15.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b4f65010-c579-4931-884b-c6e5496314ef",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-increases-automatic-extension-period-of-work-permits-for-certain-applicants",
      title:
        "USCIS Increases Automatic Extension Period of Work Permits for Certain Applicants",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) announced a Temporary Final Rule (TFR) that increases the automatic extension period for employment authorization and Employment Authorization Documents (EADs), available to certain EAD renewal applicants, to up to 540 days.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) announced a Temporary Final Rule (TFR) that increases the automatic extension period for employment authorization and Employment Authorization Documents (EADs), available to certain EAD renewal applicants, to up to 540 days.",
      date_published: "2022-05-03T13:04:26.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "aa8da124-4728-445f-afc4-3e5dcdb6a46a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-provides-information-on-uniting-for-ukraine",
      title: "USCIS Provides Information on Uniting for Ukraine",
      content_html:
        "On April 21, the United States announced Uniting for Ukraine, a key step towards fulfilling President Biden’s commitment to welcome Ukrainians fleeing Russia’s invasion of Ukraine. Uniting for Ukraine provides a pathway for displaced Ukrainian citizens and their immediate family members who are outside the United States to come to the United States and stay temporarily for a two-year period of parole.",
      summary:
        "On April 21, the United States announced Uniting for Ukraine, a key step towards fulfilling President Biden’s commitment to welcome Ukrainians fleeing Russia’s invasion of Ukraine. Uniting for Ukraine provides a pathway for displaced Ukrainian citizens and their immediate family members who are outside the United States to come to the United States and stay temporarily for a two-year period of parole.",
      date_published: "2022-04-25T20:08:53.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "5ea2be5a-77fa-4f66-9c27-c8f2a03f1dd7",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-announces-registration-process-for-temporary-protected-status-for-ukraine-and-sudan",
      title:
        "DHS Announces Registration Process for Temporary Protected Status for Ukraine and Sudan",
      content_html:
        "The Department of Homeland Security (DHS) posted today two Federal Register notices on Temporary Protected Status (TPS) for Ukraine and Sudan. These notices provide information about how to register for TPS under each country’s designation. Secretary of Homeland Security Alejandro N. Mayorkas previously announced the 18-month designation of Ukraine for TPS and the 18-month designation of Sudan for TPS.",
      summary:
        "The Department of Homeland Security (DHS) posted today two Federal Register notices on Temporary Protected Status (TPS) for Ukraine and Sudan. These notices provide information about how to register for TPS under each country’s designation. Secretary of Homeland Security Alejandro N. Mayorkas previously announced the 18-month designation of Ukraine for TPS and the 18-month designation of Sudan for TPS.",
      date_published: "2022-04-18T19:33:17.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "0078b1b6-ee93-4a05-9c81-b0e07a33c609",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-designates-cameroon-for-temporary-protected-status-for-18-months",
      title:
        "Secretary Mayorkas Designates Cameroon for Temporary Protected Status for 18 Months",
      content_html:
        "Today, the Department of Homeland Security (DHS) announced the designation of Cameroon for Temporary Protected Status (TPS) for 18 months. Only individuals who are already residing in the United States as of April 14, 2022, will be eligible for TPS.",
      summary:
        "Today, the Department of Homeland Security (DHS) announced the designation of Cameroon for Temporary Protected Status (TPS) for 18 months. Only individuals who are already residing in the United States as of April 14, 2022, will be eligible for TPS.",
      date_published: "2022-04-15T13:00:44.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f4fe174d-ee1b-483a-97ba-4a1315c73669",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-online-filing-for-daca-renewal-forms",
      title: "USCIS Announces Online Filing for DACA Renewal Forms",
      content_html:
        "U.S. Citizenship and Immigration Services announced today that individuals who previously received deferred action under Deferred Action for Childhood Arrivals (DACA) may now file Form I-821D, Consideration of Deferred Action for Childhood Arrivals, online.",
      summary:
        "U.S. Citizenship and Immigration Services announced today that individuals who previously received deferred action under Deferred Action for Childhood Arrivals (DACA) may now file Form I-821D, Consideration of Deferred Action for Childhood Arrivals, online.",
      date_published: "2022-04-12T13:33:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f90e190a-e392-4a61-85be-43ee34d22e1c",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-implements-risk-based-approach-for-conditional-permanent-resident-interviews",
      title:
        "USCIS Implements Risk-Based Approach for Conditional Permanent Resident Interviews",
      content_html:
        "U.S. Citizenship and Immigration Services (USCIS) today announced a policy update to adopt a risk-based approach when waiving interviews for conditional permanent residents (CPR) who have filed a petition to remove the conditions on their permanent resident status.",
      summary:
        "U.S. Citizenship and Immigration Services (USCIS) today announced a policy update to adopt a risk-based approach when waiving interviews for conditional permanent residents (CPR) who have filed a petition to remove the conditions on their permanent resident status.",
      date_published: "2022-04-07T13:49:25.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d0f482aa-f515-4fb1-841d-f8abbf97a429",
      url: "https://www.uscis.gov/newsroom/all-news/dhs-and-dol-to-supplement-the-h-2b-cap-with-additional-visas-for-second-half-of-fiscal-year-2022",
      title:
        "DHS and DOL to Supplement the H-2B Cap with Additional Visas for Second Half of Fiscal Year 2022",
      content_html:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) today announced the forthcoming publication of a joint temporary final rule to make available an additional 35,000 H-2B temporary nonagricultural worker visas for the second half of fiscal year (FY) 2022. These visas will be set aside for U.S. employers seeking to employ additional workers on or after April 1, 2022, through Sept. 30, 2022.",
      summary:
        "The Department of Homeland Security (DHS) and the Department of Labor (DOL) today announced the forthcoming publication of a joint temporary final rule to make available an additional 35,000 H-2B temporary nonagricultural worker visas for the second half of fiscal year (FY) 2022. These visas will be set aside for U.S. employers seeking to employ additional workers on or after April 1, 2022, through Sept. 30, 2022.",
      date_published: "2022-03-31T16:38:04.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1e3c1543-943b-4ed0-a74a-4d088009825a",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-service-center-expands-credit-card-payment-pilot-program-to-most-forms",
      title:
        "USCIS Service Center Expands Credit Card Payment Pilot Program to Most Forms",
      content_html:
        "As part of our credit card payment pilot program, the USCIS service centers are now accepting credit card payments using Form G-1450, Authorization for Credit Card Transactions, for most forms.",
      summary:
        "As part of our credit card payment pilot program, the USCIS service centers are now accepting credit card payments using Form G-1450, Authorization for Credit Card Transactions, for most forms.",
      date_published: "2022-03-30T15:14:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "151a4054-e389-4efe-a8ce-3d339078ee44",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-extends-flexibility-for-responding-to-agency-requests-1",
      title: "USCIS Extends Flexibility for Responding to Agency Requests",
      content_html:
        "In response to the COVID-19 pandemic, U.S. Citizenship and Immigration Services is extending certain flexibilities through July 25, 2022, to assist applicants, petitioners, and requestors.",
      summary:
        "In response to the COVID-19 pandemic, U.S. Citizenship and Immigration Services is extending certain flexibilities through July 25, 2022, to assist applicants, petitioners, and requestors.",
      date_published: "2022-03-30T13:35:47.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "38b29c33-e102-4e51-a37d-ee33ec2243df",
      url: "https://www.uscis.gov/newsroom/alerts/fy-2023-h-1b-cap-season-updates",
      title: "FY 2023 H-1B Cap Season Updates",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough electronic registrations during the initial registration period to reach the fiscal year (FY) 2023 H-1B numerical allocations (H-1B cap), including the advanced degree exemption (master’s cap).",
      summary:
        "U.S. Citizenship and Immigration Services has received enough electronic registrations during the initial registration period to reach the fiscal year (FY) 2023 H-1B numerical allocations (H-1B cap), including the advanced degree exemption (master’s cap).",
      date_published: "2022-03-29T17:27:56.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "1ad9d16e-02cf-42a5-8f35-f7ada85722dd",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-new-actions-to-reduce-backlogs-expand-premium-processing-and-provide-relief-to-work",
      title:
        "USCIS Announces New Actions to Reduce Backlogs, Expand Premium Processing, and Provide Relief to Work Permit Holders",
      content_html:
        "Today, U.S. Citizenship and Immigration Services is announcing a trio of efforts to increase efficiency and reduce burdens to the overall legal immigration system.",
      summary:
        "Today, U.S. Citizenship and Immigration Services is announcing a trio of efforts to increase efficiency and reduce burdens to the overall legal immigration system.",
      date_published: "2022-03-29T13:55:09.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "34ef8d7e-d7e9-41b1-b228-45addc870bec",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-and-doj-issue-rule-to-efficiently-and-fairly-process-asylum-claims",
      title:
        "DHS and DOJ Issue Rule to Efficiently and Fairly Process Asylum Claims",
      content_html:
        "Today, the Department of Homeland Security (DHS) and Department of Justice (DOJ) are issuing a rule to improve and expedite processing of asylum claims made by noncitizens subject to expedited removal, ensuring that those who are eligible for asylum are granted relief quickly, and those who are not are promptly removed.",
      summary:
        "Today, the Department of Homeland Security (DHS) and Department of Justice (DOJ) are issuing a rule to improve and expedite processing of asylum claims made by noncitizens subject to expedited removal, ensuring that those who are eligible for asylum are granted relief quickly, and those who are not are promptly removed.",
      date_published: "2022-03-24T13:29:06.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "8357848f-302c-4309-9df7-ed4b44a6c5cf",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidance-on-employment-authorization-for-e-and-l-nonimmigrant-spouses",
      title:
        "USCIS Updates Guidance on Employment Authorization for E and L Nonimmigrant Spouses",
      content_html:
        "U.S. Citizenship and Immigration Services is updating guidance in the USCIS Policy Manual to address the documentation that certain E and L nonimmigrant spouses may use as evidence of employment authorization based on their nonimmigrant status.",
      summary:
        "U.S. Citizenship and Immigration Services is updating guidance in the USCIS Policy Manual to address the documentation that certain E and L nonimmigrant spouses may use as evidence of employment authorization based on their nonimmigrant status.",
      date_published: "2022-03-18T13:39:01.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "d39fa64e-40da-4ebe-ba81-e4a94202d273",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-urges-eligible-individuals-to-consider-applying-for-adjustment-of-status-in-the-eb-2-category",
      title:
        "USCIS Urges Eligible Individuals to Consider Applying for Adjustment of Status in the EB-2 Category Based on the April Visa Bulletin Date for Filing for India",
      content_html:
        "In the recently published April Visa Bulletin, the Department of State advanced the Date for Filing (also known as the application date) applications for an immigrant visa or adjustment of status in the employment-based, second preference (EB-2) category for India from Sept. 1, 2013, to Sept. 1, 2014.",
      summary:
        "In the recently published April Visa Bulletin, the Department of State advanced the Date for Filing (also known as the application date) applications for an immigrant visa or adjustment of status in the employment-based, second preference (EB-2) category for India from Sept. 1, 2013, to Sept. 1, 2014.",
      date_published: "2022-03-17T15:56:33.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "08efa447-2450-4c1f-895b-0c5717b27fd6",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-designates-afghanistan-for-temporary-protected-status",
      title:
        "Secretary Mayorkas Designates Afghanistan for Temporary Protected Status",
      content_html:
        "The Department of Homeland Security (DHS) today announced the designation of Afghanistan for Temporary Protected Status (TPS) for 18 months. Only individuals who are already residing in the United States as of March 15, 2022, will be eligible for TPS.",
      summary:
        "The Department of Homeland Security (DHS) today announced the designation of Afghanistan for Temporary Protected Status (TPS) for 18 months. Only individuals who are already residing in the United States as of March 15, 2022, will be eligible for TPS.",
      date_published: "2022-03-16T13:02:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "a3b1822a-a441-4fda-9438-fd4678c0ad38",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-to-offer-deferred-action-for-special-immigrant-juveniles",
      title: "USCIS to Offer Deferred Action for Special Immigrant Juveniles",
      content_html:
        "U.S. Citizenship and Immigration Services today announced that it is updating the USCIS Policy Manual to consider deferred action and related employment authorization for noncitizens who have an approved Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, for Special Immigrant Juvenile (SIJ) classification but who cannot apply to adjust status to become a lawful permanent resident (LPR) because a visa number is not available.",
      summary:
        "U.S. Citizenship and Immigration Services today announced that it is updating the USCIS Policy Manual to consider deferred action and related employment authorization for noncitizens who have an approved Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant, for Special Immigrant Juvenile (SIJ) classification but who cannot apply to adjust status to become a lawful permanent resident (LPR) because a visa number is not available.",
      date_published: "2022-03-07T14:03:18.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "de932fb1-4900-4aa4-bebb-0bbe8c272a31",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-policies-to-better-protect-immigrant-children-who-have-been-abused-neglected-or",
      title:
        "USCIS Announces Policies to Better Protect Immigrant Children Who Have Been Abused, Neglected, or Abandoned",
      content_html:
        "United States Citizenship and Immigration Services (USCIS) today announced new policies that will provide better protection to immigrant children who are victims of abuse, neglect, abandonment, or similar parental maltreatment.",
      summary:
        "United States Citizenship and Immigration Services (USCIS) today announced new policies that will provide better protection to immigrant children who are victims of abuse, neglect, abandonment, or similar parental maltreatment.",
      date_published: "2022-03-07T12:26:57.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "90eed762-6f2f-4281-9b56-e707ab6f66a2",
      url: "https://www.uscis.gov/newsroom/alerts/immigration-help-available-to-those-affected-by-special-situations-including-the-invasion-of-ukraine",
      title:
        "Immigration Help Available to Those Affected by Special Situations, Including the Invasion of Ukraine",
      content_html:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by extreme situations, including the invasion of Ukraine.",
      summary:
        "U.S. Citizenship and Immigration Services reminds the public that we offer immigration services that may help people affected by extreme situations, including the invasion of Ukraine.",
      date_published: "2022-03-04T21:41:27.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "62b39794-5884-4a2d-ba56-1f95343837d5",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-designates-ukraine-for-temporary-protected-status-for-18-months",
      title:
        "Secretary Mayorkas Designates Ukraine for Temporary Protected Status for 18 Months",
      content_html:
        "The Department of Homeland Security (DHS) announced the designation of Ukraine for Temporary Protected Status (TPS) for 18 months.",
      summary:
        "The Department of Homeland Security (DHS) announced the designation of Ukraine for Temporary Protected Status (TPS) for 18 months.",
      date_published: "2022-03-03T22:33:23.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "465c53b5-7acb-47bc-97ee-1bca5bba8ba3",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-expands-credit-card-payment-pilot-program-to-all-service-centers",
      title:
        "USCIS Expands Credit Card Payment Pilot Program to All Service Centers",
      content_html:
        "As part of our credit card payment pilot program, the USCIS service centers are now accepting credit card payments using Form G-1450, Authorization for Credit Card Transactions, for all forms except Form I-129, Petition for a Nonimmigrant Worker, for H-1B and H-2A petitions.",
      summary:
        "As part of our credit card payment pilot program, the USCIS service centers are now accepting credit card payments using Form G-1450, Authorization for Credit Card Transactions, for all forms except Form I-129, Petition for a Nonimmigrant Worker, for H-1B and H-2A petitions.",
      date_published: "2022-03-02T20:44:17.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "2d61f864-86f7-4c27-bb4c-8b84c54a5a7f",
      url: "https://www.uscis.gov/newsroom/news-releases/secretary-mayorkas-designates-sudan-and-extends-and-redesignates-south-sudan-for-temporary-protected",
      title:
        "Secretary Mayorkas Designates Sudan and Extends and Redesignates South Sudan for Temporary Protected Status",
      content_html:
        "The Department of Homeland Security (DHS) announced a new designation of Sudan and an extension and redesignation of South Sudan for Temporary Protected Status (TPS) for 18 months.",
      summary:
        "The Department of Homeland Security (DHS) announced a new designation of Sudan and an extension and redesignation of South Sudan for Temporary Protected Status (TPS) for 18 months.",
      date_published: "2022-03-02T13:27:11.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "fd3440a7-f8ac-4639-a461-8b6d7f0058b5",
      url: "https://www.uscis.gov/newsroom/alerts/h-2b-cap-reached-for-second-half-of-fy-2022",
      title: "H-2B Cap Reached for Second Half of FY 2022",
      content_html:
        "U.S. Citizenship and Immigration Services has received enough petitions to meet the congressionally mandated H-2B cap for the second half of fiscal year (FY) 2022.",
      summary:
        "U.S. Citizenship and Immigration Services has received enough petitions to meet the congressionally mandated H-2B cap for the second half of fiscal year (FY) 2022.",
      date_published: "2022-03-01T19:33:28.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7e7b1906-3bc2-4736-9214-f82db53dfac9",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-reaches-fiscal-year-2022-h-1b-cap",
      title: "USCIS Reaches Fiscal Year 2022 H-1B Cap",
      content_html:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2022.",
      summary:
        "USCIS has received a sufficient number of petitions needed to reach the congressionally mandated 65,000 H-1B visa regular cap and the 20,000 H-1B visa U.S. advanced degree exemption, known as the master’s cap, for fiscal year (FY) 2022.",
      date_published: "2022-02-28T19:46:42.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "7854677c-08c2-4b83-83b7-6ecc6c75b8d5",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-launches-h-2a-employer-data-hub",
      title: "USCIS Launches H-2A Employer Data Hub",
      content_html:
        "U.S. Citizenship and Immigration Services has launched an H-2A Employer Data Hub to provide information to the public on employers or agents petitioning for H-2A workers.",
      summary:
        "U.S. Citizenship and Immigration Services has launched an H-2A Employer Data Hub to provide information to the public on employers or agents petitioning for H-2A workers.",
      date_published: "2022-02-25T19:45:09.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "b34ea644-f7ee-4ea4-afe7-e024d21591b2",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-urges-eligible-applicants-to-switch-employment-based-categories",
      title:
        "USCIS Urges Eligible Applicants to Switch  Employment-Based Categories",
      content_html:
        "U.S. Citizenship and Immigration Services encourages eligible applicants to consider requesting to transfer the underlying basis of their adjustment of status application to the first (priority workers) or second (noncitizens in professions with advanced degrees or with exceptional ability) employment-based preference categories, because there is an exceptionally high number of employment-based immigrant visas available in these categories during this fiscal year (October 2021 through September 2022).",
      summary:
        "U.S. Citizenship and Immigration Services encourages eligible applicants to consider requesting to transfer the underlying basis of their adjustment of status application to the first (priority workers) or second (noncitizens in professions with advanced degrees or with exceptional ability) employment-based preference categories, because there is an exceptionally high number of employment-based immigrant visas available in these categories during this fiscal year (October 2021 through September 2022).",
      date_published: "2022-02-18T19:42:41.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "affb605d-e077-4390-b639-05c04575ae79",
      url: "https://www.uscis.gov/newsroom/news-releases/dhs-proposes-fair-and-humane-public-charge-rule",
      title: "DHS Proposes Fair and Humane Public Charge Rule",
      content_html:
        "The Department of Homeland Security (DHS) will issue a Notice of Proposed Rulemaking (NPRM) that would regulate how DHS applies the public charge ground of inadmissibility. The proposed rule would provide fair and humane treatment for noncitizens requesting admission to the United States or applying for lawful permanent residence from within the United States. DHS has posted an advance copy of the proposed rule. The official version will publish in the Federal Register in the coming days.",
      summary:
        "The Department of Homeland Security (DHS) will issue a Notice of Proposed Rulemaking (NPRM) that would regulate how DHS applies the public charge ground of inadmissibility. The proposed rule would provide fair and humane treatment for noncitizens requesting admission to the United States or applying for lawful permanent residence from within the United States. DHS has posted an advance copy of the proposed rule. The official version will publish in the Federal Register in the coming days.",
      date_published: "2022-02-17T19:23:32.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "98e632c3-8f83-4852-8ef1-83094731a644",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-opens-a-new-lockbox-facility",
      title: "USCIS Opens a New Lockbox Facility",
      content_html:
        "As we announced in November 2021, we have opened a new lockbox facility in Elgin, Illinois. We are beginning to transition incoming work to the new location.",
      summary:
        "As we announced in November 2021, we have opened a new lockbox facility in Elgin, Illinois. We are beginning to transition incoming work to the new location.",
      date_published: "2022-02-10T19:02:35.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "e2e70f17-7a1f-4f22-9fe0-befcd6c45c54",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-policy-guidance-on-vawa-self-petitions",
      title: "USCIS Updates Policy Guidance on VAWA Self-Petitions",
      content_html:
        "U.S. Citizenship and Immigration Services is publishing policy guidance in the USCIS Policy Manual on eligibility, filing, and adjudication requirements addressing Violence Against Women Act (VAWA) self-petitions to update practices and align USCIS policies with recent court decisions.",
      summary:
        "U.S. Citizenship and Immigration Services is publishing policy guidance in the USCIS Policy Manual on eligibility, filing, and adjudication requirements addressing Violence Against Women Act (VAWA) self-petitions to update practices and align USCIS policies with recent court decisions.",
      date_published: "2022-02-10T15:35:20.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "896ade93-903e-454b-824e-43f207a996f3",
      url: "https://www.uscis.gov/newsroom/news-releases/uscis-announces-new-agency-mission-statement",
      title: "USCIS Announces New Agency Mission Statement",
      content_html:
        "Today, U.S. Citizenship and Immigration Services Director Ur M. Jaddou announced the agency’s new mission statement. Last year, USCIS leadership empowered employees to submit words that they felt best illustrated the agency’s work. The new mission statement is a reflection of this feedback from the workforce, the priorities of the Biden Administration, and Director Jaddou’s vision for an inclusive and accessible agency.",
      summary:
        "Today, U.S. Citizenship and Immigration Services Director Ur M. Jaddou announced the agency’s new mission statement. Last year, USCIS leadership empowered employees to submit words that they felt best illustrated the agency’s work. The new mission statement is a reflection of this feedback from the workforce, the priorities of the Biden Administration, and Director Jaddou’s vision for an inclusive and accessible agency.",
      date_published: "2022-02-09T14:05:43.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "f16bf57a-d2a2-48ac-b03c-31c741748df0",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-issues-policy-guidance-regarding-exemptions-from-the-temporary-need-requirement-for-h-2b",
      title:
        "USCIS Issues Policy Guidance Regarding Exemptions from the Temporary Need Requirement for H-2B Workers on Guam and the CNMI Under the FY 2021 National Defense Authorization Act",
      content_html:
        "USCIS is issuing updated policy guidance in the USCIS Policy Manual to clarify how petitioners may demonstrate that they qualify for an exemption from the temporary need requirement for a nonimmigrant visa petition for a temporary nonagricultural H-2B worker on Guam and in the Commonwealth of the Northern Mariana Islands (CNMI) that falls under the Fiscal Year 2021 National Defense Authorization Act.",
      summary:
        "USCIS is issuing updated policy guidance in the USCIS Policy Manual to clarify how petitioners may demonstrate that they qualify for an exemption from the temporary need requirement for a nonimmigrant visa petition for a temporary nonagricultural H-2B worker on Guam and in the Commonwealth of the Northern Mariana Islands (CNMI) that falls under the Fiscal Year 2021 National Defense Authorization Act.",
      date_published: "2022-02-08T14:33:03.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "711b88cd-6ea2-4119-8b3c-a12fb0b6d5cc",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-updates-guidelines-on-maximum-validity-periods-for-new-employment-authorization-documents-for",
      title:
        "USCIS Updates Guidelines on Maximum Validity Periods for New Employment Authorization Documents for Certain Applicants",
      content_html:
        "U.S. Citizenship and Immigration Services today published updated policy guidance to change the maximum validity period that may be granted for Employment Authorization Documents (EADs) issued to certain applicants, as well as to provide general guidance on adjudicating Form I-765, Application for Employment Authorization.",
      summary:
        "U.S. Citizenship and Immigration Services today published updated policy guidance to change the maximum validity period that may be granted for Employment Authorization Documents (EADs) issued to certain applicants, as well as to provide general guidance on adjudicating Form I-765, Application for Employment Authorization.",
      date_published: "2022-02-07T16:48:12.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "29a19c26-3ce6-46c2-b2f7-8e057aa885bd",
      url: "https://www.uscis.gov/newsroom/alerts/uscis-statement-on-the-international-day-of-zero-tolerance-for-female-genital-mutilation",
      title:
        "USCIS Statement on the International Day of Zero Tolerance for Female Genital Mutilation",
      content_html:
        "On Feb. 6, the International Day of Zero Tolerance for Female Genital Mutilation, U.S. Citizenship and Immigration Services joins other U.S. government agencies and the international community in calling for an end to the practice of female genital mutilation or cutting (FGM/C).",
      summary:
        "On Feb. 6, the International Day of Zero Tolerance for Female Genital Mutilation, U.S. Citizenship and Immigration Services joins other U.S. government agencies and the international community in calling for an end to the practice of female genital mutilation or cutting (FGM/C).",
      date_published: "2022-02-04T17:54:49.000Z",
      author: {
        name: "USCIS",
      },
    },
    {
      guid: "39fef9bb-f969-49f2-8bfb-9c514233d66b",
      url: "https://www.uscis.gov/newsroom/alerts/readout-of-director-ur-m-jaddous-virtual-briefing-with-stakeholders-to-mark-one-year-anniversary-of",
      title:
        "Readout of Director Ur M. Jaddou’s Virtual Briefing with Stakeholders to Mark One-Year Anniversary of Executive Orders Aimed at Restoring Faith in Our Immigration System",
      content_html:
        "Yesterday, on the one-year anniversary of several executive orders (EOs) from the Biden-Harris administration aimed at restoring faith in our nation’s legal immigration system, U.S. Citizenship and Immigration Services (USCIS) Director Ur M. Jaddou briefed national stakeholders on the agency’s efforts to implement these EOs.",
      summary:
        "Yesterday, on the one-year anniversary of several executive orders (EOs) from the Biden-Harris administration aimed at restoring faith in our nation’s legal immigration system, U.S. Citizenship and Immigration Services (USCIS) Director Ur M. Jaddou briefed national stakeholders on the agency’s efforts to implement these EOs.",
      date_published: "2022-02-03T14:44:46.000Z",
      author: {
        name: "USCIS",
      },
    },
  ];
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feed.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(feed.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div
      className={`dark:bg-accent mt-28   ${styles.paddingX} ${styles.flexCenter}`}
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
            className={`font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full text-primary `}
          >
            News Current Page {currentPage}
          </h2>
        </div>
        <section className=" flex flex-col items-center justify-center gap-12 mb-16  ">
          {currentItems.map(({ guid, title, content_html, url }) => (
            <div key={guid} className="flex  flex-col border-b  w-full">
              <p className={`${styles.title}  mb-3`}>
                <a target="_blank" href={url}>
                  <span className="hover:border-b hover:border-primary hover:text-primary">
                    {title}
                  </span>
                </a>
              </p>
              <p className={`${styles.subtitle} mb-3`}>{content_html}</p>
            </div>
          ))}

          <div className="hidden md:flex  items-center w-full justify-center gap-4 ">
            <button className="" onClick={prevPage}>
              <FaArrowLeft className="dark:text-white" />
            </button>

            {Array.from({
              length: Math.ceil(feed.length / itemsPerPage),
            }).map((_, index) => (
              <div
                className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center ${
                  currentPage === index + 1 ? "bg-primary" : "bg-gray-600"
                }  `}
                key={index}
                onClick={() => paginate(index + 1)}
              >
                <button className={` text-white`}>{index + 1}</button>
              </div>
            ))}

            <button className="" onClick={nextPage}>
              <FaArrowRight className="dark:text-white" />
            </button>
          </div>

          <div className="flex items-center justify-start w-full gap-2 md:hidden">
            <p className={`${styles.title}`}>Current Page</p>
            <select
              value={currentPage}
              onChange={(e) => paginate(parseInt(e.target.value, 10))}
              className="dark:bg-gray-800 dark:text-white px-2 py-1 border rounded"
            >
              {Array.from({
                length: Math.ceil(feed.length / itemsPerPage),
              }).map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedComponent;
