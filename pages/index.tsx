import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../Services'
import { FeaturedPosts } from '../Sections'

export default function Home ({ posts }: any) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>On Target Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post : any) => <PostCard post={post.node} key={post.title} />)}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relatvie top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}
