import { Phone, Zap, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';

export const steps = [
    {
      icon: Phone,
      title: "Discovery Call",
      subtitle: "We start by understanding your vision.",
      points: [
        "Discuss your idea, goals, and challenges",
        "Understand your users and business model",
        "Define scope, priorities, and success metrics",
        "Align on timeline, budget, and expectations"
      ],
      outcomes: ["Clear problem statement", "Shared understanding", "High-level roadmap"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Weekly Sprints",
      subtitle: "We build in focused, measurable cycles.",
      points: [
        "Work is divided into weekly development sprints",
        "Each sprint delivers visible progress",
        "Features, fixes, or improvements shipped regularly",
        "Flexible scope based on feedback and priorities"
      ],
      outcomes: ["Fast iteration", "Continuous delivery", "No long gaps or surprises"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Check-ins",
      subtitle: "We stay aligned at every step.",
      points: [
        "Regular progress updates & demos",
        "Review what's done and what's next",
        "Gather feedback and adjust priorities",
        "Open communication throughout the project"
      ],
      outcomes: ["Full transparency", "Better decisions", "Strong long-term collaboration"],
      color: "from-green-500 to-emerald-500"
    }
  ];
