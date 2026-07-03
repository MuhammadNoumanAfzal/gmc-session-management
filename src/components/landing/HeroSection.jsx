import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { floatingIcons } from "../../data/masterclass";

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1];
  const heroReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <section className="relative overflow-hidden px-0 pt-28 pb-20 md:pt-22 md:pb-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,#050507_0%,#090611_32%,#080510_70%,#050505_100%)]" />
        <motion.div
          className="absolute -top-24 left-[-8%] h-[340px] w-[340px] rounded-full bg-[#8c36ff]/18 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [-12, 10, -12], y: [0, 14, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 10.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[12%] right-[-6%] h-[300px] w-[300px] rounded-full bg-[#b467ff]/14 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [10, -12, 10], y: [0, -10, 0], scale: [1.02, 0.95, 1.02] }
          }
          transition={{ duration: 11.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[12%] left-[12%] h-[220px] w-[220px] rounded-full bg-[#6c2cff]/10 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 16, 0], y: [0, -8, 0], opacity: [0.55, 0.82, 0.55] }
          }
          transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-x-[18%] top-[20%] h-[420px] bg-[radial-gradient(circle,_rgba(180,103,255,0.12)_0%,_rgba(180,103,255,0.05)_28%,_transparent_72%)] blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [0.96, 1.04, 0.96], opacity: [0.45, 0.75, 0.45] }
          }
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
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

      <div className="relative z-[1] mx-auto mt-3 w-full max-w-[1320px] px-4 sm:mt-4 sm:px-5">
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
              <Star className="shrink-0" size={14} fill="currentColor" />
              <span className="leading-tight whitespace-normal">
                Learn From Students Who Won Fully Funded Scholarships
              </span>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[12%] h-[150px] w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.24)_0%,_rgba(180,103,255,0.1)_32%,_transparent_74%)] blur-3xl"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [0.96, 1.05, 0.96], opacity: [0.35, 0.7, 0.35] }
              }
              transition={{
                duration: 6.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative mx-auto mb-5 w-full max-w-[1240px] overflow-hidden rounded-[6px] p-px shadow-[0_24px_80px_rgba(0,0,0,0.36)]"
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

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(237,217,255,0.95),transparent)]"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.45, 1, 0.45], scaleX: [0.92, 1.04, 0.92] }
                }
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative rounded-[5px] bg-[linear-gradient(180deg,rgba(10,10,14,0.98)_0%,rgba(12,9,18,0.96)_100%)] px-4 py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:px-6 md:px-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_0%,transparent_18%,transparent_82%,rgba(180,103,255,0.045)_100%)]" />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-[-12%] left-[-8%] w-[44%] rounded-full bg-[linear-gradient(135deg,rgba(171,98,255,0.16),rgba(171,98,255,0.04),transparent)] blur-3xl"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: ["0%", "18%", "0%"],
                          rotate: [-4, 2, -4],
                          opacity: [0.4, 0.75, 0.4],
                        }
                  }
                  transition={{
                    duration: 8.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-[-18%] right-[-10%] w-[40%] rounded-full bg-[linear-gradient(225deg,rgba(223,198,255,0.16),rgba(122,54,255,0.04),transparent)] blur-3xl"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: ["0%", "-16%", "0%"],
                          rotate: [3, -2, 3],
                          opacity: [0.35, 0.68, 0.35],
                        }
                  }
                  transition={{
                    duration: 9.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-12%] top-0 h-full w-[22%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] blur-md"
                  animate={
                    prefersReducedMotion ? undefined : { x: ["0%", "560%"] }
                  }
                  transition={{
                    duration: 5.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-[#d7b9ff80]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: [0.45, 1, 0.45], scale: [1, 1.08, 1] }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 bottom-5 h-8 w-8 border-r border-b border-[#b467ff88]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-5 right-5 h-6 w-6 border-r border-t border-[#ffffff30]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: [0.18, 0.65, 0.18] }
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 border-b border-l border-[#ffffff24]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: [0.15, 0.55, 0.15] }
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-[12%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(180,103,255,0.65),transparent)]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scaleX: [0.2, 1, 0.2], opacity: [0.35, 0.95, 0.35] }
                  }
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-[10%] -bottom-8 h-10 rounded-full bg-[#b467ff]/30 blur-2xl"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: ["-8%", "8%", "-8%"],
                          opacity: [0.45, 0.8, 0.45],
                        }
                  }
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.16)_0%,_rgba(180,103,255,0.05)_34%,_transparent_72%)] blur-3xl"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [0.96, 1.04, 0.96],
                          opacity: [0.45, 0.82, 0.45],
                        }
                  }
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[8%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#e8d1ff] shadow-[0_0_18px_rgba(232,209,255,0.9)]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { x: ["0%", "820%"], opacity: [0, 1, 1, 0] }
                  }
                  transition={{
                    duration: 6.6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[10%] top-[30%] h-2 w-2 rounded-full bg-[#b467ff] shadow-[0_0_16px_rgba(180,103,255,0.95)]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { y: [0, 18, 0], opacity: [0.35, 1, 0.35] }
                  }
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h1 className="relative [font-family:'Outfit',sans-serif] text-[1.9rem] leading-[1.04] font-bold text-white sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.55rem]">
                  <motion.span
                    className="block whitespace-nowrap"
                    initial={
                      prefersReducedMotion ? undefined : { opacity: 0, y: 18 }
                    }
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                            textShadow: [
                              "0 0 0 rgba(255,255,255,0)",
                              "0 0 18px rgba(255,255,255,0.06)",
                              "0 0 0 rgba(255,255,255,0)",
                            ],
                          }
                    }
                    transition={{
                      delay: 0.28,
                      duration: 0.95,
                      ease: smoothEase,
                    }}
                  >
                    Win admission to top universities with
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={
                      prefersReducedMotion ? undefined : { opacity: 0, y: 18 }
                    }
                    animate={
                      prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    transition={{ delay: 0.42, duration: 1, ease: smoothEase }}
                  >
                    <span className="bg-gradient-to-r from-[#deb8ff] via-[#b467ff] to-[#8d42ff] bg-clip-text text-transparent">
                      fully funded scholarship guidance
                    </span>
                  </motion.span>
                </h1>
              </div>
            </motion.div>
          </div>

          <div className="mt-9 w-full" id="student-results">
            <div className="relative mx-auto max-w-[1020px] px-2 pt-10 sm:px-5">
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-[12%] top-12 h-[58%] rounded-full bg-[radial-gradient(circle,_rgba(180,103,255,0.22)_0%,_rgba(180,103,255,0.08)_34%,_transparent_72%)] blur-3xl"
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

              <motion.div
                className="relative mx-auto max-w-[980px] isolate"
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
                        boxShadow: [
                          "0 18px 40px rgba(140,54,255,0.24)",
                          "0 21px 46px rgba(140,54,255,0.29)",
                          "0 18px 40px rgba(140,54,255,0.24)",
                        ],
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
                  boxShadow: { duration: 0.55, ease: smoothEase },
                  default: {
                    duration: 6.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-full max-w-[740px]"
              >
                <Link
                  className="group relative inline-flex min-h-[70px] w-full items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-[#bb72ff] via-[#b467ff] to-[#9a4df8] px-[18px] text-center [font-family:'Outfit',sans-serif] text-xl font-semibold uppercase text-white shadow-[0_18px_40px_rgba(140,54,255,0.25)] sm:min-h-[82px] sm:px-7 sm:text-[1.65rem] md:text-[2rem]"
                  to="/program"
                >
                  <span className="pointer-events-none absolute inset-y-0 left-[-24%] w-[24%] -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[520%]" />
                  <span className="relative">Book Consultation Session</span>{" "}
                  <ArrowRight
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                    size={22}
                  />
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
