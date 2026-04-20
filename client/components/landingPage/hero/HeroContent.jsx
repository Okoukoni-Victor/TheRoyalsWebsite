import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 max-w-4xl mx-auto">
      <div className="inline-flex items-center rounded-full border border-grey-400 px-6 py-2 mb-8">
        <span className="text-sm font-medium text-grey-100">
          Raising the standards of living for children
        </span>
      </div>

      <h1 className="text-grey-50 mb-6">
        Together, We Make Change Possible.
      </h1>

      <p className="text-grey-200 text-lg max-w-2xl mb-10">
        We are a non-profit organization dedicated to creating sustainable impact through education, mentorship, and community development initiatives across Africa.
      </p>

      <button className="inline-flex items-center gap-6 bg-blue-300 hover:bg-blue-200 text-white rounded-full pl-6 pr-2 py-2 transition-colors duration-300">
        <span className="font-medium text-lg">Our Story</span>
        <div className="bg-foreground rounded-full p-4">
          <ArrowRight className="w-4 h-4 text-white text-medium" />
        </div>
      </button>
    </div>
  );
}
