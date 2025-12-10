"use client";

import { Suspense } from "react";
import Stripe from "@/components/Stripe";

export default function StripePage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <Stripe />
    </Suspense>
  );
}
