import "@/styles/globals.css"
import type { AppProps } from "next/app"
import styles from "./styles/Matchsida.module.css"
import "./styles/leftSection.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
