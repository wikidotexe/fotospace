import {
  FiBarChart2, // untuk Intelligent Categorization
  FiTarget, // untuk Custom Albums
  FiTrendingUp, // untuk Smart Search
  FiUpload, // untuk Auto Backup
  FiSmartphone, // untuk Multi-Device Access
  FiRefreshCcw, // untuk Real-Time Sync
  FiLock, // untuk Encryption
  FiUser, // untuk Secure Login
  FiShield, // untuk Monitoring/Security
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Smart Photo Management",
    description: "Kelola koleksi foto dan video Anda dengan mudah. Sistem cerdas kami membantu mengatur, mengkategorikan, dan menjaga momen berharga tetap rapi dan aman.",
    bullets: [
      {
        title: "Intelligent Categorization",
        description: "Foto & video diurutkan otomatis berdasarkan album, tanggal, atau lokasi.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Custom Albums",
        description: "Buat dan atur album sesuai kebutuhan Anda.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Smart Search",
        description: "Cari foto atau video tertentu dengan cepat menggunakan filter pintar.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/hero-mockup2.webp",
  },
  {
    title: "Seamless Syncing",
    description: "Simpan dan sinkronkan foto & video dari berbagai perangkat secara otomatis, tanpa ribet.",
    bullets: [
      {
        title: "Auto Backup",
        description: "Foto & video langsung tersimpan aman di cloud.",
        icon: <FiUpload size={26} />,
      },
      {
        title: "Multi-Device Access",
        description: "Akses koleksi Anda dari HP, laptop, atau tablet kapan saja.",
        icon: <FiSmartphone size={26} />,
      },
      {
        title: "Real-Time Sync",
        description: "Perubahan langsung tersinkron ke semua perangkat.",
        icon: <FiRefreshCcw size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Priority-Grade Security",
    description: "Keamanan data Anda adalah prioritas utama kami. Semua foto terenkripsi dan hanya Anda yang bisa mengaksesnya.",
    bullets: [
      {
        title: "End-to-End Encryption",
        description: "Foto & video dienkripsi penuh untuk menjaga privasi.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Secure Login",
        description: "Lindungi akun Anda dengan password kuat, OTP, atau autentikasi biometrik.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Real-Time Monitoring",
        description: "Server selalu dipantau agar data tetap aman dari ancaman.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-3.webp",
  },
];
