import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 pt-32 pb-4 max-w-6xl mx-auto">
      <div className="inline-flex items-center rounded-full border border-white px-6 py-2 mb-8">
        <span className="text-sm font-medium text-white">
          Raising the standards of living for children
        </span>
      </div>

      <h1 className="text-white mb-6">
        Together, We Make Change Possible.
      </h1>

      <p className="text-white text-lg max-w-4xl mb-10">
        We are a non-profit organization dedicated to creating sustainable impact through education, mentorship, and community development initiatives across Africa.
      </p>

      <Button 
        label="Our Story" 
        href="/about" 
        variant="primary"
      />
    </div>
  );
}
