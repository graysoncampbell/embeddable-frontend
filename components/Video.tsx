
import ReactPlayer from 'react-player'

export default function PageTitle({ url }) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl pt-8">
                <ReactPlayer url={url} 
                className="mx-auto"
                width="100%"
                />
            </div>
        </div> 
    );
}