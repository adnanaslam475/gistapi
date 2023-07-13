export type githubUser = {
  comments: number;
  comments_url: string;
  commits_url: string;
  created_at: string;
  description: string;
  files: object;
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  owner: {
    avatar_url: string;
    html_url: string;
    login: string;
    starred_url: string;
  };
  public: boolean;
  truncated: boolean;
  updated_at: string;
  url: string;
  user: null;
};
export type contentsTypes = {
  data:githubUser[] | any;
  isLoading: boolean;
  error: string;
  errorLogs: boolean;
};
