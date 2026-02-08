"use client";

import { useEffect } from "react";

export default function ContaboRedirectPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("contabo-affiliate-clicked", {
        affiliate_service: "contabo",
        cta_location: "direct-route",
        intent: "hosting-affiliate",
      });
    }

    window.location.href =
      "https://www.kqzyfj.com/ld104p-85-7NPOPRVTXVXNPTOQQRVO?sid=cmp_siteweb";
  }, []);

  return null;
}
