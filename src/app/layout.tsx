

import "./globals.css";
import './HomePage.css';
import { config } from '@fortawesome/fontawesome-svg-core'
//import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<Header></Header>*/}
      <body>{children}</body>
      {/*<Footer></Footer>*/}
    </html>
  )
}
