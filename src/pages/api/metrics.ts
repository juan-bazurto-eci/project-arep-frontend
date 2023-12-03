export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      // Configura la URL del servidor Flask
      const flaskServerURL = "http://localhost:5000/metrics-app";
      const params = JSON.parse(req.body);
      let formData = new FormData();
      formData.append("file", params.file);
      formData.append("label", params.label);
      // Realiza la solicitud POST al servidor Flask
      const response = await fetch(flaskServerURL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, devuelve el error
        throw new Error(`Error from Flask: ${response.statusText}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error: any) {
      // Captura cualquier error y devuelve un mensaje de error
      res.status(500).json({ message: error.message });
    }
  } else {
    // Si el método no es POST, devuelve un error 405
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
