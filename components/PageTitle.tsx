export default function PageTitle({ title }) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl py-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
        </div> 
    );
}