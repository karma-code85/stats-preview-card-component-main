export default function App(){
  return (
    <div className="min-h-screen flex justify-center items-center  bg-black p-4 relative">
      <div className="absolute inset-0 bg-[hsl(277,64%,61%)] opacity-20"></div>
      <div className="flex flex-col rounded-lg bg-[hsl(244,37%,16%)] space-y-6  shadow-lgrm -rf my-project/.git" >
        <div className="w-full h-full  ">
          <img src="./images/image-header-mobile.jpg" alt=""  className="rounded-tl-lg rounded-tr-lg"/>
        </div>
        <div className="p-4 space-y-4">
          <h1 className="font-semibold text-center text-white text-3xl">Get <span className="text-[hsl(277,64%,61%)]">insights</span> that help your business grow. </h1>
          <p className="text-center text-white">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. </p>
          <div className="text-center space-y-4 text-white">
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