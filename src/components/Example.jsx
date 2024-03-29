import Image from "next/image";
import analyticsImage from "src/images/Analytics_Dashboard_2.png";

function Example(props) {
  return (
    <section className="w-full max-w-sm rounded-md bg-gradient-to-bl from-slate-950 to-transparent p-4 py-8 shadow-sm shadow-violet-900">
      <h2 className="text-md font-bold text-violet-500">{props.title}</h2>
      <h3 className="pb-5 pt-2 text-lg text-neutral-500"> {props.subtitle} </h3>
      {/* <div className="border-1 flex h-40 flex-col items-center overflow-hidden rounded-md border-slate-600 bg-slate-900 shadow-lg shadow-slate-950">
        <Image
          src={props.image}
          alt="example analytics image"
          width={450}
          height={250}
        />
      </div> */}
    </section>
  );
}

export default Example;
