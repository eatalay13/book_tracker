import Button from "@/components/Button";
import Card from "@/components/Card";
import { ChevronRight } from "lucide-react";

function ReportContainer() {
  return (
    <Card>
      <div>
        <p className="mb-4 text-center">Bugün için giriş yaptınız!</p>
        <Button className="flex w-full items-center justify-center">
          Raporları Görüntüle <ChevronRight className="ml-2" />
        </Button>
      </div>
    </Card>
  );
}

export default ReportContainer;
