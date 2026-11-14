// Real business facts carried over from the original weyouenvoy.com site.
export const SITE = {
  name: "weYou enVoy",
  domain: "https://weyouenvoy.com",
  parent: "WeYouX",
  parentUrl: "https://weyoux.com",
  email: "sales@weyoux.com",
  privacyEmail: "privacy@weyoux.com",
  corporateEmail: "corporate@weyoux.com",
  whatsapp: "+91 90369 92826",
  whatsappLink: "https://wa.me/919036992826",
  location: "India",
  family: [
    { name: "WeYouX", url: "https://weyoux.com" },
    { name: "weYou enVoy", url: "https://weyouenvoy.com" },
    { name: "LegalIndia.ai", url: "https://legalindia.ai" },
    { name: "WeYou World", url: "https://weyouworld.com" },
  ],
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
    a: "7 days from signup. We train enVoy on your prices, common questions, and tone, then connect it to your WhatsApp number, your team's calendars, and your records.",
  },
  {
    q: "Which industries is enVoy built for?",
    a: "Six right now: medical, schools & colleges, spas & wellness, real estate, resorts & hotels, and any inbound business with a meaningful ticket size.",
  },
  {
    q: "What languages does enVoy speak?",
    a: "Any written language: Kannada, Hindi and English out of the box. enVoy switches language mid-chat, reading what the customer typed and replying in kind.",
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
      "enVoy handles every guest message from first enquiry to post-stay thank-you: direct bookings, in-stay requests and follow-ups, synced with your PMS and channel manager.",
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
      "enVoy answers property enquiries instantly, gathers budget and timeline, sends floor plans and pricing, and books site visits so your team meets buyers who are ready.",
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
      "For D2C, services and any inbound business: enVoy unifies WhatsApp, email, chatbot and app into one inbox, sorts real enquiries and follows up until customers decide.",
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

export const POSTS = [
  {
    slug: "why-every-enquiry-deserves-the-same-answer",
    title: "Why every enquiry deserves the same answer",
    date: "2026-11-01",
    summary:
      "The customer who messages at 11:52 PM should meet the same prepared business as the one who walks in at 10 AM.",
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
];

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const url = `${SITE.domain}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${SITE.domain}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: `${SITE.domain}/og-image.png` },
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
