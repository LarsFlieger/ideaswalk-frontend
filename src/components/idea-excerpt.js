export function IdeaExcerpt(props) {

    return <div className="mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{props.title}</h2>
        <dl className="border-t border-gray-200 mt-4 pt-4">
            <dt className="font-medium text-gray-900">Problem</dt>
            <dd className="mt-2 text-sm text-gray-500">{props.problem}</dd>
        </dl>
        <dl className="border-t border-gray-200 mt-4 pt-4">
            <dt className="font-medium text-gray-900">Lösung</dt>
            <dd className="mt-2 text-sm text-gray-500">{props.solution}</dd>
        </dl>
    </div>
}

export function IdeaExcerptSkeleton(props) {
    return <div className="animate-pulse mb-16 flex-1 space-y-4 py-1">
        <div className="h-10 bg-gray-400 rounded w-3/6"></div>
        <div className="space-y-2">
            <div className="h-6 bg-gray-500 rounded my-4 w-1/6"></div>
            <div className="h-4 bg-gray-400 rounded w-4/6"></div>
            <div className="h-4 bg-gray-400 rounded w-1/6"></div>
        </div>
        <div className="space-y-2">
            <div className="h-6 bg-gray-500 rounded my-4 w-1/6"></div>
            <div className="h-4 bg-gray-400 rounded w-4/6"></div>
            <div className="h-4 bg-gray-400 rounded w-3/6"></div>
        </div>
    </div>
}