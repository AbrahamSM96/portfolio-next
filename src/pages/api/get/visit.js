export const runtime = "edge";

export default async function GET() {
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  try {
    const fetchDataJson = await fetch(
      "http://localhost:3000/db/visitdata.json"
    ).then((res) => res.json());
    const lastArr =
      fetchDataJson.length >= 1 && fetchDataJson[fetchDataJson?.length - 1];
    const { city, country, flag } = lastArr;
    const payload = JSON.stringify({ city, country, flag });
    writer.write(encoder.encode(`data: ${payload}\n\n`));
  } catch (error) {
    writer.write(encoder.encode(`data: ${JSON.stringify(error)}\n\n`)); // Asegúrate de serializar el error como JSON
  } finally {
    // Cierra el escritor y libera recursos
    writer.close();
  }

  // Retorna la respuesta conectada al stream readable
  return new Response(responseStream.readable, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/event-stream; charset=utf-8",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
      "Content-Encoding": "none",
    },
  });
}
