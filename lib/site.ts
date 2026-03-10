/**
 * Ledico Beauty Parlour & Spa - Central site data for SEO, schema, and UI
 */

export const SITE = {
  name: "Ledico Beauty Parlour & Spa",
  tagline: "Your Beauty, Our Passion - Premium Beauty & Spa Services in Dehri",
  description:
    "Leading beauty parlour and spa in Dehri on Sone, Bihar offering premium beauty treatments, bridal services, facials, hair styling, spa services, and wellness treatments. Expert beauticians, modern facilities, and personalized care.",
  url: "https://ledicobeauty.com",
  address: {
    full: "Thana chowk dehri bazaar super market, Near kala Niketan, opposite Baba market, Dehri on sone, Bihar 821307, India",
    landmark: "Near kala Niketan, opposite Baba market",
    street: "Thana chowk dehri bazaar super market",
    city: "Dehri on Sone",
    district: "Rohtas",
    state: "Bihar",
    pin: "821307",
  },
  phone: "086515 18563",
  whatsapp: "086515 18563",
  email: "ledicobeautyparlour1993@gmail.com",
  established: 1993,
  businessType: "Beauty Parlour & Spa",
  categories: [
    "Beauty Parlour",
    "Spa",
    "Massage",
    "Beautician",
    "Facial spa",
    "Nail salon",
    "Bridal services",
    "Make-up artist",
    "Tanning salon",
    "Hairdresser",
    "Hair removal service"
  ],
  workingHours: "9:00 AM – 8:00 PM",
  workingDays: "Monday to Sunday",
  specialization: ["Bridal Makeup", "Hair Styling", "Spa Treatments", "Skin Care"],
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Bridal Packages", href: "/bridal" },
  { name: "Spa Treatments", href: "/spa" },
  { name: "Gallery", href: "/gallery" },
  { name: "Transformations", href: "/transformations" },
  { name: "Book Appointment", href: "/booking" },
  { name: "Contact Us", href: "/contact" },
] as const;

export const WHY_LEDICO = [
  { title: "Expert Beauticians", description: "Certified and experienced beauty professionals." },
  { title: "Premium Products", description: "High-quality branded beauty and skincare products." },
  { title: "Hygienic Environment", description: "Sterilized tools and clean, safe treatment rooms." },
  { title: "Personalized Care", description: "Customized treatments based on your skin and hair type." },
  { title: "Bridal Specialists", description: "Complete bridal makeover packages and trial sessions." },
  { title: "Affordable Luxury", description: "Premium services at competitive prices." },
] as const;

export const SERVICES_LIST = [
  { 
    category: "Hair Services",
    services: ["Haircut", "Hairstyling", "Hair threading", "Shampoo & conditioning", "Dreadlocks"]
  },
  {
    category: "Facial & Skin Care", 
    services: ["Facials", "Acne treatments", "Skin care", "Anti-aging treatments"]
  },
  {
    category: "Nail Services",
    services: ["Manicures", "Pedicures", "Acrylic nails", "Nail art", "Gel polish"]
  },
  {
    category: "Hair Removal",
    services: ["Body waxing", "Brazilian waxing", "Waxing", "Threading"]
  },
  {
    category: "Eye & Brow Services",
    services: ["Eyebrow beautification", "Eyebrow threading", "Eyelashes", "Eye makeup"]
  },
  {
    category: "Makeup Services",
    services: ["Make-up", "Make-up services", "Bridal makeup", "Party makeup"]
  },
  {
    category: "Spa Services",
    services: ["Massages", "Spa services", "Body treatments", "Relaxation therapy"]
  },
  {
    category: "Bridal Services",
    services: ["Bridal services", "Wedding and event preparation", "Bridal packages", "Pre-wedding treatments"]
  }
] as const;

export const POPULAR_TREATMENTS = [
  "Bridal Makeup Package",
  "Deep Cleansing Facial",
  "Full Body Massage",
  "Hair Spa Treatment",
  "Acrylic Nail Art",
  "Brazilian Waxing",
] as const;

export const OCCASIONS = [
  "Wedding Preparation",
  "Party Makeup",
  "Festival Look",
  "Corporate Events",
  "Photo Shoots",
  "Special Occasions",
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is the best beauty parlour in Dehri on Sone, Bihar?",
    answer:
      "Ledico Beauty Parlour & Spa is the leading beauty destination in Dehri on Sone, Bihar. We offer comprehensive beauty and spa services including bridal makeup, hair styling, facials, spa treatments, and nail services with expert beauticians and premium products.",
  },
  {
    question: "Where is Ledico Beauty Parlour & Spa located?",
    answer:
      "Ledico Beauty Parlour & Spa is located at Thana chowk dehri bazaar super market, Near kala Niketan, opposite Baba market, Dehri on sone, Bihar 821307, India. Contact us at 086515 18563.",
  },
  {
    question: "What services are offered at Ledico Beauty Parlour & Spa?",
    answer:
      "We offer complete beauty and spa services including haircuts, hairstyling, facials, acne treatments, manicures, pedicures, body waxing, eyebrow threading, makeup services, massages, bridal services, and spa treatments.",
  },
  {
    question: "Do you offer bridal makeup packages?",
    answer:
      "Yes, we specialize in bridal services including complete bridal makeup packages, pre-wedding treatments, hair styling, and wedding preparation services. We offer trial sessions and customized bridal packages.",
  },
  {
    question: "What are your working hours and how to book an appointment?",
    answer:
      "We are open from 9:00 AM to 8:00 PM, Monday to Sunday. You can book an appointment by calling 086515 18563 or visiting our parlour. Walk-ins are also welcome based on availability.",
  },
] as const;

// Beauty experts and staff
export const BEAUTY_EXPERTS = [
  { name: "Priya Sharma", specialization: "Senior Beautician & Makeup Artist", experience: "8+ years", expertise: ["Bridal Makeup", "Hair Styling", "Skin Care"] },
  { name: "Anjali Singh", specialization: "Spa Therapist", experience: "5+ years", expertise: ["Body Massage", "Facial Treatments", "Aromatherapy"] },
  { name: "Neha Gupta", specialization: "Hair Stylist", experience: "6+ years", expertise: ["Hair Cutting", "Hair Coloring", "Hair Treatments"] },
  { name: "Kavita Devi", specialization: "Nail Technician", experience: "4+ years", expertise: ["Manicure", "Pedicure", "Nail Art"] },
] as const;
