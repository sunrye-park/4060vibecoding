import { useState } from 'react'

export default function CompletionScreen({ name, course, price, phone }) {
  const [copied, setCopied] = useState(false)

  const lastFour = phone.replace(/-/g, '').slice(-4)
  const depositorName = `${name}${lastFour}`
  const accountNumber = '1013-01-0607936'
  const bankName = '전북은행'
  const accountHolder = '(사)한국평생교육 에이치알디 진흥협회'

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = accountNumber
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="register" className="py-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sage-200 shadow-lg text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">{name}님, 신청이 완료되었습니다!</h2>
          <p className="text-brand-muted mb-8">신청 과정: {course}</p>

          <div className="bg-sage-50 rounded-xl p-6 text-left space-y-3 mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              💳 수강료 입금 안내
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-muted">은행명</span>
                <span className="font-medium">{bankName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-muted">계좌번호</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{accountNumber}</span>
                  <button
                    onClick={copyAccount}
                    className="text-xs bg-sage-200 text-sage-700 px-2.5 py-1 rounded-lg hover:bg-sage-300 transition-colors font-medium"
                  >
                    {copied ? '복사됨!' : '복사'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">예금주</span>
                <span className="font-medium">{accountHolder}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">금액</span>
                <span className="font-bold text-brand-primary">{price.toLocaleString()}원</span>
              </div>
            </div>
          </div>

          <div className="bg-warm-50 rounded-xl p-5 text-left space-y-2 text-sm mb-6">
            <p className="font-semibold">📌 입금자명: {depositorName}</p>
            <p className="text-brand-muted">예) 박선례0831</p>
          </div>

          <div className="text-sm text-brand-muted space-y-1">
            <p>⏰ 입금 기한: 신청일로부터 3일 이내</p>
            <p>입금 확인 후 최종 수강 확정 연락을 드립니다.</p>
          </div>
        </div>

        {/* Toast */}
        {copied && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg animate-bounce">
            복사되었습니다!
          </div>
        )}
      </div>
    </section>
  )
}
