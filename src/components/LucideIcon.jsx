import {
  Rocket,
  Heart,
  Globe,
  CheckCircle2,
  Users,
  Activity,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Truck,
  Zap,
  Cpu,
  BarChart3,
  Headphones,
  BrainCircuit,
  Terminal,
  Smartphone,
  Cloud,
  Layout,
  Search,
  Compass,
  Paintbrush,
  Code,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Server,
} from "lucide-react";
const LucideIcon = ({ name, ...props }) => {
  switch (name) {
    case "Rocket":
      return <Rocket {...props} />;
    case "Heart":
      return <Heart {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    case "Users":
      return <Users {...props} />;
    case "Activity":
      return <Activity {...props} />;
    case "Landmark":
      return <Landmark {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "Truck":
      return <Truck {...props} />;
    case "Zap":
      return <Zap {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "BarChart3":
      return <BarChart3 {...props} />;
    case "Headphones":
      return <Headphones {...props} />;
    case "BrainCircuit":
      return <BrainCircuit {...props} />;
    case "Terminal":
      return <Terminal {...props} />;
    case "Smartphone":
      return <Smartphone {...props} />;
    case "Cloud":
      return <Cloud {...props} />;
    case "Layout":
      return <Layout {...props} />;
    case "Search":
      return <Search {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "Paintbrush":
      return <Paintbrush {...props} />;
    case "Code":
      return <Code {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "X":
      return <X {...props} />;
    case "ChevronDown":
      return <ChevronDown {...props} />;
    case "ArrowRight":
      return <ArrowRight {...props} />;
    case "ArrowUpRight":
      return <ArrowUpRight {...props} />;
    default:
      return <HelpCircle {...props} />;
    case "Server":
    return <Server {...props} />;
  }
};
export {
  LucideIcon
};
