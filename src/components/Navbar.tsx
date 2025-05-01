import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect,useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { useRouter } from 'next/router';



const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Lottery Club', href: '/Lottery' },
    { name: 'Add Lottery', href: '/AddLottery' },
  ];

  useEffect(() => {
    const current = menuItems.find((item) => item.href === router.pathname);
    if (current) setActive(current.name);
  }, [router.pathname]);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-white">
      {/* Menu Kiri */}
      <Link href="/" passHref>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/logo/logo.png"
            alt="CashNest Logo"
            width={40}
            height={40}
          />
          <p className="text-lg font-bold">CashNest</p>
        </div>
      </Link>

      {/* Menu Tengah */}
      <div className="flex space-x-6 w-1/2 justify-center ml-10">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div
              className={`relative cursor-pointer text-2xl font-bold ${
                active === item.name ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
              {active === item.name && (
                <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-pink-500"></div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Menu Kanan */}
      <div className="flex items-center space-x-4 w-1/4 justify-end">
        {/* Ikon Jaringan */}
        <button className="p-2 bg-gray-800 rounded-lg">🌐</button>

        {/* Tombol Connect Wallet */}
        <ConnectButton />

        {/* Menu Lainnya */}
        <button className="p-2 bg-gray-800 rounded-lg">⋮</button>
      </div>
    </nav>
  );
};

export default Navbar;
