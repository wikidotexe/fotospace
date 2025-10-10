import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Basic",
    price: "Rp 15.000",
    features: ["50 GB storage", "Upload foto & video", "Akses dari web & mobile", "Sinkronisasi otomatis"],
  },
  {
    name: "Standard",
    price: "Rp 25.000",
    features: ["200 GB storage", "Semua fitur Basic", "Album bersama keluarga/teman", "Backup otomatis"],
  },
  {
    name: "Premium",
    price: "Rp 50.000",
    features: ["1 TB storage", "Semua fitur Standard", "Akses multi-device tanpa batas", "Sharing private & public link"],
  },
];
