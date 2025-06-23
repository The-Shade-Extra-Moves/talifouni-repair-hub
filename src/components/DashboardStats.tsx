
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Wrench, Users, Euro, Clock } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: "Réparations en cours",
      value: "12",
      change: "+3",
      changeType: "increase",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Chiffre d'affaires",
      value: "2,847€",
      change: "+12%",
      changeType: "increase",
      icon: Euro,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Nouveaux clients",
      value: "8",
      change: "+2",
      changeType: "increase",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Temps moyen",
      value: "2.3h",
      change: "-0.5h",
      changeType: "decrease",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
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
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
