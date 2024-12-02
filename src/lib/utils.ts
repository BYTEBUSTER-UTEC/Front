import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseURL() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return url;
}

export function sendGitHubOAuth() {
  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

  if (!client_id) {
      return;
  }
  window.open(`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=read:user&redirect_uri=${window.location.origin}/integrations/github/callback`, '_blank');
}