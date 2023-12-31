import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function useFadeIn({
  customVars,
  delay,
  duration,
  repeat,
  threshold,
}) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: threshold || 0.75,
    triggerOnce: repeat ? false : true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const vars = customVars || {
    hidden: { y:10, opacity: 0 },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: duration || 1,
      },
    },
  };

  return { ref, ctrls, vars };
}
