async function vwLogin() {
  const form = document.getElementById("formLogin");
  const formData = new FormData(form);

  if (!Validar(formData)) {
    return;
  }

  const body = {
    username: formData.get("username"),
    password: formData.get("password")
  };

  try {
    const resp = await axios.post(`${servidorBack}/Login`, body, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!resp.data || resp.data.auth !== true) {
      alert("Usuário não autenticado");
      return;
    }

    Cookies.set("isLogged", true, { sameSite: "strict" });
    window.location.href = "/";

  } catch (error) {
    alert("Erro ao conectar ao servidor");
  }
}
