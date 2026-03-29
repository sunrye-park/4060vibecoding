const items = [
  'AI로 일상과 업무의 한계를 넓히고 싶은 분',
  '코딩 없이 나만의 자동화 도구를 만들어보고 싶은 분',
  '강의만 듣는 수업이 아닌, 직접 만들며 배우고 싶은 분',
  '새로운 AI 도구를 수업에 활용하고 싶은 교육 전문가',
]

export default function TargetAudience() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
      <div className="max-w-md mx-auto">

        {/* 헤더 */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[13px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Who it's for</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">이런 분께 추천합니다</h2>
            <span className="text-sm text-gray-400 mt-1 block sm:hidden">코딩 경험 불필요</span>
          </div>
          <span className="text-sm text-gray-400 mb-1 hidden sm:block">코딩 경험 불필요</span>
        </div>

        {/* 항목 */}
        <div className="space-y-0">
          {items.map((text, i) => (
            <div key={i} className="flex items-baseline gap-4 py-2 border-b border-gray-200 last:border-b-0">
              <span className="text-[13px] font-semibold text-gray-300 tabular-nums flex-shrink-0 w-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[17px] text-gray-700 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
