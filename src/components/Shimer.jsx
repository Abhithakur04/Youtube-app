const Shimer=()=>{
  let a=1;
    return ( <>
     <div className="flex  flex-wrap" data-testid="shimer"  >
       {Array(6).fill("").map((index)=><div key={index+a++}> <div  data-testid="shimer-item" className="w-[408px] bg-gray-500 h-[350px] my-6 mx-5 inline-block rounded-lg"> </div>
       <div className='flex mx-4'>
        <div className='h-10 w-10 rounded-full bg-gray-500 '></div>
       <div className="mx-2"><div className="h-5 w-[344px] bg-gray-500 rounded-lg"></div>
       <div className="h-5 w-[225px] bg-gray-500 my-2 rounded-lg"></div></div>
       </div>
       </div>)}
     </div>
    </>)
}
export default Shimer;