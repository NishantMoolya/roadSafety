import AccidentForm from "@/components/AccidentForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col w-full items-center gap-4">
      <Image src={'/WCEFinalLogo.png'} alt="college logo" width={'300'} height={'300'} />
      <AccidentForm />
      </div>
    </div>
  );
}
