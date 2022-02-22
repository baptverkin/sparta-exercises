import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}



export const getReposUrl = async (nickname: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const result = await response.json();

  const url = result.repos_url;

  if (result.message === "Not Found"){
    throw new Error("Error : user not found");
  }
  return url;
}

export const getRepos = async (url: string): Promise<Repo[]> => {
  const response = await fetch (url);
  const result =  await response.json()
  return result;
}

export const printRepos = (arr: Repo[]): Repo[] => {
   arr.forEach(e => console.log(`${arr.indexOf(e)+1} - ${e.name}`));
  //  console.log("===ligne38===",reposNames)
  return arr
}


export const printRepository = (repo : Repo): void => {
  console.log(repo.name)
  console.log(repo.description)
  console.log(repo.subscribers_count)
  console.log(repo.stargazers_count)
  console.log(repo.language)
  console.log(repo.url)

}

export const getProjectInformations = async (url: string) => {
  const response = await fetch (url);
  const result = await response.json();
  return result;
}

