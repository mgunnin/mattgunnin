"use client";

import { Download } from "lucide-react";
import { usePdfDownload } from "@/lib/use-pdf-download";
import { Button } from "./ui/button";

export function PdfDownloadButton() {
  const { downloadPdf, isGenerating } = usePdfDownload();

  return (
    <Button
      onClick={() => downloadPdf()}
      variant="outline"
      size="icon"
      disabled={isGenerating}
      className="fixed bottom-4 right-16 flex rounded-full shadow-2xl xl:bottom-4 xl:right-4 print:hidden"
      aria-label={isGenerating ? "Generating PDF..." : "Download resume as PDF"}
    >
      <Download className={`size-5 ${isGenerating ? "animate-pulse" : ""}`} />
    </Button>
  );
}
