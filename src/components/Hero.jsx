export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white pt-16 pb-16">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 mt-20 px-4 py-1.5 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
          Google AI 바이브코딩 x 원데이클래스
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-brand-text tracking-tight">
          노코딩으로<br />무엇이든 만드는<br />
          <span className="text-brand-primary">새로운 AI 세상</span>
        </h1>

        <p className="text-base sm:text-xl text-brand-muted mb-10 leading-relaxed">
          코딩 몰라도 OK!<br />
          구글 AI와 대화로 완성하는 나만의 자동화 &amp; 웹앱
        </p>

        <a
          href="#register"
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-600 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          지금 신청하기
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <p className="mt-5 text-sm text-gray-400 leading-relaxed">
          교육일시 : 4월 11일(토) 9시~18시 (8시간, 점심 13시~14시)<br />
          교육장소 : 한국평생교육 HRD 진흥협회<br />(전주시 오공로 49, 4층)
        </p>
      </div>
    </section>
  )
}
