
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingCart, 
  Tag, 
  BarChart2, 
  CreditCard, 
  Smartphone, 
  Wallet,
  ChevronDown,
  Search,
  Plus,
  MoreHorizontal,
  Bell,
  Calendar
} from 'lucide-react';

// Sample data for analytics
const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const paymentMethodData = [
  { name: 'Credit Card', value: 45, color: '#33C3F0' },
  { name: 'Mobile Payment', value: 30, color: '#8B5CF6' },
  { name: 'E-Wallet', value: 25, color: '#EC4899' },
];

// Sample data for transactions
const transactions = [
  { id: 'TRX123456', user: 'Alex Johnson', game: 'Mobile Legends', amount: '$9.99', status: 'Success', date: '2023-09-10 14:30:45' },
  { id: 'TRX123457', user: 'Sarah Williams', game: 'PUBG Mobile', amount: '$19.99', status: 'Pending', date: '2023-09-10 13:15:22' },
  { id: 'TRX123458', user: 'Michael Chen', game: 'Genshin Impact', amount: '$4.99', status: 'Success', date: '2023-09-10 11:45:10' },
  { id: 'TRX123459', user: 'Lisa Garcia', game: 'Free Fire', amount: '$1.99', status: 'Failed', date: '2023-09-10 10:20:33' },
  { id: 'TRX123460', user: 'David Wilson', game: 'Mobile Legends', amount: '$39.99', status: 'Success', date: '2023-09-09 22:15:41' },
  { id: 'TRX123461', user: 'Emma Rodriguez', game: 'Call of Duty', amount: '$9.99', status: 'Success', date: '2023-09-09 19:40:12' },
  { id: 'TRX123462', user: 'James Smith', game: 'PUBG Mobile', amount: '$19.99', status: 'Pending', date: '2023-09-09 16:35:29' },
  { id: 'TRX123463', user: 'Olivia Brown', game: 'Genshin Impact', amount: '$4.99', status: 'Success', date: '2023-09-09 14:20:55' },
];

// Sample data for products (games)
const products = [
  { id: 1, name: 'Mobile Legends', topUpOptions: 6, status: 'Active' },
  { id: 2, name: 'PUBG Mobile', topUpOptions: 5, status: 'Active' },
  { id: 3, name: 'Genshin Impact', topUpOptions: 7, status: 'Active' },
  { id: 4, name: 'Free Fire', topUpOptions: 4, status: 'Active' },
  { id: 5, name: 'Call of Duty: Mobile', topUpOptions: 6, status: 'Active' },
  { id: 6, name: 'League of Legends: Wild Rift', topUpOptions: 5, status: 'Inactive' },
];

// Sample data for promos
const promos = [
  { id: 1, name: '50% Bonus on First Top-Up', discount: '50%', status: 'Active', endDate: '2023-10-31' },
  { id: 2, name: 'Weekend Special: 20% Off', discount: '20%', status: 'Active', endDate: '2023-09-30' },
  { id: 3, name: 'Special Bundle Deals', discount: '30%', status: 'Inactive', endDate: '2023-08-31' },
];

// Sample data for users
const users = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', transactions: 8, totalSpent: '$79.92' },
  { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', transactions: 5, totalSpent: '$99.95' },
  { id: 3, name: 'Michael Chen', email: 'michael@example.com', transactions: 12, totalSpent: '$59.88' },
  { id: 4, name: 'Lisa Garcia', email: 'lisa@example.com', transactions: 3, totalSpent: '$5.97' },
  { id: 5, name: 'David Wilson', email: 'david@example.com', transactions: 7, totalSpent: '$279.93' },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Success':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">Success</span>;
      case 'Pending':
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-500">Pending</span>;
      case 'Failed':
        return <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-500">Failed</span>;
      case 'Active':
        return <span className="px-2 py-1 rounded-full text-xs bg-neon-blue/20 text-neon-blue">Active</span>;
      case 'Inactive':
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-500/20 text-gray-400">Inactive</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-500/20 text-gray-400">{status}</span>;
    }
  };
  
  return (
    <Layout>
      <section className="py-8 px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">Admin Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="text-muted-foreground hover:text-white transition-colors cursor-pointer" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-purple text-white text-xs flex items-center justify-center">
                  3
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="hidden md:inline">Admin</span>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white/5 p-1 rounded-lg">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                <BarChart2 size={16} className="mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="transactions" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                <ShoppingCart size={16} className="mr-2" />
                Transactions
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                <Tag size={16} className="mr-2" />
                Products
              </TabsTrigger>
              <TabsTrigger value="promos" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                <Tag size={16} className="mr-2" />
                Promos
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                <Users size={16} className="mr-2" />
                Users
              </TabsTrigger>
            </TabsList>
            
            {/* Dashboard */}
            <TabsContent value="dashboard" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Cards */}
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-muted-foreground">Total Revenue</h3>
                    <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <BarChart2 size={20} className="text-neon-blue" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mt-4 mb-2">$19,842</p>
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-1">+12.5%</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-muted-foreground">Transactions</h3>
                    <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <ShoppingCart size={20} className="text-neon-purple" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mt-4 mb-2">1,482</p>
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-1">+8.2%</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-muted-foreground">Products</h3>
                    <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <Tag size={20} className="text-neon-blue" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mt-4 mb-2">24</p>
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-1">+2</span>
                    <span className="text-muted-foreground">new this month</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-muted-foreground">Users</h3>
                    <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <Users size={20} className="text-neon-purple" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mt-4 mb-2">3,642</p>
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-1">+215</span>
                    <span className="text-muted-foreground">new this month</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="glass-card p-6 rounded-xl lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Revenue</h3>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 text-sm glass-card hover:bg-white/10 rounded-lg transition-colors flex items-center">
                        <Calendar size={14} className="mr-2" />
                        This Month
                        <ChevronDown size={14} className="ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={300}
                        data={revenueData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "rgba(255,255,255,0.1)" }} />
                        <Bar dataKey="value" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#33C3F0" stopOpacity={1} />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity={1} />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Payment Methods Chart */}
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={paymentMethodData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {paymentMethodData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "rgba(255,255,255,0.1)" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex flex-col space-y-2 mt-4">
                    {paymentMethodData.map((method, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: method.color }}></div>
                          <span className="text-sm">{method.name}</span>
                        </div>
                        <span className="text-sm font-medium">{method.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Recent Transactions */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Recent Transactions</h3>
                  <button className="text-sm text-neon-blue hover:underline">View All</button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-3 text-muted-foreground font-medium">ID</th>
                        <th className="pb-3 text-muted-foreground font-medium">User</th>
                        <th className="pb-3 text-muted-foreground font-medium">Game</th>
                        <th className="pb-3 text-muted-foreground font-medium">Amount</th>
                        <th className="pb-3 text-muted-foreground font-medium">Status</th>
                        <th className="pb-3 text-muted-foreground font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.slice(0, 5).map((transaction, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 font-mono text-sm">{transaction.id}</td>
                          <td className="py-3">{transaction.user}</td>
                          <td className="py-3">{transaction.game}</td>
                          <td className="py-3">{transaction.amount}</td>
                          <td className="py-3">{getStatusBadge(transaction.status)}</td>
                          <td className="py-3 text-sm text-muted-foreground">{transaction.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            {/* Transactions */}
            <TabsContent value="transactions" className="animate-fade-in">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-medium">All Transactions</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search transactions..." 
                        className="w-full pl-9 pr-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-1 focus:ring-neon-blue"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-2 glass-card hover:bg-white/10 rounded-lg transition-colors flex items-center">
                        Status
                        <ChevronDown size={14} className="ml-2" />
                      </button>
                      
                      <button className="px-3 py-2 glass-card hover:bg-white/10 rounded-lg transition-colors flex items-center">
                        Date
                        <ChevronDown size={14} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-3 text-muted-foreground font-medium">ID</th>
                        <th className="pb-3 text-muted-foreground font-medium">User</th>
                        <th className="pb-3 text-muted-foreground font-medium">Game</th>
                        <th className="pb-3 text-muted-foreground font-medium">Amount</th>
                        <th className="pb-3 text-muted-foreground font-medium">Status</th>
                        <th className="pb-3 text-muted-foreground font-medium">Date</th>
                        <th className="pb-3 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 font-mono text-sm">{transaction.id}</td>
                          <td className="py-3">{transaction.user}</td>
                          <td className="py-3">{transaction.game}</td>
                          <td className="py-3">{transaction.amount}</td>
                          <td className="py-3">{getStatusBadge(transaction.status)}</td>
                          <td className="py-3 text-sm text-muted-foreground">{transaction.date}</td>
                          <td className="py-3">
                            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                              <MoreHorizontal size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-muted-foreground">Showing 1-8 of 156 transactions</div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors">Previous</button>
                    <button className="px-3 py-1 bg-neon-blue text-white rounded-lg">1</button>
                    <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors">2</button>
                    <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors">3</button>
                    <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors">Next</button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Products */}
            <TabsContent value="products" className="animate-fade-in">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-medium">Manage Products</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-9 pr-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-1 focus:ring-neon-blue"
                      />
                    </div>
                    
                    <button className="px-4 py-2 neon-button flex items-center justify-center">
                      <Plus size={16} className="mr-2" />
                      Add Product
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-3 text-muted-foreground font-medium">ID</th>
                        <th className="pb-3 text-muted-foreground font-medium">Name</th>
                        <th className="pb-3 text-muted-foreground font-medium">Top-Up Options</th>
                        <th className="pb-3 text-muted-foreground font-medium">Status</th>
                        <th className="pb-3 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3">{product.id}</td>
                          <td className="py-3">{product.name}</td>
                          <td className="py-3">{product.topUpOptions}</td>
                          <td className="py-3">{getStatusBadge(product.status)}</td>
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors text-sm">
                                Edit
                              </button>
                              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            {/* Promos */}
            <TabsContent value="promos" className="animate-fade-in">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-medium">Manage Promotions</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search promos..." 
                        className="w-full pl-9 pr-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-1 focus:ring-neon-blue"
                      />
                    </div>
                    
                    <button className="px-4 py-2 neon-button flex items-center justify-center">
                      <Plus size={16} className="mr-2" />
                      Add Promo
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-3 text-muted-foreground font-medium">ID</th>
                        <th className="pb-3 text-muted-foreground font-medium">Name</th>
                        <th className="pb-3 text-muted-foreground font-medium">Discount</th>
                        <th className="pb-3 text-muted-foreground font-medium">End Date</th>
                        <th className="pb-3 text-muted-foreground font-medium">Status</th>
                        <th className="pb-3 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {promos.map((promo, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3">{promo.id}</td>
                          <td className="py-3">{promo.name}</td>
                          <td className="py-3">{promo.discount}</td>
                          <td className="py-3">{promo.endDate}</td>
                          <td className="py-3">{getStatusBadge(promo.status)}</td>
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors text-sm">
                                Edit
                              </button>
                              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            {/* Users */}
            <TabsContent value="users" className="animate-fade-in">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-medium">Manage Users</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="w-full pl-9 pr-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-1 focus:ring-neon-blue"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-3 text-muted-foreground font-medium">ID</th>
                        <th className="pb-3 text-muted-foreground font-medium">Name</th>
                        <th className="pb-3 text-muted-foreground font-medium">Email</th>
                        <th className="pb-3 text-muted-foreground font-medium">Transactions</th>
                        <th className="pb-3 text-muted-foreground font-medium">Total Spent</th>
                        <th className="pb-3 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3">{user.id}</td>
                          <td className="py-3">{user.name}</td>
                          <td className="py-3">{user.email}</td>
                          <td className="py-3">{user.transactions}</td>
                          <td className="py-3">{user.totalSpent}</td>
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-1 glass-card hover:bg-white/10 rounded-lg transition-colors text-sm">
                                View
                              </button>
                              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
