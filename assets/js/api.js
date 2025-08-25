  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // stop reload

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnbawdj", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        responseMsg.innerText = "✅ Pesan berhasil terkirim!";
        responseMsg.className = "text-green-600 text-sm mt-3";
        form.reset();
      } else {
        responseMsg.innerText = "❌ Terjadi kesalahan. Coba lagi.";
        responseMsg.className = "text-red-600 text-sm mt-3";
      }
    } catch (error) {
      responseMsg.innerText = "⚠️ Gagal terhubung ke server.";
      responseMsg.className = "text-red-600 text-sm mt-3";
    }
  });