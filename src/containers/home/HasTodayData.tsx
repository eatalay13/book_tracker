interface HasTodayDataProps {
  pageCount: number;
}

function HasTodayData({ pageCount }: HasTodayDataProps) {
  return (
    <div>
      Tebrikler bugün veri girişi yapmışsınız. Bugün okuduğunuz sayfa sayısı:
      {pageCount}
    </div>
  );
}

export default HasTodayData;
