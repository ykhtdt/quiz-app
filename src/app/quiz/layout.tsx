import { Container } from "@/components/layouts/container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
