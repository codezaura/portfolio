import { Container } from "../container"
import { Footer } from "../footer"
import { Header } from "../header"

// -----------------------------------------------------------------------

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg">
      <Header />

      <main>{children}</main>

      <Footer />
    </Container>
  )
}
