import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Wrench, Users, Euro, Clock, BarChart3, PieChart, Activity } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const AnimatedDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const revenueData = [
    { name: 'Lun', repairs: 12, revenue: 850 },
    { name: 'Mar', repairs: 15, revenue: 1200 },
    { name: 'Mer', repairs: 8, revenue: 650 },
    { name: 'Jeu', repairs: 18, revenue: 1450 },
    { name: 'Ven', repairs: 22, revenue: 1800 },
    { name: 'Sam', repairs: 28, revenue: 2200 },
    { name: 'Dim', repairs: 16, revenue: 1300 }
  ];

  const repairTypeData = [
    { name: 'Écrans', value: 45, color: '#005EFF' },
    { name: 'Batteries', value: 25, color: '#0080FF' },
    { name: 'Caméras', value: 15, color: '#40A0FF' },
    { name: 'Autres', value: 15, color: '#80C0FF' }
  ];

  const satisfactionData = [
    { name: 'Jan', satisfaction: 4.2 },
    { name: 'Fév', satisfaction: 4.3 },
    { name: 'Mar', satisfaction: 4.5 },
    { name: 'Avr', satisfaction: 4.4 },
    { name: 'Mai', satisfaction: 4.7 },
    { name: 'Jun', satisfaction: 4.6 }
  ];

  const stats = [
    {
      title: "Réparations aujourd'hui",
      value: "8",
      change: "+3 vs hier",
      changeType: "increase",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: [4, 6, 5, 8, 7, 8]
    },
    {
      title: "CA du jour",
      value: "1,247€",
      change: "+18% vs hier",
      changeType: "increase",
      icon: Euro,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: [800, 950, 1100, 1200, 1150, 1247]
    },
    {
      title: "Satisfaction",
      value: "4.8/5",
      change: "+0.2 ce mois",
      changeType: "increase",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: [4.2, 4.3, 4.5, 4.6, 4.7, 4.8]
    },
    {
      title: "Délai moyen",
      value: "1.8h",
      change: "-0.3h vs mois dernier",
      changeType: "decrease",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: [2.5, 2.3, 2.1, 1.9, 1.8, 1.8]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header avec période */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Analytics</h1>
          <p className="text-gray-600 mt-1">Vue d'ensemble en temps réel de votre activité</p>
        </div>
        <div className="flex gap-2">
          {['24h', '7d', '30d', '90d'].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={`transition-all duration-200 ${
                selectedPeriod === period 
                  ? 'bg-[#005EFF] hover:bg-[#0047CC] text-white transform scale-105' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats Cards avec mini graphiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-[#005EFF] transition-colors">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'increase' ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        stat.changeType === 'increase' 
                          ? 'text-green-600 border-green-300 bg-green-50' 
                          : 'text-red-600 border-red-300 bg-red-50'
                      }`}
                    >
                      {stat.change}
                    </Badge>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              
              {/* Mini chart */}
              <div className="h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stat.trend.map((value, i) => ({ value, index: i }))}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={stat.color.replace('text-', '#')} 
                      strokeWidth={2}
                      dot={false}
                      className="animate-pulse"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Graphiques principaux */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenus et réparations */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#005EFF]" />
              Revenus et Réparations - 7 derniers jours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis yAxisId="left" orientation="left" stroke="#005EFF" />
                  <YAxis yAxisId="right" orientation="right" stroke="#00C851" />
                  <Tooltip 
                    contentStyle={{ 
                      background: '#fff', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#00C851" 
                    fill="#00C851" 
                    fillOpacity={0.1}
                    name="Revenus (€)"
                    strokeWidth={3}
                  />
                  <Bar 
                    yAxisId="left"
                    dataKey="repairs" 
                    fill="#005EFF" 
                    name="Réparations"
                    radius={[4, 4, 0, 0]}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Types de réparations */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-[#005EFF]" />
              Types de réparations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={repairTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {repairTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Graphique satisfaction */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#005EFF]" />
            Évolution de la satisfaction client
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis domain={[0, 5]} stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    background: '#fff', 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="satisfaction" 
                  stroke="#FFD700" 
                  strokeWidth={4}
                  dot={{ fill: '#FFD700', r: 6 }}
                  activeDot={{ r: 8, stroke: '#FFD700', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedDashboard;
