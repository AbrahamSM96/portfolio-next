import Image from "next/image";

function Error({ statusCode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        margin: "3rem 2rem",
      }}
    >
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>

      <Image
        src="https://midu.dev/images/this-is-fine-404.gif"
        alt="Not found gif"
        style={{ width: "600px", height: "500px" }}
        fill
      />
    </div>
  );
}
export default Error;
