"use client";

import { useCallback, useState } from "react";

interface PdfDownloadOptions {
  filename?: string;
  elementSelector?: string;
}

export function usePdfDownload() {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = useCallback(async (options: PdfDownloadOptions = {}) => {
    const {
      filename = "Matt_Gunnin_Resume.pdf",
      elementSelector = 'section[aria-label="Resume Content"]',
    } = options;

    setIsGenerating(true);

    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import("html2pdf.js")).default;

      const element = document.querySelector<HTMLElement>(elementSelector);
      if (!element) {
        throw new Error("Resume content not found");
      }

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: {
          unit: "mm" as const,
          format: "a4" as const,
          orientation: "portrait" as const,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] as const },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { downloadPdf, isGenerating };
}
