import Image from "next/image";
import analyticsImage from "src/images/Analytics_Dashboard_2.png";

function Example(props) {
  return (
    <section className="w-full py-1 max-w-sm">
      <h2 className="text-sm text-violet-400 font-bold">{props.title}</h2>
      <h3 className="pb-5 pt-2 text-xl text-neutral-600"> {props.subtitle} </h3>
      <div className="overflow-hidden flex flex-col items-center border-1 h-40 rounded-md border-slate-600 bg-slate-900 shadow-md shadow-blue-600">
        <Image src={props.image} alt="example analytics image" width={450} height={250} />
      </div>
    </section>
  );
}

export default Example;
