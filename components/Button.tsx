export default function Button({ buttonText, buttonLink, type }) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl pt-8">
                { type == "primary" &&
                    <a href={buttonLink} className="py-3 px-6 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md">
                        {buttonText}
                    </a>
                }
            </div>
        </div> 
    );
}