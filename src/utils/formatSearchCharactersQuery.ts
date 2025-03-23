type SearchCharactersQueryParamsType = {
  path: string;
  page: number;
  character?: string;
  status?: string[];
  gender?: string[];
};

export function formatSearchCharactersQuery(
  options: SearchCharactersQueryParamsType,
): string {
  var query = `${options.path}?page=${options.page}`;
  query += options.character ? "&name=" + options.character : "";
  query += options.status?.length ? "&status=" + options.status?.join(",") : "";
  query += options.gender?.length ? "&gender=" + options.gender?.join(",") : "";

  return query;
}
