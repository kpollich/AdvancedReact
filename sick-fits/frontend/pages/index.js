import React, { Component } from "react";
import Link from "next/link";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    );
  }
}

export default HomePage;
