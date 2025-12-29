 import { HiCode, HiLightningBolt, HiChartBar, HiSupport } from 'react-icons/hi';
 
 export const services = [
    {
      icon: <HiCode className="w-8 h-8" />,
      title: "Custom SaaS Development",
      description: "We build production-ready SaaS platforms—fast, secure, and scalable. From MVP to enterprise-grade systems, we handle the full stack so you can focus on growing your business.",
      gradient: "from-blue-500 to-blue-600",
      features: ["Full-stack development", "Cloud infrastructure", "API integration"]
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "AI & Automation",
      description: "Reduce manual work with intelligent automation and AI systems. Leverage GPT, computer vision, and ML models to streamline operations and unlock new capabilities.",
      gradient: "from-purple-500 to-purple-600",
      features: ["LLM integration", "Workflow automation", "Intelligent agents"]
    },
    {
      icon: <HiChartBar className="w-8 h-8" />,
      title: "Data Dashboards",
      description: "Turn complex data into clear, real-time business insights. Beautiful, interactive dashboards that help you make data-driven decisions faster.",
      gradient: "from-pink-500 to-pink-600",
      features: ["Real-time analytics", "Custom visualizations", "KPI tracking"]
    },
    {
      icon: <HiSupport className="w-8 h-8" />,
      title: "Retainer Support",
      description: "Ongoing development support for teams that need reliability. Think of us as your extended tech team—always available, always delivering.",
      gradient: "from-emerald-500 to-emerald-600",
      features: ["Dedicated resources", "Priority support", "Continuous improvement"]
    }
  ];