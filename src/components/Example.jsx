import Image from "next/image";
import analyticsImage from "src/images/Analytics_Dashboard_2.png";

function Example(props) {
  return (
    <div className="w-full py-4 max-w-sm">
      <h3 className="py-4 text-2xl text-neutral-300"> {props.title} </h3>
      <div className="overflow-hidden flex flex-col items-center border-1 h-40 rounded-md border-slate-600 bg-slate-900 shadow-md shadow-blue-600">
        <Image src={props.image} alt="example analytics image" width={450} height={250} />
      </div>
    </div>
  );
}

export default Example;
