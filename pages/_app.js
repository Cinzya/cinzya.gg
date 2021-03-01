// pages/_app.js
import React from 'react'
import NextApp from 'next/app'
import { theme } from 'essential-slices'
import { ThemeProvider, BaseStyles } from 'theme-ui'
import { Client } from "../prismic";
import '../styles/globals.css';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#0d0e10",
    secondary: "#0d0e10",
    background: "#0d0e10",
    headline: "#f8f8f9",
    text: "#f8f8f9",
  },
  container: {
    ...theme.container,
    slice: {
      bg: "primary",
    },
    eyebrow: {
      color: "headline",
    },
    item: {
      background: "primary",
    }
  }
}

export default class App extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    return {
      props: {
        menu: menu
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <ThemeProvider theme={customTheme}>
        <BaseStyles>
          <Component {...pageProps} menu={props.menu} />
        </BaseStyles>
      </ThemeProvider>
    )
  }
}