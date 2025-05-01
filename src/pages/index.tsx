import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Wallet, LayersIcon, Percent, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



function FeatureCard({ icon: Icon, title, description, gradient }: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className={`${gradient} p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105`}>
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-8 h-8 text-white" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/90">{description}</p>
    </div>
  );
}

const steps = [
  {
    id: 1,
    title: 'POOL',
    description:
      'You can bet your money in the pool feature in cashnest. Users can deposit money into the pool provided and then it will be temporarily stored in the pool for a predetermined period of time.',
    image: '/steps/stake.png',
  },
  {
    id: 2,
    title: 'STAKE',
    description:
      'The money that has been collected will be automatically staked within a predetermined period of time. The result of APY staking will be the lucky user s reward. Every user is entitled to a reward. ',
    image: '/steps/vault.png',
  },
  {
    id: 3,
    title: 'RESULTS',
    description:
      'The profit will be randomly distributed to each user. The randomization will be fair.',
      image: '/steps/yield.png',
  
  },
];


const StepCard = ({ step, index }: { step: (typeof steps)[0]; index: number }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render fallback version tanpa animasi untuk hindari hydration mismatch
    return (
      <div className="bg-black rounded-xl border border-neutral-800 p-6 shadow-lg backdrop-blur-md">
        
        <div className="mb-4">
          {/* <Image
            src={step.image}
            alt={step.title}
            width={500}
            height={300}
            className="rounded-lg"
          /> */}
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">
          {step.id}. {step.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
      </div>
    );
  }

  // Render versi animasi setelah client mount
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative rounded-2xl p-6 transition-all duration-300 border backdrop-blur-xl bg-black/50 hover:scale-[1.03] ${
        index % 2 === 0 ? 'translate-y-0' : 'translate-y-10'
      }`}
      style={{
        borderImage: 'linear-gradient(135deg, rgba(0,255,255,0.4), rgba(0,0,255,0.4)) 1',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    >
      <div className="mb-4">
        {/* <Image
          src={step.image}
          alt={step.title}
          width={500}
          height={300}
          className="rounded-lg"
        /> */}
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">
        {step.id}. {step.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
};
const Home: NextPage = () => {

  const features = [
    // {
    //   icon: Wallet,
    //   title: "HUSNAN",
    //   description: "PACAR : nisa, nuzlia",
    //   gradient: "bg-gradient-to-r from-blue-600 to-indigo-600"
    // },
    {
      icon: Wallet,
      title: "LOTTERY",
      description: "Place for you do lottery",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
      icon: LayersIcon,
      title: "PORTOFOLIO",
      description: "Know about CashNest",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      icon: Percent,
      title: "ADD LOTTERY",
      description: "Place for you to add your lottery",
      gradient: "bg-gradient-to-r from-pink-600 to-rose-600"
    },
    {
      icon: TrendingUp,
      title: "WINNER",
      description: "Winner will be show in here",
      gradient: "bg-gradient-to-r from-slate-600 to-slate-800"
    }
  ];


  return (

    
    
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Welcome CashNest
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              The next generation DeFi protocol for lottery
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
        {steps.map((step, idx) => (
          <div className={`w-full ${idx % 2 !== 0 ? 'md:mt-20' : ''}`} key={step.id}>
            <StepCard step={step} index={idx} />
          </div>
        ))}
      </div>
    </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">CashNest</h2>
          <button className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            @2025
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
