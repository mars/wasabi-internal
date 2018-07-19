import React from 'react'
import Head from 'next/head'

export default () => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Wasabi Time</title>
    </Head>
    <style jsx>{`
      .root {
        font-family: sans-serif;
        line-height: 1.33rem;
        margin-top: 8vh,
      }
      @media (min-width: 600px) {
        .root {
          margin-left: 21vw;
          margin-right: 21vw;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background-color: #aaffaa;
      }
    `}</style>

    <h1>❇️ 🕓 Wasabi Time</h1>

    <p>You love it on 🍣</p>

    <p>You'll love it on 🌮, 🍫, & 🍦</p>

  </div>
)
