export default function HeroDashboardPreview() {
  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Efectos de iluminación externa */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full opacity-70"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-32 h-80 bg-blue-500/10 blur-3xl rounded-full opacity-50"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-16 w-32 h-80 bg-blue-500/10 blur-3xl rounded-full opacity-50"></div>

      {/* Imagen en lugar del dashboard */}
      <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg overflow-hidden shadow-2xl relative z-10">
        <img
          src="/logodashboard.png"
          alt="Dashboard preview"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Sombra adicional para mejorar el efecto */}
      <div className="absolute inset-0 -z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)] rounded-lg"></div>
    </div>
  );
}
