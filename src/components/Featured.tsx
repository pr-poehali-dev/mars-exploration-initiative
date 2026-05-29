export default function Featured() {
  const programme = [
    { time: "12:30", title: "Церемония бракосочетания", desc: "ул. Ленина 98" },
    { time: "14:00", title: "Welcome-фуршет", desc: "ул. Архитектора Свиязева 35, банкетный зал «Венеция»" },
    { time: "15:00", title: "Праздничный банкет", desc: "ул. Архитектора Свиязева 35, банкетный зал «Венеция»" },
  ];

  const handleSubmit = () => {
    if (rsvp) setSubmitted(true);
  };

  return (
    <div id="programme" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: '#c8d0be' }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/38d34505-5d32-45a9-a836-a8ca550c1b18.jpg"
          alt="Молодожёны на закате"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-base tracking-[0.3em] text-black font-semibold">Программа торжества</h3>
        <div className="flex flex-col gap-6 mb-10">
          {programme.map((item) => (
            <div key={item.time} className="flex gap-6 items-start border-b border-black/15 pb-6">
              <span className="font-semibold text-xl min-w-[52px] text-black">{item.time}</span>
              <div>
                <p className="font-semibold text-xl leading-tight text-black">{item.title}</p>
                {item.desc && <p className="text-black/50 text-sm mt-1">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl px-6 py-5" style={{ backgroundColor: '#d4dbc8' }}>
          <p className="text-black text-base leading-relaxed font-medium">
            Просим каждого взять с собой лотерейный билет: вход в банкетный зал состоится по нему. Перед входом, пожалуйста, напишите на билете свой номер телефона. Зачем? Узнаете на торжестве)
          </p>
        </div>

      </div>
    </div>
  );
}