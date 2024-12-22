const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-start pt-5 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg p-6 space-y-6">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Kontak Kami</h1>
          <p className="text-gray-600">
            Hubungi kami untuk informasi lebih lanjut atau kunjungi lokasi kami.
          </p>
        </div>

        {/* Company Profile Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Profil Perusahaan
          </h2>
          <p className="text-gray-600">
            <strong>Indri Teknik Las</strong> adalah bengkel las profesional
            yang menyediakan layanan pembuatan pagar, kanopi, railing, dan
            berbagai kebutuhan las lainnya dengan kualitas terbaik.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Informasi Kontak
          </h2>
          <div className="text-gray-600">
            <p>
              <strong>Nomor Telepon:</strong>{' '}
              <a
                href="tel:+6282249740340"
                className="text-blue-600 hover:underline"
              >
                +62 822 4974 0340
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:indritekniklas@gmail.com"
                className="text-blue-600 hover:underline"
              >
                indritekniklas@gmail.com
              </a>
            </p>
            <p>
              <strong>Alamat:</strong> Pekayon Jaya RT/RW. 003/004, Bekasi
              Selatan, Jawa Barat 17148, Indonesia
            </p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Lokasi Kami</h2>
          <div className="w-full aspect-video rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Bengkel Las Indri Teknik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.047633134349!2d106.97233737489693!3d-6.244760761560333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993f75b47f6c1%3A0x5cdbac21fb6716ed!2sPekayon%20Jaya%2C%20Bekasi%2C%20Jawa%20Barat%2017148!5e0!3m2!1sen!2sid!4v1699262549451!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
