import { use } from "react";
import Trips from "@/components/Trips";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <Trips id={id} />;
}
