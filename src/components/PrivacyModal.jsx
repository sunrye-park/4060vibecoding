export default function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">개인정보 수집 및 이용 동의</h3>

        <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
          <div>
            <p className="font-semibold text-gray-800 mb-1">1. 수집 항목</p>
            <p>이름, 연락처, 이메일(선택), 신청 과정, 할인 대상 여부, 신청 동기</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">2. 수집 및 이용 목적</p>
            <p>수강 신청 접수 및 관리, 수강료 입금 확인, 교육 안내 연락</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">3. 보유 및 이용 기간</p>
            <p>교육 종료 후 3개월까지 보유하며, 이후 지체 없이 파기합니다.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">4. 동의 거부 권리</p>
            <p>
              개인정보 수집 및 이용에 대한 동의를 거부할 수 있으며, 다만 동의를 거부할 경우 수강 신청이 제한될 수 있습니다.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-brand-primary text-white py-3 rounded-xl font-semibold hover:bg-sage-600 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  )
}
