export default function PageTitle({ title }) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl pt-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
        </div> 
    );
}