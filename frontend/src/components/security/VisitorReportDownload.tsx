import { toast } from "react-toastify";

export default function VisitorReportDownload() {
  const downloadReport = async () => {
    try {
      const res = await fetch("/api/visitor/report");

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "visitor-report.csv";
      a.click();

      toast.success("Report downloaded");
    } catch {
      toast.error("Download failed");
    }
  };

  return (
    <div>
      <button
        onClick={downloadReport}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Download Visitor Report
      </button>
    </div>
  );
}
