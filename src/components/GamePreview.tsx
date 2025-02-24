interface GamePreviewProps {
  nameOfGame: string;
  imgPath: string;
  description: string;
}

const GamePreview = ({
  nameOfGame,
  imgPath,
  description,
}: GamePreviewProps) => {
  return (
    <div className="flex items-center justify-center animate-fade-in">
      <div className="pt-20 w-4/5 max-w-[1250px] flex flex-col lg:flex-row justify-center">
        {/* Image Container */}
        <div className="flex-1 p-1 bg-orange-pink-gradient rounded-lg md:order-1">
          <img
            src={imgPath}
            className="w-full border-2 border-black shadow-xl rounded-lg scale-90 transition-transform transform hover:scale-100"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 pl-10 md:pl-10 shadow-md rounded-lg p-6 bg-secondary md:order-2">
          <h2 className="font-bold italic text-3xl my-10 bg-orange-pink-gradient bg-clip-text text-transparent">
            {nameOfGame}
          </h2>
          <p className="text-custom-pink">
            <b className="bg-orange-pink-gradient bg-clip-text text-transparent">
              Description:
            </b>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GamePreview;
