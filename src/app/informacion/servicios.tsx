import {
    Wrench,
    Palette,
    Shield,
    Car,
    Sparkles,
    Settings,
    Award,
    
  } from "lucide-react";

// @@@@  Servicios

export  const services = [
    {
      icon: Car,
      title: "Tapizado de Asientos",
      description:
        "Renovamos tus asientos con cuero, vinil o tela de primera calidad, adaptándonos a tu estilo y presupuesto.",
      features: ["Cuero Premium", "Diseño Personalizado", "Garantía 2 años"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    
    {
      icon: Wrench,
      title: "Restauración Completa",
      description:
        "Devolvemos la vida a interiores desgastados con técnicas profesionales y materiales duraderos.",
      features: [
        "Técnicas Avanzadas",
        "Materiales Duraderos",
        "Resultado Profesional",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Palette,
      title: "Personalización Premium",
      description:
        "Diseños únicos con colores personalizados, costuras especiales y bordados de logos exclusivos.",
      features: [
        "Diseños Únicos",
        "Costuras Especiales",
        "Bordados Exclusivos",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Shield,
      title: "Revestimiento Integral",
      description:
        "Transformamos techos, paneles y superficies con acabados perfectos y protección duradera.",
      features: ["Acabados Perfectos", "Protección UV", "Resistente al Agua"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
  ];


//  @@@@@ servicios adicionales
  export const additionalServices = [
    {
      icon: Settings,
      title: "Tapizado de Volantes",
      description:
        "Renovación y personalización de volantes con materiales premium",
      price: "Desde $150",
    },
    {
      icon: Sparkles,
      title: "Alfombrado Especial",
      description:
        "Alfombras a medida con diseños personalizados y materiales resistentes",
      price: "Desde $200",
    },
    {
      icon: Award,
      title: "Detalles Estéticos",
      description:
        "Bordados, costuras especiales y acabados únicos para tu vehículo",
      price: "Desde $100",
    },
  ];
