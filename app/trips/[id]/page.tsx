import Trips from "@/components/Trips";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // unwrap Promise params

  return <Trips id={id} />;
}
