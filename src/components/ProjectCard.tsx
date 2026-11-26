"use client";

import {
  Button,
  Carousel,
  Column,
  Dialog,
  Heading,
  Media,
  Row,
  Tag,
  Text,
} from "@once-ui-system/core";
import { useState } from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  subtitle?: string;
  role?: string;
  tag?: string;
  hasContent: boolean;
  description: string;
  contribution?: string;
  stack?: string[];
  highlights?: string[];
  github?: string;
  link?: string;
  hasLiveDemo?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  images = [],
  title,
  subtitle,
  role,
  tag,
  hasContent,
  description,
  contribution,
  stack = [],
  highlights = [],
  github,
  link,
  hasLiveDemo = false,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <Column background="surface" border radius="l" padding="24" gap="20" className="surface-card">
        {images.length === 1 && (
          <Media
            priority={priority}
            sizes="(max-width: 960px) 100vw, 920px"
            aspectRatio="16 / 9"
            radius="m"
            border
            alt={`${title} architecture diagram`}
            src={images[0]}
            enlarge
          />
        )}

        {images.length > 1 && (
          <Carousel
            sizes="(max-width: 960px) 100vw, 920px"
            items={images.map((image) => ({
              slide: image,
              alt: `${title} preview`,
            }))}
          />
        )}

        <Column gap="12" fillWidth>
          <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
            {tag && (
              <Tag size="s" scheme="neutral">
                {tag}
              </Tag>
            )}
            {role && (
              <Text variant="code-default-xs" onBackground="neutral-weak">
                {role}
              </Text>
            )}
          </Row>

          <Column gap="4">
            <Heading as="h3" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="label-default-m" onBackground="brand-medium">
                {subtitle}
              </Text>
            )}
          </Column>

          {description?.trim() && (
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              style={{ lineHeight: "1.65" }}
            >
              {description}
            </Text>
          )}
        </Column>

        {stack.length > 0 && (
          <Row gap="8" wrap>
            {stack.map((tech) => (
              <Tag key={tech} size="s">
                {tech}
              </Tag>
            ))}
          </Row>
        )}

        {highlights.length > 0 && (
          <Column gap="8">
            <Text variant="label-strong-xs" onBackground="neutral-strong">
              Key Engineering Highlights
            </Text>
            <Column as="ul" gap="4" style={{ paddingLeft: "1.15rem", margin: 0 }}>
              {highlights.map((item) => (
                <Text
                  as="li"
                  key={item}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  style={{ lineHeight: "1.55" }}
                >
                  {item}
                </Text>
              ))}
            </Column>
          </Column>
        )}

        {contribution && (
          <Column background="page" border radius="m" padding="16" gap="4">
            <Text variant="label-strong-xs" onBackground="brand-medium">
              My Contribution
            </Text>
            <Text
              variant="body-default-s"
              onBackground="neutral-medium"
              style={{ lineHeight: "1.55" }}
            >
              {contribution}
            </Text>
          </Column>
        )}

        <Row gap="12" wrap vertical="center" paddingTop="4">
          {hasContent && (
            <Button href={href} variant="primary" size="m" arrowIcon>
              Read Case Study
            </Button>
          )}

          <Button
            variant="secondary"
            size="m"
            prefixIcon="eye"
            onClick={() => setPreviewOpen(true)}
          >
            Architecture Quick View
          </Button>

          {github ? (
            <Button
              href={github}
              variant="tertiary"
              size="m"
              prefixIcon="github"
              suffixIcon="arrowUpRight"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          ) : (
            <Tag size="m" prefixIcon="github">
              GitHub Repo · Link Pending
            </Tag>
          )}

          {link ? (
            <Button
              href={link}
              variant="tertiary"
              size="m"
              prefixIcon="openLink"
              suffixIcon="arrowUpRight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          ) : (
            hasLiveDemo && (
              <Tag size="m" prefixIcon="openLink">
                Live Demo · Link Pending
              </Tag>
            )
          )}
        </Row>
      </Column>

      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={title}
        description={subtitle}
        style={{ maxHeight: "86vh" }}
        footer={
          <Row gap="12" wrap horizontal="end" fillWidth>
            {hasContent && (
              <Button href={href} variant="primary" size="s" arrowIcon>
                Open Full Case Study
              </Button>
            )}
            <Button variant="secondary" size="s" onClick={() => setPreviewOpen(false)}>
              Close
            </Button>
          </Row>
        }
      >
        <Column gap="16" fillWidth>
          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.6" }}
          >
            {description}
          </Text>

          {contribution && (
            <Column background="surface" border radius="m" padding="16" gap="4">
              <Text variant="label-strong-xs" onBackground="brand-medium">
                Role &amp; Engineering Contribution
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {contribution}
              </Text>
            </Column>
          )}

          {highlights.length > 0 && (
            <Column gap="8">
              <Text variant="label-strong-s">System Capabilities</Text>
              <Column as="ul" gap="4" style={{ paddingLeft: "1.15rem", margin: 0 }}>
                {highlights.map((item) => (
                  <Text as="li" key={item} variant="body-default-s" onBackground="neutral-weak">
                    {item}
                  </Text>
                ))}
              </Column>
            </Column>
          )}

          {stack.length > 0 && (
            <Column gap="8">
              <Text variant="label-strong-s">Technology Stack</Text>
              <Row gap="8" wrap>
                {stack.map((tech) => (
                  <Tag key={tech} size="s">
                    {tech}
                  </Tag>
                ))}
              </Row>
            </Column>
          )}
        </Column>
      </Dialog>
    </>
  );
};
