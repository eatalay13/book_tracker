import Button from "@/components/Button";
import Card from "@/components/Card";
import { ChevronRight } from "lucide-react";

function ReportContainer() {
  const reports = [
    {
      createdDate: "2024-09-01",
      count: 10,
    },
    {
      createdDate: "2024-09-02",
      count: 5,
    },
    {
      createdDate: "2024-09-03",
      count: 5,
    },
    {
      createdDate: "2024-09-04",
      count: 5,
    },
  ];

  return (
    <Card>
      <div>
        <h2 className="text-center text-3xl font-bold">Raporlar</h2>
        <p className="text-center text-gray-500">
          Bugün için raporlarınızı görüntüleyin.
        </p>
        {
          <div className="mt-4">
            {reports.map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-2"
              >
                <p>{report.createdDate}</p>
                <p>{report.count}</p>
              </div>
            ))}
          </div>
        }
        <div className="flex items-center justify-between border-b border-gray-200 py-2">
          <p>Toplam</p>
          <p>{reports.reduce((acc, report) => acc + report.count, 0)}</p>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-2">
          <p>Ortalama</p>
          <p>
            {reports.reduce((acc, report) => acc + report.count, 0) /
              reports.length}
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-2">
          <p>En Yüksek</p>
          <p>
            {reports.reduce((acc, report) => {
              if (acc < report.count) {
                return report.count;
              }
              return acc;
            }, 0)}
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-2">
          <p>En Düşük</p>
          <p>
            {reports.reduce((acc, report) => {
              if (acc > report.count) {
                return report.count;
              }
              return acc;
            }, reports[0].count)}
          </p>
        </div>
        <br />
        <Button className="flex w-full items-center justify-center">
          Raporları Görüntüle <ChevronRight className="ml-2" />
        </Button>
      </div>
    </Card>
  );
}

export default ReportContainer;
