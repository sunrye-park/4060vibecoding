const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL
const WEBHOOK_URL_INQUIRY = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL_INQUIRY

export async function submitRegistration(data) {
  const payload = {
    sheet: '수강신청',
    timestamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    name: data.name,
    phone: data.phone,
    email: data.email || '',
    course: data.course,
    discount: data.discount ? '할인 대상' : '일반',
    motivation: data.motivation || '',
    payment_status: '미입금',
    confirmed: '대기',
    memo: '',
  }

  if (!WEBHOOK_URL || WEBHOOK_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
    console.warn('Google Sheets webhook not configured — logging payload:', payload)
    return { success: true }
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return { success: true }
  } catch (err) {
    console.error('Webhook error:', err)
    return { success: false, error: err }
  }
}

export async function submitInquiry(data) {
  const payload = {
    sheet: '문의',
    timestamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    name: data.name,
    phone: data.phone,
    subject: data.subject,
    content: data.content,
    answered: '미답변',
  }

  if (!WEBHOOK_URL_INQUIRY || WEBHOOK_URL_INQUIRY === 'YOUR_APPS_SCRIPT_URL_HERE') {
    console.warn('Inquiry webhook not configured — logging payload:', payload)
    return { success: true }
  }

  try {
    await fetch(WEBHOOK_URL_INQUIRY, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return { success: true }
  } catch (err) {
    console.error('Inquiry webhook error:', err)
    return { success: false, error: err }
  }
}
