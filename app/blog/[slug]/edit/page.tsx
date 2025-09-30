
import Form  from "./editForm";
export default async function EditBlog(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const id = params.slug;
    return <Form slug={id} />
}