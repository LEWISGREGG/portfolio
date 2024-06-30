import Image from "next/image";

function Circles() {
  return (
    <div className="w-[200px] xl:w-[200px] absolute left-1 -bottom-16
    mix-blend-color-dodge animate-pulse duration-400 z-10">
        <Image 
        src='/circles.png'
        width= {260}
        height= {200}
        alt='circles'
        className=" w-full h-full"/>
    </div>
  )
}

export default Circles