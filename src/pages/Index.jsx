import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart, Zap, Shield } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend, show confirmation, etc.)
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">MonsterScale</h1>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
            <Button variant="secondary">Login</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-20 text-center">
        <h2 className="text-5xl font-bold mb-6">Unleash Your Business Potential</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          MonsterScale helps you tame the complexities of growth and scale your business to monstrous heights.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 mr-2 text-black"
            required
          />
          <Button type="submit">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<BarChart className="h-12 w-12 mb-4" />}
            title="Powerful Analytics"
            description="Gain deep insights into your business performance with our advanced analytics tools."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 mb-4" />}
            title="Lightning Fast"
            description="Experience blazing-fast performance that keeps up with your growing business needs."
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 mb-4" />}
            title="Robust Security"
            description="Rest easy knowing your data is protected by industry-leading security measures."
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MonsterScale</h3>
            <p className="text-sm">Unleash your business potential with our powerful scaling solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@monsterscale.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Scale St, Growth City</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
              <a href="#" className="hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 MonsterScale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Index;
