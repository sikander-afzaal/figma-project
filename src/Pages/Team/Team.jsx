import React from "react";
import "./Team.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Team() {
  return (
    <div id="team" className="team">
      <h1>Team</h1>
      <div className="profile-div">
        <div className="left-profile">
          <div className="pic"></div>
          <p className="name">Pranjal J.</p>
        </div>
        <div className="right-profile">
          <p>Young God</p>
          <p>McGillCS</p>
          <div className="small-box-div">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <h1
        id="faq"
        style={{
          borderTop: "2px solid grey",
          paddingTop: "2rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        FAQ
      </h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is an NFT?</Accordion.Header>
          <Accordion.Body>
            A non-fungible token is a unique and non-interchangeable unit of
            data stored on a blockchain, a form of digital ledger. NFTs can be
            associated with reproducible digital files such as photos, videos,
            and audio.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Crypto Exchanges that support ETH</Accordion.Header>
          <Accordion.Body>MetaMask, Kraken, Binance, CoinBase</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is Ethereum?</Accordion.Header>
          <Accordion.Body>
            Ethereum is a decentralized, open-source blockchain with smart
            contract functionality. Ether is the native cryptocurrency of the
            platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is a Mystical Pet?</Accordion.Header>
          <Accordion.Body>
            Mystical pets are creatures that live on the Ethereum blockchain.
            Since they are NFTs, their art is only being upgraded with time and
            as long as you own one, you reap the benefits that come with it.
            Earn and play with your mystical creatures that can be trained,
            evolved and is also verifiable on the blockchain
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Why should I invest into this project?
          </Accordion.Header>
          <Accordion.Body>
            Aside from the lottery system and the gaming ecosystem that is being
            created, they also are giving you access to a new generation of NFTs
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>What does the future look like?</Accordion.Header>
          <Accordion.Body>
            3D graphic upgrades. Active income from breeding and a private
            marketplace. Holograms. META haptic gloves. Digital Party Mansion
            Museum? (Location: TBD)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Who should I contact for support?</Accordion.Header>
          <Accordion.Body>Shoot a DM on our instagram account</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Team;
