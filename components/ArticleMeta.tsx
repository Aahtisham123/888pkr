import { siteConfig } from "@/config/site";
import { getReadingTimeMinutes } from "@/lib/article-outline";
import { Icon } from "@/components/Icon";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string): string | null {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : dateFormat.format(date);
}

export function ArticleMeta() {
  const { author, publishedDate, updatedDate, editorialDisclosure } = siteConfig;
  const published = publishedDate ? formatDate(publishedDate) : null;
  const updated = updatedDate && updatedDate !== publishedDate ? formatDate(updatedDate) : null;
  const minutes = getReadingTimeMinutes();

  return (
    <div className="container">
      <div className="article-meta">
        <ul className="meta-list">
          {author.name && (
            <li>
              <Icon name="user" size={16} />
              <span>
                By{" "}
                {author.profileUrl ? (
                  <a href={author.profileUrl} rel="author">
                    {author.name}
                  </a>
                ) : (
                  <strong>{author.name}</strong>
                )}
              </span>
            </li>
          )}
          {published && (
            <li>
              <Icon name="calendar" size={16} />
              <span>
                Published <time dateTime={publishedDate}>{published}</time>
              </span>
            </li>
          )}
          {updated && (
            <li>
              <Icon name="calendar" size={16} />
              <span>
                Updated <time dateTime={updatedDate}>{updated}</time>
              </span>
            </li>
          )}
          <li>
            <Icon name="clock" size={16} />
            <span>{minutes} min read</span>
          </li>
        </ul>
        {editorialDisclosure && <p className="meta-disclosure">{editorialDisclosure}</p>}
      </div>
    </div>
  );
}
