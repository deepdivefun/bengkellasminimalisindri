import { features } from '../constant/features.js'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Features = () => {
  return (
    <section >
    <div className='features mx-6 my-5'>
      <h2 className='md:text-xl font-medium mb-2'>Kenapa Memilih Kami</h2>
    <div>
      <ul className='md:flex justify-center items-center gap-6'>
        {features.map(feature => (
          <li>
            <Card className="max-w-[400px] h-[200px] rounded-md border mb-3">
                  <CardHeader className="flex gap-3">
                    {feature.img}
                    <div className="flex flex-col">
                      <p className="text-md">{feature.title}</p>
                    </div>
                  </CardHeader>
                  <Divider/>
                  <CardBody>
                    <p>{feature.description}.</p>
                  </CardBody>
                </Card>
    </li>
        ))}
      </ul>
    </div>
    </div>
    
    </section>
  );
};

export default Features;
