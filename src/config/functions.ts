import * as c from "@/config/constants";

export function countReports(notionWorkTasks: any, category: string) {
  return notionWorkTasks.results.filter((result: any) => {
    return (
      result.properties.Category.select.name == category &&
      result.properties.Status.status.name == c.PUBLISHED
    );
  }).length;
}

export function filterOrganizer(
  notionOrganizers: any,
  role: string | string[]
) {
  return notionOrganizers.results.filter((result: any) => {
    return Array.isArray(role)
      ? role.includes(result.properties.Role.select.name)
      : result.properties.Role.select.name === role;
  });
}

export function getOrganizerByRole(notionOrganizers: any, role: string) {
  return notionOrganizers.results.filter((result: any) => {
    return result.properties.Role.select.name === role;
  })[0];
}
