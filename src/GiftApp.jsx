import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (value) => {

    if (categories.includes(value)) return;

    setCategories([value, ...categories])
  }

  return (
    <>

      <div>
        <h1 className="text-4xl">Gifs App</h1>
      </div>

      <AddCategory
        onNewValue={onAddCategory}
      />

      {
        categories.map((category) => (
          <GifGrid
            category={category}
            key={category}
          />
        ))
      }

    </>
  )
}

