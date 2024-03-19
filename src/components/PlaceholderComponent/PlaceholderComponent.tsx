export const PlaceholderComponent: React.FC<{title: string}> = ({title}) => {
    return (
        
        <div
            className=" h-[60vh] w-screen flex items-center justify-center "
        >
          <div className="fl justify-center place-items-center flex flex-cols h-full w-full mx-4">
          <img src="/placeholder/dev.gif" className="w-1/3" alt="" />
            <span className="mt-2 block text-2xl font-semibold text-gray-900">{title}</span>
          </div>
        </div>
    )
}
