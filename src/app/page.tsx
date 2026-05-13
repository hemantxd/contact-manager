import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
        <p className="mt-2 text-lg text-gray-600">Manage your contacts with ease</p>

<Image src="/contact.png" alt="Contact Manager" width={300} height={300}  className="rounded-lg shadow-lg mx-auto"/>
      </div>

      <div className="text-center">
        
        <p className="mt-2 text-lg text-gray-600">Start managing your contacts today!</p>
      </div>

    </div>
  );
}
