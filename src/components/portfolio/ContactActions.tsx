"use client";

import { contact, resume, social } from "@/resources";
import { Button, Row, useToast } from "@once-ui-system/core";
import { useState } from "react";

export const ContactActions: React.FC = () => {
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      addToast({
        variant: "success",
        message: `Copied ${contact.email} to clipboard.`,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      addToast({
        variant: "danger",
        message: "Unable to copy email automatically. Please use the Email button.",
      });
    }
  };

  const github = social.find((s) => s.name === "GitHub");
  const linkedin = social.find((s) => s.name === "LinkedIn");

  return (
    <Row gap="12" wrap horizontal="center" vertical="center">
      <Button
        href={`mailto:${contact.email}`}
        variant="primary"
        size="m"
        prefixIcon="email"
        className="touch-target"
      >
        Email Me
      </Button>

      <Button
        variant="secondary"
        size="m"
        prefixIcon={copied ? "check" : "copy"}
        onClick={handleCopyEmail}
        className="touch-target"
      >
        {copied ? "Copied Email" : "Copy Email"}
      </Button>

      {github && (
        <Button
          href={github.link}
          variant="tertiary"
          size="m"
          prefixIcon="github"
          suffixIcon="arrowUpRight"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target"
        >
          GitHub
        </Button>
      )}

      {linkedin && (
        <Button
          href={linkedin.link}
          variant="tertiary"
          size="m"
          prefixIcon="linkedin"
          suffixIcon="arrowUpRight"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target"
        >
          LinkedIn
        </Button>
      )}

      <Button
        href={resume.path}
        download={resume.filename}
        variant="secondary"
        size="m"
        prefixIcon="download"
        className="touch-target"
      >
        Download Resume
      </Button>
    </Row>
  );
};
