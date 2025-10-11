import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Apakah ${siteDetails.siteName} aman?`,
    answer: "Tentu saja. Kami menggunakan enkripsi tingkat tinggi untuk melindungi semua data Anda, serta memastikan privasi foto pribadi dan bisnis tetap terjaga.",
  },
  {
    question: `Bisakah saya menggunakan ${siteDetails.siteName} di banyak perangkat?`,
    answer: "Ya, Anda bisa FotoSpace dapat diakses dari smartphone, tablet, dan komputer dengan sinkronisasi otomatis.",
  },
  {
    question: "Apakah saya bisa berbagi foto dengan orang lain?",
    answer: `Tentu ${siteDetails.siteName} memungkinkan Anda untuk berbagi foto melalui link privat maupun publik dengan mudah dan aman.`,
  },
  {
    question: "Apakah ada batasan kapasitas penyimpanan?",
    answer: "Tidak. Anda bisa memilih paket sesuai kebutuhan mulai dari 50GB, 200GB, hingga 1TB dengan harga terjangkau.",
  },
  {
    question: "Bagaimana jika saya membutuhkan bantuan?",
    answer: "Tim support kami siap membantu melalui email dan chat. Kami juga menyediakan panduan lengkap dan tutorial agar Anda bisa memaksimalkan fitur FotoSpace",
  },
];
