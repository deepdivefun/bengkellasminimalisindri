import Image from "next/image";
import Link from "next/link";
import '../style/style.scss'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { jasaKami } from "@/constant/features";


const Products = () => {

  const slideLeft = () => {
    let slider: HTMLElement | null = document.getElementById("slider");
    if (slider) {
        slider.scrollLeft -= 235;
    }
};

const slideRight = () => {
    let slider: HTMLElement | null = document.getElementById("slider");
    if (slider) {
        slider.scrollLeft += 235;
    }
};


  return (
    <section id="jasa-kami" className="mx-6 md:my-24 my-6">
        <div className="container flex justify-between">
            <h2 className="text-xl font-bold">Gallery</h2>
            <div className="gap-3 flex">
              <button className="border rounded-md p-4 text-xl" title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button className="border rounded-md p-4 text-xl" title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
        </div>
      <div className="mt-3">
          <div className="row-container" id="slider">
            {jasaKami.map((item) => (
              <article key={item.id} className="row-item">
                <Link href={`/`} className="link border rounded-md p-3">
                  <div className="item-header">
                    <Image  
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{objectFit: "contain"}}
                      className="w-96 h-60" src={item.img} alt="product" /> 
                  </div>
                    <h3>{item.description}</h3>
                </Link>
              </article>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Products