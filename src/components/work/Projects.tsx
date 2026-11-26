import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const orderA = a.metadata.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.metadata.order ?? Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="24">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index === 0}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          subtitle={post.metadata.subtitle}
          role={post.metadata.role}
          tag={post.metadata.tag}
          description={post.metadata.summary}
          contribution={post.metadata.contribution}
          stack={post.metadata.stack}
          highlights={post.metadata.highlights}
          hasContent={post.content.trim() !== ""}
          github={post.metadata.github || ""}
          link={post.metadata.link || ""}
          hasLiveDemo={post.metadata.hasLiveDemo}
        />
      ))}
    </Column>
  );
}
