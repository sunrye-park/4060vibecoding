const sessions = [
  {
    number: '1교시',
    title: 'Google Opal 실습',
    subtitle1: '반복 업무는 AI에게',
    subtitle2: '— 나를 위한 자동화 완성',
    details: [
      { label: '개념 이해', content: 'AI 워크플로우란 무엇인가 / 노드와 흐름으로 생각하기 / AI에게 일을 시킨다는 것의 의미' },
      { label: '도구 탐색', content: 'Google Opal 인터페이스 이해 / 노드 연결 방식 / 모델 선택 기준' },
      { label: '실습', content: '나의 반복 업무를 자동화 흐름으로 설계하기 / 나만의 AI 자동화 워크플로우 완성' },
      { label: '마무리', content: '내가 만든 흐름 공유 / 바이브코딩으로 가기 위한 사고방식 정리' },
    ],
  },
  {
    number: '2교시',
    title: 'Google AI Studio 실습',
    subtitle1: 'AI와 바이브코딩',
    subtitle2: '— 나를 소개하는 반응형 웹앱 만들기',
    details: [
      { label: '개념 이해', content: '바이브코딩이란 무엇인가 / AI와 대화로 개발한다는 것 / 좋은 프롬프트가 좋은 결과물을 만든다' },
      { label: '도구 탐색', content: 'Google AI Studio 인터페이스 이해 / 모델별 특성 / 시스템 프롬프트 설계' },
      { label: '실습', content: '내가 원하는 웹앱 기획하기 / AI와 대화하며 단계별 구현 / 반응형 웹앱 완성 및 배포' },
      { label: '마무리', content: '결과물 공유 / 앞으로의 바이브코딩 학습 로드맵' },
    ],
  },
]

export default function CourseInfo() {
  return (
    <section id="course" className="py-16 px-6 bg-white border-t border-gray-100">
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
        <div className="space-y-8">
          {sessions.map((s, i) => (
            <div key={i} className="pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex gap-5 mb-4">
                <div className="flex-shrink-0 w-14 pt-0.5">
                  <span className="text-[13px] font-semibold tracking-widest text-gray-400 uppercase">{s.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[22px] font-semibold text-gray-900 mb-0.5">{s.title}</p>
                  <p className="text-[17px] text-gray-500 leading-snug">
                    {s.subtitle1}<br className="sm:hidden" />{s.subtitle2}
                  </p>
                </div>
              </div>

              {/* 상세 내용 */}
              <div className="ml-[4.75rem] space-y-0">
                {s.details.map((d, j) => (
                  <div key={j} className="flex gap-3 py-2.5 border-t border-gray-50">
                    <span className="text-[12px] font-semibold text-sage-600 flex-shrink-0 w-16 pt-0.5">{d.label}</span>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{d.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
