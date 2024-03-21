import { IoCheckmarkCircle } from "react-icons/io5";
import { TextRevealCard, TextRevealCardTitle } from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextRevealCard
        text="Use and Share information efficiently"
        revealText="Use and Share information efficiently"
      >
        <TextRevealCardTitle>Get started - It’s free</TextRevealCardTitle>
      </TextRevealCard>
      <div className="flex gap-3 items-center justify-center flex-wrap mt-5">
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> No credit card
          required
        </p>
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> Free Plan
        </p>
        <p className="flex gap-2 items-center text-desc">
          <IoCheckmarkCircle className="text-[#55B59E]" /> Cancel anytime
        </p>
      </div>
    </div>
  );
}
