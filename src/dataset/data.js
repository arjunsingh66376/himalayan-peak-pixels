
import honeyFront  from "../../src/assets/honeyfront.jpg"
import honeySide  from "../../src/assets/honeyside.jpg"
import honeyTop  from "../../src/assets/honeytop.jpg"
import honeyBottle  from "../../src/assets/honeyback.jpg"
import turmeric  from "../../src/assets/turmeric.jpg"
import turmericTop from "../../src/assets/turmericTop.jpg"
import turmericSide  from "../../src/assets/turmericSide.jpg"
import turmericBack  from "../../src/assets/turmericBack.jpg"
import pinecone  from "../../src/assets/pinecone.jpg"
import pineconeFront  from "../../src/assets/pineconefront.jpg"
import pineconeSide  from "../../src/assets/pineconeside.jpg"
import pineconeTop  from "../../src/assets/pineconetop.jpg"
import root from "../../src/assets/root.jpg"
import rootfront from "../../src/assets/rootfront.jpg"
import roottop from "../../src/assets/roottop.jpg"
import rootback from "../../src/assets/rootback.jpg"
import berry from "../../src/assets/berry.jpg"
import berryfront from "../../src/assets/berryfront.jpg"
import berrytop from "../../src/assets/berrytop.jpg"
import berryback from "../../src/assets/berryback.jpg"
import mushroom from "../../src/assets/mushroom.jpg"
import mushroomtop from "../../src/assets/mushroomtop.jpg"
import mushroomback from "../../src/assets/mushroomback.jpg"
import mushroomfront from "../../src/assets/mushroomfront.jpg"






const products = [
    {
      id: 1,
      name: "Wild Himalayan Honey",
      category: "Honey",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 324,
      images: [honeyFront, honeySide, honeyTop, honeyBottle],
      description: "Pure, raw honey harvested from wild mountain flowers at 3000m altitude.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Organic", "Raw", "Wildflower"],
      inStock: true,
    },
    {
      id: 2,
      name: "Premium Turmeric Powder",
      category: "Herbs",
      price: 19.99,
      rating: 4.8,
      reviews: 156,
      images: [turmeric,turmericSide,turmericTop,turmericBack],
      description: "High-curcumin turmeric from organic Himalayan farms, stone-ground fresh.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Organic", "Anti-inflammatory", "Premium"],
      inStock: true,
    },
    {
      id: 3,
      name: "Himalayan Pine Cones",
      category: "Forest Products",
      price: 15.99,
      rating: 4.7,
      reviews: 89,
      images: [pinecone,pineconeFront,pineconeSide,pineconeTop],
      description: "Naturally shed pine cones, perfect for crafts and natural decoration.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Natural", "Eco-friendly", "Handpicked"],
      inStock: true,
    },
    {
      id: 4,
      name: "Wild Ginseng Root",
      category: "Herbs",
      price: 89.99,
      originalPrice: 109.99,
      rating: 5.0,
      reviews: 45,
      images: [root,rootfront,roottop,rootback],
      description: "Rare wild ginseng root, aged 7+ years, sustainably harvested.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Premium", "Rare", "Energy Boost"],
      inStock: false,
    },
    {
      id: 5,
      name: "Mountain Berry Mix",
      category: "Berries",
      price: 24.99,
      rating: 4.6,
      reviews: 203,
      images: [berry,berryfront,berrytop,berryback],
      description: "Dried mix of wild berries: juniper, sea buckthorn, and goji berries.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Antioxidant", "Wild", "Superfood"],
      inStock: true,
    },
    {
      id: 6,
      name: "Sacred Cordyceps",
      category: "Mushrooms",
      price: 149.99,
      rating: 4.9,
      reviews: 78,
      images: [mushroom, mushroomfront,mushroomback,mushroomtop],
      description: "Premium cordyceps mushrooms from high-altitude Himalayan regions.",
      details:"Bees gather nectar from flowers and store it in a special honey stomach where it's mixed with enzymes that break down complex sugars into simpler ones like glucose and fructose. Upon returning to the hive, the bees deposit the nectar into honeycomb cells. They then fan the nectar with their wings to evaporate excess water, creating a thick, syrupy consistency. Once the honey reaches the desired consistency, the cells are capped with wax for storage",
      tags: ["Premium", "Adaptogen", "Energy"],
      inStock: true,
    },
  ];
   export default products;