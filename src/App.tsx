
import GlobalStyle from '~assets/styles/global'
import truck from '~assets/images/truck.gif'

function App() {
  return (
    <>
     <GlobalStyle />
      <img
        src={truck}
        style={{ height: 200, position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default App
