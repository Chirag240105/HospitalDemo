// ─── Specialty Detail Data ────────────────────────────────────────────────────
// Each entry maps to /specialties/[slug]

export interface SymptomItem {
  label: string;
  detail: string;
}

export interface Procedure {
  name: string;
  desc: string;
}

export interface Condition {
  name: string;
  desc: string;
}

export interface KeyFact {
  value: string;
  label: string;
}

export interface SpecialtyDetail {
  slug:          string;
  name:          string;
  tagline:       string;
  color:         string;
  bgColor:       string;
  eyebrow:       string;
  overview:      string[];          // paragraphs
  training:      string;            // training / qualification info
  keyFacts:      KeyFact[];
  conditions:    Condition[];
  symptoms:      SymptomItem[];
  procedures:    Procedure[];
  whyApex:       string;
}

export const SPECIALTIES: SpecialtyDetail[] = [
  /* ── 1. CARDIOLOGY ───────────────────────────────────────────────────────── */
  {
    slug:    "cardiology",
    name:    "Cardiology",
    tagline: "Advanced Heart Care & Cardiac Surgery",
    color:   "#EF4444",
    bgColor: "#EF44441A",
    eyebrow: "Department of Cardiology",
    overview: [
      "Cardiology is a specialty of internal medicine focused on the diagnosis, treatment and prevention of diseases of the heart and blood vessels. A cardiologist in India completes an MBBS, followed by an MD in Internal Medicine, and then a DM or fellowship in Cardiology — typically 8–10 years of postgraduate training in total.",
      "Heart failure is a clinical syndrome in which the heart cannot pump enough blood to meet the body's needs. It is characterised by typical symptoms such as breathlessness, fatigue and ankle swelling, alongside objective evidence of a structural or functional abnormality of the heart at rest — including cardiomegaly, a third heart sound, cardiac murmurs or echocardiogram abnormalities.",
      "At Apex Hospital, our Cardiology department is equipped with a state-of-the-art catheterization laboratory, 3D echocardiography, electrophysiology lab and a dedicated Cardiac ICU (CICU). Our cardiologists perform over 2,000 interventional procedures annually, including primary PCIs (angioplasty), TAVR, device implantations and complex valve repairs.",
    ],
    training:
      "Our cardiologists hold DM Cardiology or equivalent fellowship credentials from AIIMS, PGI Chandigarh, or internationally recognised institutes. Many hold sub-specialties in interventional cardiology, electrophysiology, heart failure and cardiac imaging.",
    keyFacts: [
      { value: "2,000+",  label: "Cardiac Procedures / Year" },
      { value: "< 90 min", label: "Door-to-Balloon Time" },
      { value: "24/7",    label: "Cath Lab Availability" },
      { value: "98%",     label: "PCI Success Rate" },
    ],
    conditions: [
      { name: "Heart Failure",           desc: "A syndrome characterised by reduced cardiac output causing breathlessness, fatigue, raised JVP and peripheral oedema. Managed with guideline-directed medical therapy, device therapy and occasionally transplant." },
      { name: "Coronary Artery Disease", desc: "Narrowing of coronary arteries by atherosclerotic plaques causing angina, acute MI and sudden cardiac death. Treated with lifestyle modification, pharmacotherapy, angioplasty (PCI) or bypass surgery (CABG)." },
      { name: "Arrhythmias",             desc: "Abnormal heart rhythms including atrial fibrillation, SVT, VT and heart block. Managed with medications, cardioversion, catheter ablation and implantable devices (pacemakers, ICDs)." },
      { name: "Valvular Heart Disease",  desc: "Disease of heart valves including aortic stenosis, mitral regurgitation and rheumatic heart disease. Treated with medical therapy, balloon valvotomy, surgical valve repair/replacement or TAVR." },
      { name: "Hypertensive Heart Disease", desc: "Cardiac complications of long-standing hypertension including LV hypertrophy and diastolic dysfunction. Controlled with antihypertensives and lifestyle changes." },
      { name: "Congenital Heart Disease", desc: "Structural abnormalities present at birth such as ASD, VSD, Tetralogy of Fallot. Corrected with catheter-based or open-heart surgical intervention." },
    ],
    symptoms: [
      { label: "Breathlessness (Dyspnoea)",   detail: "Difficulty breathing on exertion or at rest; orthopnoea (breathlessness on lying flat) is a hallmark of heart failure." },
      { label: "Fatigue & Weakness",           detail: "Persistent tiredness due to reduced cardiac output and poor perfusion of skeletal muscle." },
      { label: "Ankle & Leg Swelling",         detail: "Peripheral oedema from fluid retention caused by elevated venous pressure." },
      { label: "Chest Pain / Tightness",       detail: "Typical anginal chest pain — pressure or squeezing behind the sternum, often radiating to the left arm or jaw." },
      { label: "Palpitations",                 detail: "Awareness of heartbeat, often rapid or irregular — may indicate arrhythmia." },
      { label: "Raised JVP",                   detail: "Elevated jugular venous pressure visible in the neck — a sign of volume overload in heart failure." },
      { label: "Syncope / Dizziness",          detail: "Transient loss of consciousness due to reduced cerebral perfusion from arrhythmia or structural heart disease." },
    ],
    procedures: [
      { name: "Coronary Angiography & PCI",   desc: "Diagnostic and therapeutic catheter procedure to visualise and open blocked coronary arteries using stents." },
      { name: "TAVR",                          desc: "Transcatheter Aortic Valve Replacement — a minimally invasive alternative to open-heart surgery for severe aortic stenosis." },
      { name: "Electrophysiology Study & Ablation", desc: "Mapping and ablation of abnormal electrical circuits causing arrhythmias, including AF ablation." },
      { name: "Pacemaker & ICD Implant",       desc: "Device implantation for bradyarrhythmias (pacemakers) or life-threatening VT/VF (implantable cardioverter-defibrillators)." },
      { name: "2D / 3D Echocardiography",      desc: "High-resolution ultrasound imaging of heart structure and function for diagnosis and monitoring." },
      { name: "Cardiac Rehabilitation",        desc: "Structured exercise and lifestyle programme post-MI or heart surgery to restore function and reduce re-admission." },
    ],
    whyApex:
      "Apex Cardiology holds accreditation from the Cardiological Society of India. Our door-to-balloon time for primary PCI averages 62 minutes — well within the 90-minute benchmark. We operate a fully equipped hybrid cath lab and a dedicated 12-bed CICU with round-the-clock intensivist cover.",
  },

  /* ── 2. ORTHOPEDICS ──────────────────────────────────────────────────────── */
  {
    slug:    "orthopedics",
    name:    "Orthopedics",
    tagline: "Joint Replacement, Spine & Sports Medicine",
    color:   "#00B4A6",
    bgColor: "#00B4A61A",
    eyebrow: "Department of Orthopedic Surgery",
    overview: [
      "Orthopedics (or orthopaedics) is the surgical and medical specialty concerned with the correction of injuries or disorders of the musculoskeletal system — comprising bones, joints, ligaments, tendons, muscles and nerves. An orthopedic surgeon in India completes MS (Orthopaedics) after MBBS, with many pursuing further DNB or fellowship in sub-specialties.",
      "Modern orthopedics blends surgical expertise with biomechanics, rehabilitation science and implant technology to restore function and relieve pain. Minimally invasive techniques, computer-assisted surgery and custom 3D-printed implants have transformed outcomes in joint replacement and spine surgery.",
      "The Apex Orthopedics department performs over 1,500 joint replacements and 800 spine procedures annually. Our surgeons are fellowship-trained in arthroplasty, sports medicine, paediatric orthopaedics and complex trauma reconstruction.",
    ],
    training:
      "Our consultants hold MS Orthopaedics from premier institutions, with additional fellowships from centres like Hospital for Special Surgery (HSS, New York), Royal National Orthopaedic Hospital (London) and AO Trauma international training programmes.",
    keyFacts: [
      { value: "1,500+", label: "Joint Replacements / Year" },
      { value: "< 3 hrs", label: "Average Surgery Duration" },
      { value: "Day 1",   label: "Post-op Walking Protocol" },
      { value: "97%",     label: "Patient Satisfaction Score" },
    ],
    conditions: [
      { name: "Osteoarthritis",           desc: "Degenerative joint disease causing cartilage loss, pain and stiffness — most commonly in knees, hips and spine. Managed conservatively or with joint replacement." },
      { name: "Fractures & Trauma",       desc: "Broken bones from accidents, falls or sports. Treated with casting, internal fixation (ORIF), nailing or external fixators depending on severity." },
      { name: "Spinal Disc Herniation",   desc: "Prolapsed intervertebral disc pressing on nerve roots causing radiculopathy (sciatica). Treated with physiotherapy, injections or microdiscectomy." },
      { name: "Rotator Cuff Tears",       desc: "Tears of the shoulder cuff tendons causing pain and weakness. Managed with physiotherapy, PRP or arthroscopic repair." },
      { name: "ACL / Ligament Injuries",  desc: "Anterior cruciate ligament tears from sports. Reconstructed arthroscopically using hamstring or patellar tendon grafts." },
      { name: "Scoliosis & Spinal Deformity", desc: "Abnormal curvature of the spine. Managed with bracing in children or surgical correction (posterior spinal fusion) in severe cases." },
    ],
    symptoms: [
      { label: "Joint Pain & Stiffness",         detail: "Pain at rest or on movement, morning stiffness — classic features of arthritis." },
      { label: "Swelling Around Joints",          detail: "Fluid accumulation (effusion) in joints due to inflammation or injury." },
      { label: "Reduced Range of Motion",         detail: "Difficulty fully bending or extending a joint due to pain, stiffness or mechanical block." },
      { label: "Back / Neck Pain with Radiation", detail: "Pain radiating down the arm (cervical radiculopathy) or leg (sciatica) due to nerve compression." },
      { label: "Muscle Weakness",                  detail: "Progressive weakness due to nerve compression, muscle tear or disuse atrophy." },
      { label: "Deformity",                        detail: "Visible bowing of limbs, scoliosis or joint deformity from chronic disease or trauma." },
    ],
    procedures: [
      { name: "Total Knee Replacement (TKR)",    desc: "Replacement of the knee joint with a prosthetic implant — most commonly performed for end-stage osteoarthritis." },
      { name: "Total Hip Replacement (THR)",     desc: "Replacement of the hip joint using ceramic, metal or polyethylene components for arthritis or fracture." },
      { name: "Arthroscopic Surgery",            desc: "Keyhole surgery for knee (ACL, meniscus), shoulder (rotator cuff, labrum) and ankle pathologies." },
      { name: "Spinal Fusion & Disc Replacement", desc: "Surgical stabilisation of unstable spine segments or replacement of degenerate discs." },
      { name: "Intramedullary Nailing",          desc: "Metal rod placed inside the bone canal to stabilise long bone fractures of femur, tibia or humerus." },
      { name: "Bone Grafting & Revision Surgery", desc: "Reconstruction of bone loss using autograft, allograft or synthetic substitutes — including revision arthroplasty." },
    ],
    whyApex:
      "Apex uses Mako robotic-arm assisted surgery for knee and hip replacements, improving implant alignment accuracy by 40% compared to conventional techniques. Our rapid-recovery protocol gets 80% of knee replacement patients walking within 4 hours of surgery.",
  },

  /* ── 3. INTERNAL MEDICINE ────────────────────────────────────────────────── */
  {
    slug:    "internal-medicine",
    name:    "Internal Medicine",
    tagline: "Comprehensive Adult Medicine & Complex Diagnoses",
    color:   "#3B82F6",
    bgColor: "#3B82F61A",
    eyebrow: "Department of Internal Medicine",
    overview: [
      "Internal medicine is the medical specialty dealing with the prevention, diagnosis and treatment of adult diseases. Physicians specialising in internal medicine — internists — are trained to manage complex, multi-system illness and serve as the primary diagnosticians for undifferentiated or difficult presentations.",
      "In India, an internist completes MBBS followed by MD in General Medicine, a 3-year postgraduate programme. Many go on to subspecialise in fields such as cardiology, gastroenterology, endocrinology, nephrology or rheumatology with DM or fellowship training.",
      "At Apex, our General Medicine team acts as the hub of inpatient care, managing medical admissions, supervising ICU patients and co-managing complex surgical patients. We handle everything from fever of unknown origin and multi-drug resistant infections to autoimmune diseases and metabolic disorders.",
    ],
    training:
      "Our internists hold MD General Medicine from AIIMS, MAMC, Grant Medical College and equivalent premier institutions. Several hold MRCP (UK/Ireland) or FACP credentials, reflecting international-standard training.",
    keyFacts: [
      { value: "15,000+", label: "Inpatient Admissions / Year" },
      { value: "48 hrs",  label: "Avg. Diagnosis Turnaround" },
      { value: "200+",    label: "Conditions Treated" },
      { value: "24/7",    label: "Senior Physician Cover" },
    ],
    conditions: [
      { name: "Hypertension",            desc: "Chronically elevated blood pressure — a leading risk factor for stroke, MI and renal failure. Managed with lifestyle modification and antihypertensive therapy." },
      { name: "Type 2 Diabetes",         desc: "Metabolic disorder with impaired insulin action causing hyperglycaemia. Managed with diet, oral agents and insulin, with monitoring of end-organ complications." },
      { name: "Pneumonia & Respiratory Infections", desc: "Bacterial, viral or fungal infections of the lung causing fever, cough and breathlessness. Treated with targeted antibiotics and supportive care." },
      { name: "Anaemia",                 desc: "Reduced haemoglobin from iron deficiency, B12/folate deficiency, chronic disease or haematological malignancy. Investigated and corrected appropriately." },
      { name: "Thyroid Disorders",       desc: "Hypothyroidism and hyperthyroidism presenting with fatigue, weight change, palpitations and menstrual disturbance. Managed with hormone replacement or anti-thyroid drugs." },
      { name: "Autoimmune Diseases",     desc: "Conditions such as SLE, rheumatoid arthritis and vasculitis causing multisystem inflammation. Managed with immunosuppressants and close monitoring." },
    ],
    symptoms: [
      { label: "Prolonged Fever",          detail: "Fever lasting > 2 weeks without an obvious cause — requires systematic investigation for infection, malignancy or autoimmune disease." },
      { label: "Unexplained Weight Loss",  detail: "Unintentional loss of > 5% body weight over 6 months — a red-flag symptom requiring cancer and chronic disease workup." },
      { label: "Generalised Fatigue",      detail: "Persistent tiredness not explained by sleep — may indicate anaemia, hypothyroidism, diabetes or depression." },
      { label: "Polyuria / Polydipsia",    detail: "Excessive urination and thirst — hallmarks of uncontrolled diabetes mellitus or diabetes insipidus." },
      { label: "Jaundice",                 detail: "Yellow discolouration of skin and eyes indicating liver, bile duct or haemolytic disease." },
      { label: "Oedema",                   detail: "Swelling from fluid retention due to heart failure, nephrotic syndrome, liver cirrhosis or venous insufficiency." },
    ],
    procedures: [
      { name: "Bone Marrow Aspiration & Biopsy", desc: "Sampling of bone marrow to diagnose leukaemia, lymphoma, aplastic anaemia and myeloma." },
      { name: "Lumbar Puncture",            desc: "CSF sampling for diagnosis of meningitis, encephalitis, subarachnoid haemorrhage and MS." },
      { name: "Pleural & Ascitic Tap",      desc: "Drainage and analysis of fluid from the pleural space or abdomen for diagnostic and therapeutic purposes." },
      { name: "Bronchoscopy",               desc: "Endoscopic examination of the airways for biopsy, lavage and treatment of endobronchial lesions." },
      { name: "Renal Biopsy",               desc: "Percutaneous kidney biopsy for histological diagnosis of glomerulonephritis and other nephropathies." },
      { name: "Therapeutic Apheresis",      desc: "Plasmapheresis and LDL apheresis for autoimmune conditions, TTP, familial hypercholesterolaemia." },
    ],
    whyApex:
      "Our medicine wards operate a consultant-to-patient ratio of 1:6, one of the lowest in Delhi NCR. A dedicated 'Difficult Diagnosis' multidisciplinary panel meets twice weekly to review complex cases, reducing diagnostic delays and improving outcomes.",
  },

  /* ── 4. SURGERY ──────────────────────────────────────────────────────────── */
  {
    slug:    "surgery",
    name:    "Surgery",
    tagline: "Minimally Invasive & Robotic Surgical Excellence",
    color:   "#F97316",
    bgColor: "#F973161A",
    eyebrow: "Department of General & Minimal Access Surgery",
    overview: [
      "General surgery encompasses elective and emergency surgical care of the abdomen, gastrointestinal tract, endocrine glands, breast, skin and soft tissues. A general surgeon in India completes MS (Surgery) after MBBS, with fellowships in laparoscopic/robotic surgery, surgical oncology, bariatric surgery or colorectal surgery available at superspecialty level.",
      "Minimally invasive surgery (MIS) using laparoscopy and robotics has revolutionised outcomes — reducing blood loss, post-operative pain, hospital stay and complication rates compared to open surgery. At Apex, over 85% of elective general surgical procedures are performed laparoscopically.",
      "Our surgical teams operate across seven modular operation theatres equipped with 4K laparoscopic towers, da Vinci Xi robotic platform, C-arm fluoroscopy and integrated anaesthesia workstations.",
    ],
    training:
      "Our surgeons hold MS (Surgery) with fellowships from premier laparoscopic centres including SAGES (USA), EAES (Europe) and leading Indian institutes. Several are faculty trainers for laparoscopic skills workshops.",
    keyFacts: [
      { value: "5,000+", label: "Surgeries Performed / Year" },
      { value: "85%",    label: "Minimally Invasive Rate" },
      { value: "7",      label: "Modular OT Complex" },
      { value: "< 1%",   label: "Surgical Site Infection Rate" },
    ],
    conditions: [
      { name: "Acute Appendicitis",        desc: "Inflammation of the appendix presenting with RIF pain, fever and raised WCC. Treated with laparoscopic appendicectomy." },
      { name: "Gallstones (Cholelithiasis)", desc: "Stones in the gallbladder causing biliary colic, cholecystitis or jaundice. Managed with laparoscopic cholecystectomy." },
      { name: "Hernia",                    desc: "Protrusion of abdominal contents through a weak point — inguinal, umbilical, incisional. Repaired laparoscopically with mesh." },
      { name: "Colorectal Carcinoma",      desc: "Cancer of the colon or rectum. Staged with CT and colonoscopy; managed with laparoscopic or robotic resection ± adjuvant therapy." },
      { name: "Thyroid & Parathyroid Disease", desc: "Goitre, thyroid nodules, hyperparathyroidism. Treated with thyroidectomy or parathyroidectomy via conventional or endoscopic approach." },
      { name: "Breast Disorders",          desc: "Fibroadenoma, breast abscess, breast cancer. Managed with lumpectomy, mastectomy, sentinel node biopsy and oncoplastic techniques." },
    ],
    symptoms: [
      { label: "Acute Abdominal Pain",     detail: "Sudden severe abdominal pain — may indicate appendicitis, bowel obstruction, perforated viscus or pancreatitis." },
      { label: "Groin Lump",               detail: "A swelling in the groin that appears on straining — typical of an inguinal hernia." },
      { label: "Jaundice with RUQ Pain",   detail: "Yellow skin with right upper quadrant pain and fever (Charcot's triad) — suggests cholangitis from gallstones." },
      { label: "Rectal Bleeding",          detail: "Blood from the rectum — may indicate haemorrhoids, polyps or colorectal cancer; requires colonoscopy." },
      { label: "Neck Lump",                detail: "A painless or enlarging neck mass — may be thyroid nodule, lymph node or salivary gland tumour." },
      { label: "Weight Loss with Dysphagia", detail: "Progressive difficulty swallowing with weight loss — a red-flag presentation for oesophageal or gastric malignancy." },
    ],
    procedures: [
      { name: "Laparoscopic Cholecystectomy", desc: "Keyhole removal of the gallbladder through 3–4 small incisions — gold standard for symptomatic gallstones." },
      { name: "Laparoscopic Appendicectomy",  desc: "Removal of the inflamed appendix laparoscopically with same-day discharge for uncomplicated cases." },
      { name: "Robotic Colorectal Resection", desc: "Da Vinci robotic resection of colon or rectum tumours with superior dexterity in the narrow pelvic space." },
      { name: "Laparoscopic Hernia Repair (TEP/TAPP)", desc: "Totally extraperitoneal or transabdominal preperitoneal mesh repair of inguinal hernias — quick recovery, lower recurrence." },
      { name: "Bariatric Surgery (Sleeve / Bypass)", desc: "Surgical weight loss procedures for morbid obesity — sleeve gastrectomy and Roux-en-Y gastric bypass." },
      { name: "Thyroidectomy",             desc: "Total or partial removal of the thyroid gland for goitre, cancer or hyperthyroidism." },
    ],
    whyApex:
      "Apex holds NABH accreditation for surgical excellence. Our Enhanced Recovery After Surgery (ERAS) protocol has reduced average post-operative length of stay for colorectal surgery from 7 days to 3.5 days. We perform over 400 robotic procedures annually.",
  },

  /* ── 5. GYNECOLOGY & OBSTETRICS ──────────────────────────────────────────── */
  {
    slug:    "gynecology",
    name:    "Gynecology & Obstetrics",
    tagline: "Complete Women's Health from Adolescence to Menopause",
    color:   "#EC4899",
    bgColor: "#EC48991A",
    eyebrow: "Department of Obstetrics & Gynaecology",
    overview: [
      "Obstetrics and gynaecology (OB/GYN) is the medical and surgical specialty focused on women's reproductive health, pregnancy, childbirth and disorders of the female reproductive system. An OB/GYN specialist in India completes MD or MS (Obstetrics & Gynaecology) after MBBS, with scope for further fellowship in fetal medicine, reproductive endocrinology, gynaecologic oncology or urogynaecology.",
      "Apex Maternity & Women's Health Centre is designed around the patient's experience — featuring luxury LDR (Labour, Delivery and Recovery) rooms, a level III NICU co-located with the maternity unit, a dedicated fetal medicine unit and an internationally trained team managing over 3,000 deliveries annually.",
      "Our gynaecology service spans the full spectrum from adolescent health and reproductive medicine (IVF, IUI) to complex gynaecologic oncology surgeries and post-menopausal care.",
    ],
    training:
      "Our OB/GYN consultants hold MD/MS credentials with additional training in fetal medicine (FMF certification), minimal access surgery (MRCOG UK), reproductive medicine and oncology. Several are national-level examiners and faculty.",
    keyFacts: [
      { value: "3,000+", label: "Deliveries / Year" },
      { value: "Level III", label: "NICU Rating" },
      { value: "500+",   label: "IVF Cycles / Year" },
      { value: "30 beds", label: "Dedicated NICU Capacity" },
    ],
    conditions: [
      { name: "High-Risk Pregnancy",      desc: "Pregnancies complicated by hypertension, diabetes, multiple gestation, placenta praevia or foetal anomaly — managed by maternal-foetal medicine specialists." },
      { name: "Polycystic Ovary Syndrome (PCOS)", desc: "Hormonal disorder causing irregular cycles, infertility, acne and hirsutism. Managed with lifestyle, metformin, hormonal therapy and fertility treatment." },
      { name: "Endometriosis",            desc: "Endometrial tissue outside the uterus causing severe dysmenorrhoea, pelvic pain and subfertility. Treated medically or with laparoscopic excision." },
      { name: "Uterine Fibroids",         desc: "Benign smooth muscle tumours causing heavy bleeding, pelvic pressure and subfertility. Managed with medical therapy, UAE or myomectomy/hysterectomy." },
      { name: "Gynaecologic Cancers",     desc: "Cancers of the cervix, endometrium, ovary and vulva. Managed with staging surgery (radical hysterectomy, staging laparotomy) and adjuvant chemotherapy/radiation." },
      { name: "Pelvic Organ Prolapse",    desc: "Descent of pelvic organs due to laxity of supporting structures. Treated with pelvic floor physiotherapy or corrective surgery (colporrhaphy, sling procedures)." },
    ],
    symptoms: [
      { label: "Abnormal Uterine Bleeding",  detail: "Heavy, prolonged or irregular menstrual bleeding — may indicate fibroids, polyps, hormonal imbalance or endometrial pathology." },
      { label: "Pelvic Pain",                detail: "Chronic or cyclical pelvic pain — associated with endometriosis, PID, ovarian cysts or ectopic pregnancy." },
      { label: "Vaginal Discharge",          detail: "Abnormal colour, odour or volume of discharge — may indicate infection (BV, candidiasis, STI) or cervical pathology." },
      { label: "Breast Lump",                detail: "Any new lump in the breast requires clinical assessment and imaging (mammogram/USS) to exclude malignancy." },
      { label: "Hot Flushes & Night Sweats", detail: "Vasomotor symptoms of the perimenopause — managed with HRT or non-hormonal alternatives." },
      { label: "Subfertility",               detail: "Failure to conceive after 12 months of unprotected intercourse — requires systematic investigation of both partners." },
    ],
    procedures: [
      { name: "Normal & Assisted Delivery",        desc: "Vaginal delivery with or without epidural, forceps or ventouse — managed by experienced midwives and obstetricians." },
      { name: "Caesarean Section",                 desc: "Planned or emergency surgical delivery through a transverse lower segment incision — performed by consultant surgeons." },
      { name: "Laparoscopic Hysterectomy",         desc: "Keyhole removal of the uterus for fibroids, endometriosis or early gynaecologic cancer — shorter recovery than open surgery." },
      { name: "In Vitro Fertilisation (IVF)",      desc: "Assisted reproduction combining ovarian stimulation, egg retrieval, fertilisation and embryo transfer." },
      { name: "Hysteroscopic Surgery",             desc: "Endoscopic surgery inside the uterine cavity for polyps, fibroids, septum, adhesions and abnormal bleeding." },
      { name: "Radical Hysterectomy (Wertheim's)", desc: "Extended hysterectomy including parametria and upper vagina for cervical cancer — performed by gynaec oncologists." },
    ],
    whyApex:
      "Apex Maternity Centre has been awarded 'Centre of Excellence for High-Risk Obstetrics' by the Federation of Obstetric and Gynaecological Societies of India (FOGSI). Our maternal mortality rate is 0 per 1,000 deliveries for the past 3 consecutive years.",
  },

  /* ── 6. PEDIATRICS ───────────────────────────────────────────────────────── */
  {
    slug:    "pediatrics",
    name:    "Pediatrics",
    tagline: "Specialist Healthcare for Children from Birth to 18 Years",
    color:   "#F59E0B",
    bgColor: "#F59E0B1A",
    eyebrow: "Department of Pediatrics & Neonatology",
    overview: [
      "Paediatrics is the branch of medicine dealing with the health and medical care of infants, children and adolescents from birth up to 18 years of age. A paediatrician in India completes MD Paediatrics after MBBS, with subspecialty options in neonatology, paediatric cardiology, neurology, oncology and surgery.",
      "Children are not simply small adults — their physiology, pharmacology, disease presentations and emotional needs differ fundamentally from those of adults. Apex Paediatrics operates a child-friendly environment with dedicated play areas, family-centred care models and certified child life specialists.",
      "Our neonatal intensive care unit (NICU) is a Level III centre with 30 beds, managing the most premature neonates (from 24 weeks gestation) and critically ill newborns including those with congenital anomalies requiring early surgical intervention.",
    ],
    training:
      "Our paediatric consultants hold MD/DNB Paediatrics with fellowships in neonatology (NNF accredited), paediatric critical care, paediatric cardiology and paediatric neurology from premier centres in India and abroad.",
    keyFacts: [
      { value: "30 beds", label: "Level III NICU" },
      { value: "24 wks",  label: "Youngest Gestation Managed" },
      { value: "1,200+",  label: "NICU Admissions / Year" },
      { value: "95%",     label: "VLBW Survival Rate" },
    ],
    conditions: [
      { name: "Prematurity & Low Birth Weight", desc: "Neonates born before 37 weeks requiring intensive support for thermoregulation, nutrition, respiratory and neurological maturation." },
      { name: "Neonatal Jaundice (Hyperbilirubinemia)", desc: "Elevated bilirubin in the newborn causing yellowish skin — managed with phototherapy or exchange transfusion in severe cases." },
      { name: "Febrile Seizures",            desc: "Seizures triggered by high fever in children aged 6 months–5 years. Mostly benign; managed with antipyretics and parental education." },
      { name: "Asthma & Allergic Disorders", desc: "Bronchial asthma, allergic rhinitis, food allergy and atopic dermatitis — increasing in prevalence; managed with inhalers, allergen avoidance and immunotherapy." },
      { name: "Childhood Malnutrition",      desc: "Protein-energy malnutrition, stunting and wasting — managed with therapeutic feeds, micronutrient supplementation and family counselling." },
      { name: "Congenital Heart Defects",    desc: "Structural heart anomalies detected antenatally or postnatally — evaluated jointly with paediatric cardiologists and corrected by paediatric cardiac surgeons." },
    ],
    symptoms: [
      { label: "High Fever in Infants < 3 months",  detail: "Any fever ≥ 38°C in a neonate is a medical emergency requiring full septic screen and empirical antibiotics." },
      { label: "Respiratory Distress",               detail: "Grunting, nasal flaring, subcostal/intercostal recession and central cyanosis — urgent assessment and oxygen therapy required." },
      { label: "Poor Feeding & Weight Faltering",    detail: "Inadequate weight gain or refusal to feed may indicate underlying cardiac, metabolic, neurological or gastrointestinal disease." },
      { label: "Persistent Jaundice > 2 weeks",      detail: "Prolonged jaundice beyond the physiological period requires investigation to exclude biliary atresia — urgent in the first 6 weeks of life." },
      { label: "Developmental Delay",                detail: "Failure to reach age-appropriate motor, language, cognitive or social milestones — requires multidisciplinary assessment." },
      { label: "Rash with Fever",                    detail: "Combination of rash and fever may indicate viral exanthema, meningococcal disease, Kawasaki disease or drug reaction." },
    ],
    procedures: [
      { name: "NICU Intensive Care",        desc: "Ventilatory support (HFO, CPAP), surfactant therapy, TPN, UAC/UVC placement and neuromonitoring for critically ill neonates." },
      { name: "Neonatal Surgery",           desc: "Correction of intestinal atresia, diaphragmatic hernia, gastroschisis, pyloric stenosis and other congenital anomalies." },
      { name: "Bronchoscopy & BAL",         desc: "Flexible bronchoscopy in children for foreign body removal, airway assessment and bronchoalveolar lavage." },
      { name: "Bone Marrow Transplant",     desc: "Haematopoietic stem cell transplantation for childhood leukaemia, aplastic anaemia and metabolic disorders." },
      { name: "Paediatric Echocardiography", desc: "Dedicated paediatric echo service for diagnosis and monitoring of congenital and acquired heart disease." },
      { name: "Developmental Assessment Clinic", desc: "Multidisciplinary clinic (paediatrician, therapist, psychologist) for autism spectrum, ADHD and learning difficulties." },
    ],
    whyApex:
      "Apex NICU is accredited by the National Neonatology Forum (NNF) as a Level III B centre. Our very low birth weight (VLBW < 1500g) infant survival rate of 95% exceeds national benchmarks. We are among the first hospitals in Delhi NCR to offer whole-exome sequencing for genetic diagnosis of critically ill neonates.",
  },

  /* ── 7. PULMONOLOGY ──────────────────────────────────────────────────────── */
  {
    slug:    "pulmonology",
    name:    "Pulmonology",
    tagline: "Respiratory Medicine & Sleep Disorders",
    color:   "#06B6D4",
    bgColor: "#06B6D41A",
    eyebrow: "Department of Pulmonology & Respiratory Medicine",
    overview: [
      "Pulmonology (respiratory medicine) is the specialty concerned with diseases of the respiratory tract — airways, lungs, pleura and pulmonary vasculature. A pulmonologist in India completes MD (Respiratory Medicine or General Medicine) followed by DM Pulmonology or a fellowship in interventional pulmonology, sleep medicine or critical care.",
      "With Delhi NCR's air quality posing one of the greatest public health challenges in the world, respiratory disease is increasingly common. Apex Pulmonology offers a full-spectrum service from chronic disease management and pulmonary rehabilitation to complex interventional bronchoscopy and a dedicated sleep laboratory.",
      "Our department manages over 8,000 OPD visits annually for conditions ranging from asthma and COPD to interstitial lung disease, pulmonary hypertension and lung cancer — working closely with thoracic surgery, oncology and critical care.",
    ],
    training:
      "Our consultants hold MD/DNB Respiratory Medicine with additional certification in interventional bronchoscopy (EBUS, navigational), polysomnography and pulmonary function testing from CHEST (USA) and European Respiratory Society.",
    keyFacts: [
      { value: "8,000+", label: "OPD Visits / Year" },
      { value: "200+",   label: "EBUS Procedures / Year" },
      { value: "50-bed", label: "Sleep Lab Capacity" },
      { value: "24/7",   label: "Respiratory Emergency Cover" },
    ],
    conditions: [
      { name: "Asthma",                         desc: "Chronic inflammatory airway disease causing reversible obstruction — managed with step-wise inhaler therapy and allergen avoidance." },
      { name: "COPD (Chronic Obstructive Pulmonary Disease)", desc: "Progressive airflow limitation from emphysema and chronic bronchitis — managed with bronchodilators, pulmonary rehab and smoking cessation." },
      { name: "Interstitial Lung Disease (ILD)", desc: "Fibrotic lung diseases (IPF, sarcoidosis, hypersensitivity pneumonitis) — diagnosed with HRCT and BAL; treated with anti-fibrotic agents." },
      { name: "Pulmonary Tuberculosis",          desc: "Bacterial infection by Mycobacterium tuberculosis — treated with DOTS protocol; drug-resistant TB managed by our MDR-TB clinic." },
      { name: "Obstructive Sleep Apnoea (OSA)", desc: "Repetitive upper airway collapse during sleep causing snoring, arousals and daytime somnolence. Diagnosed with polysomnography; treated with CPAP." },
      { name: "Pulmonary Hypertension",          desc: "Elevated pressure in the pulmonary vasculature — investigated with RHC and treated with targeted pulmonary vasodilators." },
    ],
    symptoms: [
      { label: "Dyspnoea (Breathlessness)",     detail: "Shortness of breath on exertion or at rest — graded by MRC scale; requires spirometry and imaging to determine cause." },
      { label: "Chronic Cough > 8 weeks",       detail: "Persistent cough — may indicate asthma, GORD, post-nasal drip, COPD, ILD or malignancy." },
      { label: "Haemoptysis",                    detail: "Coughing up blood — a red-flag symptom requiring urgent CT and bronchoscopy to exclude TB, bronchiectasis or lung cancer." },
      { label: "Wheeze",                         detail: "High-pitched expiratory sound indicating airway narrowing — hallmark of asthma and COPD." },
      { label: "Excessive Daytime Sleepiness",   detail: "Epworth Sleepiness Scale > 10 warrants a sleep study to investigate OSA, narcolepsy or other sleep disorders." },
      { label: "Pleural Chest Pain",             detail: "Sharp pain worsening with breathing — may indicate pleuritis, pneumothorax or pulmonary embolism." },
    ],
    procedures: [
      { name: "Spirometry & PFTs",          desc: "Pulmonary function testing to measure airflow obstruction, restriction and diffusion capacity — essential for diagnosis and monitoring." },
      { name: "Flexible Bronchoscopy",      desc: "Endoscopic airway examination with biopsy, lavage and therapeutic interventions for lung lesions and infections." },
      { name: "EBUS (Endobronchial Ultrasound)", desc: "Ultrasound-guided transbronchial needle aspiration for mediastinal lymph node staging and diagnosis." },
      { name: "Polysomnography",            desc: "Overnight sleep study measuring EEG, EMG, airflow, oximetry and effort — gold standard for diagnosing sleep disorders." },
      { name: "Pleuroscopy (Medical Thoracoscopy)", desc: "Minimally invasive examination of the pleural space for diagnosis and treatment of pleural effusion and mesothelioma." },
      { name: "Pulmonary Rehabilitation",   desc: "Structured exercise, education and psychosocial support programme for COPD and other chronic lung diseases." },
    ],
    whyApex:
      "Apex Pulmonology operates Delhi NCR's most advanced interventional bronchoscopy suite, including robotic bronchoscopy (Ion™) for peripheral lung nodule biopsy. Our COPD readmission rate is 8% — well below the national average of 18%.",
  },

  /* ── 8. EMERGENCY MEDICINE ───────────────────────────────────────────────── */
  {
    slug:    "emergency",
    name:    "Emergency Medicine",
    tagline: "24/7 Critical Care, Trauma & Rapid Response",
    color:   "#DC2626",
    bgColor: "#DC26261A",
    eyebrow: "Department of Emergency Medicine",
    overview: [
      "Emergency medicine is the specialty practised in emergency departments (EDs) providing immediate decision making and action to prevent death or disability in acutely ill or injured patients. Emergency medicine physicians in India hold MD Emergency Medicine after MBBS, a specialty formally recognised by the MCI/NMC since 2009.",
      "The Apex Emergency Department operates around the clock with a dedicated team of emergency medicine consultants, nurses and paramedics. It is a Level II trauma centre with direct access to a hybrid operating theatre, interventional radiology suite, cardiac catheterisation laboratory and blood bank — enabling a seamless 'code to procedure' pathway for time-critical emergencies.",
      "Our emergency department handles over 40,000 visits per year with an average door-to-doctor time of under 4 minutes for triage category 1 and 2 patients. Point-of-care ultrasound (POCUS), rapid molecular diagnostics and telemedicine stroke consultation are embedded into our ED workflow.",
    ],
    training:
      "Our ED faculty hold MD/DNB Emergency Medicine and ATLS/ACLS/PALS instructor credentials. Several hold FCEM (Fellow of the College of Emergency Medicine, UK) — bringing international emergency medicine standards to our patients.",
    keyFacts: [
      { value: "40,000+", label: "ED Visits / Year" },
      { value: "< 4 min", label: "Door-to-Doctor Time" },
      { value: "24/7",    label: "Trauma Team Activation" },
      { value: "3 min",   label: "Avg Resus Team Assembly" },
    ],
    conditions: [
      { name: "Acute Myocardial Infarction (AMI)", desc: "Heart attack requiring immediate reperfusion with primary PCI — cath lab activated within minutes of ED arrival via STEMI protocol." },
      { name: "Stroke (CVA)",                     desc: "Brain ischaemia or haemorrhage requiring CT, rapid neurological assessment and tPA thrombolysis or mechanical thrombectomy within the time window." },
      { name: "Major Trauma",                     desc: "Polytrauma from road accidents, falls or violence — managed by trauma team using ATLS principles with immediate surgical back-up." },
      { name: "Acute Severe Asthma / COPD Exacerbation", desc: "Life-threatening airway obstruction managed with bronchodilators, steroids, magnesium, NIV and intubation if required." },
      { name: "Sepsis & Septic Shock",            desc: "Dysregulated host response to infection causing organ failure — managed with Sepsis-3 protocol: early antibiotics, fluids and vasopressors." },
      { name: "Poisoning & Overdose",             desc: "Ingestion or exposure to toxic substances — managed with decontamination, specific antidotes and supportive intensive care." },
    ],
    symptoms: [
      { label: "Chest Pain",                  detail: "Any acute chest pain is treated as ACS/AMI until proven otherwise — immediate ECG within 10 minutes of arrival, troponin and cardiology review." },
      { label: "Sudden Severe Headache",       detail: "'Thunderclap headache' — worst headache of life — is a neurosurgical emergency until subarachnoid haemorrhage is excluded by CT + LP." },
      { label: "FAST Symptoms (Stroke)",       detail: "Facial droop, Arm weakness, Speech difficulty, Time to call — any of these triggers immediate CT and stroke team activation." },
      { label: "Severe Breathlessness",        detail: "Inability to speak in full sentences — requires immediate assessment for acute asthma, tension pneumothorax, PE or pulmonary oedema." },
      { label: "Altered Consciousness (GCS ≤ 13)", detail: "Reduced conscious level from trauma, metabolic cause, infection or intoxication — requires immediate airway protection and investigation." },
      { label: "Anaphylaxis",                  detail: "Rapid onset systemic allergic reaction with hypotension and bronchospasm — treated immediately with IM adrenaline 1:1000." },
    ],
    procedures: [
      { name: "Rapid Sequence Intubation (RSI)",  desc: "Emergency definitive airway management using sedation and neuromuscular blockade in apnoeic or unprotected patients." },
      { name: "Cardiac Arrest Resuscitation (ACLS)", desc: "Advanced Cardiac Life Support — chest compressions, defibrillation and advanced airway management for pulseless arrest." },
      { name: "Emergency Ultrasound (POCUS)",     desc: "Bedside focused ultrasound for FAST trauma assessment, pneumothorax, pericardial effusion and IV access." },
      { name: "Chest Decompression & Intercostal Drain", desc: "Needle decompression and tube thoracostomy for tension pneumothorax and massive haemothorax." },
      { name: "Central Venous & Arterial Access", desc: "Ultrasound-guided CVC insertion for fluid resuscitation, vasopressors and haemodynamic monitoring in critically ill patients." },
      { name: "Procedural Sedation",             desc: "Ketamine, propofol or fentanyl-midazolam sedation for painful procedures including fracture reduction, cardioversion and laceration repair." },
    ],
    whyApex:
      "Apex Emergency Department is a recognised training centre for MD Emergency Medicine. Our STEMI protocol activates the cath lab in under 20 minutes of ECG diagnosis — 30 minutes faster than national benchmarks. We run Delhi NCR's only dedicated toxicology and envenomation clinic within an ED.",
  },
];

// Helper to get a specialty by slug
export function getSpecialtyBySlug(slug: string): SpecialtyDetail | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}
