import './globals.css'
 
export const metadata = {
  title: 'empeperor',
  description: 'empeperor Company',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}