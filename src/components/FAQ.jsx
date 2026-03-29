import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '코딩을 전혀 몰라도 수강할 수 있나요?',
    a: '네, 전혀 문제없습니다. 이 과정은 코딩 없이 AI 도구를 활용하는 방법을 배우는 수업입니다. PC 기본 사용이 가능하시면 충분합니다.',
  },
  {
    q: '노트북을 가져와야 하나요?',
    a: '네, 개인 노트북 지참은 필수입니다. 구글 계정이 있으면 바로 실습 가능합니다.',
  },
  {
    q: '1회차만 신청해도 되나요?',
    a: '회차별 단독 신청은 불가합니다. 1회차, 2회차 모두 수강하셔야 합니다.',
  },
  {
    q: '환불 규정은 어떻게 되나요?',
    a: '수업 7일 전까지 전액 환불, 3일 전까지 50% 환불, 이후 환불 불가합니다.',
  },
  {
    q: '할인은 어떻게 확인하나요?',
    a: '신청 시 할인 대상 체크 후, 수료증 사진을 010-3223-0831로 보내주세요.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 px-4 bg-warm-50/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Q &amp; A</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4"
              >
                <span className="text-base sm:text-lg font-medium text-gray-800">
                  Q. {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 text-base text-gray-600 leading-relaxed">
                  A. {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
