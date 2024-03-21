import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-amber-700 bg-opacity-50 pt-1 flex items-center">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="pb-2 text-white text-sm text-center sm:text-left">© Copyright — Bianca Duarte</p>
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
            <a href="https://www.instagram.com/eusoubiancaduarte/" className="text-white hover:scale-105 hover:text-black transition-all duration-300"  target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaInstagram/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCj5q-to22oHRKlqv6OAiNHg?sub_confirmation=1" className="ml-3 text-white hover:scale-105 hover:text-black transition-all duration-300"  target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaYoutube/>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}