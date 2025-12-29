import {
  HiChip,
  HiServer,
  HiBadgeCheck,
} from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

export const features = [
  {
    icon: <HiChip className="w-6 h-6" />,
    title: "AI-First Engineering",
    description: "We don't just use AI—we build with it. Cutting-edge models integrated into every layer of your product.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <HiServer className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Built to handle 10 users or 10 million. No rewrites, no technical debt—just pure scalability from day one.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <HiBadgeCheck className="w-6 h-6" />,
    title: "Clear Pricing & Timelines",
    description: "No surprises. Fixed scopes, transparent costs, and realistic delivery dates. We respect your budget and timeline.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <HiArrowPathRoundedSquare className="w-6 h-6" />,
    title: "Long-Term Partnership",
    description: "We're not just contractors—we're your technical co-founders. Committed to your growth, iteration after iteration.",
    color: "from-green-500 to-emerald-500"
  }
];