"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-200"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 text-gray-700" />
      </Button>
    </div>
  );
}
