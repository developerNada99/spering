import Image from "next/image";
export default function Work(){
  return (
    <div className="flex justify-around items-center m-14 max-lg:flex-col h-full">
      <div>
        <h1 className="hed font-bold text-3xl mb-8 max-lg:text-center max-sm:text-2xl">WORK FREELANER HAS DONE</h1>
        <div className="one flex justify-start items-center mb-5 cursor-pointer">
          <div className="bg-[#1a2e35] hover:bg-[#1cbbb4] transition ease-linear duration-300 rounded-full p-3 w-20 h-20 flex justify-center items-center max-sm:h-16"><Image src="/f1.png"  height={40} width={40}/></div>
          <div className="w-fit pl-10">
            <h3 className="font-bold text-xl text-[#ff4f5a]">$250 Million</h3>
            <h1 className="font-bold text-3xl max-sm:text-2xl">Paid to Freelancers</h1>
          </div>
        </div>
        <div className="flex justify-start items-center mb-5 cursor-pointer">
          <div className="bg-[#1a2e35] hover:bg-[#1cbbb4] transition ease-linear duration-300 rounded-full p-3 w-20 h-20 flex justify-center items-center max-sm:w-16 max-sm:h-16"><Image src="/f2.png" height={40} width={40}/></div>
          <div className="w-fit pl-10">
            <h3 className="font-bold text-xl text-[#ff4f5a]">2 Million</h3>
            <h1 className="font-bold text-3xl max-sm:text-2xl">Paid Invoices</h1>
          </div>
        </div>
        <div className="flex justify-start items-center mb-5 cursor-pointer">
        <div className="hover:bg-[#1cbbb4] bg-[#1a2e35] transition ease-linear duration-300 rounded-full p-3 w-20 h-20 flex justify-center items-center max-sm:h-16"><Image src="/f3.png" height={40} width={40}/></div>
          <div className="w-fit pl-10">
            <h3 className="font-bold text-xl text-[#ff4f5a]">700,000</h3>
            <h1 className="font-bold text-3xl max-sm:text-2xl">Worldwide Freelancer</h1>
          </div>
        </div>
        <div className="flex justify-start items-center mb-5 cursor-pointer">
        <div className=" bg-[#1a2e35] hover:bg-[#1cbbb4] transition ease-linear duration-300 rounded-full p-3 w-20 h-20 flex justify-center items-center max-sm:h-16"><Image src="/f4.png" height={30} width={30}/></div>
          <div className="w-fit pl-10">
            <h3 className="font-bold text-xl text-[#ff4f5a]">98%</h3>
            <h1 className="font-bold text-3xl max-sm:text-2xl">Customer Satisfaction Rate</h1>
          </div>
        </div>
      </div>
      <div>
        <Image src="/freelance.jpg" height={650} width={650}/>
      </div>
    </div>
  )
}
