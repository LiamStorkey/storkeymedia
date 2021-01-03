import Document, { Html, Head, Main, NextScript } from 'next/document'

const html = {
  fontFamily: "'Ubuntu', sans-serif"
}
const body = {
  margin: 0,
  height: "100vh",
  backgroundColor: "#1F1F1F"
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={html}>
        <Head />
        <body style={body}>
          <Main />
          <NextScript />
        </body>
        <link rel={"preconnect"} href={"https://fonts.gstatic.com"}/>
        <link href={"https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"} rel={"stylesheet"}/>
      </Html>
    )
  }
}

export default MyDocument