"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import FullPage from "@/components/FullPage";
import { ChevronRight } from "lucide-react";

function ReportContainer() {
  return (
    <FullPage>
      <Card>
        <div>
          <p className="text-center mb-4">Bugün için giriş yaptınız!</p>
          <Button className="w-full flex items-center justify-center">
            Raporları Görüntüle <ChevronRight className="ml-2" />
          </Button>
        </div>
      </Card>
    </FullPage>
  );
}

export default ReportContainer;
