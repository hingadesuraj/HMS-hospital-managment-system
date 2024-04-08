import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    // <div className="flex justify-center items-center border-b-2 border border-black " >
    //   {/* left side  */}
    //   <div className="w-[50%] text-center
    //    ">
    //     <h1 className="text-3xl font-bold" >{title}</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    //       corrupti voluptate quaerat temporibus mollitia doloremque minus
    //       laborum? Nostrum sapiente id quo voluptas animi dolor iure architecto
    //       repudiandae velit exercitationem sint, accusantium earum veniam
    //       aperiam, quisquam eligendi facilis cumque! Tempore aperiam rerum sunt
    //       doloribus repudiandae, voluptas suscipit. Enim aspernatur saepe
    //       sapiente?
    //     </p>
    //   </div>
    //   {/* right side */}
    //   <div className="w-[100%] relative" >
      // <img src={imageUrl} width={15} alt="Image Url" className="h-80 w-15  border-2 border-black" />
      //   <span>
      //     <img src="/Vector.png" alt="" className="absolute h-100 w-100   top-[-200px] right-[-300px] -z-10 " />
      //   </span>
    //   </div>
    // </div>

    <>
    <div className="flex gap-1 justify-center items-center ">
  <div className="w-[50%] h-[550px] border-2 border-black flex flex-col justify-center items-center p-12">
      <h1 className="text-3xl font-bold" >{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        corrupti voluptate quaerat temporibus mollitia doloremque minus
        laborum? Nostrum sapiente id quo voluptas animi dolor iure architecto
        repudiandae velit exercitationem sint, accusantium earum veniam
        aperiam, quisquam eligendi facilis cumque! Tempore aperiam rerum sunt
        doloribus repudiandae, voluptas suscipit. Enim aspernatur saepe
        sapiente?
      </p>
  </div>
  <div className="w-[50%] h-[550px] border-2 border-black flex flex-col justify-center items-center p-12">
  <img src={imageUrl} width={15} alt="Image Url" className="h-80 w-64 " />
        <span>
          <img src="/Vector.png" alt="" className=" absolute top-0 right-0 h-[500px] w-[450px] -z-10"  />
        </span>
  </div>
</div>
    </>

 
 

  );
};

export default Hero;
