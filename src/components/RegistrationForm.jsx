import { useState } from 'react'
import { submitRegistration } from '../lib/webhook'
import PrivacyModal from './PrivacyModal'
import CompletionScreen from './CompletionScreen'

const COURSE = { label: 'Google AI 바이브코딩 (1회차 + 2회차)', price: 200000 }
const PHONE_REGEX = /^010-\d{4}-\d{4}$/

function formatPhone(value) {
  const nums = value.replace(/\D/g, '')
  if (nums.length <= 3) return nums
  if (nums.length <= 7) return `${nums.slice(0, 3)}-${nums.slice(3)}`
  return `${nums.slice(0, 3)}-${nums.slice(3, 7)}-${nums.slice(7, 11)}`
}

function Field({ label, error, children }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          {label}<span className="text-red-500 ml-0.5">*</span>
        </label>
        {error && <span className="text-[11px] text-red-400">{error}</span>}
      </div>
      {children}
    </div>
  )
}

const fieldCls =
  'w-full bg-transparent border-0 border-b border-gray-200 py-1.5 text-[17px] text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-500 transition-colors duration-150'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', discount: false, motivation: '', privacy: false,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [completed, setCompleted] = useState(false)

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = '필수'
    if (!form.phone.trim()) errs.phone = '필수'
    else if (!PHONE_REGEX.test(form.phone)) errs.phone = '010-0000-0000'
    if (!form.email.trim()) errs.email = '필수'
    if (!form.motivation.trim()) errs.motivation = '필수'
    if (!form.privacy) errs.privacy = '동의 필요'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    try {
      const price = form.discount ? Math.floor(COURSE.price * 0.5) : COURSE.price
      await submitRegistration({
        name: form.name.trim(), phone: form.phone, email: form.email.trim(),
        course: COURSE.label, discount: form.discount,
        motivation: form.motivation.trim(), price,
      })
      setCompleted(true)
    } catch (err) {
      console.error(err)
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  if (completed) {
    const price = form.discount ? Math.floor(COURSE.price * 0.5) : COURSE.price
    return <CompletionScreen name={form.name} course={COURSE.label} price={price} phone={form.phone} />
  }

  const displayPrice = form.discount
    ? `${(COURSE.price * 0.5).toLocaleString()}원`
    : `${COURSE.price.toLocaleString()}원`

  return (
    <section id="register" className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto">

        {/* 섹션 타이틀 */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Registration</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">수강 신청</h2>
          </div>
          <span className="text-sm text-gray-400 mb-1">선착순 20명</span>
        </div>

        {/* 과정 요약 */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-0">
          <div>
            <p className="text-[17px] font-medium text-gray-900">Google AI 바이브코딩</p>
            <p className="text-[15px] text-gray-400 mt-0.5">1회차 · 2회차 포함 · 총 8시간</p>
          </div>
          <p className="text-[17px] font-bold text-gray-900 tabular-nums">{displayPrice}</p>
        </div>

        {/* 할인 체크박스 — 과정 요약 바로 아래 */}
        <div className="py-3 border-b border-gray-100 mb-8">
          <label className="flex items-center gap-2.5 cursor-pointer group/check">
            <input type="checkbox" checked={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.checked })}
              className="w-3.5 h-3.5 rounded-sm border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0" />
            <span className="text-[17px] text-gray-500 group-hover/check:text-gray-700 transition-colors">
              생활창의AI학습지도사 수료자
              <span className="ml-1 text-gray-900 font-medium">— 50% 할인</span>
            </span>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이름 + 연락처 */}
          <div className="grid grid-cols-2 gap-6">
            <Field label="이름" error={errors.name}>
              <input type="text" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={fieldCls} placeholder="홍길동" />
            </Field>
            <Field label="연락처" error={errors.phone}>
              <input type="tel" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                className={fieldCls} placeholder="010-0000-0000" maxLength={13} />
            </Field>
          </div>

          {/* 이메일 */}
          <Field label="이메일" error={errors.email}>
            <input type="email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={fieldCls} placeholder="example@email.com" />
          </Field>

          {/* 신청 동기 */}
          <Field label="신청 동기" error={errors.motivation}>
            <textarea value={form.motivation}
              onChange={(e) => setForm({ ...form, motivation: e.target.value })}
              className={fieldCls + ' resize-none'} rows={2}
              placeholder="어떤 걸 만들어보고 싶으신가요?" />
          </Field>

          {/* 개인정보 동의 */}
          <div className="pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer group/check">
              <input type="checkbox" checked={form.privacy}
                onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                className="w-3.5 h-3.5 rounded-sm border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0" />
              <span className="text-[17px] text-gray-500 group-hover/check:text-gray-700 transition-colors">
                <button type="button" onClick={() => setShowPrivacy(true)}
                  className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                  개인정보 수집 및 이용
                </button><span className="text-red-500 ml-0.5">*</span>
                에 동의합니다
                {errors.privacy && <span className="ml-2 text-red-400">{errors.privacy}</span>}
              </span>
            </label>
          </div>

          {/* 제출 버튼 */}
          <div className="pt-2">
            <button type="submit" disabled={submitting}
              className="w-full py-3 bg-gray-900 text-white text-[15px] font-semibold tracking-wide hover:bg-gray-700 disabled:opacity-30 transition-colors duration-150">
              {submitting ? '처리 중...' : '신청하기'}
            </button>
          </div>
        </form>
      </div>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </section>
  )
}
