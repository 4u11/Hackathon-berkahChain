import { FC } from "react";
import Image from "next/image";

const Home: FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex space-x-4">
          <a href="#" className="font-semibold">Home</a>
          <a href="#" className="font-semibold">Donation</a>
          <a href="#" className="font-semibold">About Us</a>
          <a href="#" className="font-semibold">Market</a>
        </div>
        <div className="rounded-full overflow-hidden w-10 h-10">
         <button className="signup-btn">Sign Up</button>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-gray-100">
        <Image src="/hero-image.png" alt="Funding" layout="fill" objectFit="cover" className="z-0" />
        <div className="absolute text-white text-left p-6">
          <h1 className="text-3xl font-bold">Experience a new funding with BerkahChain</h1>
          <button className="mt-4 bg-green-500 px-4 py-2 rounded text-white">Fund Now</button>
        </div>
      </section>

      {/* Wallet Connect */}
      <div className="p-6">
        <button className="flex items-center space-x-2 bg-green-300 px-4 py-2 rounded">
          <span>Connect with your wallet</span>
          <Image src="/wallet-icon.png" alt="Wallet" width={20} height={20} />
        </button>
      </div>

      {/* About Section */}
      <section className="p-6">
        <p className="text-gray-600 mt-2">
        BerkahChain is a crowdfunding platform for those who are in need of funding. BerkahChain provide an opportunity for fund owners in crypto digital wallets to contribute to a cause. The platform is open to people in need (medically, natural disasters, project funding, etc). Donate to those in need below or propose your funding needs in the Donations page.
        </p>
        <button className="mt-4 bg-green-500 px-4 py-2 rounded text-white">V</button>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        <div className="w-full h-40 bg-gray-300 rounded"></div>
        <div className="w-full h-40 bg-gray-300 rounded"></div>
        <div className="w-full h-40 bg-gray-300 rounded"></div>
        <div className="w-full h-40 bg-gray-300 rounded"></div>
      </section>
    </div>
  );
};

export default Home;
