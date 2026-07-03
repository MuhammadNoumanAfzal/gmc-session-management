import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Clock3, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { floatingIcons } from "../../data/masterclass";

const titleMessages = [
  {
    line1: "Win admission to top universities with",
    line2: "fully funded scholarship guidance",
  },
  {
    line1: "Build a stronger profile for global admits",
    line2: "with expert scholarship strategy",
  },
  {
    line1: "Turn your dream shortlist into real offers",
    line2: "with clearer admission planning",
  },
];

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  
  const heroRef = useRef(null);
  const [titleSpotlight, setTitleSpotlight] = useState({ x: 0, y: 0 });
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  // Smooth mouse-following parallax motion variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 150 });

  const handleHeroMouseMove = (e) => {
    if (prefersReducedMotion) return;
    
    // Parallax tracking
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const moveX = (clientX - width / 2) / 24;
    const moveY = (clientY - height / 2) / 24;
    
    mouseX.set(moveX);
    mouseY.set(moveY);

    // Title spotlight tracking
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setTitleSpotlight({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const smoothEase = [0.22, 1, 0.36, 1];
  const heroReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((currentIndex) =>
        currentIndex === titleMessages.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const activeTitle = titleMessages[activeTitleIndex];

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="relative overflow-hidden px-0 pt-28 pb-20 md:pt-22 md:pb-14 select-none"
    >
      {/* Background elements & moving gradient meshes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,#050507_0%,#090611_32%,#080510_70%,#050505_100%)]" />
        
        {/* Parallax blob 1 */}
        <motion.div
          className="absolute -top-24 left-[-8%] h-[340px] w-[340px] rounded-full bg-[#8c36ff]/18 blur-3xl"
          style={{ x: springX, y: springY }}
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1, 1.08, 1] }
          }
          transition={{ duration: 10.2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Parallax blob 2 */}
        <motion.div
          className="absolute top-[12%] right-[-6%] h-[300px] w-[300px] rounded-full bg-[#b467ff]/14 blur-3xl"
          style={{ 
            x: useTransform(springX, (val) => val * -1.2), 
            y: useTransform(springY, (val) => val * -1.2) 
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1.02, 0.95, 1.02] }
          }
          transition={{ duration: 11.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Parallax blob 3 */}
        <motion.div
          className="absolute bottom-[12%] left-[12%] h-[220px] w-[220px] rounded-full bg-[#6c2cff]/10 blur-3xl"
          style={{ 
            x: useTransform(springX, (val) => val * 0.8), 
            y: useTransform(springY, (val) => val * 0.8) 
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.55, 0.82, 0.55] }
          }
          transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -top-24 left-[14%] h-[240px] w-px bg-[linear-gradient(180deg,rgba(212,178,255,0)_0%,rgba(212,178,255,0.75)_45%,rgba(212,178,255,0)_100%)] blur-[1px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [-80, 520], opacity: [0, 0.9, 0] }
          }
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -top-32 left-[48%] h-[300px] w-px bg-[linear-gradient(180deg,rgba(180,103,255,0)_0%,rgba(180,103,255,0.8)_50%,rgba(180,103,255,0)_100%)] blur-[1px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [-120, 560], opacity: [0, 1, 0] }
          }
          transition={{
            duration: 7.2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.1,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -top-20 right-[18%] h-[220px] w-px bg-[linear-gradient(180deg,rgba(223,198,255,0)_0%,rgba(223,198,255,0.72)_42%,rgba(223,198,255,0)_100%)] blur-[1px]"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [-60, 500], opacity: [0, 0.85, 0] }
          }
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "linear",
            delay: 0.7,
          }}
        />
      </div>


      <div className="flex items-center justify-center gap-2 bg-[#f7f3fb] px-4 py-3 text-center text-sm font-semibold text-[#090909] sm:text-base md:text-lg">
        <Clock3 className="text-[#b467ff]" size={18} />
        <span>
          Limited scholarship strategy slots open this week. Book early.
        </span>
      </div>

      <div className="relative z-10 mx-auto mt-3 w-full max-w-[1320px] px-4 sm:mt-4 sm:px-5">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1240px] text-center">
            <motion.div
              className="mb-5 inline-flex w-auto max-w-[min(94vw,860px)] items-center justify-center gap-2 rounded-full border border-[#b467ff3d] bg-[#b467ff17] px-6 py-3 text-center text-[11px] font-bold text-[#efd9ff] sm:px-7 sm:text-[13px]"
              {...heroReveal}
              transition={{ delay: 0.08, duration: 1.05, ease: smoothEase }}
              whileInView={
                prefersReducedMotion
                  ? undefined
                  : {
                      boxShadow: [
                        "0 0 0 rgba(180,103,255,0)",
                        "0 0 18px rgba(180,103,255,0.12)",
                        "0 0 0 rgba(180,103,255,0)",
                      ],
                    }
              }
              viewport={{ once: true }}
            >
              <Star className="shrink-0 text-[#dba8ff] animate-pulse" size={14} fill="currentColor" />
              <span className="leading-tight whitespace-normal">
                Learn From Students Who Won Fully Funded Scholarships
              </span>
            </motion.div>

            {/* Title spotlight card wrapper */}
            <motion.div
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}
              className="relative mx-auto mb-5 w-full max-w-[1240px] overflow-hidden rounded-[20px] p-px shadow-[0_24px_80px_rgba(0,0,0,0.36)]"
              initial={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, scale: 0.985, y: 16 }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
              }
              transition={{
                opacity: { delay: 0.18, duration: 1.15, ease: smoothEase },
                scale: { delay: 0.18, duration: 1.15, ease: smoothEase },
                y: { delay: 0.18, duration: 1.15, ease: smoothEase },
              }}
            >
              {/* Conic glowing orbit border */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] [background:conic-gradient(from_0deg,_rgba(148,63,255,0.15),_rgba(208,170,255,1),_rgba(111,29,255,0.22),_rgba(208,170,255,0.95),_rgba(148,63,255,0.15))]"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative rounded-[20px] bg-[linear-gradient(180deg,rgba(10,10,14,0.98)_0%,rgba(12,9,18,0.96)_100%)] px-4 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:px-6 md:px-8">
                {/* Active Mouse spotlight gradient */}
                {isTitleHovered && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(350px circle at ${titleSpotlight.x}px ${titleSpotlight.y}px, rgba(180, 103, 255, 0.16), transparent 80%)`,
                    }}
                  />
                )}

                <h1 className="relative z-10 [font-family:'Outfit',sans-serif] text-[1.9rem] leading-[1.04] font-bold text-white sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.55rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTitleIndex}
                      initial={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, y: 18, filter: "blur(8px)" }
                      }
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }
                      }
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, y: -18, filter: "blur(8px)" }
                      }
                      transition={{ duration: 0.65, ease: smoothEase }}
                    >
                      <motion.span
                        className="block whitespace-normal sm:whitespace-nowrap"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {
                                textShadow: [
                                  "0 0 0 rgba(255,255,255,0)",
                                  "0 0 18px rgba(255,255,255,0.06)",
                                  "0 0 0 rgba(255,255,255,0)",
                                ],
                              }
                        }
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {activeTitle.line1}
                      </motion.span>
                      <span className="block bg-gradient-to-r from-[#deb8ff] via-[#b467ff] to-[#8d42ff] bg-clip-text text-transparent">
                        {activeTitle.line2}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </h1>
              </div>
            </motion.div>
          </div>

          <div className="mt-9 w-full z-10" id="student-results">
            <div className="relative mx-auto max-w-[1020px] px-2 pt-10 sm:px-5">
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-[12%] top-12 h-[58%] rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.22)_0%,_rgba(180,103,255,0.08)_34%,_transparent_72%)] blur-3xl"
                style={{ x: useTransform(springX, (val) => val * -0.5), y: useTransform(springY, (val) => val * -0.5) }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: [0.52, 0.76, 0.52],
                        scale: [0.98, 1.02, 0.98],
                      }
                }
                transition={{
                  duration: 10.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Parallax Group Image */}
              <motion.div
                className="relative mx-auto max-w-[980px] isolate"
                style={{ x: useTransform(springX, (val) => val * 0.4), y: useTransform(springY, (val) => val * 0.4) }}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, y: 32, scale: 0.975 }
                }
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1 }
                }
                transition={{ delay: 0.34, duration: 1.15, ease: smoothEase }}
              >
                <div className="pointer-events-none absolute inset-x-[6%] top-[8%] bottom-[10%] rounded-[42px] bg-[radial-gradient(circle_at_50%_30%,rgba(180,103,255,0.28)_0%,rgba(132,54,255,0.16)_38%,rgba(13,8,22,0.78)_100%)] blur-xl" />
                <div className="pointer-events-none absolute inset-x-[12%] bottom-[4%] h-[22%] rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.32)_0%,rgba(180,103,255,0.12)_42%,transparent_78%)] blur-3xl" />

                <motion.img
                  className="relative z-[1] w-full object-cover mix-blend-screen"
                  src="/hero.png"
                  alt="GMC student scholarship winners group"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.008, 1],
                          y: [0, -2, 0],
                        }
                  }
                  transition={{
                    duration: 11.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            <motion.div
              className="mt-[18px] flex flex-col items-center gap-[18px]"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.95, ease: smoothEase }}
            >
              <motion.div
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 14 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{ once: true, amount: 0.55 }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -2, 0],
                      }
                }
                transition={{
                  opacity: { duration: 0.45, ease: smoothEase },
                  y: { duration: 0.45, ease: smoothEase },
                  default: {
                    duration: 6.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-full max-w-[740px]"
              >
                <Link
                  className="btn-primary-site min-h-[76px] w-full justify-between rounded-[24px] px-5 py-4 text-left sm:min-h-[88px] sm:px-6 shadow-[0_20px_50px_rgba(31,143,138,0.22)] hover:shadow-[0_22px_60px_rgba(59,197,188,0.48)] transition-all duration-300"
                  to="/program"
                >
                  <span className="relative flex min-w-0 flex-col pr-4">
                    <span className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#d9fffb] sm:text-[0.72rem]">
                      Start Here
                    </span>
                    <span className="[font-family:'Outfit',sans-serif] text-[1.05rem] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[1.4rem] md:text-[1.72rem]">
                      Book Consultation Session
                    </span>
                  </span>
                  <span className="relative ml-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:bg-white/16 sm:h-14 sm:w-14">
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                      size={24}
                    />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-3 max-md:flex-col"
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 14 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.9, ease: smoothEase }}
              >
                <div className="flex items-center" aria-hidden="true">
                  <span className="ml-0 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
                  <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
                  <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
                  <span className="-ml-2.5 h-11 w-11 rounded-full border-2 border-[#0b0910] bg-gradient-to-br from-[#b467ffe6] to-[#55a0ffb3]" />
                </div>
                <div className="text-left max-md:text-center">
                  <strong className="mb-1 block [font-family:'Outfit',sans-serif] text-[0.96rem] font-semibold text-white">
                    Trusted by scholarship-focused students
                  </strong>
                  <span className="text-[0.92rem] leading-[1.5] text-[#c9c2d1]">
                    Profile guidance, document review, and a smarter admission
                    roadmap.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
