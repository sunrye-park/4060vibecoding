export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Re:frame. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
