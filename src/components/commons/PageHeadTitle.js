import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { links } from '../../constants/pages';

export const PageHeadTitle = () => {
  const router = useRouter()

  if (typeof window === "undefined") {
    return null
  }

  const { pathname } = router;

  const getPageName = () => {
    const link = links.find(link => link.page === pathname);
    return link.name;
  }

  const title = pathname === '/' ? 'Selo Já Foi Sucata' : `${getPageName()} | Selo Já Foi Sucata`

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
