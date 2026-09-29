import type { ReactNode } from "react";
import Link from "next/link";
import { appInfo } from "@/config/site";

const number = new Intl.NumberFormat("en-US");

export function AppInfo() {
  const rows: [string, ReactNode][] = [
    ["App name", appInfo.name],
    ["Version", appInfo.versionLabel],
    ["Size", appInfo.size],
    [
      "Developer",
      <Link key="developer" href="/" className="inline-link">
        {appInfo.developer}
      </Link>,
    ],
    ["Category", appInfo.category],
    ["Price", appInfo.price],
    ["Region", appInfo.region],
    ["Downloads", number.format(appInfo.downloads)],
    [
      "Average Rating",
      <>
        {appInfo.ratingValue}/{appInfo.bestRating}{" "}
        <span className="app-info-muted">({number.format(appInfo.ratingCount)} ratings)</span>
      </>,
    ],
  ];

  return (
    <div className="app-info">
      <table>
        <caption>App Information</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
