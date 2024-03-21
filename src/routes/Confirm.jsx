import { useEffect } from 'react';

export default function Confirm() {
  const urlRedirecionamento = "https://chat.whatsapp.com/HtMU9miGzaFEWKs1ePKetD";
  useEffect(() => {
    const delay = 5000;

    const timeout = setTimeout(() => {
      window.location.replace(urlRedirecionamento);
    }, delay);
  });
  
  return (
    <section className="text-white body-font">
      <div className='bg-amber-700 bg-opacity-50 flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 text-xl md:text3xl sm:text-4xl font-medium text-white text-center">Aguarde para ser redirecionado ao grupo no WhatsApp</h2>
      </div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Dias de Clamor Pela Vida Financeira</h1>
          <p className="mb-8 leading-relaxed text-black">
            Prepare-se para ter acesso a uma nova vida! Experiências que antes pareciam impossíveis vão se tornar reais.
          </p>
          
          <div className="pt-2">
            <div className='progress-container'>
              <div className='progress-bar'></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
