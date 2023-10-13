import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Merhaba!</h1>
          <p className="py-6">
            Yarın kürek deris olup olmadığını merak mı ediyorsun?
            Kürek genellikle rüzgarın düşük olduğu sabahlarda yapılan bir spordur.
          </p>
          <h4>[Yarının Tarihi] için kürek dersi:</h4>
          <button className="btn btn-primary">Yapılabilir</button>
          <button className="btn btn-error">Yapılabilir</button>
        </div>
      </div>
    </div>
  );
}
