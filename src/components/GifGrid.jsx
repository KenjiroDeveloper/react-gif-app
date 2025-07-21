
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    {
        isLoading && (<h2>Loading...</h2>)
    }

    return (
        <>
            <h1 className="text-4xl">{category}</h1>


            <div className="flex flex-row flex-wrap justify-center gap-4">
                {
                    images.map((image) => (
                        <GiftItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>

        </>
    )
}
