import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <link rel="preload" href="/assets/fonts/TTCommons-Bold.otf" as="font"/>
        <link rel="preload" href="/assets/fonts/TTCommons-Regular.otf" as="font"/>
        <link rel="preload" href="/assets/fonts/TTCommons-Thin.otf" as="font"/>
      </NextHead>
    </>
  )
}

export default Head
