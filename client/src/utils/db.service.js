const data = {
  categorys: [
    { id: 1, name: 'Growth Regulators', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Continence-Care-1.png' },
    { id: 2, name: 'Organic Farming', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Urinary-care-1-1.png' },
    { id: 3, name: 'Seeds', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Wound-Care-1.png' },
    { id: 4, name: 'Fertilizers', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Airway-Management-1.png' },
    { id: 5, name: 'Irrigation', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Skin-Care-1.png' },
    { id: 6, name: 'Gardening', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Stethoscope-1.png' },
    { id: 7, name: 'Crop Protection', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/Compression-Therapy-1.png' }
  ],

  corosuel_banners: [
    { id: 1, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/08/ALLEVYNWeb-Banner.jpg' },
    { id: 2, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/08/web-banner.jpg' },
    { id: 3, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/08/ALLEVYNWeb-Banner.jpg' },
    { id: 4, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/08/Halyard-2n1-wipes-Offerweb-banner.jpg' }
  ],

  sale_capaigns_banners: [
    { id: 1, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/09/Molicare-Promotion-1-1.jpg' },
    { id: 2, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/09/Homepage_micro-banner_515x250_V1.png' },
    { id: 3, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/09/Mdevice-Campaign-Sale-2048x994.jpg' }
  ],

  products: [
    // =======================
    //  GROWTH REGULATORS
    // =======================
    { id: 1, brand: 'AgroMax', category: "Growth Regulators", name: 'Humic Acid Boost', price: 20.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2022/07/MoliCare-Pad-4-Drops-865ml.jpg' },
    { id: 2, brand: 'GreenFarm', category: "Growth Regulators", name: 'Yield Booster Pro', price: 45.20, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/40183.jpg' },
    { id: 3, brand: 'BioGrow', category: "Growth Regulators", name: 'Advanced Zymes', price: 18.95, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2022/07/Medi-Derm-Barrier-Cream-500g.jpg' },
    { id: 4, brand: 'PH Control', category: "Growth Regulators", name: 'pH Balancer Liquid', price: 32.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/05/168100-new.jpg' },

    // =======================
    //  ORGANIC FARMING
    // =======================
    { id: 5, brand: 'OrganicPro', category: "Organic Farming", name: 'Bio Fertilizer Mix', price: 12.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/07/COFFEE-400-EA.jpg' },
    { id: 6, brand: 'EcoLife', category: "Organic Farming", name: 'Bio Pesticides Liquid', price: 22.35, gst: 2.75, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/11/4550590.jpeg' },
    { id: 7, brand: 'NatureFresh', category: "Organic Farming", name: 'Organic Nutrients Powder', price: 13.85, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/385100.jpg' },
    { id: 8, brand: 'NeemPure', category: "Organic Farming", name: 'Neem Oil Concentrate', price: 19.99, gst: 1.99, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/04/CO-16.5250R.jpg' },
    { id: 9, brand: 'AgriEarth', category: "Organic Farming", name: 'Vermi Compost Premium', price: 9.75, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/01/831042420.jpeg' },

    // =======================
    //  SEEDS
    // =======================
    { id: 10, brand: 'SeedPro', category: "Seeds", name: 'Vegetable Seeds Pack', price: 5.50, gst: 0.50, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/TMFIVP2H.jpg' },
    { id: 11, brand: 'GreenSeeds', category: "Seeds", name: 'Flower Seeds Mix', price: 3.95, gst: 0.30, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2022/07/2346.jpg' },

    // =======================
    //  FERTILIZERS
    // =======================
    { id: 12, brand: 'FertiPlus', category: "Fertilizers", name: 'Bio Fertilizer Bag', price: 20.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2022/07/MoliCare-Pad-4-Drops-865ml.jpg' },
    { id: 13, brand: 'AgriBoost', category: "Fertilizers", name: 'Organic Fertilizer Granules', price: 26.20, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/40183.jpg' },
    { id: 14, brand: 'LiquidGrow', category: "Fertilizers", name: 'Liquid Fertilizer 1L', price: 18.95, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2022/07/Medi-Derm-Barrier-Cream-500g.jpg' },

    // =======================
    //  IRRIGATION
    // =======================
    { id: 15, brand: 'Irriga', category: "Irrigation", name: 'Drip Pipe 10m', price: 148.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/05/168100-new.jpg' },
    { id: 16, brand: 'FlowMaster', category: "Irrigation", name: 'Sprinkler Head', price: 2.45, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/07/COFFEE-400-EA.jpg' },

    // =======================
    //  GARDENING
    // =======================
    { id: 17, brand: 'GardenPro', category: "Gardening", name: 'Garden Shovel', price: 874.35, gst: 961.79, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/11/4550590.jpeg' },
    { id: 18, brand: 'PlantCare', category: "Gardening", name: 'Watering Can', price: 320.85, gst: 0, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/06/385100.jpg' },

    // =======================
    //  CROP PROTECTION
    // =======================
    { id: 19, brand: 'CropShield', category: "Crop Protection", name: 'Insecticide Spray 500ml', price: 17.85, gst: 19.75, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/01/831042420.jpeg' },
    { id: 20, brand: 'SafeCrop', category: "Crop Protection", name: 'Fungicide Liquid', price: 335.50, gst: 368.50, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/TMFIVP2H.jpg' }
  ],

  product_banners: [
    { id: 1, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/A.png' },
    { id: 2, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/c.png' },
    { id: 3, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/d.png' },
    { id: 4, image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2024/08/B.png' }
  ],

  brands_baners: [
    { id: 1, name: 'Jimberty-Clark', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/05/Kimberly.jpg' },
    { id: 2, name: 'Whiteley', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/05/Whitely.jpg' },
    { id: 3, name: 'EGO', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/05/Ego.jpg' },
    { id: 4, name: 'HALYARD', image: 'https://joyamedicalsupplies.com.au/wp-content/uploads/2025/05/Halyard.jpg' }
  ]
};

export default data;

export const db = {
    getCategorys: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.categorys);
            }, 500); // Simulate a 500ms delay
        });
    },
    getCorosuelBanners: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.corosuel_banners);
            }, 500); // Simulate a 500ms delay
        });
    },
    getSaleCapaignsBanners: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.sale_capaigns_banners);
            }, 500); // Simulate a 500ms delay
        });
    },
    
    getProducts: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.products);
            }, 500); // Simulate a 500ms delay
        });
    },
    getProductBanners: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.product_banners);
            }, 500); // Simulate a 500ms delay
        });
    },
    getBrandsBanners: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.brands_baners);
            }, 500); // Simulate a 500ms delay
        });
    },
    getAll: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 500); // Simulate a 500ms delay
        }); 
    },
}
