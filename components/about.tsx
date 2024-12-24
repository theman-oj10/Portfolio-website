"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// export default function About() {
  // const { ref } = useSectionInView("About", 0.8);

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About me</SectionHeading>
//       <p className="mb-3">
//         Hi, I&apos;m Manoj, a third year Computer Science major with a second major
//         in Quantitative Finance at the National University of Singapore. I am specialising
//         in Artificial Intelligence and Database Systems.
//       </p>
//       <p>
//         I am passionate about using my technical skills to create meaningful solutions.
//       </p>
//     </motion.section>
//   );
// }
