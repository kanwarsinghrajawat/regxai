export const termsLastUpdated = "February 26, 2026";

export const termsTitle = "Terms and Conditions";
export const termsSubtitle =
  "Please read these terms carefully before using our services.";

export interface TermsSection {
  id: string;
  title: string;
  content: string[];
}

export const termsSections: TermsSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the website, software, APIs, or other products and services (collectively, the “Services”) provided by regX AI (“we,” “us,” or “our”), you agree to be bound by these Terms and Conditions (“Terms”). If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
      "If you do not agree to these Terms, you may not access or use the Services. We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the “Last updated” date. Your continued use of the Services after such changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: [
      "“Customer” or “you” means the entity or individual that has agreed to these Terms and uses the Services.",
      "“Customer Data” means any data, content, or materials that you or your end users submit, transmit, or process through the Services.",
      "“Documentation” means our technical documentation, API references, and usage guides made available to you in connection with the Services.",
      "“Service” or “Services” means the regX AI governance gateway, related software, APIs, dashboards, and any other products or services we provide under these Terms.",
    ],
  },
  {
    id: "use-of-services",
    title: "3. Use of the Services",
    content: [
      "You may use the Services only in accordance with these Terms, the Documentation, and applicable law. You are responsible for all activity that occurs under your account and for ensuring that your use of the Services does not violate any third-party rights or any law or regulation.",
      "You agree not to: (a) reverse engineer, decompile, or disassemble the Services except to the extent permitted by applicable law; (b) use the Services to build a competing product or service; (c) use the Services for any illegal, harmful, or fraudulent purpose; (d) attempt to gain unauthorized access to the Services, other accounts, or our systems or networks; (e) interfere with or disrupt the integrity or performance of the Services; or (f) remove or alter any proprietary notices on the Services.",
      "We may suspend or terminate your access to the Services if we reasonably believe you have violated these Terms or if required by law.",
    ],
  },
  {
    id: "accounts",
    title: "4. Accounts and Access",
    content: [
      "To use certain Services, you may need to register for an account. You must provide accurate, current, and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You must notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to protect your account credentials.",
    ],
  },
  {
    id: "fees",
    title: "5. Fees and Payment",
    content: [
      "Fees for the Services will be as set forth in the applicable order form, quote, or pricing page. Unless otherwise specified, fees are due in advance for the relevant subscription period and are non-refundable except as required by law or as explicitly stated in a separate agreement.",
      "We may change our fees upon reasonable notice. Continued use of the Services after a fee change constitutes acceptance of the new fees. You are responsible for any applicable taxes (other than taxes on our net income).",
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: [
      "We and our licensors retain all right, title, and interest in and to the Services, including all software, designs, trademarks, and other intellectual property. These Terms do not grant you any rights to our trademarks, logos, or other brand features except as necessary to use the Services in accordance with the Documentation.",
      "You retain all right, title, and interest in and to your Customer Data. You grant us a limited license to use, store, and process Customer Data solely to provide, maintain, and improve the Services and to comply with applicable law. We will not use Customer Data for advertising or to train AI models for purposes unrelated to providing the Services to you.",
    ],
  },
  {
    id: "confidentiality",
    title: "7. Confidentiality",
    content: [
      "Each party agrees to keep confidential any non-public information disclosed by the other party that is designated as confidential or that reasonably should be understood to be confidential (“Confidential Information”). Confidential Information does not include information that is or becomes publicly available through no fault of the receiving party, was rightfully known to the receiving party without restriction before disclosure, or is independently developed without use of the disclosing party’s Confidential Information.",
      "The receiving party will use the same degree of care to protect Confidential Information as it uses for its own confidential information of like kind, but in no event less than reasonable care. The receiving party may disclose Confidential Information only to its employees, contractors, or advisors who need to know it and who are bound by confidentiality obligations at least as protective as those in these Terms.",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy and Data Protection",
    content: [
      "Our collection and use of personal information in connection with the Services is described in our Privacy Policy. By using the Services, you consent to such collection and use. You are responsible for ensuring that your use of the Services complies with applicable data protection laws, including obtaining any required consents from end users whose data is processed through the Services.",
      "To the extent we process personal data on your behalf as a processor, we will process it only in accordance with your documented instructions and applicable data protection law. We will implement appropriate technical and organizational measures to protect such data.",
    ],
  },
  {
    id: "warranties",
    title: "9. Disclaimers",
    content: [
      "THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.",
      "WE DO NOT GUARANTEE THAT USE OF THE SERVICES WILL RESULT IN COMPLIANCE WITH ANY PARTICULAR LAW, REGULATION, OR STANDARD. YOU ARE SOLELY RESPONSIBLE FOR DETERMINING WHETHER THE SERVICES MEET YOUR COMPLIANCE AND REGULATORY REQUIREMENTS.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "10. Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE (OR OUR LICENSORS, SUPPLIERS, OR AFFILIATES) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY.",
      "OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM (OR, IF NO FEES WERE PAID, ONE HUNDRED U.S. DOLLARS ($100)). THE ABOVE LIMITATIONS WILL APPLY EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.",
    ],
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: [
      "You will indemnify, defend, and hold harmless regX AI and its officers, directors, employees, and agents from and against any third-party claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Services; (b) your Customer Data; (c) your violation of these Terms or applicable law; or (d) any dispute between you and any end user or third party relating to the Services.",
      "We will indemnify you from and against any third-party claims that the Services, when used in accordance with these Terms and the Documentation, infringe a valid U.S. patent, copyright, or trademark. Our obligations under this section do not apply to the extent a claim arises from your modification of the Services, combination with other products, or use in a manner not permitted by the Documentation. If the Services become or we reasonably believe may become the subject of an infringement claim, we may, at our option: (i) obtain the right for you to continue using the Services; (ii) modify the Services to make them non-infringing; or (iii) terminate your access and refund any prepaid fees for the remainder of the subscription period.",
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    content: [
      "Either party may terminate these Terms (or an applicable order) for convenience upon notice. We may suspend or terminate your access to the Services immediately if you breach these Terms or if we are required to do so by law.",
      "Upon termination, your right to use the Services will cease. We may delete or retain Customer Data in accordance with our data retention practices and applicable law. Sections that by their nature should survive (including Definitions, Intellectual Property, Confidentiality, Disclaimers, Limitation of Liability, Indemnification, and Governing Law) will survive termination.",
    ],
  },
  {
    id: "governing-law",
    title: "13. Governing Law and Disputes",
    content: [
      "These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Services will be resolved exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction of such courts.",
      "Nothing in these Terms limits either party’s right to seek injunctive or other equitable relief in any court of competent jurisdiction.",
    ],
  },
  {
    id: "general",
    title: "14. General",
    content: [
      "These Terms, together with any order form or other agreement expressly incorporated by reference, constitute the entire agreement between you and regX AI regarding the Services and supersede any prior agreements. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision will not constitute a waiver of such right or provision. You may not assign these Terms without our prior written consent; we may assign these Terms without restriction. There are no third-party beneficiaries to these Terms.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact",
    content: [
      "If you have questions about these Terms and Conditions, please contact us at business@regxai.com or through the contact form on our website.",
    ],
  },
];
