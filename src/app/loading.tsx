import Card from "@/components/Card";
import FullPage from "@/components/FullPage";

function Loading() {
  return (
    <FullPage>
      <Card>
        <div className="flex items-center justify-center">
          <h2 className="text-xl">Yükleniyor...</h2>
        </div>
      </Card>
    </FullPage>
  );
}

export default Loading;
