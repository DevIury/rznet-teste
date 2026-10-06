export interface Plan {
  name: string;
  speed: string;
  speedLabel?: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const personalPlans: Plan[] = [
  {
    name: '300 Mega',
    speed: '300',
    price: '89,90',
    features: [
      'Fibra óptica',
      'Wi-Fi 6 incluso',
      'Suporte especializado',
      'Aplicativo RZNET',
    ],
  },
  {
    name: '500 Mega',
    speed: '500',
    price: '99,90',
    features: [
      'Fibra óptica',
      'Wi-Fi 6 incluso',
      'Suporte especializado',
      'Aplicativo RZNET',
      'RZ TV com +220 canais',
      'Clube de Vantagens RZ',
    ],
    popular: true,
  },
  {
    name: '800 Mega',
    speed: '800',
    price: '109,90',
    features: [
      'Fibra óptica',
      'Wi-Fi 6 incluso',
      'Suporte especializado',
      'Aplicativo RZNET',
      'RZ TV com +220 canais',
      'Clube de Vantagens RZ',
    ],
  },
  {
    name: '1 Giga',
    speed: '1000',
    speedLabel: '1 Giga',
    price: '129,90',
    features: [
      'Fibra óptica',
      'Wi-Fi 6 incluso',
      'Suporte especializado',
      'Aplicativo RZNET',
      'RZ TV com +220 canais',
      'Clube de Vantagens RZ',
    ],
  },
];
