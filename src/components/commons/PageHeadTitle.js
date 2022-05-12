import React, { useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { links } from '../../constants/pages';
import { useRouteData } from '../../hooks/useRouteData';

export const PageHeadTitle = () => {
  const { name, page } = useRouteData();

  const title = useMemo(() => (
    page === '/' ? 'Selo Já Foi Sucata' : `${name} | Selo Já Foi Sucata`
  ), [name, page])

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
