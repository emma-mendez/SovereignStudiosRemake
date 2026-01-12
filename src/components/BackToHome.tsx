import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors text-sm font-medium mb-4"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  );
};

export default BackToHome;
