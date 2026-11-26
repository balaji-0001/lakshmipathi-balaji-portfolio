"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import type React from "react";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mountedTheme, setMountedTheme] = useState("dark");

  useEffect(() => {
    setMountedTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const currentTheme = theme === "light" || theme === "dark" ? theme : mountedTheme;
  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      size="s"
      onClick={() => {
        setMountedTheme(nextTheme);
        setTheme(nextTheme);
      }}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className="touch-target"
    />
  );
};
