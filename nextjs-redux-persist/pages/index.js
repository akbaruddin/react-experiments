import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice";

export default function Home() {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(userAction.setUser(e.target.value));
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js + Redux + Persist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Type text:</p>
        <input type="text" value={user || ''} onChange={onChange} />
        <p>Text: {user}</p>
      </div>
    </div>
  );
}
