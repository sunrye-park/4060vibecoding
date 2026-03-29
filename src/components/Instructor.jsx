export default function Instructor() {
  return (
    <section id="instructor" className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto">

        {/* 헤더 */}
        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Instructor</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">강사 소개</h2>
        </div>

        {/* 강사 정보 */}
        <div className="flex items-start gap-5 pb-6 border-b border-gray-100">
          <img
            src="/instructor.jpeg"
            alt="박선례 강사"
            className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="text-[22px] font-bold text-gray-900 mb-0.5">박선례</p>
            <p className="text-[17px] text-gray-400 leading-snug">
              AI활용 전문강사 · AI교육부장
            </p>
            <p className="text-[12px] text-gray-400 mt-0.5">한국평생교육 HRD 진흥협회</p>
          </div>
        </div>

        <div className="pt-5 space-y-3">
          <p className="text-[13px] sm:text-[17px] text-gray-600 leading-relaxed">
            현장 중심의 실습 커리큘럼을 개발하는 AI활용 전문강사,<br />
            누구나 AI로 무언가를 만들 수 있도록 수업을 설계하고 진행합니다.
          </p>
          <p className="text-[17px] text-gray-400">🐌 천천히 끝까지 🪴</p>
        </div>
      </div>
    </section>
  )
}
