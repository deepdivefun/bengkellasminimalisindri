"use client"
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
    <section>
    <div className="mx-6 my-24">
        <div className="container">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Jasa Kami</h3>
            <div className="gap-3 flex">
              <button className="border rounded-md p-4 text-xl" title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button className="border rounded-md p-4 text-xl" title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>  
          </div>
        </div>
      <div className="mt-3">
        <div className="">
          <div className="row-container" id="slider">
            {jasaKami.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link border rounded-md p-3">
                  <div className="item-header">
                    <Image  
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{objectFit: "contain"}}
                      className="w-96 h-60" src={item.img} alt="product" /> 
                  </div>
                  <div className="item-description">
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Products