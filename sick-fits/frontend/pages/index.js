import React, { Component } from "react";
import Link from "next/link";

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Hey!</p>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    );
  }
}

export default HomePage;
