import {
  about,
  certifications,
  contact,
  education,
  experiences,
  newsletterForm,
  resume,
  skillCategories,
} from "@/resources";
import {
  Background,
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  type Opacity,
  Row,
  type SpacingToken,
  StatusIndicator,
  Tag,
  Text,
} from "@once-ui-system/core";
import { ContactActions } from "./ContactActions";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <Row
      fillWidth
      horizontal="between"
      vertical="end"
      gap="16"
      s={{ direction: "column", horizontal: "start", vertical: "start" }}
    >
      <Column gap="8" maxWidth={40}>
        <Text variant="label-default-s" onBackground="brand-medium">
          {eyebrow}
        </Text>
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          {title}
        </Heading>
        {description && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {description}
          </Text>
        )}
      </Column>
      {action}
    </Row>
  );
}

export function AboutSection() {
  return (
    <Column as="section" id="about" fillWidth gap="24" style={{ scrollMarginTop: "5.5rem" }}>
      <SectionHeader
        eyebrow="ABOUT ME"
        title="Engineering production backends and practical AI systems"
        action={
          <Button href={about.path} variant="secondary" size="s" arrowIcon>
            Full Engineering Dossier
          </Button>
        }
      />

      <Row fillWidth gap="20" s={{ direction: "column" }} vertical="stretch">
        <Column flex={7} background="surface" border radius="l" padding="24" gap="16">
          {about.intro.summaryParagraphs.map((paragraph) => (
            <Text
              key={paragraph}
              variant="body-default-m"
              onBackground="neutral-medium"
              style={{ lineHeight: "1.7" }}
            >
              {paragraph}
            </Text>
          ))}
        </Column>

        <Column flex={5} background="surface" border radius="l" padding="24" gap="16">
          <Text variant="label-strong-s" onBackground="neutral-strong">
            Core Engineering Focus
          </Text>
          <Row gap="8" wrap>
            {about.intro.interests.map((interest) => (
              <Tag key={interest} size="s">
                {interest}
              </Tag>
            ))}
          </Row>
        </Column>
      </Row>
    </Column>
  );
}

export function ExperienceSection() {
  return (
    <Column as="section" id="experience" fillWidth gap="24" style={{ scrollMarginTop: "5.5rem" }}>
      <SectionHeader
        eyebrow="EXPERIENCE"
        title="Production AI engineering, cloud pipelines, and enterprise automation"
      />

      <Column fillWidth gap="16">
        {experiences.map((exp, index) => (
          <Column
            key={`${exp.company}-${exp.role}-${index}`}
            background="surface"
            border
            radius="l"
            padding="24"
            gap="16"
            className="surface-card"
          >
            <Row
              fillWidth
              horizontal="between"
              vertical="start"
              gap="12"
              s={{ direction: "column" }}
            >
              <Column gap="4">
                <Row gap="8" vertical="center" wrap>
                  {exp.current && <StatusIndicator color="green" ariaLabel="Current role" />}
                  <Heading as="h3" variant="heading-strong-l">
                    {exp.role}
                  </Heading>
                  <Text variant="heading-default-l" onBackground="brand-medium">
                    — {exp.company}
                  </Text>
                </Row>
                <Text variant="code-default-xs" onBackground="neutral-weak">
                  {exp.timeframe} · {exp.location}
                </Text>
              </Column>

              {exp.current && (
                <Tag size="s" scheme="brand">
                  Current Role
                </Tag>
              )}
            </Row>

            <Row gap="8" wrap>
              {exp.technologies.map((tech) => (
                <Tag key={tech} size="s">
                  {tech}
                </Tag>
              ))}
            </Row>

            <Column as="ul" gap="8" style={{ paddingLeft: "1.15rem", margin: 0 }}>
              {exp.achievements.map((achievement) => (
                <Text
                  as="li"
                  key={achievement}
                  variant="body-default-s"
                  onBackground="neutral-medium"
                  style={{ lineHeight: "1.65" }}
                >
                  {achievement}
                </Text>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}

export function SkillsSection() {
  return (
    <Column as="section" id="skills" fillWidth gap="24" style={{ scrollMarginTop: "5.5rem" }}>
      <SectionHeader
        eyebrow="TECHNICAL SKILLS"
        title="Backend, database, AI agent, and quality engineering stack"
      />

      <Grid columns="2" s={{ columns: 1 }} gap="20" fillWidth>
        {skillCategories.map((category) => (
          <Column
            key={category.title}
            background="surface"
            border
            radius="l"
            padding="24"
            gap="16"
            className="surface-card"
          >
            <Row gap="12" vertical="center">
              <Row background="page" border radius="m" padding="8" center>
                <Icon name={category.icon} size="s" onBackground="brand-medium" />
              </Row>
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-m">
                  {category.title}
                </Heading>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {category.subtitle}
                </Text>
              </Column>
            </Row>

            <Row gap="8" wrap>
              {category.skills.map((skill) => (
                <Tag key={skill.name} size="m" prefixIcon={skill.icon}>
                  {skill.name}
                </Tag>
              ))}
            </Row>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}

export function EducationSection() {
  return (
    <Column as="section" id="education" fillWidth gap="24" style={{ scrollMarginTop: "5.5rem" }}>
      <SectionHeader
        eyebrow="EDUCATION & CREDENTIALS"
        title="Academic foundation, certifications, and resume"
      />

      <Grid columns="2" s={{ columns: 1 }} gap="20" fillWidth>
        <Column gap="16">
          {education.map((edu) => (
            <Column
              key={edu.institution}
              background="surface"
              border
              radius="l"
              padding="24"
              gap="8"
              className="surface-card"
            >
              <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                <Row gap="8" vertical="center">
                  <Icon name="academic" size="s" onBackground="brand-medium" />
                  <Heading as="h3" variant="heading-strong-m">
                    {edu.institution}
                  </Heading>
                </Row>
                <Tag size="s">{edu.score}</Tag>
              </Row>

              <Text variant="label-default-m" onBackground="neutral-strong">
                {edu.degree}
              </Text>

              <Text variant="code-default-xs" onBackground="neutral-weak">
                {edu.timeframe} · {edu.location}
              </Text>

              {edu.highlights?.map((item) => (
                <Text
                  key={item}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  paddingTop="4"
                  style={{ lineHeight: "1.55" }}
                >
                  {item}
                </Text>
              ))}
            </Column>
          ))}
        </Column>

        <Column gap="16">
          <Column background="surface" border radius="l" padding="24" gap="16">
            <Row gap="8" vertical="center">
              <Icon name="shield" size="s" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-m">
                Certifications
              </Heading>
            </Row>

            <Column gap="12">
              {certifications.map((cert) => (
                <Column key={cert.title} background="page" border radius="m" padding="16" gap="4">
                  <Text variant="label-strong-s" onBackground="neutral-strong">
                    {cert.title}
                  </Text>
                  <Text variant="body-default-xs" onBackground="brand-medium">
                    Issued by {cert.issuer}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>

          <Column background="surface" border="brand-alpha-medium" radius="l" padding="24" gap="12">
            <Row gap="8" vertical="center">
              <Icon name="document" size="s" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-m">
                {resume.title}
              </Heading>
            </Row>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              style={{ lineHeight: "1.55" }}
            >
              {resume.description}
            </Text>
            <Row gap="12" wrap paddingTop="4">
              <Button
                href={resume.path}
                download={resume.filename}
                variant="primary"
                size="m"
                prefixIcon="download"
                className="touch-target"
              >
                Download Resume (PDF)
              </Button>
              <Button href="/about" variant="secondary" size="m" arrowIcon className="touch-target">
                View Full CV Page
              </Button>
            </Row>
          </Column>
        </Column>
      </Grid>
    </Column>
  );
}

export function ContactSection() {
  return (
    <Column
      as="section"
      id="contact"
      overflow="hidden"
      fillWidth
      padding="xl"
      s={{ padding: "l" }}
      radius="l"
      horizontal="center"
      align="center"
      background="surface"
      border
      gap="24"
      style={{ scrollMarginTop: "5.5rem", position: "relative" }}
    >
      <Background
        top="0"
        left="0"
        position="absolute"
        pointerEvents="none"
        mask={{
          x: newsletterForm.effects.mask.x,
          y: newsletterForm.effects.mask.y,
          radius: newsletterForm.effects.mask.radius,
          cursor: newsletterForm.effects.mask.cursor,
        }}
        gradient={{
          display: newsletterForm.effects.gradient.display,
          opacity: newsletterForm.effects.gradient.opacity as Opacity,
          x: newsletterForm.effects.gradient.x,
          y: newsletterForm.effects.gradient.y,
          width: newsletterForm.effects.gradient.width,
          height: newsletterForm.effects.gradient.height,
          tilt: newsletterForm.effects.gradient.tilt,
          colorStart: newsletterForm.effects.gradient.colorStart,
          colorEnd: newsletterForm.effects.gradient.colorEnd,
        }}
        dots={{
          display: newsletterForm.effects.dots.display,
          opacity: newsletterForm.effects.dots.opacity as Opacity,
          size: newsletterForm.effects.dots.size as SpacingToken,
          color: newsletterForm.effects.dots.color,
        }}
      />

      <Column maxWidth="s" horizontal="center" gap="12" zIndex={1}>
        <Text variant="label-default-s" onBackground="brand-medium">
          {contact.eyebrow.toUpperCase()}
        </Text>
        <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
          {contact.headline}
        </Heading>
        <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" align="center">
          {contact.description}
        </Text>
      </Column>

      <Column zIndex={1} horizontal="center" gap="16">
        <ContactActions />

        <Row gap="16" wrap horizontal="center" vertical="center">
          <Row gap="4" vertical="center">
            <Icon name="email" size="xs" onBackground="neutral-weak" />
            <Text variant="code-default-xs" onBackground="neutral-weak">
              {contact.email}
            </Text>
          </Row>
          <Row gap="4" vertical="center">
            <Icon name="mapPin" size="xs" onBackground="neutral-weak" />
            <Text variant="code-default-xs" onBackground="neutral-weak">
              {contact.location}
            </Text>
          </Row>
          <Row gap="8" vertical="center">
            <StatusIndicator color="green" ariaLabel="Available" />
            <Text variant="code-default-xs" onBackground="neutral-weak">
              {contact.availability}
            </Text>
          </Row>
        </Row>
      </Column>
    </Column>
  );
}
