import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../styles/index'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Hello World!</h1>
    </Container>
  )
}

export default Home
