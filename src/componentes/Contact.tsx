

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 py-8 px-4">
      <div className="max-w-[450px] mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Contáctanos</h1>

        <div className="grid gap-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 bg-white/90 border-0 placeholder:text-gray-500 rounded"
            />
            <input
              type="text"
              placeholder="Sugerencias"
              className="w-full p-3 bg-white/90 border-0 placeholder:text-gray-500 rounded"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full p-3 bg-white/90 border-0 placeholder:text-gray-500 min-h-[100px] rounded"
            />
            <button className="w-full p-3 bg-purple-700 hover:bg-purple-600 text-white rounded">
              ENVIAR
            </button>
          </form>

          <div className="bg-indigo-950/50 rounded-3xl p-6 space-y-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-purple-200">
              <span className="text-lg font-bold">📍</span>
              <div>
                <p className="text-sm text-purple-300">UBICACIÓN</p>
                <p>MEDELLÍN, ANTIOQUIA</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-purple-200">
              <span className="text-lg font-bold">📞</span>
              <div>
                <p className="text-sm text-purple-300">CELULAR</p>
                <p>3136173078</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-purple-200">
              <span className="text-lg font-bold">✉️</span>
              <div>
                <p className="text-sm text-purple-300">E-MAIL</p>
                <p className="uppercase">imperium.sound@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-purple-200">
              <span className="text-lg font-bold">🕒</span>
              <div>
                <p className="text-sm text-purple-300">HORARIO</p>
                <p>LUN - VIER 9:00 AM A 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed top-20 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-50" />
        <div className="fixed bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
        <div className="fixed top-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-20" />
      </div>
    </div>
  )
}