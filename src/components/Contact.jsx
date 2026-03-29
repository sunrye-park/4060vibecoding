import { useState } from 'react'
import { Phone } from 'lucide-react'
import { submitInquiry } from '../lib/webhook'

const PHONE_REGEX = /^010-\d{4}-\d{4}$/

function formatPhone(value) {
  const nums = value.replace(/\D/g, '')
  if (nums.length <= 3) return nums
  if (nums.length <= 7) return `${nums.slice(0, 3)}-${nums.slice(3)}`
  return `${nums.slice(0, 3)}-${nums.slice(3, 7)}-${nums.slice(7, 11)}`
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', content: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = '이름을 입력해주세요'
    if (!form.phone.trim()) errs.phone = '연락처를 입력해주세요'
    else if (!PHONE_REGEX.test(form.phone)) errs.phone = '올바른 형식: 010-0000-0000'
    if (!form.subject.trim()) errs.subject = '제목을 입력해주세요'
    if (!form.content.trim()) errs.content = '내용을 입력해주세요'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    try {
      await submitInquiry(form)
      setSent(true)
    } catch {
      alert('문의 전송 중 오류가 발생했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">문의하기</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone */}
          <div className="space-y-6">
            <div className="bg-sage-50 rounded-2xl p-6 sm:p-8 border border-sage-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">전화 문의</p>
                  <p className="text-sm text-brand-muted">평일 10:00 ~ 18:00</p>
                </div>
              </div>
              <a
                href="tel:010-3223-0831"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-sage-600 transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                010-3223-0831
              </a>
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            {sent ? (
              <div className="bg-sage-50 rounded-2xl p-8 border border-sage-100 text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-lg font-bold mb-2">문의가 접수되었습니다</h3>
                <p className="text-sm text-brand-muted">빠른 시일 내 답변 드리겠습니다.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', subject: '', content: '' }) }}
                  className="mt-4 text-sm text-brand-primary underline"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                <p className="text-xs text-brand-muted mb-2">문의 내용은 비공개로 처리됩니다</p>

                <div>
                  <input
                    type="text"
                    placeholder="이름 *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sage-300 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="연락처 * (010-0000-0000)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                    maxLength={13}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sage-300 transition-all"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="문의 제목 *"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sage-300 transition-all"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="문의 내용 *"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sage-300 transition-all resize-none"
                  />
                  {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-sage-600 text-white py-3 rounded-xl font-semibold hover:bg-sage-700 transition-colors disabled:opacity-50"
                >
                  {submitting ? '전송 중...' : '문의 보내기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
