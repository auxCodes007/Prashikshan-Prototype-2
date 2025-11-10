import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Globe, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* --------------------- CONTENT (EN / HI) --------------------- */
const TOPIC_ORDER = [
  "intro",
  "types",
  "find",
  "prepare",
  "during",
  "nep",
  "after",
  "roles",
  "challenges",
  "stories",
  "resources",
  "faqs",
];

const CONTENT = {
  en: {
    title: "Internship Guide",
    subtitle:
      "Friendly, step-by-step guidance for every student — from first-gen learners to advanced achievers.",
    searchPlaceholder: "Search topics (e.g., resume, credits, report)…",
    langLabel: "Language",
    topics: {
  intro: {
    h: "Introduction to Internships",
    p: [
      "An internship is a short-term work experience designed to help students gain practical exposure to how real organizations function. It’s a learning period — not just a job — where you apply classroom knowledge to actual tasks and projects.",
      "Think of it as learning by doing. You get to observe professionals, handle basic responsibilities, and understand how teams collaborate to solve real problems.",
      "Internships help you discover your interests, develop work habits, and build employable skills like communication, teamwork, and time management.",
      "For rural or first-generation students, internships open doors to professional life. They provide real exposure, boost confidence, and show that your education has practical value.",
      "Pro Tip: Keep a daily record of your learning — even small achievements count toward your growth."
    ]
  },
  types: {
    h: "Types of Internships",
    p: [
      "Internships differ in purpose and structure. Understanding the types helps you choose wisely.",
      "Industry Internships: Work with companies or startups to learn practical applications in business, technology, or services.",
      "Research Internships: Assist faculty or researchers in collecting and analyzing data or writing papers.",
      "Social/NGO Internships: Work on social causes such as education, environment, and community welfare.",
      "Government/PSU Internships: Gain exposure to policy, administration, and governance by working in ministries or PSUs.",
      "Virtual Internships: Remote opportunities ideal for students in areas with limited local options.",
      "Pro Tip: Don’t overlook unpaid internships — they can provide valuable experience and networking opportunities."
    ]
  },
  find: {
    h: "How to Find the Right Internship",
    p: [
      "Step 1: Identify your goals. Know your interests, desired field, and the skills you want to develop.",
      "Step 2: Use verified sources like Prashikshan, AICTE Internship Portal, and your college’s placement cell.",
      "Step 3: Check legitimacy — avoid postings that demand payment or provide vague descriptions. Look for verified employers.",
      "Step 4: Evaluate the fit. Ensure the internship matches your academic background and personal goals.",
      "Pro Tip: Even if you’re unsure about your interests, doing an internship helps you discover what suits you best."
    ]
  },
  prepare: {
    h: "Preparing for Internships",
    p: [
      "Step 1: Build a simple, one-page resume that highlights your education, skills, and small projects.",
      "Step 2: Write a short cover letter explaining why you’re applying and what you hope to learn.",
      "Step 3: Organize your documents — college ID, marksheets, photo, and certificates.",
      "Step 4: Practice communication — introduce yourself clearly, and learn professional email and meeting etiquette.",
      "Pro Tip: Confidence matters more than perfect English — clarity and sincerity stand out."
    ]
  },
  during: {
    h: "During the Internship",
    p: [
      "Be professional — be punctual, maintain discipline, and show willingness to learn.",
      "Maintain a daily or weekly logbook describing your tasks and what you learned each day.",
      "Ask for feedback regularly and communicate clearly with your mentor or supervisor.",
      "Observe how the organization functions — teamwork, deadlines, and meetings are key learning experiences.",
      "Pro Tip: Consistency and attitude matter more than prior experience. Show initiative."
    ]
  },
  nep: {
    h: "NEP Credits & Compliance",
    p: [
      "Under the National Education Policy (NEP) 2020, internships are an essential part of experiential learning.",
      "Colleges assign 1–4 credits depending on the internship’s duration and scope.",
      "To earn credits, students must submit a logbook, report, and get mentor approval.",
      "Faculty mentors verify learning outcomes, and credits are recorded in the student’s academic profile automatically.",
      "Example: A 4-week internship may earn 2 credits under NEP guidelines."
    ]
  },
  after: {
    h: "After the Internship",
    p: [
      "Submit your final report summarizing your role, achievements, and learning outcomes.",
      "Collect a completion certificate signed by your industry mentor or supervisor.",
      "Reflect on your learning: what you enjoyed, challenges faced, and areas of improvement.",
      "Update your resume and LinkedIn profile to include the new experience.",
      "Pro Tip: Stay in touch with mentors — they can guide your next career steps."
    ]
  },
  roles: {
    h: "Roles of Stakeholders",
    p: [
      "Students: Learn actively, maintain logs, and communicate honestly with mentors.",
      "Faculty Mentors: Guide, review, and evaluate student progress and approve reports.",
      "Industry Partners: Provide structured tasks, mentorship, and evaluation feedback.",
      "Colleges: Ensure NEP compliance, validate companies, and support students through orientation.",
      "Pro Tip: When everyone fulfills their role sincerely, internships become meaningful and effective."
    ]
  },
  challenges: {
    h: "Common Challenges & How to Overcome Them",
    p: [
      "Challenge: Limited local opportunities. Solution: Apply for remote or hybrid internships.",
      "Challenge: Poor internet access. Solution: Use low-data options and sync work later.",
      "Challenge: Language barriers. Solution: Use bilingual tools or communication aids.",
      "Challenge: Confidence or communication issues. Solution: Practice short introductions and feedback discussions.",
      "Challenge: Lack of guidance. Solution: Stay in touch with your faculty mentor regularly.",
      "Pro Tip: Document everything — even small achievements show dedication and growth."
    ]
  },
  stories: {
    h: "Real Stories",
    p: [
      "Pooja, a student from Rajasthan, interned remotely with an NGO translating health awareness material. Her work was later recognized by local authorities.",
      "Arjun from Assam completed his internship using a smartphone and cyber café. His dedication earned him a permanent research assistant position.",
      "A group of polytechnic students from Madhya Pradesh built a low-cost irrigation automation system as an internship project. It won regional innovation awards.",
      "Lesson: No matter your background, consistent effort leads to growth and recognition."
    ]
  },
  resources: {
    h: "Tools & Resources",
    p: [
      "Resume Building: Canva, Google Docs Resume Builder, and Overleaf for academic CVs.",
      "Learning Platforms: SWAYAM, Coursera, NPTEL, and free YouTube tutorials.",
      "Soft Skills: Email writing, English speaking practice, and presentation videos.",
      "Government Portals: AICTE Internship Portal, TULIP, and NCS for verified roles.",
      "Prashikshan Tools: Verified internships, digital logbooks, and auto-generated NEP reports."
    ]
  },
  faqs: {
    h: "Frequently Asked Questions",
    p: [
      "Q1. Are all internships paid? Some are, but focus first on learning and building experience.",
      "Q2. Can rural students apply? Yes! Many verified companies offer remote or hybrid internships.",
      "Q3. How are credits assigned? Credits depend on duration, mentor evaluation, and project completion.",
      "Q4. What if I can’t finish my internship? Inform your faculty mentor; some colleges allow extensions or partial credits.",
      "Q5. How do I avoid fake internships? Use verified portals only and never pay anyone to get selected.",
      "Q6. Can I do two internships at once? Yes, if both don’t overlap in hours and are approved by your college."
    ]
  }
},
    benefits: [
      "Verified employers and genuine opportunities",
      "Digital logbooks with automatic report generation",
      "Faculty mentorship and credit mapping",
      "NEP-aligned, rural-friendly access",
    ],
  },
  hi: {
    title: "इंटर्नशिप मार्गदर्शिका",
    subtitle:
      "दोस्ताना, चरण-दर-चरण मार्गदर्शन — पहली-पीढ़ी के सीखने वालों से लेकर उन्नत छात्रों तक सभी के लिए।",
    searchPlaceholder: "खोजें (जैसे: रिज़्यूमे, क्रेडिट, रिपोर्ट)…",
    langLabel: "भाषा",
    topics: {
      intro: {
        h: "इंटर्नशिप का परिचय",
        p: [
          "इंटर्नशिप वास्तविक काम का अल्पकालिक अनुभव है जिससे कौशल सीखते हैं।",
          "यह कक्षा की पढ़ाई को असली प्रोजेक्ट व टीम से जोड़ती है।",
        ],
      },
      types: {
        h: "इंटर्नशिप के प्रकार",
        p: [
          "इंडस्ट्री, रिसर्च, NGO/सामाजिक, सरकारी — लक्ष्य के अनुसार चुनें।",
          "मोड: इन-ऑफिस, हाइब्रिड, रिमोट/ऑनलाइन, अपरेंटिसशिप।",
        ],
      },
      find: {
        h: "सही इंटर्नशिप कैसे ढूँढें",
        p: [
          "रुचियाँ/कौशल लिखें; सत्यापित स्रोतों से भूमिकाएँ चुनें।",
          "रेड फ्लैग: अस्पष्ट भूमिका, बिना काम के सर्टिफिकेट, अग्रिम शुल्क।",
        ],
      },
      prepare: {
        h: "तैयारी",
        p: [
          "सरल 1-पेज रिज़्यूमे; प्रोजेक्ट्स और टूल्स का उल्लेख करें।",
          "स्पष्ट कवर लेटर; ईमेल शिष्टाचार व संचार का अभ्यास करें।",
        ],
      },
      during: {
        h: "इंटर्नशिप के दौरान",
        p: [
          "साप्ताहिक लक्ष्य तय करें; समय पर लॉगबुक जमा करें।",
          "व्यवसायिक बनें: समयपालन, उत्तरदायी, प्रतिक्रिया के लिए खुले।",
        ],
      },
      nep: {
        h: "NEP क्रेडिट व अनुपालन",
        p: [
          "NEP 2020 के अंतर्गत इंटर्नशिप पर अकादमिक क्रेडिट मिल सकते हैं।",
          "साक्ष्य रखें: लॉगबुक, मेंटर फीडबैक, फाइनल रिपोर्ट।",
        ],
      },
      after: {
        h: "इंटर्नशिप के बाद",
        p: [
          "रिपोर्ट लिखें, सीखों को प्रस्तुत करें, सिफारिश पत्र माँगें।",
          "रिज़्यूमे/LinkedIn अपडेट करें — सत्यापित अनुभव जोड़ें।",
        ],
      },
      roles: {
        h: "हितधारकों की भूमिकाएँ",
        p: [
          "छात्र: सीखना/रिकॉर्ड/संचार; संकाय: मेंटरिंग/स्वीकृति।",
          "इंडस्ट्री: वास्तविक कार्य, मार्गदर्शन, निष्पक्ष मूल्यांकन।",
        ],
      },
      challenges: {
        h: "सामान्य चुनौतियाँ व समाधान",
        p: [
          "स्थानीय उद्योग नहीं? रिमोट, रिसर्च, या NGO विकल्प देखें।",
          "कम बैंडविड्थ? ऑफ़लाइन नोट्स रखें, बाद में सिंक करें।",
        ],
      },
      stories: {
        h: "वास्तविक कहानियाँ",
        p: [
          "कई ग्रामीण/पहली-पीढ़ी छात्र रिमोट मेंटरशिप से सफल हुए।",
          "नियमितता और ईमानदार रिपोर्टिंग भरोसा बनाती है।",
        ],
      },
      resources: {
        h: "उपकरण व संसाधन",
        p: [
          "रिज़्यूमे टेम्पलेट, ईमेल नमूने, SWAYAM/Coursera पाठ्यक्रम।",
          "इस प्लेटफ़ॉर्म पर सत्यापित भूमिकाएँ व ऑटो रिपोर्ट उपलब्ध।",
        ],
      },
      faqs: {
        h: "अक्सर पूछे जाने वाले प्रश्न",
        p: [
          "क्या इंटर्नशिप भुगतान वाली होती हैं? कुछ हाँ — सीखने व न्यायपूर्ण शर्तें देखें।",
          "क्या क्रेडिट मिलेंगे? अपने विभाग के नियमों का पालन करें।",
        ],
      },
    },
    benefits: [
      "सत्यापित नियोक्ता व वास्तविक अवसर",
      "डिजिटल लॉगबुक व स्वचालित रिपोर्ट",
      "संकाय मेंटरशिप व क्रेडिट मैपिंग",
      "NEP अनुरूप, ग्रामीण-हितैषी पहुँच",
    ],
  },
};

/* --------------------- COMPONENT --------------------- */
const InternshipGuide = () => {
  const [lang, setLang] = useState("en");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("intro");

  // Build a search index from current language
  const searchIndex = useMemo(() => {
    const t = CONTENT[lang].topics;
    return TOPIC_ORDER.map((id) => ({
      id,
      h: t[id].h,
      p: t[id].p.join(" "),
    }));
  }, [lang]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex;
    return searchIndex.filter(
      (item) =>
        item.h.toLowerCase().includes(q) || item.p.toLowerCase().includes(q)
    );
  }, [query, searchIndex]);

  // Highlight active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    TOPIC_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [lang]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const T = CONTENT[lang];

  return (
    <div className="InternshipGuide">
      <Navbar />

      <main className="pt-20">
        {/* HERO */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Home</span>
                </Link>

                <div className="flex items-start gap-4 mb-6 flex-wrap">
                  <div className="p-3 bg-primary-600 rounded-xl">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11A2.5 2.5 0 0 0 20 19.5V5H4v14.5Z" />
                      <path d="M9 8h6M9 12h6" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-[260px]">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {T.title}
                    </h1>
                    <p className="text-xl text-gray-600 mt-2">{T.subtitle}</p>
                  </div>

                  {/* Search + Language */}
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={T.searchPlaceholder}
                        className="pl-9 pr-3 py-2 rounded-xl bg-white shadow-sm w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      />
                      {query && (
                        <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow border border-gray-100 max-h-64 overflow-auto">
                          {filtered.length === 0 && (
                            <div className="px-3 py-2 text-sm text-gray-500">
                              No matches
                            </div>
                          )}
                          {filtered.map((it) => (
                            <button
                              key={it.id}
                              onClick={() => {
                                scrollTo(it.id);
                                setQuery("");
                              }}
                              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                            >
                              {CONTENT[lang].topics[it.id].h}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setLang((l) => (l === "en" ? "hi" : "en"))}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-sm hover:shadow transition"
                      aria-label="Toggle Language"
                    >
                      <Globe className="w-4 h-4 text-primary-600" />
                      <span className="font-medium">
                        {lang === "en" ? "हिन्दी" : "English"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Quick benefits strip (kept from your design language) */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    {lang === "en"
                      ? "Key Benefits of Using Prashikshan"
                      : "प्रशिक्षण के प्रमुख लाभ"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {CONTENT[lang].benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2 text-primary-800"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BODY: Sidebar + Content */}
        <section className="py-10 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* SIDEBAR */}
              <aside className="md:col-span-3">
                <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="p-4 border-b">
                    <p className="text-sm font-semibold text-gray-700">
                      {CONTENT[lang].langLabel}: {lang === "en" ? "English" : "हिन्दी"}
                    </p>
                  </div>
                  <nav className="p-2">
                    {TOPIC_ORDER.map((id) => {
                      const active = id === activeId;
                      const label = CONTENT[lang].topics[id].h;
                      return (
                        <button
                          key={id}
                          onClick={() => scrollTo(id)}
                          className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition ${
                            active
                              ? "bg-teal-50 text-teal-700 font-semibold"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* CONTENT */}
              <div className="md:col-span-9">
                {TOPIC_ORDER.map((id, idx) => {
                  const { h, p } = CONTENT[lang].topics[id];
                  return (
                    <motion.section
                      id={id}
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.03 }}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {h}
                      </h2>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {p.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>

                      {/* small extra for intro */}
                      {id === "intro" && (
                        <div className="grid sm:grid-cols-2 gap-3 mt-6">
                          {[
                            "Verified employers & genuine roles",
                            "Digital logbooks & auto reports",
                            "Faculty mentorship & credit mapping",
                            "NEP-aligned, rural-friendly access",
                          ].map((tip) => (
                            <div
                              key={`${lang}-${tip}`}
                              className="flex items-start gap-2 bg-teal-50 text-teal-800 p-3 rounded-xl"
                            >
                              <CheckCircle className="w-4 h-4 mt-0.5" />
                              <span className="text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <div className="max-w-4xl text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  {lang === "en"
                    ? "Ready to Start Your Internship Journey?"
                    : "अपनी इंटर्नशिप यात्रा शुरू करने के लिए तैयार हैं?"}
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  {lang === "en"
                    ? "Explore verified roles, submit logbooks, and earn credits — all in one place."
                    : "सत्यापित भूमिकाएँ खोजें, लॉगबुक जमा करें और क्रेडिट पाएं — सब कुछ एक ही जगह।"}
                </p>
                <Link
                  to="/"
                  className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg inline-block"
                >
                  {lang === "en" ? "Get Started Now" : "अभी शुरू करें"}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternshipGuide;
