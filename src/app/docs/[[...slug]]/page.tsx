export function Page({params}: {
    params: {
        slug: string[]
    }
}) {

    if (params.slug?.length === 1) {
        return <main>This is a doc's {params.slug[0]} feature page</main>
    }

    if (params.slug?.length === 2) {
        return <main>This is a doc's {params.slug[0]} feature and {params.slug[1]} concept page</main>
    }

    return ( <main>This is a doc's Page.</main> );
}

export default Page;