import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { about, baseURL, person, resume, social } from "@/resources";
import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import React from "react";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.certifications.title,
      display: about.certifications.display,
      items: [],
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m" paddingY="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar
              value={person.initials}
              size="xl"
              statusIndicator={{ color: "green" }}
              aria-label={person.name}
            />
            <Row gap="8" vertical="center">
              <Icon onBackground="brand-medium" name="mapPin" />
              <Text variant="body-default-s">{person.city}</Text>
            </Row>
            <Text variant="code-default-xs" onBackground="brand-medium" align="center">
              {person.availability}
            </Text>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8" horizontal="center">
                {person.languages.map((language) => (
                  <Tag key={language} size="s">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="heading-default-l"
              onBackground="brand-medium"
              marginTop="4"
            >
              {person.role}
            </Text>
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="start"
              fitWidth
              data-border="rounded"
            >
              <Button
                href={resume.path}
                download={resume.filename}
                prefixIcon="download"
                size="s"
                variant="primary"
              >
                Download Resume
              </Button>
              {social
                .filter((item) => item.essential)
                .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                            ariaLabel={item.name}
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
            </Row>
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-m" fillWidth gap="16" marginBottom="40">
              {about.intro.summaryParagraphs.map((para) => (
                <Text key={para} variant="body-default-l" onBackground="neutral-medium">
                  {para}
                </Text>
              ))}
              <Row gap="8" wrap paddingTop="8">
                {about.intro.interests.map((interest) => (
                  <Tag key={interest} size="s">
                    {interest}
                  </Tag>
                ))}
              </Row>
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="24">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="24" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    background="surface"
                    border
                    radius="l"
                    padding="24"
                    gap="12"
                  >
                    <Row fillWidth horizontal="between" vertical="end" wrap gap="8">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="code-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="label-default-m" onBackground="brand-medium">
                      {experience.role}
                    </Text>
                    <Row gap="8" wrap>
                      {experience.technologies.map((tech) => (
                        <Tag key={tech} size="s">
                          {tech}
                        </Tag>
                      ))}
                    </Row>
                    <Column as="ul" gap="8" style={{ paddingLeft: "1.15rem", margin: 0 }}>
                      {experience.achievements.map((achievement: React.ReactNode, idx: number) => (
                        <Text
                          as="li"
                          variant="body-default-s"
                          onBackground="neutral-medium"
                          key={`${experience.company}-${idx}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="24"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="16" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    background="surface"
                    border
                    radius="l"
                    padding="20"
                    gap="4"
                  >
                    <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                      <Text id={institution.name} variant="heading-strong-m">
                        {institution.name}
                      </Text>
                      <Tag size="s">{institution.score}</Tag>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certifications.display && (
            <>
              <Heading
                as="h2"
                id={about.certifications.title}
                variant="display-strong-s"
                marginBottom="24"
              >
                {about.certifications.title}
              </Heading>
              <Column fillWidth gap="12" marginBottom="40">
                {about.certifications.items.map((cert) => (
                  <Column
                    key={cert.title}
                    fillWidth
                    background="surface"
                    border
                    radius="l"
                    padding="20"
                    gap="4"
                  >
                    <Text variant="heading-strong-s">{cert.title}</Text>
                    <Text variant="body-default-s" onBackground="brand-medium">
                      Issued by {cert.issuer}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="24"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="16">
                {about.technical.skills.map((skill, index) => (
                  <Column
                    key={`${skill.title}-${index}`}
                    fillWidth
                    background="surface"
                    border
                    radius="l"
                    padding="20"
                    gap="12"
                  >
                    <Text id={skill.title} variant="heading-strong-m">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="m" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
