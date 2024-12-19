import React, { useState } from "react";
import styles from "../../../../styles/Keywords/Hastag.module.css";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const Genhash = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hashtags");

  const data = {
    Hashtags: [
      "#snack #healthy Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week's snack plan with them!",
      "#healthy You and your family will love this refreshing dessert!",
      '#sweet #healthy ipsum dolor sit amet, consectetur adipiscing elit.',
      '#snack #healthy Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week',
    ],
    Taglines: [
      "Your trusted partner for health and happiness.",
      "Because your health is our priority.",
      "Healthy living made easy.",
      "Nourishing your body, nourishing your soul.",
    ],
    Keywords: [
      "Plant-based snacks",
      "Healthy desserts",
      "Nutrition tips",
      "Plant-based recipes",
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <LeftCard
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        data={data}
      />
      <RightCard
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        data={data}
      />
    </div>
  );
};

export default Genhash;
