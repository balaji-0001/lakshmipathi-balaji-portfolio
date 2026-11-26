"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Column,
  Drawer,
  Fade,
  Line,
  NavIcon,
  Row,
  SmartLink,
  StatusIndicator,
  Text,
  ToggleButton,
} from "@once-ui-system/core";

import { display, navigation, person, resume, social } from "@/resources";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(`${timeString} IST`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 15000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = navigation
      .map((item) => item.sectionId)
      .filter((id): id is string => Boolean(id));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0.05,
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  const isSelected = (sectionId?: string) => {
    if (pathname.startsWith("/work")) {
      return sectionId === "projects";
    }
    if (pathname.startsWith("/about")) {
      return sectionId === "about";
    }
    if (pathname === "/") {
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <>
      <Fade m={{ hide: true }} fillWidth position="fixed" height="80" zIndex={4} />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        top="0"
        as="header"
        zIndex={5}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        {/* Desktop Navigation */}
        <Row fillWidth vertical="center" horizontal="between" m={{ hide: true }}>
          <Row paddingLeft="12" flex={1} vertical="center" gap="8" textVariant="body-default-s">
            {display.location && (
              <Row vertical="center" gap="8">
                <StatusIndicator color="green" ariaLabel="Available for opportunities" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {person.city}
                </Text>
              </Row>
            )}
          </Row>

          <Row
            as="nav"
            aria-label="Primary navigation"
            background="page"
            border
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="2" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {navigation.map((item) => (
                <ToggleButton
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  size="s"
                  selected={isSelected(item.sectionId)}
                  onClick={() => {
                    if (pathname === "/" && item.sectionId) {
                      setActiveSection(item.sectionId);
                    }
                  }}
                />
              ))}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" marginX="4" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>

          <Row
            flex={1}
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="16"
          >
            {display.time && (
              <Text variant="code-default-xs" onBackground="neutral-weak">
                <TimeDisplay timeZone={person.location} />
              </Text>
            )}
          </Row>
        </Row>

        {/* Mobile / Tablet Navigation Bar */}
        <Row
          hide
          m={{ hide: false }}
          fillWidth
          background="page"
          border
          radius="l"
          shadow="m"
          paddingX="12"
          paddingY="8"
          horizontal="between"
          vertical="center"
          className={styles.mobileBar}
        >
          <SmartLink href="/" aria-label={`${person.name} home`}>
            <Row vertical="center" gap="8" className="touch-target">
              <Avatar value={person.initials} size="s" statusIndicator={{ color: "green" }} />
              <Column gap="0">
                <Text variant="label-strong-s" onBackground="neutral-strong">
                  {person.name}
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  Backend &amp; AI Systems
                </Text>
              </Column>
            </Row>
          </SmartLink>

          <Row gap="8" vertical="center">
            {display.themeSwitcher && <ThemeToggle />}
            <NavIcon
              active={drawerOpen}
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
              className="touch-target"
              style={{ minWidth: "44px", minHeight: "44px" }}
            />
          </Row>
        </Row>
      </Row>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        side="right"
        size="s"
        background="page"
        title="Navigation"
        description={person.role}
        footer={
          <Column fillWidth gap="8">
            <Button
              href={resume.path}
              download={resume.filename}
              prefixIcon="download"
              fillWidth
              size="m"
              onClick={() => setDrawerOpen(false)}
            >
              Download Resume
            </Button>
            <Row gap="8" horizontal="center" paddingTop="4">
              {social.map((item) => (
                <Button
                  key={item.name}
                  href={item.link}
                  variant="secondary"
                  size="s"
                  prefixIcon={item.icon}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </Button>
              ))}
            </Row>
          </Column>
        }
      >
        <Column as="nav" aria-label="Mobile navigation" fillWidth gap="8">
          {navigation.map((item) => (
            <ToggleButton
              key={item.label}
              href={item.href}
              prefixIcon={item.icon}
              label={item.label}
              size="l"
              horizontal="start"
              fillWidth
              selected={isSelected(item.sectionId)}
              onClick={() => {
                if (pathname === "/" && item.sectionId) {
                  setActiveSection(item.sectionId);
                }
                setDrawerOpen(false);
              }}
              className="touch-target"
            />
          ))}
          <Line background="neutral-alpha-weak" marginY="8" />
          <ToggleButton
            href="/about"
            prefixIcon="document"
            label="Full CV Dossier"
            size="l"
            horizontal="start"
            fillWidth
            selected={pathname === "/about"}
            onClick={() => setDrawerOpen(false)}
            className="touch-target"
          />
          <ToggleButton
            href="/work"
            prefixIcon="codeBracket"
            label="All Case Studies"
            size="l"
            horizontal="start"
            fillWidth
            selected={pathname.startsWith("/work")}
            onClick={() => setDrawerOpen(false)}
            className="touch-target"
          />
        </Column>
      </Drawer>
    </>
  );
};
