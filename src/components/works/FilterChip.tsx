type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const FilterChip = ({ label, active, onClick }: FilterChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex cursor-pointer items-center justify-center rounded-full border px-4 py-1.5 transition-colors " +
        (active
          ? // ✅ 선택된 탭: 밝은 하늘색 배경 + 진한 글씨
            "border-transparent bg-cyan-300 text-slate-950 shadow-sm"
          : // ✅ 비활성 탭: 어두운 배경 + 연한 테두리
            "border-white/15 bg-transparent text-white/70 hover:bg-white/5")
      }
    >
      {label}
    </button>
  );
};

export default FilterChip;
