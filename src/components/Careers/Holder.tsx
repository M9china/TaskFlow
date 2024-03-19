export const Holder: React.FC<{title: string}> = ({title}) => {
    return (
        
        <div
            className=" h-[60vh] sm:w-full w-screen "
        >
          <div className=" justify-center place-items-center flex flex-col h-full w-full">
          <img src="/placeholder/dev.gif" className="w-1/3" alt="" />
            <span className=" block text-2xl font-semibold text-gray-900">{title}</span>
          </div>
        </div>
    )
}
