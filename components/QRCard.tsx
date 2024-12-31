import Image from "next/image";

const QRCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="bg-white rounded-2xl shadow-lg p-4 w-60 sm:w-77">
        <div className="flex justify-center">
          <Image
            src="/public/image-qr-code.png"
            alt="QR Code"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-slate-900 text-lg font-bold text-center mt-6 font-outfit">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 text-center mt-4 font-outfit text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCard;
