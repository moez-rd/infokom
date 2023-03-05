import * as c from "@/lib/constants";

export function countReports(notionWorkPrograms: any, category: string) {
  return notionWorkPrograms.results.filter((result: any) => {
    return (
      result.properties.Category.select.name == category &&
      result.properties.Status.status.name == c.PUBLISHED
    );
  }).length;
}

export function filterOrganizer(notionOrganizers: any, role: string) {
  return notionOrganizers.results.filter((result: any) => {
    return result.properties.Role.select.name == role;
  });
}
