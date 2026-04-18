export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/the2rivage");
  return response.json();
};