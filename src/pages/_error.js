/* eslint-disable @next/next/no-img-element */

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

      <img
        src="https://midu.dev/images/this-is-fine-404.gif"
        alt="Not found gif"
        style={{ width: "600px", height: "500px" }}
      />
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
