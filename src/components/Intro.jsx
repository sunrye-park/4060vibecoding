export default function Intro() {
  return (
    <section className="py-16 px-4 bg-sage-50 border-t border-sage-100">
      <div className="max-w-md mx-auto space-y-3 text-[17px] leading-relaxed text-gray-700 text-center" style={{fontFamily: "'Gowun Batang', serif"}}>
        <p>
          <span className="font-semibold">흐름을 설계하고, 도구를 연결하고, 결과물이 작동하는 순간</span><br />
          AI를 바라보는 시각이 달라집니다.
        </p>
        <p>
          <span className="font-semibold">사용자에서 설계자로, Change UP!</span>
        </p>
      </div>
      <div className="max-w-md mx-auto mt-8">
        <img src="/hero-tools.png" alt="Google Opal · AI Studio" className="w-full rounded-xl" />
      </div>
    </section>
  )
}
