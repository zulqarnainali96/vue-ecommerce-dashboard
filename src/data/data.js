export const demoData = {
  revenue: {
    totalOrders: 1245,
    totalSales: 58420.75,
    dailyTrends: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2023, 4, i + 1).toISOString().split('T')[0],
      orders: Math.floor(Math.random() * 50) + 20,
      sales: (Math.random() * 2000) + 1000
    })),
    weeklyTrends: Array.from({ length: 12 }, (_, i) => ({
      week: `2023-W${i + 1}`,
      orders: Math.floor(Math.random() * 300) + 100,
      sales: (Math.random() * 15000) + 5000
    })),
    monthlyTrends: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2023, i, 1).toLocaleString('default', { month: 'long' }),
      orders: Math.floor(Math.random() * 1200) + 500,
      sales: (Math.random() * 50000) + 20000
    })),
    byCategory: [
      { category: 'Electronics', orders: 520, sales: 31200.00 },
      { category: 'Clothing', orders: 380, sales: 15200.00 },
      { category: 'Home Goods', orders: 210, sales: 8900.00 },
      { category: 'Accessories', orders: 135, sales: 3120.75 }
    ]
  },
  inventory: {
    products: [
      {
        id: 1,
        name: 'Wireless Headphones',
        description: 'Noise-cancelling wireless headphones with 30hr battery',
        category: 'Electronics',
        price: 199.99,
        stock: 45,
        minStock: 20,
        image: 'headphones.jpg'
      },
      {
        id: 2,
        name: 'Organic Cotton T-Shirt',
        description: 'Premium quality cotton t-shirt, unisex sizing',
        category: 'Clothing',
        price: 29.99,
        stock: 120,
        minStock: 50,
        image: 'tshirt.jpg'
      },
      {
        id: 3,
        name: 'Stainless Steel Water Bottle',
        description: '1L insulated water bottle, keeps cold for 24hrs',
        category: 'Accessories',
        price: 24.99,
        stock: 85,
        minStock: 30,
        image: 'bottle.jpg'
      },
      {
        id: 4,
        name: 'Smart LED Bulb',
        description: 'RGB smart bulb with app control',
        category: 'Electronics',
        price: 34.99,
        stock: 15,
        minStock: 25,
        image: 'bulb.jpg'
      },
      {
        id: 5,
        name: 'Yoga Mat',
        description: 'Non-slip eco-friendly yoga mat',
        category: 'Home Goods',
        price: 49.99,
        stock: 32,
        minStock: 15,
        image: 'mat.jpg'
      }
    ],
    categories: ['Electronics', 'Clothing', 'Home Goods', 'Accessories']
  }
}