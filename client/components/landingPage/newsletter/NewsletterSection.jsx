import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

export default function NewsletterSection() {
  return (
    <div className="lg:px-32 mb-16">
      <section className="section bg-blue-300 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="mb-6 ">Stay Connected</h2>
        <p className="text-blue-50/80 mb-12 max-w-2xl text-lg">
          Subscribe to our newsletter for updates on our programs, impact stories, and how you can get involved.
        </p>

        <form className="space-y-6 text-left max-w-2xl mx-auto">
          {/* Name Input */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-900 outline-none focus:bg-white/20 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-900 outline-none focus:bg-white/20 transition-all duration-300"
            />
          </div>

          {/* Policy Checkbox */}
          <div className="flex items-start gap-4 py-2">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="policy"
                className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 transition-all checked:bg-blue-500 checked:border-blue-500"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <label htmlFor="policy" className="text-sm text-blue-50/80 leading-relaxed cursor-pointer select-none">
              I have read the <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and consent to receive email updates from The Royals and understand I can unsubscribe at any time.
            </label>
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              label="Subscribe Now" 
              type="submit"
              variant="secondary"
            />
          </div>
        </form>
      </div>
    </section>
    </div>
  );
}
