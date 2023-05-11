import Image from "next/image";
function Card(props) {
    return (
      <div className=" p-6 mb-6 shadow-lg shadow-slate-600 flex flex-col gap-3 text-slate-300 bg-slate-700 rounded-lg border-2 text-center border-slate-900">
        <p className="text-4xl">{props.title}</p>
        <div className="flex justify-center">
          <img
            className="border-4 border-slate-200 rounded-full shadow-xl shadow-slate-900"
            src={props.thumbnail}
            width={230}
            height={10}
            alt={""}
          />
        </div>
        
        <div>
            <p className="text-2xl">Views: {props.viewCount}</p>
            <p className="text-2xl">Videos: {props.videoCount}</p>
        </div>
      </div>
    );
}

export default Card;