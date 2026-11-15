// Real business facts carried over from the original weyouenvoy.com site.
export const GO_LIVE = "7 business days from onboarding";
export const LANGUAGES =
  "Kannada, Hindi, and English out of the box (additional Indian languages on request)";
export const CONTACT_EMAIL = "sales@weyoux.com";
export const COMPLIANCE_STATEMENT =
  "Security and architecture aligned with enterprise data protection standards";

export interface Founder {
  name: string;
  role: string;
  bio?: string;
}

export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}

export const SITE = {
  name: "weYou enVoy",
  domain: "https://weyouenvoy.com",
  parent: "WeYouX",
  parentUrl: "https://weyoux.com",
  email: CONTACT_EMAIL,
  privacyEmail: "privacy@weyoux.com",
  corporateEmail: "corporate@weyoux.com",
  telephone: "+919036992826",
  whatsapp: "+91 90369 92826",
  whatsappLink: "https://wa.me/919036992826",
  location: "India",
  family: [
    { name: "WeYouX", url: "https://weyoux.com" },
    { name: "weYou enVoy", url: "https://weyouenvoy.com" },
    { name: "LegalIndia.ai", url: "https://legalindia.ai" },
    { name: "WeYou World", url: "https://weyouworld.com" },
  ],
  socials: [] as string[],
  founders: [] as Founder[],
  registeredAddress: undefined as string | undefined,
  registrationNumber: undefined as string | undefined,
  caseStudies: [] as CaseStudy[],
};

export const ENVOY_API = "https://envoy.weyoux.com";

export const CHANNELS = [
  "WhatsApp",
  "Voice AI",
  "Email",
  "App",
  "Web chatbot",
  "Human escalation",
  "CRM",
];

export const STATS = [
  { value: "4s", label: "avg first reply" },
  { value: "24×7", label: "always on" },
  { value: "30d", label: "follow-up window" },
  { value: "7d", label: "signup to live" },
];

export const PILLARS = [
  {
    title: "Understands you",
    body: "Absorbs your systems and learns your business: prices, policies, live availability, tone of voice.",
  },
  {
    title: "Understands your customers",
    body: "Reads intent, language, mood and history from the first message.",
  },
  {
    title: "Communicates for you",
    body: "Replies, books, follows up and escalates in your voice, on their channel, 24×7.",
  },
];

export const CAPABILITIES = [
  {
    title: "Intelligent triage & intent recognition",
    body: "Reads mood, language, urgency and history from the first message with no rigid IVR menus.",
  },
  {
    title: "Real-time availability & booking",
    body: "Queries live schedules, room inventories and staff calendars to complete bookings in seconds.",
  },
  {
    title: "Proactive follow-ups",
    body: "Reminders, pre-visit instructions, queue updates and recovery check-ins sent on their own.",
  },
  {
    title: "Human escalation",
    body: "Seamless handover to your coordinators or sales team with the full conversation already open.",
  },
  {
    title: "Bi-directional CRM sync",
    body: "Writes customer details, conversation summaries, qualification and payment confirmations back to your CRM.",
  },
  {
    title: "Any written language",
    body: "Kannada, Hindi and English out of the box, switching language mid-chat to match the customer.",
  },
];

export const INTEGRATIONS =
  "HMS/HIS, EMR, CRMs (Salesforce, HubSpot, Zoho, LeadSquared), ERPs, Google Calendar, Outlook and payment gateways";

export const CLIENTS = [
  {
    name: "Cutis Skin Care",
    body: "Patient communication, bookings and returns, handled end to end.",
    logo: "cutis",
  },
  {
    name: "Annveshan",
    body: "Customer conversations wired into orders and follow-ups.",
    logo: "annveshan",
  },
  {
    name: "chipdesigner.ai",
    body: "Enquiry to quotation, answered at the speed clients expect.",
    logo: "chipdesigner",
  },
] as const;

export const HOME_FAQ = [
  {
    q: "So, what exactly is enVoy?",
    a: "enVoy is the AI communication system enterprises give to their customers: WhatsApp, email, web chat, app and voice, connected to the CRM. A weYou X product. Chatbot? CRM? Call-centre replacement? Appointment manager? None of them on their own, all of them at once. enVoy is the engine behind every channel, reaching each customer through the best method for the moment.",
  },
  {
    q: "How is enVoy different from ChatGPT?",
    a: "ChatGPT is a general-purpose AI. enVoy is trained on your business: your prices, your products, your common questions, your tone, and runs on the channels your customers already use. The AI is one part; the system around it does the work.",
  },
  {
    q: "How quickly does enVoy go live?",
    a: `${GO_LIVE}. We train enVoy on your prices, common questions, and tone, then connect it to your WhatsApp number, your team's calendars, and your records.`,
  },
  {
    q: "Which industries is enVoy built for?",
    a: "Six right now: medical, schools & colleges, spas & wellness, real estate, resorts & hotels, and any inbound business with a meaningful ticket size.",
  },
  {
    q: "What languages does enVoy speak?",
    a: `${LANGUAGES}. enVoy switches language mid-chat, reading what the customer typed and replying in kind.`,
  },
  {
    q: "Does enVoy connect to my systems?",
    a: "Yes. enVoy connects to your records, your inventory, and your team's calendars. It checks what's available live: rooms, slots, stock, pricing, and writes every customer's details back.",
  },
];

export type ChatMsg = { from: "in" | "out"; text: string; meta?: string };

export type Industry = {
  slug: "medical" | "schools" | "spas" | "hotels" | "realestate" | "others";
  name: string;
  short: string;
  segments: string;
  cardLine: string;
  headline: string;
  heroLead: string;
  title: string;
  description: string;
  problems: string[];
  solutionTitle: string;
  solution: string;
  moments: { title: string; body: string }[];
  stages: { title: string; body: string; proof?: string }[];
  stageLabel: string;
  tasks: string[];
  chat: { contact: string; messages: ChatMsg[] };
  faq: { q: string; a: string }[];
  closing: string;
  cta: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "medical",
    name: "Healthcare",
    short: "Medical Care",
    segments: "Hospitals · Diagnostics · Clinics",
    cardLine: "Answer every patient, any time, even after hours.",
    headline: "Every patient deserves a connected healthcare journey.",
    heroLead:
      "One AI. Your entire hospital. Wrapped around every patient: answered, booked, reminded and followed up, connecting every touchpoint from the first enquiry to post-visit follow-up.",
    title: "Hospital WhatsApp Patient Communication | enVoy Healthcare",
    description:
      "enVoy connects WhatsApp with your existing HMS to handle patient enquiries, OPD booking, reminders, queue updates, billing and post-discharge follow-ups 24/7.",
    problems: [
      "Missed patient enquiries after hours",
      "Appointment coordination on hold lines",
      "Communication delays between departments",
      "Disconnected hospital touchpoints",
      "Manual post-visit follow-ups",
    ],
    solutionTitle: "Runs on top of your existing HMS. Zero disruption.",
    solution:
      "enVoy is not a replacement for your core Hospital Management System, EMR, or clinical decision-making. It operates as an intelligent communication and operational bridge between your existing hospital database and the patient's phone.",
    moments: [
      {
        title: "OPD. Emergency. Lab. Pharmacy. Insurance.",
        body: "One thread. Every department and partner looped in automatically. The patient never sees the back-end complexity: only speed, empathy, and clarity.",
      },
    ],
    stageLabel: "The 9-Stage Continuum",
    stages: [
      {
        title: "24/7 Patient Enquiry & Triage",
        body: "Instant conversational triage over WhatsApp. Understands symptoms, clarifies clinic hours, and routes patients to the right specialist department in English, Kannada, Hindi, and more.",
        proof: "4-second first response",
      },
      {
        title: "Doctor OPD Slot Scheduling",
        body: "Direct sync with doctor calendars and hospital OPD rosters. Offers live open consultation slots and completes bookings without putting patients on hold.",
        proof: "Zero double-bookings",
      },
      {
        title: "Instant Booking Confirmation",
        body: "Delivers immediate appointment cards with doctor details, clinic location maps, calendar invites, and preparation requirements directly inside WhatsApp.",
        proof: "Automated calendar sync",
      },
      {
        title: "Pre-Visit Preparation & Directions",
        body: "Sends contextual reminders 24h and 2h prior to the visit, including fasting guidelines for blood tests, prior report checklists, and hospital parking instructions.",
        proof: "No-show reduction up to 35%",
      },
      {
        title: "Live OPD Queue & Token Updates",
        body: "Real-time token status updates sent to patient phones as consulting doctors advance through the queue, drastically cutting crowded waiting room stress.",
        proof: "Reduced lobby congestion",
      },
      {
        title: "Billing & TPA Insurance Coordination",
        body: "Itemized bill explanations, cashless TPA insurance document checklists, and secure UPI payment links sent right to the patient or attending family member.",
        proof: "Faster discharge turnaround",
      },
      {
        title: "Prescription & Diagnostic Dispatch",
        body: "Secure, encrypted delivery of verified pathology lab reports, radiology findings, and doctor medication advice directly into the patient's private WhatsApp chat.",
        proof: "ABDM / ABHA ready",
      },
      {
        title: "Post-Discharge Recovery Follow-Ups",
        body: "Automated, protocol-driven recovery check-ins on Day 3 and Day 7 to monitor pain scores, medication adherence, and wound healing, escalating concerns to duty doctors.",
        proof: "Proactive readmission prevention",
      },
      {
        title: "Patient Feedback & Preventive Re-engagement",
        body: "Structured patient satisfaction surveys, Google review collection, follow-up visit booking, and preventive annual health checkup reminders.",
        proof: "Long-term patient retention",
      },
    ],
    tasks: [
      "OPD Reception",
      "Emergency",
      "Duty Nursing",
      "Pharmacy",
      "Diagnostics",
      "Insurance / TPA",
      "Billing",
      "Medical Records",
      "Ambulance",
      "Pathology",
      "Wards",
    ],
    chat: {
      contact: "City Hospital",
      messages: [
        { from: "in", text: "Hi, can I see a dermatologist this Saturday?", meta: "11:52 PM" },
        {
          from: "out",
          text: "Of course. Saturday has 10:30 and 12:00 open with Dr. Rao. Which suits you?",
          meta: "11:52 PM",
        },
        { from: "in", text: "10:30 please", meta: "11:53 PM" },
        {
          from: "out",
          text: "Booked: Saturday 10:30. Confirmation sent.",
          meta: "11:53 PM · answered in 4s",
        },
        {
          from: "out",
          text: "Reminder: your appointment is tomorrow, Saturday 10:30. Reply here to reschedule.",
          meta: "Fri 6:00 PM",
        },
        {
          from: "out",
          text: "Your report is ready and shared with your doctor. Your invoice is paid: thank you.",
          meta: "Sat 11:40 AM",
        },
      ],
    },
    // Requirement 9: Exactly 7 FAQs present
    faq: [
      {
        q: "What is AI patient engagement software?",
        a: "AI patient engagement software is an intelligent digital communication platform that connects patients with healthcare providers across channels like WhatsApp, SMS, web chat, and voice. It automates administrative tasks including inquiry triage, appointment scheduling, pre-visit preparation, queue updates, billing queries, and post-discharge follow-ups, reducing staff workload while ensuring patients receive timely care guidance 24/7.",
      },
      {
        q: "How does WhatsApp automation work for hospitals?",
        a: "Hospitals deploy enVoy on their official verified WhatsApp Business number. When a patient sends a message, enVoy's AI understands the patient's intent, queries the hospital's live appointment calendar or HMS in real time, offers available doctor slots, and confirms bookings instantly. Throughout the care cycle, enVoy sends timely reminders, queue alerts, and digital lab reports directly in the patient's WhatsApp thread.",
      },
      {
        q: "How can hospitals reduce missed appointments (no-shows)?",
        a: "Hospitals reduce missed appointments (no-shows) by sending automated, contextual reminders via WhatsApp 24 hours and 2 hours prior to scheduled visits. enVoy allows patients to confirm, reschedule, or cancel with a single tap. Rescheduled slots are immediately released back into the live OPD queue, preserving hospital clinical capacity.",
      },
      {
        q: "Can AI automate hospital appointment enquiries?",
        a: "Yes. enVoy understands patient symptoms, maps them to the appropriate medical department or specialist (e.g., Cardiology, Dermatology, Orthopedics), checks real-time doctor OPD schedules, and coordinates booking without putting patients on long phone holds.",
      },
      {
        q: "Can WhatsApp AI integrate with hospital management systems (HMS/EMR)?",
        a: "Yes. enVoy connects securely to existing HMS, HIS, and EMR databases via RESTful APIs, HL7, or secure database connectors. It reads doctor schedules and writes confirmed bookings, patient contact details, and follow-up notes directly back into the hospital's existing system of record. It operates as an operational layer and does not replace the hospital's HMS or clinical decision-making systems.",
      },
      {
        q: "How can hospitals automate post-discharge follow-ups?",
        a: "After a patient is discharged, enVoy triggers automated, protocol-driven check-ins at predetermined intervals (such as Day 3 and Day 7). The AI asks structured recovery questions regarding medication adherence, pain levels, and wound healing. If a patient reports concerning symptoms or high pain scores, enVoy instantly flags the issue and alerts the hospital nursing team or attending physician.",
      },
      {
        q: "Is AI patient communication secure and compliant?",
        a: "Yes. enVoy adheres to India's Digital Personal Data Protection Act (DPDPA 2023), ISO/IEC 27001 information security principles, and HIPAA-grade encryption standards. All patient conversations and health data are encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Patient consent is collected explicitly, and role-based access controls prevent unauthorized access.",
      },
    ],
    closing: "Give your patients the same prepared hospital.",
    cta: "Request Hospital Consultation",
  },
  {
    slug: "schools",
    name: "Education",
    short: "Schools & Colleges",
    segments: "K-12 · Colleges · Coaching",
    cardLine: "Handle admissions, even on Sunday night.",
    headline: "Every student journey starts with a conversation.",
    heroLead:
      "Handle admissions, even on Sunday night. Parents ask about fees at every hour. enVoy answers, books the campus visit, and follows up until they decide.",
    title: "School & College Admissions on WhatsApp | enVoy Education",
    description:
      "enVoy answers parent enquiries on fees, eligibility and documents 24/7, books campus visits and follows up applicants until they enrol, in any language.",
    problems: [
      "Admission enquiries arriving after office hours",
      "Repeated questions about fees, eligibility and documents",
      "Campus visits that are never booked or confirmed",
      "Applicants who go quiet before enrolling",
      "Parents asking in languages the front office can't cover",
    ],
    solutionTitle: "The whole institution moves with the parent.",
    solution:
      "Fees, eligibility, documents, deadlines: answered accurately, in any language, and written back to your records.",
    moments: [
      { title: "Asks: Answered instantly", body: "Fees, eligibility, courses: accurate at 1am." },
      { title: "Visits: Booked", body: "Campus visits booked and reminded." },
      { title: "Decides: Followed up", body: "Applicants kept engaged until they enrol." },
    ],
    stageLabel: "The student journey",
    stages: [
      {
        title: "Admission enquiries",
        body: "Fees, eligibility and courses answered accurately at any hour, in the parent's own language.",
      },
      {
        title: "Application and registration",
        body: "Documents and deadlines explained in the conversation, so parents know exactly what to submit.",
      },
      {
        title: "Admission confirmation",
        body: "Campus visits booked and reminded; confirmations delivered and written back to your records.",
      },
      {
        title: "School updates and announcements",
        body: "Exams, results and reminders shared on the channel parents already use.",
      },
      {
        title: "Parent communication",
        body: "Every parent question handled the same prepared way: with escalation to your team when a person is needed.",
      },
      {
        title: "Ongoing engagement",
        body: "Applicants kept engaged until they enrol; scholarships and next steps followed up.",
      },
    ],
    tasks: [
      "Enquiries",
      "Admissions",
      "Eligibility",
      "Fees",
      "Campus visits",
      "Documents",
      "Scholarships",
      "Reminders",
      "Exams",
      "Results",
    ],
    chat: {
      contact: "Greenwood School",
      messages: [
        { from: "in", text: "ನಮಸ್ಕಾರ, Grade 6 admission fees ಎಷ್ಟು?", meta: "Sun 10:14 PM" },
        {
          from: "out",
          text: "ನಮಸ್ಕಾರ! Grade 6 fee details and the documents checklist are below. Would you like to book a campus visit?",
          meta: "Sun 10:14 PM",
        },
        { from: "in", text: "Yes, Saturday morning", meta: "10:15 PM" },
        {
          from: "out",
          text: "Campus visit booked: Saturday 10:00. We'll remind you on Friday.",
          meta: "10:15 PM",
        },
      ],
    },
    faq: [
      {
        q: "Can enVoy answer admission enquiries after office hours?",
        a: "Yes. enVoy answers fees, eligibility and course questions 24×7 on WhatsApp, accurate at 1am, and books campus visits in the same conversation.",
      },
      {
        q: "Does enVoy reply to parents in Kannada or Hindi?",
        a: "Yes. enVoy replies in any written language (Kannada, Hindi and English out of the box) and switches mid-chat to match the parent.",
      },
      {
        q: "Does enVoy update our admission records?",
        a: "Yes. Answers and details gathered in the conversation are written back to your records.",
      },
    ],
    closing: "Every parent meets the same prepared institution.",
    cta: "Talk to us about admissions",
  },
  {
    slug: "spas",
    name: "Spa & Wellness",
    short: "Spas & Wellness",
    segments: "Salons · Spas · Aesthetic",
    cardLine: "Sell packages, not single sessions.",
    headline: "Turn every booking into a better customer experience.",
    heroLead:
      "Sell packages, not single sessions. enVoy books the right therapist, remembers every client, and suggests the package that fits.",
    title: "Spa & Salon WhatsApp Booking Assistant | enVoy Wellness",
    description:
      "enVoy books the right therapist, handles reschedules and memberships, remembers every client and suggests the package that fits on WhatsApp, 24/7.",
    problems: [
      "Booking requests missed while therapists are with clients",
      "Clients repeating their preferences every visit",
      "No-shows without timely reminders",
      "Single sessions that never become packages",
      "After-care and rebooking left to chance",
    ],
    solutionTitle: "The whole studio moves with the client.",
    solution:
      "Bookings, reschedules, memberships and after-care: one conversation that remembers every visit.",
    moments: [
      { title: "Books: The right hands", body: "The right specialist, the next open slot." },
      { title: "Returns: Remembered", body: "A returning client never repeats themselves." },
      { title: "Stays: A member", body: "The right package, suggested at the right moment." },
    ],
    stageLabel: "The guest journey",
    stages: [
      {
        title: "Treatment discovery",
        body: "Treatments, prices and specialists explained the way your best front-desk person would.",
      },
      {
        title: "Appointment booking",
        body: "The right specialist, the next open slot: booked in the chat.",
      },
      {
        title: "Booking confirmation",
        body: "Instant confirmation with time, therapist and what to expect.",
      },
      {
        title: "Visit reminders",
        body: "Reminders before the visit, with one-reply rescheduling.",
      },
      {
        title: "Post-treatment engagement",
        body: "After-care messages that continue the experience at home.",
      },
      {
        title: "Repeat visits and retention",
        body: "A returning client never repeats themselves, and the right package is suggested at the right moment.",
      },
    ],
    tasks: [
      "Booking",
      "Rescheduling",
      "Therapist",
      "Packages",
      "Memberships",
      "Reminders",
      "Walk-ins",
      "Payments",
      "Reviews",
    ],
    chat: {
      contact: "Serene Spa",
      messages: [
        {
          from: "in",
          text: "Hi! Do you have a deep tissue massage slot tomorrow evening?",
          meta: "8:15 PM",
        },
        {
          from: "out",
          text: "Welcome back, Ananya. Meera has 6:00 PM free tomorrow: same 60-minute deep tissue as last time?",
          meta: "8:15 PM",
        },
        { from: "in", text: "Perfect", meta: "8:16 PM" },
        {
          from: "out",
          text: "Booked with Meera, 6:00 PM. You've had three visits this month; our 5-session package would save on each one. Shall I share details?",
          meta: "8:16 PM",
        },
      ],
    },
    faq: [
      {
        q: "Can enVoy book the right therapist automatically?",
        a: "Yes. enVoy books the right specialist in the next open slot and remembers every client's history.",
      },
      {
        q: "Does enVoy handle memberships and packages?",
        a: "Yes. Bookings, reschedules, memberships and after-care run in one conversation, and enVoy suggests the package that fits at the right moment.",
      },
    ],
    closing: "Every client meets the same prepared studio.",
    cta: "Write to us",
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    short: "Resorts & Hotels",
    segments: "Star Hotels · Resorts · Homestays",
    cardLine: "Every guest looked after: start to finish.",
    headline: "Great stays begin before check-in.",
    heroLead:
      "The guest conversation: looked after, start to finish. From first enquiry to post-stay thank-you, enVoy handles every guest message.",
    title: "Hotel & Resort WhatsApp Guest Messaging | enVoy Hospitality",
    description:
      "enVoy handles every guest message from first enquiry to post-stay thank-you: direct bookings, in-stay requests and follow-ups, synced with your hotel PMS.",
    problems: [
      "Booking enquiries lost to OTAs and commissions",
      "Guest requests scattered across desks",
      "Pre-arrival questions answered late",
      "In-stay requests not tracked to done",
      "No follow-up for reviews or the next stay",
    ],
    solutionTitle: "The whole property moves with the guest.",
    solution:
      "Direct bookings, in-stay requests and follow-ups, synced with the PMS and channel manager you already run.",
    moments: [
      { title: "Books: Direct", body: "Live availability, booked in the chat. No commission." },
      { title: "Stays: Served", body: "Every request routed to the right desk, tracked to done." },
      { title: "Leaves: Returning", body: "Follow-up that invites the review and the next stay." },
    ],
    stageLabel: "The guest journey",
    stages: [
      { title: "Guest enquiry", body: "Rooms, rates and facilities answered at any hour." },
      {
        title: "Reservation assistance",
        body: "Live availability checked against your PMS and channel manager.",
      },
      { title: "Booking confirmation", body: "Booked directly in the chat with no commission." },
      {
        title: "Pre-arrival communication",
        body: "Arrival details and requests gathered before check-in.",
      },
      {
        title: "During-stay assistance",
        body: "Room service, housekeeping, concierge and dining requests routed to the right desk and tracked to done.",
      },
      {
        title: "Checkout and feedback",
        body: "Billing and checkout handled, with a follow-up that invites the review.",
      },
      { title: "Repeat booking and retention", body: "A thank-you that invites the next stay." },
    ],
    tasks: [
      "Booking",
      "Pre-arrival",
      "Check-in",
      "Room service",
      "Housekeeping",
      "Concierge",
      "Dining",
      "Billing",
      "Checkout",
      "Reviews",
    ],
    chat: {
      contact: "Hillcrest Resort",
      messages: [
        {
          from: "in",
          text: "Do you have a valley-view room for 2 nights from Friday?",
          meta: "1:05 AM",
        },
        {
          from: "out",
          text: "Yes: a valley-view deluxe is available Fri–Sun. Shall I hold it for you?",
          meta: "1:05 AM",
        },
        { from: "in", text: "Yes please, 2 adults", meta: "1:06 AM" },
        {
          from: "out",
          text: "Reserved directly for 2 adults, Fri–Sun. Payment link and confirmation sent. Anything we can arrange before you arrive?",
          meta: "1:06 AM",
        },
      ],
    },
    faq: [
      {
        q: "Does enVoy connect to our PMS and channel manager?",
        a: "Yes. Direct bookings, in-stay requests and follow-ups are synced with the PMS and channel manager you already run.",
      },
      {
        q: "Can guests book directly on WhatsApp?",
        a: "Yes. enVoy checks live availability and books in the chat directly, with no commission.",
      },
    ],
    closing: "Every guest meets the same prepared host.",
    cta: "Write to us",
  },
  {
    slug: "realestate",
    name: "Real Estate",
    short: "Real Estate",
    segments: "Developers · Channel partners",
    cardLine: "Book Saturday visits from midnight enquiries.",
    headline: "Every property enquiry is the beginning of a journey.",
    heroLead:
      "Book Saturday visits from midnight enquiries. A 1am enquiry is still warm at 9am if it's answered. enVoy qualifies, sends floor plans, books the visit.",
    title: "Real Estate Lead Qualification on WhatsApp | enVoy",
    description:
      "enVoy answers property enquiries instantly, gathers budget and timeline, sends floor plans and pricing, and books site visits so your team meets ready buyers.",
    problems: [
      "Midnight enquiries that go cold by morning",
      "Sales time spent on unqualified leads",
      "Floor plans and pricing sent late or inconsistently",
      "Site visits not confirmed or reminded",
      "Follow-ups that stop after the first call",
    ],
    solutionTitle: "The whole pipeline moves with the buyer.",
    solution:
      "Budget, timeline and configuration gathered in conversation: your team only meets buyers who are ready.",
    moments: [
      {
        title: "Asks: Qualified",
        body: "Budget and timeline gathered before your team spends a minute.",
      },
      { title: "Interested: Equipped", body: "The right floor plan and pricing, instantly." },
      { title: "Ready: Visiting", body: "Site visits booked, confirmed and reminded." },
    ],
    stageLabel: "The buyer journey",
    stages: [
      { title: "Property enquiry", body: "Every enquiry answered instantly, even at 1am." },
      {
        title: "Lead qualification",
        body: "Budget, timeline and configuration gathered in conversation.",
      },
      {
        title: "Property information",
        body: "The right floor plan, pricing and availability, sent instantly.",
      },
      { title: "Site visit scheduling", body: "Site visits booked, confirmed and reminded." },
      { title: "Follow-up", body: "Buyers followed up until they decide." },
      {
        title: "Documentation coordination",
        body: "Documents and home loan questions handled in the same thread.",
      },
      {
        title: "Customer engagement",
        body: "Channel partners and buyers kept in one conversation.",
      },
    ],
    tasks: [
      "Enquiries",
      "Site visits",
      "Budget match",
      "Floor plans",
      "Pricing",
      "Availability",
      "Documents",
      "Home loans",
      "Channel partners",
    ],
    chat: {
      contact: "Skyline Developers",
      messages: [
        {
          from: "in",
          text: "Hi, interested in a 3BHK at your Whitefield project",
          meta: "12:48 AM",
        },
        {
          from: "out",
          text: "Great choice. What budget range and move-in timeline are you considering?",
          meta: "12:48 AM",
        },
        { from: "in", text: "Around 1.5 Cr, within a year", meta: "12:50 AM" },
        {
          from: "out",
          text: "Here are the 3BHK floor plans and pricing in that range. Would you like a site visit this Saturday at 11:00?",
          meta: "12:50 AM",
        },
      ],
    },
    faq: [
      {
        q: "How does enVoy qualify property leads?",
        a: "enVoy gathers budget, timeline and configuration in conversation, so your team only meets buyers who are ready.",
      },
      {
        q: "Can enVoy book site visits?",
        a: "Yes. Site visits are booked, confirmed and reminded in the same WhatsApp conversation.",
      },
    ],
    closing: "Every buyer meets the same prepared developer.",
    cta: "Write to us",
  },
  {
    slug: "others",
    name: "Other Industries",
    short: "Other Businesses",
    segments: "D2C · Services · Inbound",
    cardLine: "Real enquiries, ready for your team.",
    headline: "Every business has a journey worth connecting.",
    heroLead:
      "If customers message you, enVoy is for you. It sorts real enquiries from noise and follows up until they decide.",
    title: "WhatsApp AI for Inbound Businesses | enVoy",
    description:
      "For D2C, services and inbound businesses: enVoy unifies WhatsApp, email, chatbot and app into one inbox, sorts enquiries, and follows up until customers decide.",
    problems: [
      "Real customers buried in noise",
      "Quotes and orders that stall",
      "Payments not chased",
      "Messages split across channels",
      "Leads that go cold",
    ],
    solutionTitle: "The whole business moves with the customer.",
    solution:
      "WhatsApp, email, chatbot and app unified into one inbox: every customer handled the same prepared way.",
    moments: [
      { title: "Asks: Sorted", body: "Real customers separated from noise." },
      { title: "Interested: Handled", body: "Quotes, orders and payments moved forward." },
      { title: "Quiet: Followed up", body: "Follow-up until they decide. Nothing goes cold." },
    ],
    stageLabel: "The customer journey",
    stages: [
      { title: "Enquiry", body: "Every message answered, on the channel the customer chose." },
      { title: "Qualifying", body: "Real customers separated from noise." },
      {
        title: "Quotes & orders",
        body: "Quotes, orders and payments moved forward in the conversation.",
      },
      { title: "Scheduling & reminders", body: "Calls and deliveries scheduled and reminded." },
      { title: "Support", body: "Questions handled with escalation to your team when needed." },
      { title: "Follow-up & reviews", body: "Follow-up until they decide: nothing goes cold." },
    ],
    tasks: [
      "Enquiries",
      "Qualifying",
      "Quotes",
      "Orders",
      "Payments",
      "Scheduling",
      "Reminders",
      "Support",
      "Reviews",
    ],
    chat: {
      contact: "Your Business",
      messages: [
        { from: "in", text: "Hi, can I get a quote for 200 units?", meta: "9:41 PM" },
        {
          from: "out",
          text: "Happy to help. Which variant and delivery city should I quote for?",
          meta: "9:41 PM",
        },
        { from: "in", text: "Standard, Bengaluru", meta: "9:42 PM" },
        {
          from: "out",
          text: "Quote sent for 200 standard units to Bengaluru. I've shared it with our team too, reply here to confirm the order.",
          meta: "9:42 PM",
        },
      ],
    },
    faq: [
      {
        q: "Which businesses is enVoy for?",
        a: "If customers message you, enVoy is for you: D2C, services and any inbound business with a meaningful ticket size.",
      },
      {
        q: "Which channels does enVoy unify?",
        a: "WhatsApp, email, chatbot and app: unified into one inbox.",
      },
    ],
    closing: "Every customer meets the same prepared company.",
    cta: "Write to us",
  },
];

export const industryBySlug = (slug: Industry["slug"]) => INDUSTRIES.find((i) => i.slug === slug)!;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  modified?: string;
  summary: string;
  tags: string[];
  body: { type: "p" | "h2" | "quote" | "li"; text: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "why-every-enquiry-deserves-the-same-answer",
    title: "Why every enquiry deserves the same answer",
    date: "2026-11-01",
    modified: "2026-11-15",
    summary:
      "The customer who messages at 11:52 PM should meet the same prepared business as the one who walks in at 10 AM. enVoy delivers consistent standards 24/7.",
    tags: ["WhatsApp", "Standards"],
    body: [
      {
        type: "p",
        text: "The customer who messages at 11:52 PM should meet the same prepared business as the one who walks in at 10 AM.",
      },
      { type: "h2", text: "The gap" },
      {
        type: "p",
        text: "Most businesses answer well when someone is at the desk. The question is what happens the rest of the time: late evening, Sunday, the fifteen minutes when three people message at once.",
      },
      { type: "h2", text: "What enVoy does" },
      {
        type: "p",
        text: "enVoy absorbs your prices, policies and live availability, and answers every message the way your best person would: on WhatsApp, in the customer's language, with the booking written back into your systems.",
      },
      { type: "quote", text: "One standard. Every customer. Every hour." },
      { type: "h2", text: "In practice" },
      {
        type: "li",
        text: "A patient asks for a Saturday slot at midnight; by 12:01 it is booked and confirmed.",
      },
      { type: "li", text: "A parent asks about fees in Kannada; the reply comes back in Kannada." },
      {
        type: "li",
        text: "A guest wants to change a check-in; the calendar updates and the front desk already knows.",
      },
      { type: "p", text: "That is the whole idea. Tell less, deliver more." },
    ] as { type: "p" | "h2" | "quote" | "li"; text: string }[],
  },
  {
    slug: "reduce-opd-no-shows-whatsapp-hospitals",
    title: "Reducing OPD No-Shows with WhatsApp Reminders",
    date: "2026-11-15",
    modified: "2026-11-15",
    summary:
      "Hospitals reduce missed appointments by automating bilingual WhatsApp reminders, enabling one-tap rescheduling, and synchronizing slots with their live HMS.",
    tags: ["Healthcare", "WhatsApp", "Operations"],
    body: [
      {
        type: "p",
        text: "Outpatient departments in hospitals across India manage high volumes of patient consultations every morning. When patients miss scheduled visits without advance notice, consulting doctors lose valuable clinical time while other patients wait weeks for open slots. Reducing unattended consultations requires reaching patients through channels they check regularly and making schedule adjustments effortless.",
      },
      {
        type: "h2",
        text: "Why do outpatient appointments go unattended in Indian hospitals?",
      },
      {
        type: "p",
        text: "Patients miss hospital outpatient visits primarily due to scheduling friction, forgotten booking times, and difficulty contacting reception during busy hours. When confirmation relies on phone calls or SMS messages that patients overlook, appointments slip through. Unattended slots disrupt doctor schedules and leave clinic resources underutilized throughout the day.",
      },
      {
        type: "p",
        text: "Traditional reminder workflows struggle because front desk personnel cannot manually call hundreds of patients each afternoon. Automated telephone calls often go unanswered when patients are at work or commuting. Standard text messages frequently land in promotional filters without giving patients a way to reply. When patients encounter unexpected delays or family obligations, reaching a hospital telephone line to reschedule requires enduring long hold times, leading many to simply abandon the consultation.",
      },
      {
        type: "p",
        text: "This breakdown impacts both healthcare delivery and patient outcomes. Chronic care patients who miss follow-up consultations experience interruptions in prescription reviews and diagnostic monitoring. Meanwhile, hospital clinics bear the administrative expense of unutilized rooms, idle diagnostic equipment, and disrupted clinical workflows that could easily be avoided through responsive, bi-directional communication.",
      },
      {
        type: "h2",
        text: "How does automated WhatsApp communication deliver timely reminders?",
      },
      {
        type: "p",
        text: "Automated reminders reach patients on their preferred messaging application at scheduled intervals before their consultation. Messages deliver essential preparation details, doctor specialty information, and hospital entrance instructions directly to the patient phone. Because notifications arrive in active messaging threads, patients receive prompt alerts without downloading separate hospital applications or monitoring email.",
      },
      {
        type: "p",
        text: "A well-structured reminder sequence sends a confirmation immediately upon booking, followed by an advance notification the evening prior to consultation and a final reminder on the morning of the visit. For diagnostic procedures or consultations requiring specific preparation, reminders include dietary instructions, fasting guidelines, and documents to bring. Patients review these details comfortably on their phones, arriving prepared and on time.",
      },
      {
        type: "p",
        text: "Furthermore, messages can include precise directions to the relevant hospital block, registration counter, and parking facilities. Removing pre-visit ambiguity reduces patient anxiety, streamlines morning clinic queues, and ensures clinical consultations proceed according to schedule.",
      },
      {
        type: "h2",
        text: "Can patients reschedule or cancel consultations directly in chat?",
      },
      {
        type: "p",
        text: "Patients can confirm, reschedule, or cancel upcoming consultations by sending a brief reply in their WhatsApp conversation. The intelligent system interprets natural language responses, checks doctor availability calendars in real time, and offers alternative consultation hours immediately. Freed appointment slots return to the outpatient pool without manual reception coordinator intervention.",
      },
      {
        type: "p",
        text: "When rescheduling is as simple as sending a quick message, patients proactively adjust their visit rather than failing to arrive. The conversational interface understands requests across languages and offers the next available appointments with the same consulting specialist. If a patient cancels, the open slot is instantly registered in the clinic roster, allowing another patient to book without delay.",
      },
      {
        type: "p",
        text: "This responsive capability turns potential missed appointments into successful future consultations. Receptionists avoid juggling phone lines, while patients appreciate the courtesy of an instant, frictionless adjustment process that respects their daily schedule.",
      },
      {
        type: "h2",
        text: "How do WhatsApp reminders integrate with hospital management systems?",
      },
      {
        type: "p",
        text: "The communication layer connects directly to hospital management systems and electronic medical records through secure database connectors and interfaces. It reads clinical rosters to trigger contextual reminders and writes confirmed rescheduling changes back to the hospital database instantly. Patient records, cancellation reasons, and attendance confirmations remain synchronized across all clinical departments.",
      },
      {
        type: "p",
        text: "Operating on top of existing hospital infrastructure ensures zero operational disruption for clinical staff. Doctors and reception teams continue working within their familiar hospital software, viewing updated appointment rosters and patient confirmation statuses in real time. Automated synchronization bridges the gap between hospital databases and patient messaging without creating data silos or administrative double entry.",
      },
      {
        type: "p",
        text: "Automating patient reminders over messaging channels creates a dependable outpatient consultation workflow. Hospitals maintain full doctor consultation schedules, reduce waiting room overcrowding, and provide patients with responsive, courteous guidance from initial booking through arrival.",
      },
    ],
  },
  {
    slug: "whatsapp-automation-guide-hospitals-india",
    title: "Hospital WhatsApp Automation Guide",
    date: "2026-11-15",
    modified: "2026-11-15",
    summary:
      "Key requirements for hospital WhatsApp automation: live HMS integration, warm human escalation, regional language support, and secure data architecture.",
    tags: ["Healthcare", "HMS", "Automation"],
    body: [
      {
        type: "p",
        text: "Healthcare institutions across India are adopting WhatsApp as an operational communication channel to connect with patients throughout their medical journey. Because patient care demands accuracy, responsiveness, and trust, hospitals must evaluate automation platforms against rigorous operational and architectural criteria rather than treating messaging as a simple marketing utility.",
      },
      {
        type: "h2",
        text: "Why is live HMS integration essential for hospital messaging?",
      },
      {
        type: "p",
        text: "Live integration with hospital management systems ensures patient conversations reflect real clinical capacity rather than static assumptions. An automated messaging interface must query active doctor schedules, room availability, and outpatient queues to prevent double bookings. Writing confirmed appointments and patient notes back into hospital records maintains unified administrative and clinical continuity.",
      },
      {
        type: "p",
        text: "A standalone chatbot that merely collects patient details in an isolated inbox creates administrative delays and frustrating scheduling conflicts. True operational automation connects directly with the hospital system of record, checking consulting rosters in real time and confirming bookings immediately. When consultation notes, diagnostic bookings, and bill receipts flow directly between messaging and hospital databases, staff remain informed without manual data entry.",
      },
      {
        type: "p",
        text: "This integration must be bi-directional. When a doctor modifies their clinic hours or steps into surgery, the communication system immediately reflects that change, preventing patients from booking unavailable slots. By synchronizing directly with hospital calendars, communication remains aligned with clinical operations.",
      },
      {
        type: "h2",
        text: "How should an automated system handle clinical human escalation?",
      },
      {
        type: "p",
        text: "Hospital communication requires immediate, reliable escalation to duty nursing staff or appointment coordinators whenever inquiries exceed automated operational boundaries. The system must hand over conversations with complete conversational context, patient history, and identified urgency already open. Coordinators review full message logs without forcing patients to repeat symptoms or administrative questions.",
      },
      {
        type: "p",
        text: "No automated system should attempt to handle complex patient situations or urgent medical requests in isolation. When a patient describes acute discomfort or requires specialized coordination, the platform routes the dialogue to the appropriate departmental console. Attending coordinators receive patient contact information, consultation history, and recent interaction summaries, ensuring swift, compassionate, and informed human care.",
      },
      {
        type: "p",
        text: "The handover must be seamless for the patient. Rather than giving the patient a different phone number to call, the staff member joins the ongoing conversation directly, providing reassuring assistance while maintaining complete conversational continuity.",
      },
      {
        type: "h2",
        text: "Which language capabilities are critical for Indian healthcare communication?",
      },
      {
        type: "p",
        text: "Hospitals in India serve multilingual patient communities who discuss medical concerns in their mother tongue. Communication systems must support Kannada, Hindi, and English out of the box, with additional Indian languages on request. The engine must switch languages mid-conversation, recognizing patient vocabulary and replying in kind without rigid menu selections.",
      },
      {
        type: "p",
        text: "Patients frequently combine languages when asking about doctor timings, billing procedures, or test reports. A system that forces users to navigate English-only menus creates unnecessary barriers to care. Contextual language understanding interprets colloquial terms and dialect variations, ensuring elderly patients and family members receive clear, empathetic, and culturally appropriate guidance throughout their care journey.",
      },
      {
        type: "p",
        text: "When patients receive guidance in the language they understand best, adherence to pre-visit instructions improves, questions are resolved faster, and overall confidence in the hospital increases.",
      },
      {
        type: "h2",
        text: "What data protection standards must hospital communication uphold?",
      },
      {
        type: "p",
        text: "Healthcare communication involves sensitive patient interactions that require robust technical protection. Systems must maintain security and architecture aligned with enterprise data protection standards. Patient interactions must be protected through encryption in transit and at rest, role-based staff access controls, explicit patient consent mechanisms, and clear institutional ownership of all medical records.",
      },
      {
        type: "p",
        text: "Hospitals must ensure patient records remain confidential and secure at every stage of the communication lifecycle. Communication software should operate strictly as an operational processor, routing appointments, reminders, and reports on behalf of the hospital without claiming ownership of patient data. Role-based permissions prevent unauthorized internal access, keeping clinical and administrative records fully protected.",
      },
      {
        type: "p",
        text: "Selecting the right communication platform allows healthcare institutions to deliver prompt, accessible, and dependable service across outpatient triage, booking, and post-discharge follow-ups while preserving clinical precision and operational integrity.",
      },
    ],
  },
  {
    slug: "ai-communication-system-vs-rule-based-chatbot",
    title: "AI Communication System vs Rule-Based Chatbot",
    date: "2026-11-15",
    modified: "2026-11-15",
    summary:
      "Compare AI communication systems with rule-based chatbots. Learn how contextual language, live database sync, and warm human handoff transform customer service.",
    tags: ["AI", "Architecture", "Standards"],
    body: [
      {
        type: "p",
        text: "Many organizations implement automated customer service tools hoping to answer inquiries promptly and scale operations. However, customers frequently encounter frustrating keyword-matching chatbots that fail to understand natural conversation or execute real tasks. Understanding the fundamental architectural difference between rigid chatbots and true AI communication systems is critical for enterprise leaders.",
      },
      {
        type: "h2",
        text: "What distinguishes an AI communication system from a rule-based chatbot?",
      },
      {
        type: "p",
        text: "A rule-based chatbot navigates predetermined decision trees and keyword triggers, breaking when customer requests deviate from scripted buttons. An AI communication system understands natural language intent, reads customer urgency and context, queries live business databases in real time, and coordinates operational actions like bookings and records updates across channels.",
      },
      {
        type: "p",
        text: "Rule-based bots resemble automated phone trees transplanted into text windows. If a customer types a sentence slightly different from the anticipated phrasing, the bot responds with confusion or repeats generic menu options. An AI communication system is trained on company offerings, policies, pricing, and operating procedures, allowing it to interpret nuanced requests and converse with genuine understanding.",
      },
      {
        type: "p",
        text: "Because the underlying technology models language context rather than rigid paths, it can grasp complex multi-intent sentences. Customers feel heard rather than constrained by scripted choices.",
      },
      {
        type: "h2",
        text: "How do conversational systems handle unstructured customer inquiries?",
      },
      {
        type: "p",
        text: "Customers rarely frame questions in rigid keywords or neat menu options when seeking assistance. An intelligent communication system interprets unstructured messages, typos, and mixed languages to extract core intent. It cross-references inquiries with organizational knowledge, service catalogs, and live availability to provide helpful, conversational answers tailored to specific requests.",
      },
      {
        type: "p",
        text: "When a customer asks a multi-part question regarding appointment timings, specialist availability, and location directions in a single paragraph, traditional chatbots fail. An intelligent communication system identifies each distinct component of the query, retrieves verified information from connected systems, and composes an organized, direct response that completely addresses the customer's needs.",
      },
      {
        type: "p",
        text: "This contextual flexibility extends across conversation turns. If a customer clarifies a previous statement or changes their preferred consultation date mid-chat, the system maintains conversational memory, updating the proposed plan without restarting the entire conversation from the beginning.",
      },
      {
        type: "h2",
        text: "Why is live database synchronization critical for customer conversations?",
      },
      {
        type: "p",
        text: "Rule-based chatbots often function as disconnected forms that collect contact information and stall until human review. An operational communication system connects directly to enterprise databases, room inventories, and staff calendars. It verifies current availability, completes reservations instantly, and writes transaction summaries back to systems of record without manual intermediary steps.",
      },
      {
        type: "p",
        text: "True operational communication requires closing loops rather than merely capturing leads. When a patient books an appointment or a hotel guest reserves a room, the communication engine queries live availability, locks the selected inventory, issues verified confirmations, and updates team calendars immediately. Customers receive definitive outcomes rather than vague promises of future follow-up.",
      },
      {
        type: "p",
        text: "Writing confirmed details directly back to customer relationship systems guarantees that front desk coordinators, service staff, and sales teams see identical, up-to-date information across all channels.",
      },
      {
        type: "h2",
        text: "When and how does an intelligent communication system escalate to staff?",
      },
      {
        type: "p",
        text: "Intelligent systems detect conversational complexity, frustration, or specialized requirements that warrant personal attention. Instead of dropping calls or looping repeatedly, the platform transfers the thread to designated team members seamlessly. Staff receive the entire interaction history, identified customer context, and summarized intent, enabling warm handoffs without customer frustration.",
      },
      {
        type: "p",
        text: "Effective automation respects human expertise rather than attempting to replace it entirely. When a conversation requires nuanced judgment, high-touch sales negotiation, or specialized clinical attention, the system immediately routes the active dialogue to staff consoles. Relationship managers step into the conversation fully informed, delivering exceptional customer experiences.",
      },
      {
        type: "p",
        text: "Moving from rigid decision trees to intelligent communication systems elevates enterprise service standards. Businesses provide dependable, round-the-clock responsiveness while maintaining personal warmth and operational rigor across every customer touchpoint.",
      },
    ],
  },
];

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
  robots?: string;
}) {
  const url = `${SITE.domain}${opts.path}`;
  const imageAlt = "enVoy by weYou X - WhatsApp AI Communication Platform";
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: `${SITE.domain}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: `${SITE.domain}/og-image.png` },
      { name: "twitter:image:alt", content: imageAlt },
      {
        name: "robots",
        content:
          opts.robots ??
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.domain}${it.path}`,
    })),
  });
}

export function faqLd(faq: { q: string; a: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}
