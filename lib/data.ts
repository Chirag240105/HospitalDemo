export type DepartmentCategory = "Surgical" | "Medical" | "Diagnostic" | "Women's Health";

export type Department = {
  name: string;
  category: DepartmentCategory;
  summary: string;
  doctors: number;
  beds: number;
  equipment: string[];
  icon: string;
};

export type Doctor = {
  name: string;
  degree: string;
  specialty: string;
  language: string[];
  availability: "Today" | "Tomorrow" | "This Week";
  gender: "Female" | "Male";
  experience: number;
  rating: number;
  image: string;
  bio: string;
  education: string[];
  publications: string[];
  reviews: string[];
};

export type Service = {
  title: string;
  copy: string;
  image: string;
  icon: string;
  stats: string[];
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getDepartmentBySlug(slug: string) {
  return departments.find((department) => slugify(department.name) === slug);
}

export const hospitalStats = [
  { label: "Surgeries", value: 10000, suffix: "+" },
  { label: "Doctors", value: 500, suffix: "+" },
  { label: "Years", value: 25, suffix: "" },
  { label: "Success Rate", value: 98.7, suffix: "%" },
];

export const departments: Department[] = [
  { name: "Cardiology", category: "Medical", summary: "Heart failure, electrophysiology, interventional cardiology, and preventive cardiac care.", doctors: 42, beds: 120, equipment: ["Cath labs", "ECMO", "3T cardiac MRI"], icon: "HeartPulse" },
  { name: "Neurology", category: "Medical", summary: "Stroke, epilepsy, movement disorders, neurocritical care, and memory clinics.", doctors: 31, beds: 84, equipment: ["Neuro ICU", "EEG lab", "Biplane DSA"], icon: "Brain" },
  { name: "Oncology", category: "Medical", summary: "Integrated medical, surgical, radiation, and precision oncology programs.", doctors: 38, beds: 105, equipment: ["LINAC", "PET-CT", "Day chemo suites"], icon: "Microscope" },
  { name: "Orthopedics", category: "Surgical", summary: "Joint replacement, sports medicine, spine surgery, trauma, and limb reconstruction.", doctors: 29, beds: 92, equipment: ["Robotic arm", "Navigation OT", "Gait lab"], icon: "Bone" },
  { name: "Pediatrics", category: "Medical", summary: "Child health, pediatric ICU, neonatology, immunization, and adolescent medicine.", doctors: 36, beds: 110, equipment: ["PICU", "NICU", "Pediatric endoscopy"], icon: "Baby" },
  { name: "IVF & Fertility", category: "Women's Health", summary: "IVF, ICSI, fertility preservation, high-risk obstetrics, and genetic counselling.", doctors: 18, beds: 44, equipment: ["Embryology lab", "Cryobank", "Fetal medicine unit"], icon: "Sparkles" },
  { name: "Robotic Surgery", category: "Surgical", summary: "Minimally invasive robotic programs across urology, oncology, GI, and gynecology.", doctors: 22, beds: 58, equipment: ["Da Vinci suite", "4K laparoscopy", "Hybrid OT"], icon: "Bot" },
  { name: "Emergency Medicine", category: "Medical", summary: "24/7 trauma, cardiac, stroke, and critical emergency response pathways.", doctors: 64, beds: 76, equipment: ["Trauma bays", "Rapid CT", "Ambulance command"], icon: "Ambulance" },
  { name: "Radiology", category: "Diagnostic", summary: "Advanced imaging with subspecialty reporting for rapid treatment decisions.", doctors: 21, beds: 20, equipment: ["3T MRI", "256-slice CT", "Digital mammography"], icon: "ScanLine" },
  { name: "Pathology", category: "Diagnostic", summary: "NABL-aligned diagnostics, molecular pathology, histopathology, and genomics.", doctors: 19, beds: 12, equipment: ["Molecular lab", "Flow cytometry", "Biochemistry automation"], icon: "TestTube2" },
  { name: "Nephrology", category: "Medical", summary: "Kidney disease, dialysis, transplant medicine, and hypertension clinics.", doctors: 20, beds: 66, equipment: ["Dialysis stations", "CRRT", "Transplant ICU"], icon: "ShieldCheck" },
  { name: "Gastroenterology", category: "Medical", summary: "Digestive disease, hepatology, advanced endoscopy, and liver care.", doctors: 24, beds: 70, equipment: ["ERCP suite", "Endoscopic ultrasound", "FibroScan"], icon: "Stethoscope" },
  { name: "Pulmonology", category: "Medical", summary: "Respiratory medicine, sleep labs, interventional pulmonology, and asthma care.", doctors: 17, beds: 62, equipment: ["Bronchoscopy", "Sleep lab", "PFT lab"], icon: "Lungs" },
  { name: "Ophthalmology", category: "Surgical", summary: "Cataract, retina, cornea, glaucoma, pediatric eye care, and LASIK.", doctors: 16, beds: 34, equipment: ["OCT", "Phaco systems", "Retina lasers"], icon: "Eye" },
  { name: "Maternity", category: "Women's Health", summary: "High-risk pregnancy, fetal medicine, birthing suites, and lactation support.", doctors: 33, beds: 96, equipment: ["LDR suites", "Fetal monitors", "NICU bridge"], icon: "HeartHandshake" },
  { name: "Urology", category: "Surgical", summary: "Stone disease, prostate care, uro-oncology, reconstructive and robotic urology.", doctors: 20, beds: 52, equipment: ["Laser lithotripsy", "Urodynamics", "Robotic console"], icon: "Activity" },
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Aarya Menon",
    degree: "MD, DM Cardiology",
    specialty: "Cardiology",
    language: ["English", "Hindi", "Malayalam"],
    availability: "Today",
    gender: "Female",
    experience: 22,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80",
    bio: "Interventional cardiologist leading complex angioplasty and heart failure programs.",
    education: ["AIIMS New Delhi", "Fellowship in Structural Heart, Singapore"],
    publications: ["42 indexed papers", "Editor, Indian Heart Journal supplement"],
    reviews: ["Explained every risk clearly.", "Calm, precise, and deeply reassuring."],
  },
  {
    name: "Dr. Rohan Kapoor",
    degree: "MS, MCh Neurosurgery",
    specialty: "Neurology",
    language: ["English", "Hindi", "Punjabi"],
    availability: "Tomorrow",
    gender: "Male",
    experience: 19,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=80",
    bio: "Neuro specialist focused on stroke intervention, epilepsy surgery, and neurocritical care.",
    education: ["PGIMER Chandigarh", "Stroke Fellowship, Melbourne"],
    publications: ["31 indexed papers", "National stroke pathway contributor"],
    reviews: ["The stroke team moved incredibly fast.", "His confidence helped our family breathe."],
  },
  {
    name: "Dr. Zoya Rahman",
    degree: "MD, DM Medical Oncology",
    specialty: "Oncology",
    language: ["English", "Hindi", "Urdu"],
    availability: "Today",
    gender: "Female",
    experience: 17,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80",
    bio: "Precision oncology consultant building personalized protocols for solid tumors.",
    education: ["Tata Memorial Centre", "ESMO Clinical Fellowship"],
    publications: ["26 cancer genomics studies", "Speaker at ASCO Asia"],
    reviews: ["She made treatment feel manageable.", "Every scan and number was explained."],
  },
  {
    name: "Dr. Kabir Sethi",
    degree: "MS Orthopedics",
    specialty: "Orthopedics",
    language: ["English", "Hindi"],
    availability: "This Week",
    gender: "Male",
    experience: 21,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=700&q=80",
    bio: "Joint replacement and sports injury surgeon with robotic knee replacement expertise.",
    education: ["CMC Vellore", "Arthroplasty Fellowship, Seoul"],
    publications: ["18 arthroplasty papers", "Robotic knee outcomes registry"],
    reviews: ["Walking pain-free after years.", "The rehab plan was beautifully structured."],
  },
  {
    name: "Dr. Ishita Rao",
    degree: "MD Pediatrics",
    specialty: "Pediatrics",
    language: ["English", "Hindi", "Tamil"],
    availability: "Today",
    gender: "Female",
    experience: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=700&q=80",
    bio: "Pediatric intensivist known for family-centered PICU and neonatal transition care.",
    education: ["KEM Mumbai", "Pediatric Critical Care Fellowship"],
    publications: ["14 pediatric ICU papers", "National sepsis protocol panel"],
    reviews: ["Gentle with our child and clear with us.", "The NICU updates were humane."],
  },
  {
    name: "Dr. Nikhil Varma",
    degree: "MCh Urology",
    specialty: "Robotic Surgery",
    language: ["English", "Hindi", "Marathi"],
    availability: "Tomorrow",
    gender: "Male",
    experience: 18,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80",
    bio: "Robotic uro-oncology surgeon with a focus on nerve-sparing cancer surgery.",
    education: ["SGPGI Lucknow", "Robotic Surgery Fellowship, France"],
    publications: ["22 robotic surgery papers", "Uro-oncology chapter author"],
    reviews: ["Tiny scars, fast recovery.", "The surgical briefing was exceptional."],
  },
];

export const services: Service[] = [
  {
    title: "Robotic Surgery",
    copy: "High-definition 3D visualization and wristed instruments for precise, minimally invasive care.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=1200&q=80",
    icon: "Bot",
    stats: ["6 robotic suites", "4,200+ procedures", "48 hr median discharge"],
  },
  {
    title: "Advanced Diagnostics",
    copy: "Integrated radiology, pathology, genomics, and AI-assisted reporting under one clinical roof.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    icon: "ScanLine",
    stats: ["256-slice CT", "3T MRI", "2 hr critical reports"],
  },
  {
    title: "ICU & Critical Care",
    copy: "Protocol-led intensive care with senior intensivists, organ support, and rapid response teams.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80",
    icon: "Activity",
    stats: ["180 ICU beds", "24/7 intensivists", "ECMO ready"],
  },
  {
    title: "Organ Transplant",
    copy: "End-to-end transplant programs for kidney, liver, heart, lung, and bone marrow care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    icon: "HeartHandshake",
    stats: ["5 transplant programs", "Dedicated ICU", "Immunology lab"],
  },
  {
    title: "Cancer Care",
    copy: "Tumor boards, radiation oncology, chemotherapy suites, surgery, and survivorship clinics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    icon: "Microscope",
    stats: ["Weekly tumor boards", "PET-CT", "Precision panels"],
  },
  {
    title: "Rehabilitation",
    copy: "Physio, neuro-rehab, cardiac rehab, speech therapy, pain care, and return-to-life programs.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    icon: "Dumbbell",
    stats: ["40 therapy bays", "Gait lab", "Home-care bridge"],
  },
];

export const testimonials = [
  { name: "Ananya Sharma", treatment: "Cardiac Bypass", quote: "The team made a frightening surgery feel clear, organized, and deeply compassionate.", rating: 5 },
  { name: "Ritwik Sen", treatment: "Robotic Prostate Surgery", quote: "I was home faster than expected, with every question answered before I could ask.", rating: 5 },
  { name: "Meera Iyer", treatment: "High-risk Pregnancy", quote: "The NICU, obstetrics, and counselling teams worked like one calm, brilliant unit.", rating: 5 },
];

export const blogs = [
  { title: "What AI diagnostics can and cannot do for patients", tag: "Technology", readTime: "5 min", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80" },
  { title: "Six heart symptoms that deserve same-day attention", tag: "Cardiology", readTime: "4 min", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80" },
  { title: "Recovering well after robotic surgery", tag: "Surgery", readTime: "6 min", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=80" },
];

export const timeline = [
  { year: "1999", title: "Founded", copy: "Opened as a tertiary care hospital with 300 beds and 18 specialties." },
  { year: "2005", title: "First Robotic Surgery", copy: "Launched one of the region's earliest robotic surgery programs." },
  { year: "2015", title: "ISO Certified", copy: "Expanded quality systems across diagnostics, ICUs, and surgical services." },
  { year: "2024", title: "AI Diagnostics", copy: "Introduced AI-assisted imaging triage and genomic oncology boards." },
];

export const leaders = [
  { name: "Priya Narayanan", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80" },
  { name: "Dr. Sameer Malhotra", role: "Medical Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80" },
  { name: "Dr. Leena Shah", role: "Chief Medical Officer", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80" },
];
