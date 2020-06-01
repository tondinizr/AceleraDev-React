export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
}

export const buttonsHelper = [
  { title: "Nome", filter: "name" },
  { title: "País", filter: "country" },
  { title: "Admissão", filter: "admissionDate" },
  { title: "Empresa", filter: "company" },
  { title: "Departamento", filter: "department" },
];

export const sortBy = (arr, filter = "id", desc = true) => {
  const tmp = [...arr];
  const greater = desc ? 1 : -1;
  const lower = greater * -1;
  const equal = 0;
  tmp.sort((a, b) =>
    a[filter] === b[filter] ? equal : a[filter] > b[filter] ? greater : lower
  );
  return tmp;
};

export const searchFilter = (arr, query, filter) => {
  if (!query) return arr;
  // Search list by name
  const tmp = [...arr].filter(({ name }) => name.toLowerCase().includes(query))
  return sortBy(tmp, filter);
};
