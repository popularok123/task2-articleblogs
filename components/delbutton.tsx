'use client'

export function DeleteButton({ slug }: { slug: string }) {
  return (
    <form action={async () => {
      await deleteArticle(slug)
    }}>
      <button type="submit">Delete</button>
    </form>
  )
}

 async function deleteArticle(slug: string) {
     const url =`/api/blog/${slug}`;
    const method = "DELETE";

   const res =  await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/";

    if (!res.ok) {
      throw new Error("Failed to delete article");
    }
}

