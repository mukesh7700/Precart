const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params; // Ensure it resolves properly

  return <div>Product details: {decodeURIComponent(resolvedParams.id)}</div>;
};

export default Page;
