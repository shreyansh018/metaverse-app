import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I am Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/*Logo*/}
        <Image
          className="object-cover rounded-full"
          src="/mine2.JPEG"
          height={200}
          width={200}
        />

        {/*Login button*/}
        <button
          onClick={authenticate}
          className="bg-purple-700 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="/metaverse.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
