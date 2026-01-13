

export const fetchProducts = async () => {
  // Normally you would fetch from a server, here we just return static data
  return [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High quality over-ear Bluetooth headphones.",
      price: 99.99,
      image: "/images/headphones.jpg",
    },
    {
      id: 2,
      name: "Phone Case",
      description: "Durable case for iPhone and Android phones.",
      price: 19.99,
      image: "/images/phone-case.jpg",
    },
    {
      id: 3,
      name: "USB-C Cable",
      description: "Fast charging cable for all devices.",
      price: 14.99,
      image: "/images/usb-c-cable.jpg",
    },
  ];
};
