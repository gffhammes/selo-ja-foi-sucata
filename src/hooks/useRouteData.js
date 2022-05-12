import { links } from "../constants/pages";
import { useRouter } from 'next/router';

export const useRouteData = () => {
  const router = useRouter();
  if (typeof window === "undefined") return links[0];
  const { pathname } = router;
  const link = links.find(link => link.page === pathname);
  return link;
}