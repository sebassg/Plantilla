import "../index.css";
import { useNavigate } from "react-router-dom";

function PagInicio() {
  const navigate = useNavigate();
  const registroURL = "/registro";

  return (
    <>
      <div className="bg-gradient-to-br from-purple-950 to-indigo-950 min-h-screen flex flex-col items-center justify-center text-white font-sans relative">
        <header className="absolute top-4 left-4 right-4 flex justify-between items-center w-full">
          <span className="text-sm text-gray-300">Inicio</span>
        </header>
        
        <main className="flex flex-col items-start mt-24 px-6 md:px-12 w-full">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">10,000</h1>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Personas a tiempo real</h2>
          </div>
      
          <p className="text-lg sm:text-xl max-w-lg mx-auto mb-8 text-gray-300">
            Bienvenidos a IMPERIUM SOUND, donde la música y el sonido se fusionan para ofrecerte una experiencia única. Únete a nuestra comunidad y sé parte de esta vibrante red de personas que disfrutan de lo mejor del entretenimiento sonoro, ¡todo en tiempo real!
          </p>

          <button
            onClick={() => navigate(registroURL)}
            className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full text-lg font-medium transition duration-300"
          >
            REGISTRARME
          </button>
        </main>
      </div>
    </>
  );
}

export default PagInicio;

