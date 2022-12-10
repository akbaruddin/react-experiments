import { useRecoilState } from "recoil";
import { userAtom } from "./atoms/userAtom"

function App() {
  const [user, setUser] = useRecoilState(userAtom);

  const onChange = (e) => {
    setUser(e.target.value)
  }

  return (
    <div className="App">
      <p>Type text:</p>
      <input value={user || ''} onChange={onChange} />
      <p>
      Text: {user}
      </p>
    </div>
  )
}

export default App
