import { Container } from "../components/styles/Container.styled"
import Header from "../components/Header"

import content from '../content'
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"




export default function Home() {
  return (
    <>
    <Header />
    <Container>
   {content.map((item, index) => (
    <Card key={index} item={item} />
   ))}
    </Container>
    <Footer />
    </>
  )
}
