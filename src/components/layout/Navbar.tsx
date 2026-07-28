import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { NAV_LINKS } from "@/constants/nav";
import { RESUME_URL } from "@/constants/social";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/utils/scrollTo";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { isScrolled } = useScrollDirection();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href));
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-surface !border-x-0 !border-t-0 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80 md:text-2xl"
          aria-label="Go to home"
        >
          Ankitha<span className="text-accent-hover">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href;
            return (
              <li key={link.href} className="relative">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-accent-hover"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Resume CTA (desktop) */}
        <div className="hidden lg:block">
          <Button
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            icon={<HiOutlineArrowDownTray />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-surface overflow-hidden border-t-0 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                      activeId === link.href
                        ? "bg-accent/10 text-white"
                        : "text-muted hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Button
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<HiOutlineArrowDownTray />}
                  className="w-full"
                >
                  Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
