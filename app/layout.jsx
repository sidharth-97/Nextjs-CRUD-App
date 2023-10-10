import '@styles/globals.css'

export const metadata = {
  title: "Prompt app",
  description:"Descover and share AI prompt"
}

const Rootlayout = ({children}) => {
  return (
    <html>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
            {children}
        </main>
      </body>
   </html>
  )
}

export default Rootlayout