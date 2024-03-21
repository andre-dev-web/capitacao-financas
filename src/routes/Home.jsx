import { useState } from 'react';

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function Submit(e) {
    e.preventDefault();
    const formEle = document.getElementById("formData");
    const formDatab = new FormData(formEle);
    
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxlXUxiarWlHOOprTM2s0QJnaOYSWZDmsTEaXh6ovUyJ4x_N-qs7rqnmluLhJ3W3Ob3/exec',
        {
          method: 'POST',
          body: formDatab,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        window.location.replace("/confirm")
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  }

  return (
    <section className="text-black body-font">
      <div className='bg-opacity-50 bg-amber-700 flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 my-4 text-xl md:text3xl sm:text-4xl font-medium text-white">Finanças à Luz da Bíblia!</h2>
      </div>
      
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img 
            className="object-cover object-center rounded" 
            alt="hero" 
            src="/cta.png"
            width={800}
            height={1200}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
          <h1 className="text-2xl mb-4 font-medium text-black text-center">
            Paz em meio às tempestades. Diante desses desafios, a <span className="text-amber-500">Palavra de Deus</span> nos oferece orientações valiosas sobre como <span className="text-amber-500">enfrentar as adversidades financeiras.</span> Em nosso grupo você recebe doses diárias de conhecimento sobre como enfrentar tudo isso, além de materiais exclusivos e eventos fechados.
          </h1>
          <form id='formData' className="w-full flex justify-center flex-col" onSubmit={(e) => Submit(e)}>
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-black">Nome<span className="text-red-400">*</span></label>
                <input required placeholder="Seu nome" name="Nome" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base outline-none text-black focus:text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>

            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-black">Email<span className="text-red-400">*</span></label>
                <input required placeholder="Seu email" name="Email" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base outline-none text-black focus:text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-black">WhatsApp<span className="text-red-400">*</span></label>
                <input required placeholder="Seu whatsapp" name="Whatsapp" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base outline-none text-black focus:text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-1/2 inline-flex justify-center text-gray bg-amber-500 border-0 my-2 py-2 focus:outline-none hover:bg-amber-400 hover:scale-105 rounded transition-color duration-300">{isSubmitting ? 'Enviando...' : 'Quero Fazer Parte'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}