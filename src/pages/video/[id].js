import { useRouter } from "next/router"


export default function Video(props){
    const router = useRouter();
    const {title} = router.query; 
    const {likes} = router.query;
    const {views} = router.query;
    return (
        <div className="bg-white">
            <div>{title}</div>
            <div>{likes}</div>
            <div>{views}</div>
        </div> 
    )
    }
