type SearchCharactersQueryParamsType = {
  path: string;
  page: number;
  character?: string;
  status?: string | null;
  gender?: string | null;
};

export function formatSearchCharactersQuery(
  options: SearchCharactersQueryParamsType,
): string {
  var query = `${options.path}?page=${options.page}`;
  query += options.character ? "&name=" + options.character : "";
  query += options.status?.length ? "&status=" + options.status : "";
  query += options.gender?.length ? "&gender=" + options.gender : "";

  return query;
}
