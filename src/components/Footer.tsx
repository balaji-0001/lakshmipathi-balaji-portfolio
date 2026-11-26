import { person, resume, social } from "@/resources";
import { IconButton, Row, SmartLink, Text } from "@once-ui-system/core";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="16" paddingY="24" horizontal="center" borderTop>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row gap="8" wrap horizontal="center" vertical="center">
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text as="span" onBackground="neutral-weak">
              © {currentYear}{" "}
            </Text>
            {person.name}
          </Text>
          <Text as="span" variant="body-default-s" onBackground="neutral-weak">
            · {person.city} · Built with{" "}
            <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
          </Text>
        </Row>

        <Row gap="12" vertical="center">
          <SmartLink href={resume.path} download={resume.filename}>
            <Text variant="label-default-s" onBackground="brand-medium">
              Resume PDF
            </Text>
          </SmartLink>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  ariaLabel={item.name}
                  size="s"
                  variant="ghost"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="touch-target"
                />
              ),
          )}
        </Row>
      </Row>
    </Row>
  );
};
