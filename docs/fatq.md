---
id: fatq
hide_title: true
sidebar_label: technical questions
sidebar_position: 3
---

## frequently asked technical questions

<details>
  <summary>why implement ubi as a cryptocurrency blockchain?</summary>
  <blockquote>
    <p>simple. it's much cheaper than handing out fiat. since a currency is as valuable as humans believe it to be, the jury is still out on wether a blockchain based ubi can be as effective as a fiat based ubi.</p>
  </blockquote>
</details>

<details>
  <summary>what does it cost to run snapr?</summary>
  <blockquote>
    <p>a little more than nothing, considering the potential.</p>
    <p>we run a few cloud services per deployment. it comes in around $500 monthly. here's the mainnet breakdown:</p>
    <ul>
      <li>
        bootnodes (substrate validators)
        <ul>
          <li>trillian (singapore, r5a.large, 120gb ~ $77.18 monthly)</li>
          <li>ford (stockholm, r5.large, 120gb ~ $73.86 monthly)</li>
          <li>arthur (ashburn, r5a.large, 120gb ~ $63.83 monthly)</li>
        </ul>
      </li>
      <li>
        <a href="https://explorer.snapr.com">explorer</a>
        <ul>
          <li>elb (frankfurt ~ $19.71 monthly)</li>
          <li>gql (frankfurt, 2 × t3.micro, 120gb ~ $34.90 monthly)</li>
          <li>rds (frankfurt, db.t3.micro, 120gb ~ $63.42 monthly)</li>
        </ul>
      </li>
      <li>
        <a href="https://telemetry.snapr.org/#/snapr%20mainnet">telemetry</a>
        <ul>
          <li>api (frankfurt, t3.micro, 120gb ~ $17.45 monthly)</li>
        </ul>
      </li>
      <li>
        secrets, storage, automation, dns ~ $50 monthly
      </li>
    </ul>
  </blockquote>
</details>
