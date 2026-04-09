export default function App(){
  return (
    <div className="min-h-screen flex justify-center items-center  bg-black p-4 relative">
      <div className="absolute inset-0 bg-[hsl(277,64%,61%)] opacity-20"></div>
      <div className=" md:flex rounded-lg bg-[hsl(244,37%,16%)] space-y-6  shadow-lgrm  max-w-6xl" >
        <div className="w-full h-full  md:w-1/2 md:order-2">
          <img src="./images/image-header-mobile.jpg" alt=""  className="rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-tl-none"/>
        </div>
        <div className="p-4 space-y-4 md:w-1/2 md:order-1 md:p-10 md:leading-9 md:text-lg">
          <h1 className="font-semibold text-center md:text-start text-white text-3xl md:font-extrabold md:text-4xl leading-2">Get <span className="text-[hsl(277,64%,61%)]">insights</span> that help your business grow. </h1>
          <p className="text-center md:text-start text-white">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. </p>
          <div className="text-center space-y-4 text-white md:flex items-center justify-center md:justify-between md:items-center">
            <div>
              <h1 className="font-extrabold text-xl">10k+ </h1>
              <p>companies</p>
            </div>
            <div>
              <h1 className="font-extrabold text-xl">314</h1>
              <p>templates</p>
            </div>
            <div>
              <h1 className="font-extrabold text-xl">12M+</h1>
              <p>queries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}