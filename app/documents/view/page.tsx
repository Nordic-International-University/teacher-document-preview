"use client";

import { useSearchParams } from "next/navigation";
import { AppHeader } from "@/components/app-header";
import { FilePreview } from "@/components/document-viewer";

export default function DocumentViewPage() {
  const params = useSearchParams();

  const doc = {
    name: params.get("name") || "",
    type: params.get("type") || "",
    url: params.get("url") || "",
    size: Number(params.get("size")) || 0,
    created_at: params.get("created") || "",
  };

  return (
    <>
      <AppHeader />
      <FilePreview name={doc.name} url={doc.url} size={doc.size} />
    </>
  );
}
