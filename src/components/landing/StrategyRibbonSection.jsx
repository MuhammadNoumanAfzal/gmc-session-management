import { motion } from "framer-motion";

const frontRibbonItems = [
  "GMC Scholarship Strategy",
  "Application Clarity",
  "Admissions Growth",
  "Profile Strength",
];

const backRibbonItems = [
  "Scholarship Positioning",
  "SOP Direction",
  "Trust Building",
  "Application Strategy",
];

function RibbonRow({
  items,
  duration,
  itemClassName = "",
  symbolClassName = "",
  direction = "left",
}) {
  const repeated = [...items, ...items];
  const animationX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="overflow-hidden ">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: animationX }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {repeated.map((item, index) => (
          <div
            className={`flex items-center gap-4 px-6 py-3 [font-family:'Sora',sans-serif] text-sm font-extrabold uppercase tracking-[0.08em] sm:px-8 sm:text-[1.55rem] ${itemClassName}`}
            key={`${item}-${index}`}
          >
            <span>{item}</span>
            <span className={symbolClassName}>+</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function StrategyRibbonSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0e8f8] py-5 sm:py-7">
      <div className="relative mx-auto flex min-h-[120px] max-w-[1440px] items-center justify-center">
        <div className="pointer-events-none absolute left-1/2 top-[calc(50%+42px)] z-0 w-[150%] -translate-x-1/2 -translate-y-14 rotate-[3.8deg] opacity-100">
          <div className="border-y border-[#b785ff]/12 bg-[linear-gradient(90deg,rgba(12,9,19,0.92)_0%,rgba(35,24,52,0.82)_50%,rgba(12,9,19,0.92)_100%)] py-1.5 shadow-[0_10px_26px_rgba(10,7,18,0.24)]">
            <RibbonRow
              items={backRibbonItems}
              duration={26}
              direction="right"
              itemClassName="text-[#eedcff]/20"
              symbolClassName="text-[#d8b7ff]/14"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[154%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] shadow-[0_22px_54px_rgba(76,36,130,0.24)]">
          <div className="border-y border-white/10 bg-[linear-gradient(90deg,#2b1a3f_0%,#533183_22%,#d7b3ff_50%,#5d3791_78%,#261534_100%)] py-2">
            <RibbonRow
              items={frontRibbonItems}
              duration={18}
              direction="left"
              itemClassName="text-[#fff8ff]"
              symbolClassName="text-[#f4dfff]/88"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategyRibbonSection;
