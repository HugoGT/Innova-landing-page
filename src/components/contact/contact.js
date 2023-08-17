import React from "react";

export function Contact() {
  return (
    <section id="contacto" className="contact-section bg-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
          Contacto
        </h2>
        <div className="flex flex-col lg:flex-row rounded-lg bg-white max-w-6xl mx-auto overflow-hidden">
          <form className="p-8 lg:w-1/2">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm md:text-base font-bold mb-2"
                for="name"
              >
                Nombre
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm md:text-base font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm md:text-base font-bold mb-2"
                for="message"
              >
                Mensaje
              </label>
              <textarea
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              class="bg-custom_blue-300 hover:bg-custom_blue-400 text-white font-bold md:text-lg py-2 px-6 rounded"
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="p-10 bg-custom_blue-700 lg:w-1/2 text-white">
            <h3 className="pb-6 text-xl md:text-2xl font-medium text-center">
              MÁS INFORMACIÓN
            </h3>
            <p>
              <b>Dirección:</b> Av. El Carmen 611 Ofic.101 - Santiago de Surco
            </p>
            <br />
            <p>
              <b>Teléfono:</b> (01)777-7777
            </p>
            <br />
            <p>
              <b>Celular:</b> 939135303
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
