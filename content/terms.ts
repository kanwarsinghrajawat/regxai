import type { Locale } from "../app/components/LanguageProvider";

export const termsLastUpdated = "February 26, 2026";

export const termsLegalLabel: Record<Locale, string> = {
  en: "Legal",
  de: "Rechtliches",
  fr: "Mentions légales",
  es: "Legal",
};

export const termsTitle: Record<Locale, string> = {
  en: "Terms and Conditions",
  de: "Allgemeine Geschäftsbedingungen",
  fr: "Conditions générales",
  es: "Términos y condiciones",
};

export const termsSubtitle: Record<Locale, string> = {
  en: "Please read these terms carefully before using our services.",
  de: "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen.",
  fr: "Veuillez lire attentivement ces conditions avant d'utiliser nos services.",
  es: "Lea atentamente estos términos antes de usar nuestros servicios.",
};

export const termsLastUpdatedLabel: Record<Locale, string> = {
  en: "Last updated",
  de: "Zuletzt aktualisiert",
  fr: "Dernière mise à jour",
  es: "Última actualización",
};

export interface TermsSection {
  id: string;
  title: string;
  content: string[];
}

export const termsSections: Record<Locale, TermsSection[]> = {
  en: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "By accessing or using the website, software, APIs, or other products and services (collectively, the \u201cServices\u201d) provided by regX AI (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d), you agree to be bound by these Terms and Conditions (\u201cTerms\u201d). If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
        "If you do not agree to these Terms, you may not access or use the Services. We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the \u201cLast updated\u201d date. Your continued use of the Services after such changes constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "definitions",
      title: "2. Definitions",
      content: [
        "\u201cCustomer\u201d or \u201cyou\u201d means the entity or individual that has agreed to these Terms and uses the Services.",
        "\u201cCustomer Data\u201d means any data, content, or materials that you or your end users submit, transmit, or process through the Services.",
        "\u201cDocumentation\u201d means our technical documentation, API references, and usage guides made available to you in connection with the Services.",
        "\u201cService\u201d or \u201cServices\u201d means the regX AI governance gateway, related software, APIs, dashboards, and any other products or services we provide under these Terms.",
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
        "Each party agrees to keep confidential any non-public information disclosed by the other party that is designated as confidential or that reasonably should be understood to be confidential (\u201cConfidential Information\u201d). Confidential Information does not include information that is or becomes publicly available through no fault of the receiving party, was rightfully known to the receiving party without restriction before disclosure, or is independently developed without use of the disclosing party\u2019s Confidential Information.",
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
        "THE SERVICES ARE PROVIDED \u201cAS IS\u201d AND \u201cAS AVAILABLE\u201d WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.",
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
        "You will indemnify, defend, and hold harmless regX AI and its officers, directors, employees, and agents from and against any third-party claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys\u2019 fees) arising out of or related to: (a) your use of the Services; (b) your Customer Data; (c) your violation of these Terms or applicable law; or (d) any dispute between you and any end user or third party relating to the Services.",
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
        "Nothing in these Terms limits either party\u2019s right to seek injunctive or other equitable relief in any court of competent jurisdiction.",
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
  ],

  de: [
    {
      id: "acceptance",
      title: "1. Annahme der Bedingungen",
      content: [
        "Durch den Zugriff auf oder die Nutzung der Website, Software, APIs oder anderer Produkte und Dienste (zusammen die \u201eDienste\u201c) von regX AI (\u201ewir\u201c, \u201euns\u201c oder \u201eunser\u201c) erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen (\u201eBedingungen\u201c) einverstanden. Wenn Sie die Dienste im Namen einer Organisation nutzen, versichern Sie, dass Sie befugt sind, diese Organisation an diese Bedingungen zu binden.",
        "Wenn Sie diesen Bedingungen nicht zustimmen, dürfen Sie die Dienste nicht nutzen. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Über wesentliche Änderungen informieren wir die Nutzer, indem wir die aktualisierten Bedingungen auf dieser Seite veröffentlichen und das Datum der \u201eLetzten Aktualisierung\u201c anpassen. Ihre fortgesetzte Nutzung der Dienste nach solchen Änderungen gilt als Annahme der überarbeiteten Bedingungen.",
      ],
    },
    {
      id: "definitions",
      title: "2. Definitionen",
      content: [
        "\u201eKunde\u201c oder \u201eSie\u201c bezeichnet die juristische oder natürliche Person, die diesen Bedingungen zugestimmt hat und die Dienste nutzt.",
        "\u201eKundendaten\u201c bezeichnet alle Daten, Inhalte oder Materialien, die Sie oder Ihre Endnutzer über die Dienste übermitteln, senden oder verarbeiten.",
        "\u201eDokumentation\u201c bezeichnet unsere technische Dokumentation, API-Referenzen und Nutzungsanleitungen, die Ihnen im Zusammenhang mit den Diensten zur Verfügung gestellt werden.",
        "\u201eDienst\u201c oder \u201eDienste\u201c bezeichnet das regX AI Governance-Gateway, zugehörige Software, APIs, Dashboards und alle weiteren Produkte oder Dienste, die wir im Rahmen dieser Bedingungen bereitstellen.",
      ],
    },
    {
      id: "use-of-services",
      title: "3. Nutzung der Dienste",
      content: [
        "Sie dürfen die Dienste nur in Übereinstimmung mit diesen Bedingungen, der Dokumentation und dem geltenden Recht nutzen. Sie sind für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden, und dafür, dass Ihre Nutzung der Dienste keine Rechte Dritter oder geltende Gesetze oder Vorschriften verletzt.",
        "Sie verpflichten sich, Folgendes zu unterlassen: (a) die Dienste zurückzuentwickeln, zu dekompilieren oder zu disassemblieren, es sei denn, dies ist nach geltendem Recht zulässig; (b) die Dienste zum Aufbau eines Konkurrenzprodukts oder -dienstes zu verwenden; (c) die Dienste für illegale, schädliche oder betrügerische Zwecke zu nutzen; (d) den Versuch zu unternehmen, sich unbefugten Zugang zu den Diensten, anderen Konten oder unseren Systemen oder Netzwerken zu verschaffen; (e) die Integrität oder Leistungsfähigkeit der Dienste zu beeinträchtigen oder zu stören; oder (f) Eigentumshinweise an den Diensten zu entfernen oder zu verändern.",
        "Wir können Ihren Zugang zu den Diensten aussetzen oder beenden, wenn wir berechtigterweise davon ausgehen, dass Sie gegen diese Bedingungen verstoßen haben, oder wenn dies gesetzlich vorgeschrieben ist.",
      ],
    },
    {
      id: "accounts",
      title: "4. Konten und Zugang",
      content: [
        "Für die Nutzung bestimmter Dienste müssen Sie möglicherweise ein Konto registrieren. Sie müssen korrekte, aktuelle und vollständige Angaben machen und Ihre Kontoinformationen auf dem neuesten Stand halten. Sie sind für die Wahrung der Vertraulichkeit Ihrer Zugangsdaten und für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden.",
        "Sie müssen uns unverzüglich über jede unbefugte Nutzung Ihres Kontos oder jede andere Sicherheitsverletzung informieren. Wir haften nicht für Verluste oder Schäden, die dadurch entstehen, dass Sie Ihre Zugangsdaten nicht schützen.",
      ],
    },
    {
      id: "fees",
      title: "5. Gebühren und Zahlung",
      content: [
        "Die Gebühren für die Dienste ergeben sich aus dem jeweiligen Bestellformular, Angebot oder der Preisseite. Sofern nicht anders angegeben, sind Gebühren im Voraus für den jeweiligen Abonnementzeitraum fällig und nicht erstattungsfähig, es sei denn, dies ist gesetzlich vorgeschrieben oder in einer gesonderten Vereinbarung ausdrücklich festgelegt.",
        "Wir können unsere Gebühren mit angemessener Vorankündigung ändern. Die fortgesetzte Nutzung der Dienste nach einer Gebührenänderung gilt als Annahme der neuen Gebühren. Sie sind für alle anfallenden Steuern verantwortlich (mit Ausnahme von Steuern auf unser Nettoeinkommen).",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Geistiges Eigentum",
      content: [
        "Wir und unsere Lizenzgeber behalten alle Rechte, Eigentumsrechte und Ansprüche an den Diensten, einschließlich aller Software, Designs, Marken und sonstigen geistigen Eigentumsrechte. Diese Bedingungen gewähren Ihnen keine Rechte an unseren Marken, Logos oder anderen Markenkennzeichen, es sei denn, dies ist zur Nutzung der Dienste gemäß der Dokumentation erforderlich.",
        "Sie behalten alle Rechte, Eigentumsrechte und Ansprüche an Ihren Kundendaten. Sie gewähren uns eine eingeschränkte Lizenz zur Nutzung, Speicherung und Verarbeitung von Kundendaten ausschließlich zur Bereitstellung, Wartung und Verbesserung der Dienste sowie zur Einhaltung geltenden Rechts. Wir werden Kundendaten nicht für Werbezwecke oder zum Training von KI-Modellen für Zwecke verwenden, die nicht mit der Bereitstellung der Dienste für Sie zusammenhängen.",
      ],
    },
    {
      id: "confidentiality",
      title: "7. Vertraulichkeit",
      content: [
        "Jede Partei verpflichtet sich, alle nicht-öffentlichen Informationen, die von der anderen Partei offengelegt werden und als vertraulich gekennzeichnet sind oder vernünftigerweise als vertraulich anzusehen sind (\u201eVertrauliche Informationen\u201c), geheim zu halten. Vertrauliche Informationen umfassen keine Informationen, die ohne Verschulden der empfangenden Partei öffentlich zugänglich sind oder werden, der empfangenden Partei vor der Offenlegung ohne Einschränkung bekannt waren oder unabhängig und ohne Verwendung der Vertraulichen Informationen der offenlegenden Partei entwickelt wurden.",
        "Die empfangende Partei wird Vertrauliche Informationen mit derselben Sorgfalt schützen, die sie für ihre eigenen vertraulichen Informationen gleicher Art aufwendet, jedoch in keinem Fall weniger als angemessene Sorgfalt. Die empfangende Partei darf Vertrauliche Informationen nur an Mitarbeiter, Auftragnehmer oder Berater weitergeben, die diese kennen müssen und die durch Vertraulichkeitsverpflichtungen gebunden sind, die mindestens so weitreichend sind wie die in diesen Bedingungen.",
      ],
    },
    {
      id: "privacy",
      title: "8. Datenschutz",
      content: [
        "Unsere Erhebung und Verwendung personenbezogener Daten im Zusammenhang mit den Diensten wird in unserer Datenschutzerklärung beschrieben. Durch die Nutzung der Dienste stimmen Sie dieser Erhebung und Verwendung zu. Sie sind dafür verantwortlich, sicherzustellen, dass Ihre Nutzung der Dienste den geltenden Datenschutzgesetzen entspricht, einschließlich der Einholung aller erforderlichen Einwilligungen von Endnutzern, deren Daten über die Dienste verarbeitet werden.",
        "Soweit wir personenbezogene Daten in Ihrem Auftrag als Auftragsverarbeiter verarbeiten, verarbeiten wir diese ausschließlich gemäß Ihren dokumentierten Anweisungen und dem geltenden Datenschutzrecht. Wir werden geeignete technische und organisatorische Maßnahmen zum Schutz dieser Daten ergreifen.",
      ],
    },
    {
      id: "warranties",
      title: "9. Haftungsausschlüsse",
      content: [
        "DIE DIENSTE WERDEN \u201eWIE BESEHEN\u201c UND \u201eWIE VERFÜGBAR\u201c OHNE GEWÄHRLEISTUNGEN JEGLICHER ART BEREITGESTELLT, WEDER AUSDRÜCKLICH NOCH STILLSCHWEIGEND, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF STILLSCHWEIGENDE GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, DES EIGENTUMS UND DER NICHTVERLETZUNG VON RECHTEN DRITTER. WIR GEWÄHRLEISTEN NICHT, DASS DIE DIENSTE UNTERBRECHUNGSFREI, FEHLERFREI ODER FREI VON SCHÄDLICHEN KOMPONENTEN SEIN WERDEN.",
        "WIR GARANTIEREN NICHT, DASS DIE NUTZUNG DER DIENSTE ZUR EINHALTUNG EINES BESTIMMTEN GESETZES, EINER BESTIMMTEN VORSCHRIFT ODER EINES BESTIMMTEN STANDARDS FÜHRT. SIE SIND ALLEIN DAFÜR VERANTWORTLICH, FESTZUSTELLEN, OB DIE DIENSTE IHREN COMPLIANCE- UND REGULATORISCHEN ANFORDERUNGEN ENTSPRECHEN.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "10. Haftungsbeschränkung",
      content: [
        "IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG HAFTEN WIR (ODER UNSERE LIZENZGEBER, LIEFERANTEN ODER VERBUNDENEN UNTERNEHMEN) IN KEINEM FALL FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHÄDEN ODER FÜR ENTGANGENE GEWINNE, UMSÄTZE, DATEN ODER GESCHÄFTSWERT, DIE AUS ODER IM ZUSAMMENHANG MIT DIESEN BEDINGUNGEN ODER DEN DIENSTEN ENTSTEHEN, UNABHÄNGIG DAVON, OB SIE AUF GEWÄHRLEISTUNG, VERTRAG, UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT), GEFÄHRDUNGSHAFTUNG ODER EINER ANDEREN RECHTSTHEORIE BERUHEN.",
        "UNSERE GESAMTE KUMULIERTE HAFTUNG FÜR ALLE ANSPRÜCHE AUS ODER IM ZUSAMMENHANG MIT DIESEN BEDINGUNGEN ODER DEN DIENSTEN ÜBERSTEIGT NICHT DEN BETRAG, DEN SIE UNS IN DEN ZWÖLF (12) MONATEN VOR DEM ANSPRUCH GEZAHLT HABEN (ODER, WENN KEINE GEBÜHREN GEZAHLT WURDEN, EINHUNDERT US-DOLLAR (100 $)). DIE VORSTEHENDEN BESCHRÄNKUNGEN GELTEN AUCH, WENN EIN RECHTSBEHELF SEINEN WESENTLICHEN ZWECK VERFEHLT.",
      ],
    },
    {
      id: "indemnification",
      title: "11. Freistellung",
      content: [
        "Sie werden regX AI und seine leitenden Angestellten, Direktoren, Mitarbeiter und Vertreter von allen Ansprüchen Dritter, Schäden, Verlusten, Verbindlichkeiten, Kosten und Aufwendungen (einschließlich angemessener Anwaltsgebühren) freistellen und schadlos halten, die aus oder im Zusammenhang mit Folgendem entstehen: (a) Ihrer Nutzung der Dienste; (b) Ihren Kundendaten; (c) Ihrem Verstoß gegen diese Bedingungen oder geltendes Recht; oder (d) einem Streit zwischen Ihnen und einem Endnutzer oder Dritten im Zusammenhang mit den Diensten.",
        "Wir stellen Sie von Ansprüchen Dritter frei, die besagen, dass die Dienste, wenn sie in Übereinstimmung mit diesen Bedingungen und der Dokumentation genutzt werden, ein gültiges US-Patent, Urheberrecht oder eine Marke verletzen. Unsere Verpflichtungen im Rahmen dieses Abschnitts gelten nicht, soweit ein Anspruch auf Ihre Änderung der Dienste, die Kombination mit anderen Produkten oder die Nutzung in einer von der Dokumentation nicht erlaubten Weise zurückzuführen ist. Wenn die Dienste Gegenstand eines Verletzungsanspruchs werden oder wir vernünftigerweise davon ausgehen, dass dies geschehen könnte, können wir nach eigenem Ermessen: (i) das Recht zur weiteren Nutzung der Dienste für Sie erwirken; (ii) die Dienste so anpassen, dass sie nicht mehr rechtsverletzend sind; oder (iii) Ihren Zugang beenden und vorausbezahlte Gebühren für den verbleibenden Abonnementzeitraum erstatten.",
      ],
    },
    {
      id: "termination",
      title: "12. Kündigung",
      content: [
        "Jede Partei kann diese Bedingungen (oder eine zugehörige Bestellung) mit einer Mitteilung ordentlich kündigen. Wir können Ihren Zugang zu den Diensten sofort aussetzen oder beenden, wenn Sie gegen diese Bedingungen verstoßen oder wenn wir gesetzlich dazu verpflichtet sind.",
        "Nach Beendigung erlischt Ihr Recht zur Nutzung der Dienste. Wir können Kundendaten gemäß unseren Aufbewahrungsrichtlinien und geltendem Recht löschen oder aufbewahren. Abschnitte, die ihrem Wesen nach fortbestehen sollten (einschließlich Definitionen, Geistiges Eigentum, Vertraulichkeit, Haftungsausschlüsse, Haftungsbeschränkung, Freistellung und Anwendbares Recht), gelten über die Beendigung hinaus fort.",
      ],
    },
    {
      id: "governing-law",
      title: "13. Anwendbares Recht und Streitigkeiten",
      content: [
        "Diese Bedingungen unterliegen dem Recht des Staates Delaware, Vereinigte Staaten von Amerika, ohne Berücksichtigung kollisionsrechtlicher Grundsätze. Alle Streitigkeiten aus oder im Zusammenhang mit diesen Bedingungen oder den Diensten werden ausschließlich vor den staatlichen oder bundesstaatlichen Gerichten in Delaware beigelegt, und Sie stimmen der persönlichen Zuständigkeit dieser Gerichte zu.",
        "Keine Bestimmung dieser Bedingungen schränkt das Recht einer Partei ein, einstweiligen Rechtsschutz oder andere Billigkeitsmaßnahmen bei einem zuständigen Gericht zu beantragen.",
      ],
    },
    {
      id: "general",
      title: "14. Allgemeines",
      content: [
        "Diese Bedingungen bilden zusammen mit etwaigen Bestellformularen oder sonstigen ausdrücklich einbezogenen Vereinbarungen die gesamte Vereinbarung zwischen Ihnen und regX AI bezüglich der Dienste und ersetzen alle früheren Vereinbarungen. Sollte eine Bestimmung dieser Bedingungen für ungültig oder nicht durchsetzbar erklärt werden, bleiben die übrigen Bestimmungen in vollem Umfang wirksam. Unser Versäumnis, ein Recht oder eine Bestimmung durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. Sie dürfen diese Bedingungen nicht ohne unsere vorherige schriftliche Zustimmung abtreten; wir können diese Bedingungen ohne Einschränkung abtreten. Es gibt keine Drittbegünstigten dieser Bedingungen.",
      ],
    },
    {
      id: "contact",
      title: "15. Kontakt",
      content: [
        "Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, kontaktieren Sie uns bitte unter business@regxai.com oder über das Kontaktformular auf unserer Website.",
      ],
    },
  ],

  fr: [
    {
      id: "acceptance",
      title: "1. Acceptation des conditions",
      content: [
        "En accédant ou en utilisant le site web, les logiciels, les API ou tout autre produit et service (collectivement, les \u00ab Services \u00bb) fournis par regX AI (\u00ab nous \u00bb ou \u00ab notre \u00bb), vous acceptez d\u2019être lié par les présentes Conditions générales (\u00ab Conditions \u00bb). Si vous utilisez les Services au nom d\u2019une organisation, vous déclarez avoir l\u2019autorité nécessaire pour engager cette organisation au respect des présentes Conditions.",
        "Si vous n\u2019acceptez pas les présentes Conditions, vous ne pouvez pas accéder aux Services ni les utiliser. Nous nous réservons le droit de modifier les présentes Conditions à tout moment. Nous informerons les utilisateurs de toute modification substantielle en publiant les Conditions mises à jour sur cette page et en actualisant la date de \u00ab Dernière mise à jour \u00bb. Votre utilisation continue des Services après de telles modifications vaut acceptation des Conditions révisées.",
      ],
    },
    {
      id: "definitions",
      title: "2. Définitions",
      content: [
        "\u00ab Client \u00bb ou \u00ab vous \u00bb désigne l\u2019entité ou la personne physique qui a accepté les présentes Conditions et utilise les Services.",
        "\u00ab Données Client \u00bb désigne toutes les données, contenus ou matériaux que vous ou vos utilisateurs finaux soumettez, transmettez ou traitez par le biais des Services.",
        "\u00ab Documentation \u00bb désigne notre documentation technique, nos références API et nos guides d\u2019utilisation mis à votre disposition dans le cadre des Services.",
        "\u00ab Service \u00bb ou \u00ab Services \u00bb désigne la passerelle de gouvernance regX AI, les logiciels associés, les API, les tableaux de bord et tout autre produit ou service que nous fournissons au titre des présentes Conditions.",
      ],
    },
    {
      id: "use-of-services",
      title: "3. Utilisation des Services",
      content: [
        "Vous ne pouvez utiliser les Services que conformément aux présentes Conditions, à la Documentation et au droit applicable. Vous êtes responsable de toute activité réalisée sous votre compte et devez vous assurer que votre utilisation des Services ne porte pas atteinte aux droits de tiers ni ne viole de loi ou de réglementation.",
        "Vous vous engagez à ne pas : (a) effectuer de rétro-ingénierie, décompiler ou désassembler les Services, sauf dans la mesure permise par le droit applicable ; (b) utiliser les Services pour créer un produit ou service concurrent ; (c) utiliser les Services à des fins illégales, nuisibles ou frauduleuses ; (d) tenter d\u2019obtenir un accès non autorisé aux Services, à d\u2019autres comptes ou à nos systèmes ou réseaux ; (e) perturber l\u2019intégrité ou les performances des Services ; ou (f) supprimer ou modifier toute mention de propriété sur les Services.",
        "Nous pouvons suspendre ou résilier votre accès aux Services si nous estimons raisonnablement que vous avez enfreint les présentes Conditions ou si la loi l\u2019exige.",
      ],
    },
    {
      id: "accounts",
      title: "4. Comptes et accès",
      content: [
        "Pour utiliser certains Services, vous devrez peut-être créer un compte. Vous devez fournir des informations exactes, à jour et complètes, et maintenir vos informations de compte à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités réalisées sous votre compte.",
        "Vous devez nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute autre violation de la sécurité. Nous ne serons pas responsables des pertes ou dommages résultant de votre manquement à protéger vos identifiants de connexion.",
      ],
    },
    {
      id: "fees",
      title: "5. Frais et paiement",
      content: [
        "Les frais applicables aux Services sont indiqués dans le bon de commande, le devis ou la page tarifaire correspondants. Sauf indication contraire, les frais sont exigibles à l\u2019avance pour la période d\u2019abonnement concernée et ne sont pas remboursables, sauf si la loi l\u2019exige ou si cela est explicitement prévu dans un accord séparé.",
        "Nous pouvons modifier nos tarifs moyennant un préavis raisonnable. La poursuite de l\u2019utilisation des Services après une modification tarifaire vaut acceptation des nouveaux tarifs. Vous êtes redevable de toutes les taxes applicables (à l\u2019exception des impôts sur notre revenu net).",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Propriété intellectuelle",
      content: [
        "Nous et nos concédants de licence conservons tous les droits, titres et intérêts relatifs aux Services, y compris tous les logiciels, designs, marques et autres droits de propriété intellectuelle. Les présentes Conditions ne vous confèrent aucun droit sur nos marques, logos ou autres éléments distinctifs, sauf dans la mesure nécessaire à l\u2019utilisation des Services conformément à la Documentation.",
        "Vous conservez tous les droits, titres et intérêts relatifs à vos Données Client. Vous nous accordez une licence limitée pour utiliser, stocker et traiter les Données Client uniquement aux fins de fournir, maintenir et améliorer les Services et de respecter le droit applicable. Nous n\u2019utiliserons pas les Données Client à des fins publicitaires ni pour entraîner des modèles d\u2019intelligence artificielle à des fins étrangères à la fourniture des Services.",
      ],
    },
    {
      id: "confidentiality",
      title: "7. Confidentialité",
      content: [
        "Chaque partie s\u2019engage à maintenir confidentielles toutes les informations non publiques communiquées par l\u2019autre partie qui sont désignées comme confidentielles ou qui devraient raisonnablement être considérées comme telles (\u00ab Informations Confidentielles \u00bb). Ne constituent pas des Informations Confidentielles les informations qui sont ou deviennent publiquement accessibles sans faute de la partie destinataire, qui étaient légitimement connues de la partie destinataire sans restriction avant leur divulgation, ou qui sont développées indépendamment sans utilisation des Informations Confidentielles de la partie divulgatrice.",
        "La partie destinataire protégera les Informations Confidentielles avec le même degré de diligence qu\u2019elle applique à ses propres informations confidentielles de nature similaire, et en tout état de cause avec une diligence raisonnable. La partie destinataire ne peut divulguer les Informations Confidentielles qu\u2019à ses employés, sous-traitants ou conseillers qui en ont besoin et qui sont liés par des obligations de confidentialité au moins aussi protectrices que celles prévues aux présentes Conditions.",
      ],
    },
    {
      id: "privacy",
      title: "8. Vie privée et protection des données",
      content: [
        "Notre collecte et notre utilisation de données personnelles dans le cadre des Services sont décrites dans notre Politique de confidentialité. En utilisant les Services, vous consentez à cette collecte et à cette utilisation. Vous êtes responsable de la conformité de votre utilisation des Services aux lois applicables en matière de protection des données, y compris l\u2019obtention de tout consentement requis des utilisateurs finaux dont les données sont traitées par le biais des Services.",
        "Dans la mesure où nous traitons des données personnelles pour votre compte en tant que sous-traitant, nous les traiterons uniquement conformément à vos instructions documentées et au droit applicable en matière de protection des données. Nous mettrons en \u0153uvre les mesures techniques et organisationnelles appropriées pour protéger ces données.",
      ],
    },
    {
      id: "warranties",
      title: "9. Exclusions de garantie",
      content: [
        "LES SERVICES SONT FOURNIS \u00ab EN L\u2019ÉTAT \u00bb ET \u00ab SELON DISPONIBILITÉ \u00bb, SANS GARANTIE D\u2019AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS, MAIS SANS S\u2019Y LIMITER, LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D\u2019ADÉQUATION À UN USAGE PARTICULIER, DE TITRE ET DE NON-CONTREFAÇON. NOUS NE GARANTISSONS PAS QUE LES SERVICES SERONT ININTERROMPUS, EXEMPTS D\u2019ERREURS OU EXEMPTS DE COMPOSANTS NUISIBLES.",
        "NOUS NE GARANTISSONS PAS QUE L\u2019UTILISATION DES SERVICES ENTRAÎNERA LA CONFORMITÉ À UNE LOI, UNE RÉGLEMENTATION OU UNE NORME PARTICULIÈRE. VOUS ÊTES SEUL RESPONSABLE DE DÉTERMINER SI LES SERVICES RÉPONDENT À VOS EXIGENCES EN MATIÈRE DE CONFORMITÉ ET DE RÉGLEMENTATION.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "10. Limitation de responsabilité",
      content: [
        "DANS TOUTE LA MESURE PERMISE PAR LE DROIT APPLICABLE, EN AUCUN CAS NOUS (OU NOS CONCÉDANTS DE LICENCE, FOURNISSEURS OU SOCIÉTÉS AFFILIÉES) NE SERONS RESPONSABLES DE DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS OU PUNITIFS, NI DE TOUTE PERTE DE BÉNÉFICES, DE REVENUS, DE DONNÉES OU DE CLIENTÈLE, DÉCOULANT DE OU EN LIEN AVEC LES PRÉSENTES CONDITIONS OU LES SERVICES, QUE CE SOIT SUR LE FONDEMENT DE LA GARANTIE, DU CONTRAT, DE LA RESPONSABILITÉ DÉLICTUELLE (Y COMPRIS LA NÉGLIGENCE), DE LA RESPONSABILITÉ OBJECTIVE OU DE TOUTE AUTRE THÉORIE JURIDIQUE.",
        "NOTRE RESPONSABILITÉ TOTALE CUMULÉE POUR L\u2019ENSEMBLE DES RÉCLAMATIONS DÉCOULANT DE OU EN LIEN AVEC LES PRÉSENTES CONDITIONS OU LES SERVICES NE DÉPASSERA PAS LE MONTANT QUE VOUS NOUS AVEZ VERSÉ AU COURS DES DOUZE (12) MOIS PRÉCÉDANT LA RÉCLAMATION (OU, EN L\u2019ABSENCE DE FRAIS PAYÉS, CENT DOLLARS AMÉRICAINS (100 $)). LES LIMITATIONS CI-DESSUS S\u2019APPLIQUERONT MÊME SI UN RECOURS N\u2019ATTEINT PAS SON OBJECTIF ESSENTIEL.",
      ],
    },
    {
      id: "indemnification",
      title: "11. Indemnisation",
      content: [
        "Vous vous engagez à indemniser, défendre et dégager de toute responsabilité regX AI ainsi que ses dirigeants, administrateurs, employés et mandataires contre toute réclamation de tiers, tout dommage, toute perte, toute responsabilité, tout coût et toute dépense (y compris les honoraires raisonnables d\u2019avocats) découlant de ou en lien avec : (a) votre utilisation des Services ; (b) vos Données Client ; (c) votre violation des présentes Conditions ou du droit applicable ; ou (d) tout litige entre vous et un utilisateur final ou un tiers relatif aux Services.",
        "Nous vous indemniserons contre toute réclamation de tiers alléguant que les Services, lorsqu\u2019ils sont utilisés conformément aux présentes Conditions et à la Documentation, portent atteinte à un brevet américain valide, un droit d\u2019auteur ou une marque. Nos obligations au titre du présent article ne s\u2019appliquent pas dans la mesure où la réclamation résulte de votre modification des Services, de leur combinaison avec d\u2019autres produits ou de leur utilisation d\u2019une manière non autorisée par la Documentation. Si les Services font ou sont susceptibles de faire l\u2019objet d\u2019une réclamation en contrefaçon, nous pouvons, à notre discrétion : (i) obtenir le droit de vous permettre de continuer à utiliser les Services ; (ii) modifier les Services pour les rendre non contrefaisants ; ou (iii) résilier votre accès et rembourser les frais prépayés pour le reste de la période d\u2019abonnement.",
      ],
    },
    {
      id: "termination",
      title: "12. Résiliation",
      content: [
        "Chaque partie peut résilier les présentes Conditions (ou une commande applicable) pour convenance moyennant notification. Nous pouvons suspendre ou résilier immédiatement votre accès aux Services si vous enfreignez les présentes Conditions ou si la loi nous y oblige.",
        "À la résiliation, votre droit d\u2019utilisation des Services prend fin. Nous pouvons supprimer ou conserver les Données Client conformément à nos pratiques de conservation des données et au droit applicable. Les articles qui, par leur nature, doivent survivre (notamment les Définitions, la Propriété intellectuelle, la Confidentialité, les Exclusions de garantie, la Limitation de responsabilité, l\u2019Indemnisation et le Droit applicable) survivront à la résiliation.",
      ],
    },
    {
      id: "governing-law",
      title: "13. Droit applicable et litiges",
      content: [
        "Les présentes Conditions sont régies par les lois de l\u2019État du Delaware, États-Unis d\u2019Amérique, sans égard aux principes de conflit de lois. Tout litige découlant de ou en lien avec les présentes Conditions ou les Services sera résolu exclusivement devant les tribunaux étatiques ou fédéraux situés dans le Delaware, et vous consentez à la compétence personnelle de ces tribunaux.",
        "Rien dans les présentes Conditions ne limite le droit de l\u2019une ou l\u2019autre partie de demander des mesures injonctives ou d\u2019autres mesures de redressement en équité devant tout tribunal compétent.",
      ],
    },
    {
      id: "general",
      title: "14. Dispositions générales",
      content: [
        "Les présentes Conditions, ainsi que tout bon de commande ou autre accord expressément incorporé par référence, constituent l\u2019intégralité de l\u2019accord entre vous et regX AI concernant les Services et remplacent tout accord antérieur. Si une disposition des présentes Conditions est jugée invalide ou inapplicable, les dispositions restantes demeureront pleinement en vigueur. Le fait que nous n\u2019exercions pas un droit ou une disposition ne constitue pas une renonciation à ce droit ou à cette disposition. Vous ne pouvez pas céder les présentes Conditions sans notre consentement écrit préalable ; nous pouvons céder les présentes Conditions sans restriction. Il n\u2019existe aucun tiers bénéficiaire des présentes Conditions.",
      ],
    },
    {
      id: "contact",
      title: "15. Contact",
      content: [
        "Si vous avez des questions concernant les présentes Conditions générales, veuillez nous contacter à l\u2019adresse business@regxai.com ou via le formulaire de contact de notre site web.",
      ],
    },
  ],

  es: [
    {
      id: "acceptance",
      title: "1. Aceptación de los términos",
      content: [
        "Al acceder o utilizar el sitio web, el software, las API u otros productos y servicios (colectivamente, los \u00abServicios\u00bb) proporcionados por regX AI (\u00abnosotros\u00bb o \u00abnuestro\u00bb), usted acepta quedar vinculado por estos Términos y condiciones (\u00abTérminos\u00bb). Si utiliza los Servicios en nombre de una organización, declara que tiene la autoridad para vincular a dicha organización a estos Términos.",
        "Si no está de acuerdo con estos Términos, no podrá acceder ni utilizar los Servicios. Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos a los usuarios de cambios sustanciales publicando los Términos actualizados en esta página y actualizando la fecha de \u00abÚltima actualización\u00bb. El uso continuado de los Servicios después de dichos cambios constituye la aceptación de los Términos revisados.",
      ],
    },
    {
      id: "definitions",
      title: "2. Definiciones",
      content: [
        "\u00abCliente\u00bb o \u00abusted\u00bb designa a la entidad o persona física que ha aceptado estos Términos y utiliza los Servicios.",
        "\u00abDatos del Cliente\u00bb designa cualquier dato, contenido o material que usted o sus usuarios finales envíen, transmitan o procesen a través de los Servicios.",
        "\u00abDocumentación\u00bb designa nuestra documentación técnica, referencias de API y guías de uso puestas a su disposición en relación con los Servicios.",
        "\u00abServicio\u00bb o \u00abServicios\u00bb designa la pasarela de gobernanza de regX AI, el software asociado, las API, los paneles de control y cualquier otro producto o servicio que proporcionemos en virtud de estos Términos.",
      ],
    },
    {
      id: "use-of-services",
      title: "3. Uso de los Servicios",
      content: [
        "Usted solo podrá utilizar los Servicios de conformidad con estos Términos, la Documentación y la legislación aplicable. Usted es responsable de toda la actividad que se produzca en su cuenta y de asegurarse de que su uso de los Servicios no vulnere derechos de terceros ni infrinja ninguna ley o normativa.",
        "Usted se compromete a no: (a) realizar ingeniería inversa, descompilar o desensamblar los Servicios, salvo en la medida permitida por la legislación aplicable; (b) utilizar los Servicios para crear un producto o servicio de la competencia; (c) utilizar los Servicios con fines ilegales, perjudiciales o fraudulentos; (d) intentar obtener acceso no autorizado a los Servicios, a otras cuentas o a nuestros sistemas o redes; (e) interferir con la integridad o el rendimiento de los Servicios o alterarlos; o (f) eliminar o modificar cualquier aviso de propiedad en los Servicios.",
        "Podemos suspender o cancelar su acceso a los Servicios si consideramos razonablemente que ha infringido estos Términos o si así lo exige la ley.",
      ],
    },
    {
      id: "accounts",
      title: "4. Cuentas y acceso",
      content: [
        "Para utilizar determinados Servicios, es posible que deba registrar una cuenta. Debe proporcionar información precisa, actualizada y completa, y mantener la información de su cuenta al día. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que se realicen en su cuenta.",
        "Debe notificarnos de inmediato cualquier uso no autorizado de su cuenta o cualquier otra violación de seguridad. No seremos responsables de ninguna pérdida o daño derivado de su incumplimiento en la protección de sus credenciales de acceso.",
      ],
    },
    {
      id: "fees",
      title: "5. Tarifas y pago",
      content: [
        "Las tarifas de los Servicios serán las establecidas en el formulario de pedido, presupuesto o página de precios correspondiente. Salvo que se indique lo contrario, las tarifas se abonan por adelantado para el período de suscripción correspondiente y no son reembolsables, excepto cuando lo exija la ley o se establezca expresamente en un acuerdo independiente.",
        "Podemos modificar nuestras tarifas con un preaviso razonable. El uso continuado de los Servicios tras un cambio de tarifas constituye la aceptación de las nuevas tarifas. Usted es responsable de todos los impuestos aplicables (excepto los impuestos sobre nuestros ingresos netos).",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Propiedad intelectual",
      content: [
        "Nosotros y nuestros licenciantes conservamos todos los derechos, títulos e intereses sobre los Servicios, incluidos todo el software, los diseños, las marcas registradas y demás derechos de propiedad intelectual. Estos Términos no le otorgan ningún derecho sobre nuestras marcas, logotipos u otros elementos distintivos, salvo en la medida necesaria para utilizar los Servicios de conformidad con la Documentación.",
        "Usted conserva todos los derechos, títulos e intereses sobre sus Datos del Cliente. Usted nos otorga una licencia limitada para usar, almacenar y procesar los Datos del Cliente únicamente con el fin de proporcionar, mantener y mejorar los Servicios y cumplir con la legislación aplicable. No utilizaremos los Datos del Cliente con fines publicitarios ni para entrenar modelos de inteligencia artificial con propósitos ajenos a la prestación de los Servicios.",
      ],
    },
    {
      id: "confidentiality",
      title: "7. Confidencialidad",
      content: [
        "Cada parte se compromete a mantener confidencial toda información no pública revelada por la otra parte que esté designada como confidencial o que razonablemente deba considerarse como tal (\u00abInformación Confidencial\u00bb). No constituye Información Confidencial aquella que sea o pase a ser de dominio público sin culpa de la parte receptora, que fuera legítimamente conocida por la parte receptora sin restricción antes de su divulgación, o que sea desarrollada de forma independiente sin utilizar la Información Confidencial de la parte divulgante.",
        "La parte receptora protegerá la Información Confidencial con el mismo grado de diligencia que emplea para su propia información confidencial de naturaleza similar, y en ningún caso con una diligencia inferior a la razonable. La parte receptora solo podrá divulgar la Información Confidencial a sus empleados, contratistas o asesores que necesiten conocerla y que estén sujetos a obligaciones de confidencialidad al menos tan protectoras como las establecidas en estos Términos.",
      ],
    },
    {
      id: "privacy",
      title: "8. Privacidad y protección de datos",
      content: [
        "Nuestra recopilación y uso de información personal en relación con los Servicios se describe en nuestra Política de Privacidad. Al utilizar los Servicios, usted consiente dicha recopilación y uso. Usted es responsable de garantizar que su uso de los Servicios cumpla con las leyes de protección de datos aplicables, incluida la obtención de los consentimientos necesarios de los usuarios finales cuyos datos se procesen a través de los Servicios.",
        "En la medida en que procesemos datos personales en su nombre como encargado del tratamiento, los procesaremos únicamente de acuerdo con sus instrucciones documentadas y la legislación aplicable en materia de protección de datos. Implementaremos las medidas técnicas y organizativas adecuadas para proteger dichos datos.",
      ],
    },
    {
      id: "warranties",
      title: "9. Exclusiones de garantía",
      content: [
        "LOS SERVICIOS SE PROPORCIONAN \u00abTAL CUAL\u00bb Y \u00abSEGÚN DISPONIBILIDAD\u00bb, SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO, TITULARIDAD Y NO INFRACCIÓN. NO GARANTIZAMOS QUE LOS SERVICIOS SEAN ININTERRUMPIDOS, ESTÉN LIBRES DE ERRORES O ESTÉN EXENTOS DE COMPONENTES DAÑINOS.",
        "NO GARANTIZAMOS QUE EL USO DE LOS SERVICIOS RESULTE EN EL CUMPLIMIENTO DE NINGUNA LEY, NORMATIVA O ESTÁNDAR EN PARTICULAR. USTED ES EL ÚNICO RESPONSABLE DE DETERMINAR SI LOS SERVICIOS CUMPLEN CON SUS REQUISITOS NORMATIVOS Y DE CUMPLIMIENTO.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "10. Limitación de responsabilidad",
      content: [
        "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEGISLACIÓN APLICABLE, EN NINGÚN CASO SEREMOS NOSOTROS (NI NUESTROS LICENCIANTES, PROVEEDORES O EMPRESAS AFILIADAS) RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, NI POR LUCRO CESANTE, PÉRDIDA DE INGRESOS, DE DATOS O DE FONDO DE COMERCIO, DERIVADOS DE O EN RELACIÓN CON ESTOS TÉRMINOS O LOS SERVICIOS, YA SEA POR GARANTÍA, CONTRATO, RESPONSABILIDAD EXTRACONTRACTUAL (INCLUIDA LA NEGLIGENCIA), RESPONSABILIDAD OBJETIVA O CUALQUIER OTRA TEORÍA JURÍDICA.",
        "NUESTRA RESPONSABILIDAD TOTAL ACUMULADA POR TODAS LAS RECLAMACIONES DERIVADAS DE O RELACIONADAS CON ESTOS TÉRMINOS O LOS SERVICIOS NO EXCEDERÁ EL IMPORTE QUE USTED NOS HAYA ABONADO EN LOS DOCE (12) MESES ANTERIORES A LA RECLAMACIÓN (O, SI NO SE HAN ABONADO TARIFAS, CIEN DÓLARES ESTADOUNIDENSES (100 $)). LAS LIMITACIONES ANTERIORES SE APLICARÁN INCLUSO SI UN RECURSO NO CUMPLE SU FINALIDAD ESENCIAL.",
      ],
    },
    {
      id: "indemnification",
      title: "11. Indemnización",
      content: [
        "Usted se compromete a indemnizar, defender y mantener indemne a regX AI y a sus directivos, administradores, empleados y agentes frente a cualquier reclamación de terceros, daños, pérdidas, responsabilidades, costes y gastos (incluidos los honorarios razonables de abogados) que surjan de o estén relacionados con: (a) su uso de los Servicios; (b) sus Datos del Cliente; (c) su infracción de estos Términos o de la legislación aplicable; o (d) cualquier disputa entre usted y cualquier usuario final o tercero en relación con los Servicios.",
        "Nosotros le indemnizaremos frente a cualquier reclamación de terceros que alegue que los Servicios, cuando se utilizan de conformidad con estos Términos y la Documentación, infringen una patente, un derecho de autor o una marca registrada válidos en EE. UU. Nuestras obligaciones en virtud de este apartado no se aplican en la medida en que la reclamación se derive de su modificación de los Servicios, de su combinación con otros productos o de su uso de un modo no permitido por la Documentación. Si los Servicios son o creemos razonablemente que pueden ser objeto de una reclamación por infracción, podremos, a nuestra elección: (i) obtener el derecho a que usted continúe utilizando los Servicios; (ii) modificar los Servicios para que dejen de ser infractores; o (iii) cancelar su acceso y reembolsar las tarifas prepagadas correspondientes al resto del período de suscripción.",
      ],
    },
    {
      id: "termination",
      title: "12. Resolución",
      content: [
        "Cualquiera de las partes podrá resolver estos Términos (o un pedido aplicable) por conveniencia mediante notificación. Podemos suspender o cancelar su acceso a los Servicios de forma inmediata si incumple estos Términos o si la ley nos obliga a ello.",
        "Tras la resolución, su derecho a utilizar los Servicios cesará. Podremos eliminar o conservar los Datos del Cliente de conformidad con nuestras prácticas de retención de datos y la legislación aplicable. Los artículos que por su naturaleza deban subsistir (incluidos Definiciones, Propiedad intelectual, Confidencialidad, Exclusiones de garantía, Limitación de responsabilidad, Indemnización y Legislación aplicable) sobrevivirán a la resolución.",
      ],
    },
    {
      id: "governing-law",
      title: "13. Legislación aplicable y resolución de controversias",
      content: [
        "Estos Términos se rigen por las leyes del Estado de Delaware, Estados Unidos de América, sin tener en cuenta los principios de conflicto de leyes. Cualquier controversia derivada de o relacionada con estos Términos o los Servicios se resolverá exclusivamente ante los tribunales estatales o federales situados en Delaware, y usted acepta la jurisdicción personal de dichos tribunales.",
        "Nada en estos Términos limita el derecho de cualquiera de las partes a solicitar medidas cautelares u otras medidas de equidad ante cualquier tribunal competente.",
      ],
    },
    {
      id: "general",
      title: "14. Disposiciones generales",
      content: [
        "Estos Términos, junto con cualquier formulario de pedido u otro acuerdo expresamente incorporado por referencia, constituyen el acuerdo íntegro entre usted y regX AI en relación con los Servicios y sustituyen a cualquier acuerdo anterior. Si alguna disposición de estos Términos se declara inválida o inaplicable, las disposiciones restantes mantendrán su plena vigencia y efecto. El hecho de que no ejerzamos un derecho o disposición no constituirá una renuncia a dicho derecho o disposición. Usted no podrá ceder estos Términos sin nuestro consentimiento previo por escrito; nosotros podremos ceder estos Términos sin restricción. No existen terceros beneficiarios de estos Términos.",
      ],
    },
    {
      id: "contact",
      title: "15. Contacto",
      content: [
        "Si tiene preguntas sobre estos Términos y condiciones, póngase en contacto con nosotros en business@regxai.com o a través del formulario de contacto de nuestro sitio web.",
      ],
    },
  ],
};
