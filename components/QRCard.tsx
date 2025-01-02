import Image from "next/image";

const QRCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-72 sm:w-80"> 
        <div className="flex justify-center">
          <Image
            src="/image-qr-code.png"
            alt="QR Code"
            width={240}  
            height={240} 
            className="rounded-lg"
          />
        </div>
        <h1 className="text-slate-900 text-xl font-bold text-center mt-8 font-outfit"> {/* Aumenté el tamaño de la fuente */}
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 text-center mt-6 font-outfit text-[16px]"> {/* Aumenté el tamaño de la fuente */}
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCard;
