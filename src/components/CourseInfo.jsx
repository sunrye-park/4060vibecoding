const sessions = [
  {
    number: '1회차',
    title: 'Google Opal 실습',
    subtitle1: '반복 업무는 AI에게',
    subtitle2: '— 나를 위한 자동화 완성',
    date: '4월 11일(토)',
    time: '오후 1시 ~ 5시',
  },
  {
    number: '2회차',
    title: 'Google AI Studio 실습',
    subtitle1: 'AI와 바이브코딩',
    subtitle2: '— 나를 표현하는 반응형 웹앱 만들기',
    date: '4월 12일(일)',
    time: '오후 1시 ~ 5시',
  },
]

export default function CourseInfo() {
  return (
    <section id="course" className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto">

        {/* 헤더 */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[13px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Curriculum</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">과정 안내</h2>
          </div>
          <span className="text-sm text-gray-400 mb-1">총 8시간 실습</span>
        </div>

        {/* 세션 목록 */}
        <div className="space-y-0">
          {sessions.map((s, i) => (
            <div key={i} className="flex gap-5 py-5 border-b border-gray-100 last:border-b-0">
              <div className="flex-shrink-0 w-14 pt-0.5">
                <span className="text-[13px] font-semibold tracking-widest text-gray-400 uppercase">{s.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[22px] font-semibold text-gray-900 mb-0.5">{s.title}</p>
                <p className="text-[17px] text-gray-500 mb-2 leading-snug">
                  {s.subtitle1}<br className="sm:hidden" />{s.subtitle2}
                </p>
                <p className="text-[15px] text-gray-400">{s.date} · {s.time} (4시간)</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
